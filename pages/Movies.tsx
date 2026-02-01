import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';
import { Movie } from '../types';
import { Film } from 'lucide-react';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies('popular', 1);
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const data = await getMovies('popular', nextPage);
      setMovies((prev) => [...prev, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMore(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Popular Movies",
    "description": "Browse and watch the latest popular movies in HD on UwatchFree Stream.",
    "url": "https://uwatchfree-official.vercel.app/#/movies"
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
        title="Popular Movies - UwatchFree Stream" 
        description="Browse and watch the latest popular movies in HD." 
        schema={schema}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-miraj-gray rounded-full border border-white/10">
                <Film className="text-miraj-gold" size={24} />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white">Movies</h1>
                <p className="text-gray-400 text-sm">Explore the latest blockbusters</p>
            </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={`${movie.id}-${page}`} item={movie} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all disabled:opacity-50"
          >
            {loadingMore ? 'Loading...' : 'Load More Movies'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;