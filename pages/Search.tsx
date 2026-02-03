import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { searchContent } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';
import { MediaItem } from '../types';
import { Search as SearchIcon, AlertCircle } from 'lucide-react';

const SearchPage: React.FC = () => {
  const router = useRouter();
  const { q } = router.query;
  const query = typeof q === 'string' ? q : '';
  
  const [results, setResults] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
        setResults([]);
        return;
    }

    const performSearch = async () => {
      setLoading(true);
      try {
        const data = await searchContent(query);
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]);

  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-20">
      <SEO title={`Search Results for "${query}" - VivamaxStream`} />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-miraj-gray rounded-full border border-white/10">
                <SearchIcon className="text-miraj-gold" size={24} />
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Search Results</h1>
                <p className="text-gray-400 text-sm">
                    {query ? `Showing results for "${query}"` : 'Enter a search term'}
                </p>
            </div>
        </div>

        {loading ? (
             <div className="flex items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-miraj-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
        ) : results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {results.map((item) => (
                    <MovieCard key={`${item.media_type}-${item.id}`} item={item} />
                ))}
            </div>
        ) : query ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <AlertCircle size={48} className="mb-4 opacity-50" />
                <h2 className="text-xl font-bold mb-2">No results found</h2>
                <p>We couldn't find anything matching "{query}".</p>
            </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;