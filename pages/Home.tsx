// import React, { useEffect, useState } from 'react';
// import Hero from '../components/Hero';
// import MediaCard from '../components/MediaCard';
// import SEO from '../components/SEO';
// import { ChevronRight, RefreshCw, TrendingUp, Film, Tv, Zap, Wifi, Loader2 } from 'lucide-react';
// import { fetchTrending, fetchMovies, fetchTVShows, fetchSports, fetchTVLive } from '../services/tmdb';
// import { MediaItem } from '../types';

// const Home: React.FC = () => {
//   const [trending, setTrending] = useState<MediaItem[]>([]);
//   const [movies, setMovies] = useState<MediaItem[]>([]);
//   const [tvShows, setTVShows] = useState<MediaItem[]>([]);
//   const [sports, setSports] = useState<MediaItem[]>([]);
//   const [tvLive, setTVLive] = useState<MediaItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const loadData = async () => {
//     setLoading(true);
//     setError(null);
    
//     try {
//       const [trendingData, moviesData, tvData, sportsData, tvLiveData] = await Promise.all([
//         fetchTrending('all'),
//         fetchMovies(),
//         fetchTVShows(),
//         fetchSports(),
//         fetchTVLive()
//       ]);
      
//       setTrending(trendingData.slice(0, 18));
//       setMovies(moviesData.slice(0, 18));
//       setTVShows(tvData.slice(0, 18));
//       setSports(sportsData.slice(0, 18));
//       setTVLive(tvLiveData.slice(0, 18));
      
//       if (trendingData.length === 0 && moviesData.length === 0 && tvData.length === 0) {
//         setError('No content available. Trying mock data...');
//       }
//     } catch (error) {
//       console.error('Failed to load data:', error);
//       setError('Error loading content. Please check your internet connection.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const heroItem = trending[0] || movies[0] || tvShows[0] || sports[0] || tvLive[0];

//   const Section = ({ 
//     title, 
//     items, 
//     viewAllPath,
//     icon: Icon
//   }: { 
//     title: string; 
//     items: MediaItem[]; 
//     viewAllPath?: string;
//     icon?: React.ComponentType<{size?: number}>;
//   }) => {
//     if (items.length === 0) return null;
    
//     return (
//       <div className="mb-12 px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-3">
//             {Icon && <Icon className="text-brand-400" size={24} />}
//             <h2 className="text-2xl font-bold text-white">{title}</h2>
//           </div>
//           {viewAllPath && (
//             <button 
//               onClick={() => window.location.hash = viewAllPath}
//               className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1"
//             >
//               View All <ChevronRight size={16} />
//             </button>
//           )}
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {items.map((item) => (
//             <MediaCard key={`${item.id}-${item.media_type}`} item={item} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-dark-bg pt-20 flex flex-col items-center justify-center p-4">
//         <Loader2 className="animate-spin text-brand-500 mb-4" size={48} />
//         <p className="text-gray-400 text-lg">Loading Uwatchfree...</p>
//         <p className="text-gray-500 text-sm mt-2">Fetching the latest content</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-dark-bg pt-20">
//      <SEO 
//         title="Uwatchfree™ - Ultimate Media Experience"
//         description="Uwatchfree™ is a movie streaming site. Watch Free Movies, Live Sports & TV Shows"
//         keywords={['uwatchfree', 'movies', 'watch movie online', 'free movies', 'free movies online', 'free movie streaming', 'Uwatchfree Movies free streaming', 'download free']}
//       />      
//       {error && (
//         <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-200 px-4 py-3 rounded-lg mx-4 mt-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span>⚠️</span>
//             <span>{error}</span>
//           </div>
//           <button 
//             onClick={loadData}
//             className="flex items-center gap-1 text-sm bg-yellow-700/30 hover:bg-yellow-700/50 px-3 py-1 rounded"
//           >
//             <RefreshCw size={14} /> Retry
//           </button>
//         </div>
//       )}
      
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-brand-950 to-dark-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//               Uwatchfree™ - Watch Free Movies & TV Shows Online.
//             </h1>
//             {/* <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
//               Unlimited access to movies, TV shows, live sports, and IPTV channels. 
//               No subscriptions, no credit card required.
//             </p> */}
//             <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
//               Uwatchfree™ is a modern media discovery and streaming aggregation platform designed for users who want a fast, simple way to explore and watch movies, TV shows, live sports, and IPTV content online. Instead of hosting videos directly, Uwatchfree™ brings publicly available media sources together in one streamlined interface, making it easier for users to find entertainment without unnecessary complexity.

// On Uwatchfree™, users can explore a wide range of content including popular movies, trending TV series, international films, live sports streams, and television channels from different regions. Whether you’re looking to watch movies online, browse free movie streaming options, or discover live IPTV content, the platform focuses on accessibility, speed, and ease of use. The interface is optimized for both desktop and mobile devices, ensuring smooth playback and quick navigation across categories.

// The platform works by organizing and indexing media links that are already available across the web. Uwatchfree™ does not store or upload any video files on its own servers. Instead, it acts as a media aggregator, helping users locate third-party streaming sources in a structured and user-friendly way. This approach allows users to quickly discover where content is available while benefiting from fast page loading times and minimal buffering.

// From a legal perspective, Uwatchfree™ operates strictly as an indexing and aggregation service. All media links displayed on the site are sourced from external platforms and are provided “as is.” Uwatchfree™ does not claim ownership of any content and does not control, host, or modify third-party streams. Copyright responsibility remains with the original content providers and hosting platforms. Users are encouraged to respect their local laws and the terms of service of any third-party websites they choose to access.

// Uwatchfree™ is built with performance and discoverability in mind. With optimized page speed, structured schema markup, and search-engine-friendly architecture, the platform ensures a smooth user experience while remaining easy for search engines to crawl and index. The goal is simple: provide a reliable, fast, and organized way to discover free movies online, explore streaming options, and access media content from across the web—all in one place.</p>

//             <div className="flex flex-wrap gap-4 justify-center">
//               <button 
//                 onClick={() => window.location.hash = '#/movies'}
//                 className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
//               >
//                 <Film size={18} />
//                 <span>Browse Movies</span>
//               </button>
//               <button 
//                 onClick={() => window.location.hash = '#/tv'}
//                 className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
//               >
//                 <Tv size={18} />
//                 <span>TV Shows</span>
//               </button>
//               <button 
//                 onClick={() => window.location.hash = '#/sports'}
//                 className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
//               >
//                 <Zap size={18} />
//                 <span>Live Sports</span>
//               </button>
//               <button 
//                 onClick={() => window.location.hash = '#/iptv'}
//                 className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
//               >
//                 <Wifi size={19} />
//                 <span>Live TV</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="max-w-7xl mx-auto">
//         {trending.length > 0 && (
//           <Section 
//             title="Trending Now" 
//             items={trending} 
//             viewAllPath="#/trending"
//             icon={TrendingUp}
//           />
//         )}
        
//         {movies.length > 0 && (
//           <Section 
//             title="Popular Movies" 
//             items={movies} 
//             viewAllPath="#/movies"
//             icon={Film}
//           />
//         )}
        
//         {tvShows.length > 0 && (
//           <Section 
//             title="TV Shows" 
//             items={tvShows} 
//             viewAllPath="#/tv"
//             icon={Tv}
//           />
//         )}

        
//         {sports.length > 0 && (
//           <div className="mb-12 px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <Zap className="text-brand-400" size={24} />
//                 <div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Today's {(() => {
//                       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//                       const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//                       const now = new Date();
//                       const gmtDate = new Date(now.toUTCString() + ' GMT');
//                       const dayName = days[gmtDate.getUTCDay()];
//                       const date = gmtDate.getUTCDate();
//                       const month = months[gmtDate.getUTCMonth()];
//                       const year = gmtDate.getUTCFullYear();
//                       const getOrdinal = (n: number) => {
//                         if (n > 3 && n < 21) return 'th';
//                         switch (n % 10) {
//                           case 1: return "st";
//                           case 2: return "nd";
//                           case 3: return "rd";
//                           default: return "th";
//                         }
//                       };
//                       const hours = gmtDate.getUTCHours().toString().padStart(2, '0');
//                       const minutes = gmtDate.getUTCMinutes().toString().padStart(2, '0');
//                       return `Live Sports Games -  ${dayName} ${date}${getOrdinal(date)} ${month} ${year} - Schedule Time UK GMT`;
//                     })()}
//                   </h2>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => window.location.hash = '#/sports'}
//                 className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1"
//               >
//                 View All <ChevronRight size={16} />
//               </button>
//             </div>
            
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <Loader2 className="animate-spin text-brand-500" size={40} />
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                 {sports.map((item) => (
//                   <MediaCard key={`sports-${item.id}`} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
        
//         {tvLive.length > 0 && (
//           <Section 
//             title="Live TV Channels" 
//             items={tvLive} 
//             viewAllPath="#/live"
//             icon={Wifi}
//           />
//         )}
        
//         {trending.length > 0 && (
//           <div className="bg-dark-surface rounded-2xl p-8 border border-dark-border mx-4 sm:mx-6 lg:mx-8 mb-12">
//             <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Uwatchfree?</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="bg-brand-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Film className="text-brand-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Free Streaming</h3>
//                 <p className="text-gray-400">Watch thousands of movies and TV shows completely free, no subscriptions required.</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-brand-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Zap className="text-brand-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Live Sports</h3>
//                 <p className="text-gray-400">Never miss a match with live streaming of major sports events from around the world.</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-brand-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Wifi className="text-brand-400" size={24} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Live TV Channels</h3>
//                 <p className="text-gray-400">Access hundreds of live TV channels from various categories including news, sports, and entertainment.</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import MediaCard from '../components/MediaCard';
import { ChevronRight, RefreshCw, TrendingUp, Film, Tv, Zap, Wifi, Loader2 } from 'lucide-react';
import { fetchTrending, fetchMovies, fetchTVShows, fetchSports, fetchTVLive } from '../services/tmdb';
import { MediaItem } from '../types';

const Home: React.FC = () => {
  const [trending, setTrending] = useState<MediaItem[]>([]);
  const [movies, setMovies] = useState<MediaItem[]>([]);
  const [tvShows, setTVShows] = useState<MediaItem[]>([]);
  const [sports, setSports] = useState<MediaItem[]>([]);
  const [tvLive, setTVLive] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [trendingData, moviesData, tvData, sportsData, tvLiveData] = await Promise.all([
        fetchTrending('all'),
        fetchMovies(),
        fetchTVShows(),
        fetchSports(),
        fetchTVLive()
      ]);
      
      setTrending(trendingData.slice(0, 18));
      setMovies(moviesData.slice(0, 18));
      setTVShows(tvData.slice(0, 18));
      setSports(sportsData.slice(0, 18));
      setTVLive(tvLiveData.slice(0, 18));
      
      if (trendingData.length === 0 && moviesData.length === 0 && tvData.length === 0) {
        setError('No content available. Trying mock data...');
      }
    } catch (error) {
      console.error('Failed to load data:', error);
      setError('Error loading content. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const heroItem = trending[0] || movies[0] || tvShows[0] || sports[0] || tvLive[0];

  const Section = ({ 
    title, 
    items, 
    viewAllPath,
    icon: Icon
  }: { 
    title: string; 
    items: MediaItem[]; 
    viewAllPath?: string;
    icon?: React.ComponentType<{size?: number}>;
  }) => {
    if (items.length === 0) return null;
    
    return (
      <div className="mb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {Icon && <Icon className="text-brand-400" size={24} />}
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          {viewAllPath && (
            <button 
              onClick={() => window.location.hash = viewAllPath}
              className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1"
            >
              View All <ChevronRight size={16} />
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <MediaCard key={`${item.id}-${item.media_type}`} item={item} />
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg pt-20 flex flex-col items-center justify-center p-4">
        <Loader2 className="animate-spin text-brand-500 mb-4" size={48} />
        <p className="text-gray-400 text-lg">Loading Uwatchfree...</p>
        <p className="text-gray-500 text-sm mt-2">Fetching the latest content</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg pt-20">
  
      {error && (
        <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-200 px-4 py-3 rounded-lg mx-4 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
          <button 
            onClick={loadData}
            className="flex items-center gap-1 text-sm bg-yellow-700/30 hover:bg-yellow-700/50 px-3 py-1 rounded"
          >
            <RefreshCw size={14} /> Retry
          </button>
        </div>
      )}
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-brand-950 to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Uwatchfree™ - Watch Free Movies & TV Shows Online.
            </h1>
            
            {/* EYE-CATCHING TEXT SECTION - SAME EXACT TEXT */}
            <div className="text-section-container mb-10 max-w-6xl mx-auto">
              <div className="bg-gradient-to-b from-dark-surface/50 to-dark-surface/30 border-2 border-brand-500/20 rounded-3xl p-6 md:p-8 shadow-2xl shadow-brand-900/30 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span >
                      Discover. Stream. Enjoy.
                    </span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="bg-dark-bg/40 p-5 rounded-xl border border-dark-border hover:border-brand-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="inline-block w-3 h-3 bg-brand-500 rounded-full mr-3"></span>
                      What is Uwatchfree™?
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Uwatchfree™ is a modern media discovery and streaming aggregation platform designed for users who want a fast, simple way to explore and watch movies, TV shows, live sports, and IPTV content online. Instead of hosting videos directly, Uwatchfree™ brings publicly available media sources together in one streamlined interface, making it easier for users to find entertainment without unnecessary complexity.
                    </p>
                  </div>

                  <div className="bg-dark-bg/40 p-5 rounded-xl border border-dark-border hover:border-blue-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                      Content You Can Explore
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      On Uwatchfree™, users can explore a wide range of content including popular movies, trending TV series, international films, live sports streams, and television channels from different regions. Whether you're looking to watch movies online, browse free movie streaming options, or discover live IPTV content, the platform focuses on accessibility, speed, and ease of use. The interface is optimized for both desktop and mobile devices, ensuring smooth playback and quick navigation across categories.
                    </p>
                  </div>

                  <div className="bg-dark-bg/40 p-5 rounded-xl border border-dark-border hover:border-green-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                      How It Works
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      The platform works by organizing and indexing media links that are already available across the web. Uwatchfree™ does not store or upload any video files on its own servers. Instead, it acts as a media aggregator, helping users locate third-party streaming sources in a structured and user-friendly way. This approach allows users to quickly discover where content is available while benefiting from fast page loading times and minimal buffering.
                    </p>
                  </div>

                  <div className="bg-dark-bg/40 p-5 rounded-xl border border-dark-border hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                      Legal Perspective
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      From a legal perspective, Uwatchfree™ operates strictly as an indexing and aggregation service. All media links displayed on the site are sourced from external platforms and are provided "as is." Uwatchfree™ does not claim ownership of any content and does not control, host, or modify third-party streams. Copyright responsibility remains with the original content providers and hosting platforms. Users are encouraged to respect their local laws and the terms of service of any third-party websites they choose to access.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-brand-900/30 to-blue-900/30 p-5 rounded-xl border-2 border-brand-500/30">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="inline-block w-3 h-3 bg-gradient-to-r from-brand-500 to-blue-500 rounded-full mr-3"></span>
                      Performance & Goals
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Uwatchfree™ is built with performance and discoverability in mind. With optimized page speed, structured schema markup, and search-engine-friendly architecture, the platform ensures a smooth user experience while remaining easy for search engines to crawl and index. The goal is simple: provide a reliable, fast, and organized way to discover free movies online, explore streaming options, and access media content from across the web—all in one place.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-dark-border text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500/20 to-blue-500/20 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
                    <p className="text-sm text-gray-300 font-medium">Ready to start streaming?</p>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              .text-section-container .text-gray-300 {
                font-size: 1.125rem;
                line-height: 1.75;
              }
              @media (max-width: 640px) {
                .text-section-container .text-gray-300 {
                  font-size: 1rem;
                  line-height: 1.7;
                }
              }
            `}</style>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => window.location.hash = '#/movies'}
                className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Film size={18} />
                <span>Browse Movies</span>
              </button>
              <button 
                onClick={() => window.location.hash = '#/tv'}
                className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Tv size={18} />
                <span>TV Shows</span>
              </button>
              <button 
                onClick={() => window.location.hash = '#/sports'}
                className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Zap size={18} />
                <span>Live Sports</span>
              </button>
              <button 
                onClick={() => window.location.hash = '#/iptv'}
                className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Wifi size={19} />
                <span>Live TV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {trending.length > 0 && (
          <Section 
            title="Trending Now" 
            items={trending} 
            viewAllPath="#/trending"
            icon={TrendingUp}
          />
        )}
        
        {movies.length > 0 && (
          <Section 
            title="Popular Movies" 
            items={movies} 
            viewAllPath="#/movies"
            icon={Film}
          />
        )}
        
        {tvShows.length > 0 && (
          <Section 
            title="TV Shows" 
            items={tvShows} 
            viewAllPath="#/tv"
            icon={Tv}
          />
        )}

        
        {sports.length > 0 && (
          <div className="mb-12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Zap className="text-brand-400" size={24} />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Today's {(() => {
                      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                      const now = new Date();
                      const gmtDate = new Date(now.toUTCString() + ' GMT');
                      const dayName = days[gmtDate.getUTCDay()];
                      const date = gmtDate.getUTCDate();
                      const month = months[gmtDate.getUTCMonth()];
                      const year = gmtDate.getUTCFullYear();
                      const getOrdinal = (n: number) => {
                        if (n > 3 && n < 21) return 'th';
                        switch (n % 10) {
                          case 1: return "st";
                          case 2: return "nd";
                          case 3: return "rd";
                          default: return "th";
                        }
                      };
                      const hours = gmtDate.getUTCHours().toString().padStart(2, '0');
                      const minutes = gmtDate.getUTCMinutes().toString().padStart(2, '0');
                      return `Live Sports Games -  ${dayName} ${date}${getOrdinal(date)} ${month} ${year} - Schedule Time UK GMT`;
                    })()}
                  </h2>
                </div>
              </div>
              <button 
                onClick={() => window.location.hash = '#/sports'}
                className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1"
              >
                View All <ChevronRight size={16} />
              </button>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin text-brand-500" size={40} />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {sports.map((item) => (
                  <MediaCard key={`sports-${item.id}`} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
        
        {tvLive.length > 0 && (
          <Section 
            title="Live TV Channels" 
            items={tvLive} 
            viewAllPath="#/live"
            icon={Wifi}
          />
        )}
        
        {trending.length > 0 && (
          <div className="bg-dark-surface rounded-2xl p-8 border border-dark-border mx-4 sm:mx-6 lg:mx-8 mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Uwatchfree?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Film className="text-brand-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free Streaming</h3>
                <p className="text-gray-400">Watch thousands of movies and TV shows completely free, no subscriptions required.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-brand-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Sports</h3>
                <p className="text-gray-400">Never miss a match with live streaming of major sports events from around the world.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wifi className="text-brand-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live TV Channels</h3>
                <p className="text-gray-400">Access hundreds of live TV channels from various categories including news, sports, and entertainment.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;