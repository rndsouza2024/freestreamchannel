import React, { useEffect, useState } from 'react';
import { getSports } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';
import { MediaItem } from '../types';
import { Trophy, ArrowDownCircle } from 'lucide-react';

const Sports: React.FC = () => {
  const [sports, setSports] = useState<MediaItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        const data = await getSports();
        setSports(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSportsData();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const visibleSports = sports.slice(0, visibleCount);
  const hasMore = visibleCount < sports.length;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Live Sports Streaming",
    "description": "Watch live sports events including Cricket, Football, Tennis and more in HD.",
    "url": "https://uwatchfree-official.vercel.app/sports",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": sports.slice(0, 10).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://uwatchfree-official.vercel.app/watch/sports/${item.id}`,
        "name": item.title || item.name
      }))
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-miraj-black">
        <div className="w-10 h-10 border-4 border-miraj-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-20">
      <SEO 
        title="Live Sports - Watch Cricket, Football & More | UwatchFreeOfficial" 
        description="Stream live sports events for free. Watch Cricket, Football, UFC, F1 and more in high definition on UwatchFreeOfficial." 
        schema={schema}
        path="/sports"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-miraj-gray rounded-full border border-white/10">
                <Trophy className="text-miraj-gold" size={24} />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white">Live Sports</h1>
                <p className="text-gray-400 text-sm">Catch the action live ({sports.length} Events)</p>
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {visibleSports.map((item) => (
            <MovieCard key={item.id} item={item as any} />
          ))}
        </div>

        {hasMore && (
            <div className="mt-12 text-center">
                <button
                onClick={loadMore}
                className="flex items-center gap-2 px-8 py-3 mx-auto bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all hover:scale-105"
                >
                <ArrowDownCircle size={16} />
                Load More Sports
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Sports;