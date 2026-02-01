import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getDetails, getCast, getImageUrl, getRecommendations } from '../services/tmdb';
import VideoPlayer from '../components/VideoPlayer';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';
import { ContentDetails, CastMember, MediaItem } from '../types';
import { Calendar, Clock, Star, Layers, User, ArrowLeft, Heart, Share2, X, Copy, Check, ExternalLink, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Watch: React.FC = () => {
  const { type, id } = useParams<{ type: 'movie' | 'tv' | 'sports' | 'tv_live'; id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState<ContentDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [recommendations, setRecommendations] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Share Modal State
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  // State for TV shows
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);

  useEffect(() => {
    if (!type || !id) return;
    
    setLoading(true);
    const fetchData = async () => {
      try {
        const detailsData = await getDetails(type, id);
        setDetails(detailsData);
        
        // Fetch Cast only for Movie/TV
        if ((type === 'movie' || type === 'tv') && !isNaN(Number(id))) {
            const castData = await getCast(type, parseInt(id));
            setCast(castData);
        } else {
            setCast([]);
        }

        // Fetch Recommendations for ALL types
        try {
            const recData = await getRecommendations(type, id);
            setRecommendations(recData);
        } catch (e) {
            console.warn("Could not fetch recommendations");
            setRecommendations([]);
        }

      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  const handleBack = () => {
    // Check if there is a previous page in the internal router stack
    // location.key is 'default' on initial load/direct entry
    if (location.key !== 'default') {
        navigate(-1);
    } else {
        // Fallback to home if accessed directly
        navigate('/');
    }
  };

  const handleCopyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
  };

  const handleSocialShare = (platform: string) => {
      if (!details) return;
      
      const currentUrl = window.location.href;
      const url = encodeURIComponent(currentUrl);
      const title = details.title || details.name || '';
      const text = encodeURIComponent(`Watch ${title} on UwatchFree Stream`);
      
      // CRITICAL: Always use the Poster for sharing media
      const imageUrl = getImageUrl(details.poster_path, 'original');
      const image = encodeURIComponent(imageUrl);
      
      let shareUrl = '';
      let width = 600;
      let height = 500;

      switch(platform) {
          case 'facebook':
              shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
              break;
          case 'twitter':
              shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
              break;
          case 'pinterest':
              // Pinterest allows explicit image passing
              shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${text}`;
              width = 750;
              break;
          case 'whatsapp':
              shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
              break;
          case 'telegram':
              shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
              break;
           case 'reddit':
              shareUrl = `https://www.reddit.com/submit?url=${url}&title=${text}`;
              width = 800;
              height = 600;
              break;
           case 'linkedin':
              shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}&summary=${text}&source=UwatchFreeStream`;
              break;
           case 'email':
              shareUrl = `mailto:?subject=${text}&body=Check out this movie: ${currentUrl}`;
              break;
      }
      
      if (shareUrl) {
          if (platform === 'email') {
              window.location.href = shareUrl;
          } else {
              window.open(shareUrl, '_blank', `width=${width},height=${height},menubar=no,toolbar=no,resizable=yes,scrollbars=yes`);
          }
      }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-miraj-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-miraj-gray border-t-miraj-red rounded-full animate-spin"></div>
            <p className="text-miraj-gold font-bold tracking-widest animate-pulse">LOADING STREAM...</p>
        </div>
      </div>
    );
  }

  if (!details) return <div>Content not found</div>;

  const title = details.title || details.name;
  const date = details.release_date || details.first_air_date;
  const year = date ? new Date(date).getFullYear() : 'N/A';
  const description = details.overview || `Watch ${title} online for free.`;

  // Generate Dynamic Schema for Movie or TV Series
  const schema = {
    "@context": "https://schema.org",
    "@type": type === 'tv' ? 'TVSeries' : 'Movie',
    "name": title,
    "description": description,
    "image": getImageUrl(details.poster_path, 'original'), // Using Poster
    "datePublished": date,
    "aggregateRating": details.vote_average ? {
      "@type": "AggregateRating",
      "ratingValue": details.vote_average.toFixed(1),
      "bestRating": "10",
      "ratingCount": "100"
    } : undefined,
    "genre": details.genres?.map(g => g.name),
    "actor": cast.slice(0, 5).map(person => ({
        "@type": "Person",
        "name": person.name
    }))
  };

  return (
    <div className="min-h-screen bg-miraj-black pt-20 md:pt-28 pb-20">
      <SEO 
        title={`${title} - Watch on UwatchFree Stream`} 
        description={description}
        image={getImageUrl(details.poster_path, 'original')} // CRITICAL: Force Poster usage for Meta Tags
        type="video.movie"
        schema={schema}
      />
      
      {/* Mobile Back Button - FIXED POSITION */}
      <button 
        onClick={handleBack}
        className="fixed top-24 left-4 z-[100] bg-black/70 backdrop-blur-md p-3 rounded-full border border-white/20 text-white shadow-2xl active:scale-90 transition-all md:hidden hover:bg-miraj-red"
        aria-label="Go Back"
      >
        <ArrowLeft size={24} strokeWidth={2.5} />
      </button>

      {/* Share Modal */}
      {isShareOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-miraj-gray border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <Share2 size={20} className="text-miraj-gold" />
                          Share Content
                      </h3>
                      <button onClick={() => setIsShareOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                          <X size={24} />
                      </button>
                  </div>
                  
                  <div className="p-6 space-y-6">
                      {/* Preview */}
                      <div className="flex gap-4 p-3 rounded-xl bg-black/40 border border-white/5">
                          <img 
                            src={getImageUrl(details.poster_path, 'w500')} 
                            alt={title}
                            className="w-16 h-24 object-cover rounded-md shadow-md" 
                          />
                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                              <h4 className="font-bold text-white text-sm truncate">{title}</h4>
                              <p className="text-xs text-gray-400 line-clamp-2 mt-1">{description}</p>
                          </div>
                      </div>

                      {/* Social Buttons */}
                      <div className="grid grid-cols-4 gap-4">
                          {[
                            { id: 'facebook', label: 'Facebook', color: 'bg-[#1877F2]' },
                            { id: 'twitter', label: 'X', color: 'bg-black border border-white/20' },
                            { id: 'whatsapp', label: 'WhatsApp', color: 'bg-[#25D366]' },
                            { id: 'telegram', label: 'Telegram', color: 'bg-[#0088cc]' },
                            { id: 'pinterest', label: 'Pinterest', color: 'bg-[#E60023]' },
                            { id: 'reddit', label: 'Reddit', color: 'bg-[#FF4500]' },
                            { id: 'linkedin', label: 'LinkedIn', color: 'bg-[#0A66C2]' },
                            { id: 'email', label: 'Email', color: 'bg-gray-600' }
                          ].map((platform) => (
                              <button 
                                key={platform.id}
                                onClick={() => handleSocialShare(platform.id)}
                                className="flex flex-col items-center gap-2 group"
                              >
                                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 ${platform.color}`}>
                                      <Share2 size={20} />
                                  </div>
                                  <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors">{platform.label}</span>
                              </button>
                          ))}
                      </div>

                      {/* Copy Links */}
                      <div className="space-y-3">
                          <div className="space-y-1">
                              <label className="text-xs text-gray-500 font-bold uppercase ml-1">Direct Link</label>
                              <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg p-1.5 pl-3">
                                  <span className="text-xs text-gray-300 truncate flex-1">{window.location.href}</span>
                                  <button 
                                    onClick={handleCopyLink}
                                    className={`p-2 rounded-md transition-all ${copiedLink ? 'bg-green-500/20 text-green-500' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                  >
                                      {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )}

      {/* Player Section - SPACED DOWN ON DESKTOP & MOBILE */}
      <div className="container mx-auto px-0 md:px-6 mb-8 mt-24 md:mt-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
            {/* Desktop Back Button */}
            <div className="hidden md:flex px-4 md:px-0 mb-6 items-center justify-between">
                <button 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back</span>
                </button>
            </div>

            {/* The Custom Player */}
            <VideoPlayer 
                tmdbId={details.id} 
                type={type as any} 
                title={title}
                season={season}
                episode={episode}
                customStreams={details.streams}
            />
            
            {/* Episode Controls for TV */}
            {type === 'tv' && (
                <div className="bg-miraj-gray border border-white/5 p-4 mt-4 rounded-xl flex flex-wrap items-center gap-4 justify-center md:justify-between mx-4 md:mx-0">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <label className="text-xs text-gray-400 mb-1">Season</label>
                            <input 
                                type="number" 
                                min="1" 
                                max={details.number_of_seasons || 10}
                                value={season}
                                onChange={(e) => setSeason(parseInt(e.target.value))}
                                className="bg-black/50 border border-white/10 rounded px-3 py-1 text-white w-20 text-center focus:border-miraj-gold outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs text-gray-400 mb-1">Episode</label>
                            <input 
                                type="number" 
                                min="1" 
                                value={episode}
                                onChange={(e) => setEpisode(parseInt(e.target.value))}
                                className="bg-black/50 border border-white/10 rounded px-3 py-1 text-white w-20 text-center focus:border-miraj-gold outline-none"
                            />
                        </div>
                    </div>
                    <div className="text-gray-400 text-sm hidden md:block">
                        Change season/episode to update the player source automatically.
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Changed grid breakpoint to lg to handle tablets (md) as single column */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 max-w-7xl mx-auto">
            
            {/* Poster - Hidden on mobile, visible/centered on Tablet, Left on Desktop */}
            <div className="hidden md:block md:mx-auto lg:mx-0 w-[300px] flex-shrink-0">
                <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
                    <img 
                        src={getImageUrl(details.poster_path)} 
                        alt={title} 
                        className="w-full h-full object-cover"
                    />
                    {/* Hover Share on Poster */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <button 
                            onClick={() => setIsShareOpen(true)}
                            className="bg-miraj-gold text-black font-bold py-2 px-6 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all"
                         >
                             <Share2 size={18} /> Share
                         </button>
                    </div>
                </div>
            </div>

            {/* Info - Added min-w-0 to fix grid blowout */}
            <div className="min-w-0">
                <div className="flex justify-between items-start">
                    <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight flex-1">{title}</h1>
                    
                    {/* Main Share Button (Mobile/Desktop) */}
                    <button 
                        onClick={() => setIsShareOpen(true)}
                        className="flex items-center gap-2 bg-white/10 hover:bg-miraj-gold hover:text-black border border-white/10 rounded-full px-4 py-2 transition-all group shrink-0 ml-4"
                        title="Share this content"
                    >
                        <Share2 size={20} className="text-miraj-gold group-hover:text-black" />
                        <span className="hidden sm:inline font-bold text-sm">Share</span>
                    </button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-300 mb-6">
                    <div className="flex items-center gap-1 text-miraj-gold">
                        <Star size={16} fill="currentColor" />
                        <span className="font-bold text-white">{details.vote_average ? details.vote_average.toFixed(1) : 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{year}</span>
                    </div>
                    {details.runtime && (
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{details.runtime} min</span>
                        </div>
                    )}
                    {type === 'tv' && (
                        <div className="flex items-center gap-1">
                            <Layers size={16} />
                            <span>{details.number_of_seasons} Seasons</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {details.genres?.map(g => (
                        <span key={g.id} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                            {g.name}
                        </span>
                    ))}
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-bold text-white mb-2">Synopsis</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">{details.overview}</p>
                </div>

                {/* Cast - COMPLETELY REBUILT AS GRID FOR 100% ADAPTIVE LAYOUT */}
                {cast.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-white mb-4">Top Cast</h3>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                        {/* Display up to 5 cast members using a responsive Grid instead of Scroll to prevent cutting */}
                        {cast.slice(0, 5).map(person => (
                            <div key={person.id} className="flex flex-col gap-2 group cursor-pointer">
                                <div className="aspect-[2/3] w-full rounded-xl overflow-hidden border border-white/10 bg-miraj-gray shadow-lg relative">
                                    {person.profile_path ? (
                                        <img 
                                            src={getImageUrl(person.profile_path)} 
                                            alt={person.name} 
                                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-600 bg-white/5">
                                            <User size={32} />
                                        </div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-miraj-gold transition-colors">{person.name}</p>
                                    <p className="text-[10px] sm:text-xs text-gray-500 truncate">{person.character}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
            </div>
        </div>

        {/* Recommendations - MOVED OUTSIDE THE GRID TO SPAN FULL WIDTH */}
        {recommendations.length > 0 && (
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 mt-12">
                <div className="flex items-center gap-2 mb-6">
                    <Heart className="text-miraj-red" />
                    <h3 className="text-xl md:text-2xl font-bold text-white">You May Also Like</h3>
                </div>
                {/* Responsive Grid to ensure items are displayed nicely */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {recommendations.map(item => (
                        <MovieCard key={item.id} item={item as any} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Watch;