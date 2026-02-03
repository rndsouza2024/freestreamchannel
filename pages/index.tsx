import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getTrending, getMovies, getTVShows, UNIQUE_MOVIES, UNIQUE_TV_SHOWS, UNIQUE_SPORTS, UNIQUE_TV_LIVE } from '../services/tmdb';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';
import { Movie, TVShow, MediaItem } from '../types';
import { Zap, Film, Tv, Trophy, Radio, ArrowDownCircle, ChevronRight, ChevronDown } from 'lucide-react';

// --- Sub Components ---

const LatestAccordionSection: React.FC<{ 
    title: string; 
    items: MediaItem[]; 
    icon: React.ReactNode; 
    colorClass: string;
    reverseItems?: boolean;
}> = ({ title, items, icon, colorClass, reverseItems = true }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(12);
    
    if (!items || items.length === 0) return null;

    const displayItems = reverseItems ? [...items].reverse() : items;
    const visibleItems = displayItems.slice(0, visibleCount);
    const hasMore = visibleCount < displayItems.length;

    const handleLoadMore = (e: React.MouseEvent) => {
        e.stopPropagation();
        setVisibleCount(prev => prev + 12);
    };

    return (
        <div className="mb-4 bg-black/20 border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                     <div className={`p-2 rounded-full bg-black/30 border border-white/10 ${colorClass}`}>
                        {icon}
                     </div>
                     <h3 className="text-lg md:text-xl font-bold text-gray-200">{title} <span className="text-gray-500 text-sm ml-2 font-normal">({items.length} New)</span></h3>
                </div>
                <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 md:p-6 border-t border-white/5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                        {visibleItems.map((item) => (
                            <MovieCard key={`${title}-${item.id}`} item={item as any} />
                        ))}
                    </div>

                    {hasMore && (
                        <div className="mt-8 flex justify-center pb-2">
                            <button 
                                onClick={handleLoadMore}
                                className="flex items-center gap-2 px-8 py-3 bg-miraj-gray hover:bg-miraj-gold/10 border border-white/10 hover:border-miraj-gold rounded-full text-sm font-bold text-gray-300 hover:text-miraj-gold transition-all hover:scale-105 active:scale-95 shadow-lg"
                            >
                                <ArrowDownCircle size={16} />
                                Load More {title}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ApiSection: React.FC<{
    title: string;
    type: 'movie' | 'tv' | 'trending';
    category?: string;
    initialItems: (Movie | TVShow)[];
    viewAllLink?: string;
    bgClass: string;
}> = ({ title, type, category, initialItems, viewAllLink, bgClass }) => {
    const [items, setItems] = useState<(Movie | TVShow)[]>(initialItems || []);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        if (initialItems && initialItems.length > 0) {
             setItems(initialItems);
        }
    }, [initialItems]);

    if (items.length === 0) return null;

    const handleLoadMore = async () => {
        setLoadingMore(true);
        try {
            const nextPage = page + 1;
            let newItems: (Movie | TVShow)[] = [];
            
            if (type === 'movie') {
                newItems = await getMovies(category as any, nextPage);
            } else if (type === 'tv') {
                newItems = await getTVShows(category as any, nextPage);
            } else if (type === 'trending') {
                newItems = await getTrending(nextPage);
            }
            
            setItems(prev => {
                const existingIds = new Set(prev.map(p => p.id));
                const uniqueNew = newItems.filter(n => !existingIds.has(n.id));
                return [...prev, ...uniqueNew];
            });
            setPage(nextPage);
        } catch (error) {
            console.error("Failed to load more items", error);
        } finally {
            setLoadingMore(false);
        }
    };

    return (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className={`w-1 h-6 rounded-full ${bgClass}`}></span>
              {title}
            </h2>
            {viewAllLink && (
            <Link href={viewAllLink} className="text-sm text-miraj-gold hover:text-white flex items-center gap-1 transition-colors">
              View All <ChevronRight size={14} />
            </Link>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {items.map((item) => (
              <MovieCard key={`${type}-${category || 'trending'}-${item.id}`} item={item} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
             <button 
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold text-gray-300 transition-all hover:text-white disabled:opacity-50"
             >
                {loadingMore ? 'Loading...' : (
                    <>
                        <ArrowDownCircle size={14} />
                        Load More
                    </>
                )}
             </button>
          </div>
        </section>
    );
};

// --- Main Page Component ---

interface HomePageProps {
  trending: (Movie | TVShow)[];
  popularMovies: Movie[];
  topRatedTV: TVShow[];
  heroItems: (Movie | TVShow)[];
}

const Home: React.FC<HomePageProps> = ({ trending, popularMovies, topRatedTV, heroItems }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UwatchFreeOfficial",
    "url": "https://uwatchfree-official.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://uwatchfree-official.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-miraj-black pb-20">
      <SEO 
        title="UwatchFreeOfficial - Watch Free Movies & TV Shows Online" 
        description="Stream thousands of Movies, TV Shows, and Live Sports for free in HD quality. No registration required."
        schema={schema}
      />
      
      {/* Dynamic Hero Carousel */}
      {heroItems && heroItems.length > 0 && <Hero items={heroItems} />}

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 space-y-16 mt-16 md:mt-20">
        
        {/* Trending Section */}
        <ApiSection 
            title="Trending Now"
            type="trending"
            initialItems={trending}
            viewAllLink="/movies"
            bgClass="bg-miraj-gold"
        />

        {/* LATEST UPDATED SECTION */}
        <section className="bg-white/5 border border-white/5 rounded-3xl p-4 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 relative z-10">
                <Zap className="text-green-500 fill-green-500 animate-pulse" size={28} />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Updated</h2>
            </div>
            
            <div className="space-y-4 relative z-10">
                <LatestAccordionSection 
                    title="Latest Movies" 
                    items={UNIQUE_MOVIES} 
                    icon={<Film size={18} className="text-blue-400" />}
                    colorClass="text-blue-400"
                />
                <LatestAccordionSection 
                    title="Latest TV Shows" 
                    items={UNIQUE_TV_SHOWS} 
                    icon={<Tv size={18} className="text-purple-400" />}
                    colorClass="text-purple-400"
                />
                <LatestAccordionSection 
                    title="Live Sports" 
                    items={UNIQUE_SPORTS} 
                    icon={<Trophy size={18} className="text-yellow-400" />}
                    colorClass="text-yellow-400"
                />
                 <LatestAccordionSection 
                    title="Live TV Channels" 
                    items={UNIQUE_TV_LIVE} 
                    icon={<Radio size={18} className="text-red-400" />}
                    colorClass="text-red-400"
                    reverseItems={false}
                />
            </div>
        </section>

        {/* Popular Movies Section */}
        <ApiSection 
            title="Popular Movies"
            type="movie"
            category="popular"
            initialItems={popularMovies}
            viewAllLink="/movies"
            bgClass="bg-miraj-red"
        />

         {/* Top TV Section */}
         <ApiSection 
            title="Top Rated TV Shows"
            type="tv"
            category="top_rated"
            initialItems={topRatedTV}
            viewAllLink="/tv"
            bgClass="bg-blue-500"
        />

      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [trend, movies, tv] = await Promise.all([
      getTrending(),
      getMovies('popular'),
      getTVShows('top_rated'),
    ]);

    const safeTrend = Array.isArray(trend) ? trend : [];
    const safeMovies = Array.isArray(movies) ? movies : [];
    const safeTv = Array.isArray(tv) ? tv : [];

    const heroMovies = safeTrend.filter(i => i.media_type === 'movie').slice(0, 5);
    const heroTV = safeTrend.filter(i => i.media_type === 'tv').slice(0, 5);
    
    // Fill Hero if short
    if (heroMovies.length < 5 && safeMovies.length > 0) {
        heroMovies.push(...(safeMovies as any).slice(0, 5 - heroMovies.length));
    }
    if (heroTV.length < 5 && safeTv.length > 0) {
        heroTV.push(...(safeTv as any).slice(0, 5 - heroTV.length));
    }

    const heroItems: (Movie | TVShow)[] = [];
    const maxLength = Math.max(heroMovies.length, heroTV.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < heroMovies.length) heroItems.push(heroMovies[i]);
        if (i < heroTV.length) heroItems.push(heroTV[i]);
    }

    return {
      props: {
        trending: safeTrend,
        popularMovies: safeMovies,
        topRatedTV: safeTv,
        heroItems,
      },
      revalidate: 3600, 
    };
  } catch (error) {
    console.error("Critical getStaticProps error:", error);
    return {
      props: {
        trending: [],
        popularMovies: [],
        topRatedTV: [],
        heroItems: [],
      },
    };
  }
};

export default Home;


























