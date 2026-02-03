import { Movie, TVShow, ContentDetails, CastMember, MediaItem } from '../types';

const getEnv = (key: string) => {
    if (typeof process !== 'undefined' && process.env) {
         const publicName = `NEXT_PUBLIC_${key.replace('VITE_', '')}`;
         if (process.env[publicName]) return process.env[publicName];
         if (process.env[key]) return process.env[key];
    }
    if (typeof window !== 'undefined') {
        // Client-side fallback
        const publicKey = `NEXT_PUBLIC_${key.replace('VITE_', '')}`;
        // @ts-ignore
        if (window[publicKey]) return window[publicKey];
    }
    return undefined;
}

const API_KEY = getEnv('VITE_TMDB_API_KEY') || 'be3e130c5ee08bf14bc9078514f1999a';
const ACCESS_TOKEN = getEnv('VITE_TMDB_ACCESS_TOKEN') || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTNlMTMwYzVlZTA4YmYxNGJjOTA3ODUxNGYxOTk5YSIsIm5iZiI6MTcwNzkxNjc1Ni4xNDksInN1YiI6IjY1Y2NiZGQ0NGEwYjE5MDE4NmNmMTljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WePxGQ9q3fHgGVce48l20ac7N0qLLd1QRxUw48PD5LE';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const getFixedMatchTime = (hoursAdd: number, minutesSet = 0) => {
  const baseTime = new Date();
  baseTime.setHours(baseTime.getHours() + hoursAdd);
  baseTime.setMinutes(minutesSet);
  return baseTime.toISOString();
};

export const UNIQUE_SPORTS: MediaItem[] = [
  {
    id: "womens-premier-league",
    title: "Women's Premier League : Gujarat Giants W vs Mumbai Indians W",
    poster_path: "https://img.cricketnmore.com/uploads/2026/01/gujarat-giants-vs-mumbai-indians-match-19-wpl-2026-who-will-win-today-gg-w-vs-mi-w-match-mdl.jpg",
    backdrop_path: "https://img.cricketnmore.com/uploads/2026/01/gujarat-giants-vs-mumbai-indians-match-19-wpl-2026-who-will-win-today-gg-w-vs-mi-w-match-mdl.jpg",
    release_date: getFixedMatchTime(6, 30), 
    vote_average: 9.2,
    duration: "Live",
    media_type: 'sports',
    genres: [{ id: 1, name: "Cricket" }, { id: 2, name: "Women's Premier League" }],
    streams: {
      "Server 1 (Main)": "https://embedsports.top/embed/charlie/gujarat-giants-vs-mumbai-indians-1629480889/1",
      "Server 2 (Backup)": "https://daddyhd.com/stream/stream-346.php",
    },
    overview: "Live coverage of the Women's Premier League Gujarat Giants vs Mumbai Indians Match 19, WPL 2026.",
  },
  {
    id: "twenty20",
    title: "England tour of Sri Lanka 2026 | Twenty20 : England vs Sri Lanka",
    poster_path: "https://images.slivcdn.com/videoasset_images/manage_file/1000013839/1768923753324600_SL_vs_EG_2026_GOB_Landscape_Thumb.jpg?w=1000&q=low",
    backdrop_path: "https://images.slivcdn.com/videoasset_images/manage_file/1000013839/1768923753324600_SL_vs_EG_2026_GOB_Landscape_Thumb.jpg?w=1000&q=low",
    release_date: getFixedMatchTime(6, 0),
    vote_average: 9.5,
    duration: "Live",
    media_type: 'sports',
    genres: [{ id: 1, name: "Cricket" }, { id: 2, name: "Twenty20" }],
    streams: {
      "Server 1 (Main)": "https://embedsports.top/embed/charlie/sri-lanka-vs-england-1629480887/1",
      "Server 2 (Backup)": "https://daddyhd.com/stream/stream-31.php",
    },
    overview: "England tour of Sri Lanka 2026 | Twenty20 : England vs Sri Lanka",
  },
  {
    id: "australian-open-semi-final",
    title: "Australian Open Semi-Final (2026)",
    poster_path: "https://images.slivcdn.com/videoasset_images/manage_file/1000013951/1769076305688640_AO2026_GOB_Landscape_Thumb_SP_2.jpg?w=1000&q=low",
    backdrop_path: "https://images.slivcdn.com/videoasset_images/manage_file/1000013951/1769076305688640_AO2026_GOB_Landscape_Thumb_SP_2.jpg?w=1000&q=low",
    release_date: getFixedMatchTime(9, 30),
    vote_average: 8.9,
    duration: "Live",
    media_type: 'sports',
    genres: [{ id: 1, name: "Golf" }, { id: 2, name: "PGA Tour" }],
    streams: {
      "Server 1 (Main)": "https://embedsports.top/embed/charlie/farmers-insurance-open-featured-holes-3-8-11-and-16-first-round-1629480833/1",
    },
    overview: "Watch Live Golf: PGA Tour Farmers Insurance Open",
  },
];

export const UNIQUE_TV_LIVE: MediaItem[] = [
  {
    id: "alzazeera-news-channel-hd",
    title: "Al Jazeera News Live HD",
    poster_path: "https://www.vhv.rs/dpng/d/492-4928236_al-jazeera-news-logo-hd-png-download.png",
    backdrop_path: "https://www.vhv.rs/dpng/d/492-4928236_al-jazeera-news-logo-hd-png-download.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: [{ id: 1, name: "Al Jazeera" }, { id: 2, name: "Live" }, { id: 3, name: "News" }],
    streams: {
      "Server 1": "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8",
    },
    overview: "Al Jazeera Live HD",
  },
  
  {
    id: "cnn-international-channel-hd",
    title: "CNN International Live HD",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/960px-CNN_International_logo.svg.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: [{ id: 1, name: "CNN" }, { id: 2, name: "Live" }, { id: 3, name: "News" }],
    streams: {
      "Server 1": "https://amg01918-cnnus-amg01918c1-vizio-us-1813.playouts.now.amagi.tv/playlist/amg01918-cnnus-cnnheadlines-vizious/playlist.m3u8",
    },
    overview: "CNN International Live HD",
  },
  {
    id: "abc-channel-hd",
    title: "ABC Live HD",
    poster_path: "https://i.pinimg.com/736x/16/3b/41/163b41fe4cc84461bfa46445bb7e8e04.jpg",
    backdrop_path: "https://i.pinimg.com/736x/16/3b/41/163b41fe4cc84461bfa46445bb7e8e04.jpg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["ABC", "Live", "News"],
    streams: {
      "Server 1": "https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "euronews-channel-hd",
    title: "Euronews Live HD",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Euronews_Logo_2025.svg",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Euronews_Logo_2025.svg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Euronews", "Live", "News"],
    streams: {
      "Server 1": "https://amg00882-amg00882c2-lg-au-4259.playouts.now.amagi.tv/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "bbcnews-channel-hd",
    title: "BBC News Live HD",
    poster_path: "https://i.pinimg.com/736x/59/98/4d/59984d90139cb8e9ac6bbed0e849efc8.jpg",
    backdrop_path: "https://i.pinimg.com/736x/59/98/4d/59984d90139cb8e9ac6bbed0e849efc8.jpg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["BBC News", "Live", "News"],
    streams: {
      "Server 1": "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "reuters-news-channel-hd",
    title: "Reuters News Live HD",
    poster_path: "https://i.pinimg.com/564x/25/03/11/250311255660f18f2d603fa7e415a82f.jpg",
    backdrop_path: "https://i.pinimg.com/564x/25/03/11/250311255660f18f2d603fa7e415a82f.jpg",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Reuters News", "Live", "News"],
    streams: {
      "Server 1": "https://amg00453-reuters-amg00453c1-vizio-us-2107.playouts.now.amagi.tv/playlist/amg00453-reuters-reuters-vizious/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "usa-today-news-channel-hd",
    title: "USA Today News Live HD",
    poster_path: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
    backdrop_path: "https://w7.pngwing.com/pngs/109/179/png-transparent-usa-today-mountain-view-key-west-newspaper-business-usc-logo-blue-text-trademark.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["USA Today News", "Live", "News"],
    streams: {
      "Server 1": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00731-gannettcoinc-usatodaynews-vizious/playlist.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "fox-weather-channel-hd",
    title: "Fox Weather Live HD",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/500px-Fox_Weather_logo.svg.png",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/500px-Fox_Weather_logo.svg.png",
    release_date: "2026-01-20",
    vote_average: 7.8,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Fox Weather", "Live", "News"],
    streams: {
      "Server 1": "https://247wlive.foxweather.com/stream/index.m3u8",
    },
    overview:
      "Watch the Latest world news updates Channel live in high definition. Enjoy a wide range of news updates from various genres, all in stunning HD quality.",
  },
  {
    id: "go2travel-live-channel",
    title: "Go2Travel Live Channel",
    poster_path: "https://play-lh.googleusercontent.com/fAQewlj4O6OWRCReMV-ysG2Ip3i7Yz3TBxhFEeipV0BqK9nQk_siCt36ksBIZGmglGUt",
    backdrop_path: "https://play-lh.googleusercontent.com/fAQewlj4O6OWRCReMV-ysG2Ip3i7Yz3TBxhFEeipV0BqK9nQk_siCt36ksBIZGmglGUt",
    release_date: "2026-01-20",
    vote_average: 8.3,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Go2Travel", "Live", "Entertainment"],
    streams: {
      "Server 1": "https://go2thls.wns.live/hls/stream.m3u8"
     
    },
    overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
  },
   {
    id: "crime-investigation-live-channel",
    title: "Crime + Investigation",
    poster_path: "/images/tv/investigationdiscovery.jpg",
    backdrop_path: "/images/tv/investigationdiscovery.jpg",
    release_date: "2026-01-20",
    vote_average: 8.3,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Drama", "Live", "Entertainment"],
    streams: {
      "Server 1": "https://fl31.moveonjoy.com/Crime_and_Investigation_Network/tracks-v1a1/mono.ts.m3u8",
      "Server 2": "https://amg00376-magellan-amg00376c12-samsung-au-1725.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00376-magellantv-truecrimenowaunzin-samsungau/cb433e4f7b7b6fdccb993e6cd3f715a0d1076a8b5d32d03765f95cb52abc4013dce0ad92f24ef1684c8778873f5e32161e77b57dce7d01d9de71b8366d2211709188fa7ddd800278f298537f4de6286508ba1110d3224d218fa95223ad0998554953e400655372aab80af6294bd5f352c92074deb2dc653d635a419f435df5c30ff5aea3045add6fa6af1f4e873b47e5864498861bbb9d82539b469b77f0429d8fa2d886129f85c46aff53b330080b7224ccb246f9b1353771070b43fe441b047360e8aa87fb4a7cb5534248fdecb9c70f9d3deff9e805fd55c16db6409624822b8b04a2f347a3acc1bf08216be1ac5f10a4651e04ca7b1713c4fec8212c26674439bc7b594acc7fd1212a77b3f5c21785c41aac7b42efbb441222c99d499ad2e7cdbff0c57d952bcec8e38b7d6c7a235552c80df9da5ad2278b2cf38e0b770804048c8a45c883ee5b32494692cf0b874455ea8dcbcbf4260fe74c571ae469d25e454bc9376773ac6dda922e63842345d46169b5087bd00cacf81ff4a1daf70f74e08d900cac399dc060b8c10ba769334e11f3a37c2d22624990bf36436003802f82f4c5ee7005059687eef6d25c3502795a123b82ece37f8c9d824e3913d258326f641a75c45136087eace4ab482d8153dd9acf43dd2308337c976c284a/25/1920x1080_5500000/index.m3u8",
      "Server 3": "https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8",
      "Server 4": "https://langleyproductions-cops-2-eu.rakuten.wurl.tv/playlist.m3u8",
      "Server 5": "https://daddyhd.com/stream/stream-332.php",
      "Server 6": "https://daddyhd.com/stream/stream-665.php",
    },
    overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
  },
  {
    id: "hallmark-movies",
    title: "Hallmark Movies Mysteries",
    poster_path: "https://i.ebayimg.com/images/g/ePMAAOSwTgxnQ2mv/s-l1200.jpg",
    backdrop_path: "https://i.ebayimg.com/images/g/ePMAAOSwTgxnQ2mv/s-l1200.jpg",
    release_date: "2024-01-20",
    vote_average: 8.3,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Movies", "Live", "Entertainment"],
    streams: {
      "Server 1": "https://fl61.moveonjoy.com/HALLMARK_MOVIES_MYSTERIES/tracks-v1a1/mono.ts.m3u8"     
    },
    overview: "Live comedy shows, stand-up specials, and funny content 24/7.",
  },
  {
    id: "history-usa-channel",
    title: "History USA Channel",
    poster_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/250px-History_%282021%29.svg.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["History USA", "Educational", "Live"],
    streams: {
      "Server 1": "https://fl7.moveonjoy.com/history_channel/tracks-v1a1/mono.ts.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "bbc-earth-channel",
    title: "BBC Earth Channel",
    poster_path: "https://yt3.googleusercontent.com/EsHioubXC-qfNdbHyThN7rDTF7rfTzhl5A5u4hHuUAzslx9jgwtxl_2TN4RFqt3hA1jEwAGVgg=s900-c-k-c0x00ffffff-no-rj",
    backdrop_path: "https://yt3.googleusercontent.com/EsHioubXC-qfNdbHyThN7rDTF7rfTzhl5A5u4hHuUAzslx9jgwtxl_2TN4RFqt3hA1jEwAGVgg=s900-c-k-c0x00ffffff-no-rj",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["BBC Earth", "Educational", "Live"],
    streams: {
      "Server 1": "https://amg00793-amg00793c6-firetv-us-4067.playouts.now.amagi.tv/playlist.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "awe-channel",
    title: "AWE Channel",
    poster_path: "https://image.roku.com/developer_channels/prod/72cd4b2a026d9d68fadaae3b12227b2425bf28400a9fd8e679088d3b49c460d4.png",
    backdrop_path: "https://image.roku.com/developer_channels/prod/72cd4b2a026d9d68fadaae3b12227b2425bf28400a9fd8e679088d3b49c460d4.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["BBC Earth", "Educational", "Live"],
    streams: {
      "Server 1": "https://a-cdn.klowdtv.com/live1/awe_720p/chunks.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "law-and-crime-channel",
    title: "Law and Crime Channel",
    poster_path: "https://yt3.googleusercontent .com/CRP3YudPa55QypbDnIvuh3erLZTsn2HK8ESR-2fJFFiLJVf7US2CKQELCKK_UowmHA3wCjAdxg=s900-c-k-c0x00ffffff-no-rj",
    backdrop_path: "https://yt3.googleusercontent.com/CRP3YudPa55QypbDnIvuh3erLZTsn2HK8ESR-2fJFFiLJVf7US2CKQELCKK_UowmHA3wCjAdxg=s900-c-k-c0x00ffffff-no-rj",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Law and Crime", "Educational", "Live"],
    streams: {
      "Server 1": "https://a-cdn.klowdtv.com/live3/law_720p/playlist.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
{
    id: "crime-investigation-channel",
    title: "Crime + Investigation Channel",
    poster_path: "https://www.crimeandinvestigation.co.uk/themes/custom/crimeandinvestigation/images/social-cards/ci-homepage.jpg",
    backdrop_path: "https://www.crimeandinvestigation.co.uk/themes/custom/crimeandinvestigation/images/social-cards/ci-homepage.jpg",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Crime + Investigation", "Educational", "Live"],
    streams: {
      "Server 1": "https://fl31.moveonjoy.com/Crime_and_Investigation_Network/tracks-v1a1/mono.ts.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
{
    id: "true-crime-now-channel",
    title: "True Crime Now Channel",
    poster_path: "https://cdn.realscreen.com/wp/wp-content/uploads/2021/10/true-crime-now-logo-1.jpg",
    backdrop_path: "https://cdn.realscreen.com/wp/wp-content/uploads/2021/10/true-crime-now-logo-1.jpg",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["True Crime Now", "Educational", "Live"],
    streams: {
      "Server 1": "https://amg00376-magellan-amg00376c12-samsung-au-1725.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00376-magellantv-truecrimenowaunzin-samsungau/cb433e4f7b7b6fdccb993e6cd3f715a0d1076a8b5d32d03765f95cb52abc4013dce0ad92f24ef1684c8778873f5e32161e77b57dce7d01d9de71b8366d2211709188fa7ddd800278f298537f4de6286508ba1110d3224d218fa95223ad0998554953e400655372aab80af6294bd5f352c92074deb2dc653d635a419f435df5c30ff5aea3045add6fa6af1f4e873b47e5864498861bbb9d82539b469b77f0429d8fa2d886129f85c46aff53b330080b7224ccb246f9b1353771070b43fe441b047360e8aa87fb4a7cb5534248fdecb9c70f9d3deff9e805fd55c16db6409624822b8b04a2f347a3acc1bf08216be1ac5f10a4651e04ca7b1713c4fec8212c26674439bc7b594acc7fd1212a77b3f5c21785c41aac7b42efbb441222c99d499ad2e7cdbff0c57d952bcec8e38b7d6c7a235552c80df9da5ad2278b2cf38e0b770804048c8a45c883ee5b32494692cf0b874455ea8dcbcbf4260fe74c571ae469d25e454bc9376773ac6dda922e63842345d46169b5087bd00cacf81ff4a1daf70f74e08d900cac399dc060b8c10ba769334e11f3a37c2d22624990bf36436003802f82f4c5ee7005059687eef6d25c3502795a123b82ece37f8c9d824e3913d258326f641a75c45136087eace4ab482d8153dd9acf43dd2308337c976c284a/25/1920x1080_5500000/index.m3u8"
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "investigation-discovery-channel",
    title: "Investigation Discovery Channel",
    poster_path: "https://variety.com/wp-content/uploads/2014/07/investigation-discovery-logo.jpg?w=1000&h=563&crop=1",
    backdrop_path: "https://variety.com/wp-content/uploads/2014/07/investigation-discovery-logo.jpg?w=1000&h=563&crop=1",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Investigation Discovery", "Educational", "Live"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-324.php",
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },
  {
    id: "amc-channel",
    title: "AMC Channel",
    poster_path: "https://play-lh.googleusercontent.com/g7K2KCxcNoOV4bgerqP5yDmRpBImqMGcV99Zvd9vYOQ-v6zDj9f_gyU0EaE5OM2yBrU=w600-h300-pc0xffffff-pd",
    backdrop_path: "https://play-lh.googleusercontent.com/g7K2KCxcNoOV4bgerqP5yDmRpBImqMGcV99Zvd9vYOQ-v6zDj9f_gyU0EaE5OM2yBrU=w600-h300-pc0xffffff-pd",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Investigation Discovery", "Educational", "Live"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-303.php",
    },
    overview:
      "Live documentary channel featuring nature, science, and history content.",
  },  
{
    id: "adult-channel-01",
    title: "Adult Channel 01",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-501.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-02",
    title: "Adult Channel 02",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-502.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-03",
    title: "Adult Channel 03",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-503.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-04",
    title: "Adult Channel 04",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-504.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-05",
    title: "Adult Channel 05",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-505.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-06",
    title: "Adult Channel 06",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-506.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-07",
    title: "Adult Channel 07",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-507.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-08",
    title: "Adult Channel 08",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-508.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-09",
    title: "Adult Channel 09",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-509.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-10",
    title: "Adult Channel 10",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-510.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-11",
    title: "Adult Channel 11",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-511.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-12",
    title: "Adult Channel 12",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-512.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-13",
    title: "Adult Channel 13",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-513.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-14",
    title: "Adult Channel 14",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-514.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-15",
    title: "Adult Channel 15",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-515.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-16",
    title: "Adult Channel 16",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-516.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-17",
    title: "Adult Channel 17",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-517.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-18",
    title: "Adult Channel 18",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-518.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-19",
    title: "Adult Channel 19",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-519.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  },
  {
    id: "adult-channel-20",
    title: "Adult Channel 20",
    poster_path: "/18only.png",
    backdrop_path: "/18only.png",
    release_date: "2024-01-20",
    vote_average: 8.4,
    duration: "24/7",
    media_type: 'tv_live',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
    "Server 1": "https://daddyhd.com/stream/stream-520.php",
    },
    overview:
      "Live Adult channel featuring Hot, sexy and Mind Blowing content.",
  }
];

export const UNIQUE_MOVIES: MediaItem[] = [
  {
    id: "1112564",
    title: "Vaa Vaathiyaar (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/47uIUf9KCfDzxQXixw8lrvYl8C8.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/qPNIwdR3y965KMsiweyuXdjDRXR.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Comedy ", "Drama", "Romance"],
    streams: {
      "Server 1- Multi-Lang":"https://stmix.io/e/XvqZsVUzrTfYy",    
        },
    overview:
      "After being raised as the reincarnation of a famous actor, a man finds himself clashing with his grandfather's expectations of him.",
  },
  {
    id: "1614077",
    title: "Sulutan (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/KzdrsSXHjFgKS",
      "Server 2": "https://cinemaos.tech/player/1614077",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1614077/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1614077",
      "Server 5": "https://www.cinezo.net/watch/movie/1614077",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1614077",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1614077",   
    },
    overview:
      "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they’ve built. When Mara uncovers her groom’s betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  },
  {
    id: "1555917",
    title: "The Secret of Maria Makinang (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/aaIyWoyk13wp2SmzVTA1X2VSLaz.jpg",
    release_date: "2025-10-22",
    vote_average: 5.1,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/v/BA8XvvvsU7zmm",
      "Server 2": "https://cinemaos.tech/player/1555917",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1555917/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1555917",
      "Server 5": "https://www.cinezo.net/watch/movie/1555917",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1555917",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1555917",
      "Server 8": "http://byseqekaho.com/e/h4zfrz9rchim/",
    },
    overview:
      "It tells the story of Maria, a young woman who appears only during the full moon. She falls for a man named Danilo, and their love is tested through time, because for Danilo, decades have passed, but for Maria, it has only been a few moments.",
  },
  {
    id: "1597538",
    title: "Angkinin Mo Ako (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2YZ24F49pRkNb45YWI6yckrTYE.jpg",
    release_date: "2025-10-23",
    vote_average: 5.1,
    duration: "1h 10m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/vAlUJTcd8elxH",
      "Server 2": "https://cinemaos.tech/player/1597538",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1597538/tagalog?autoplay=false&back=true&server=0",
      "Server 4": "https://xprime.today/watch/1597538",
      "Server 5": "https://www.cinezo.net/watch/movie/1597538",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1597538",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1597538",
      "Server 8": "https://byseqekaho.com/e/7j7jdm0pcl8o",
    },
    overview:
      "Cess Garcia and VMX’s next big thing Dara Lima star in a steamy drama about two sisters and the man who sparks their sensual awakening. A female lawyer hires a young man as tutor for her younger sister but unknown to her, their review sessions are becoming wild",
  },
  {
    id: "1612071",
    title: "Elaichi: Ek Prem Katha (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/uaHRJYzURYiNyZmF0p0bTiQMpOK.jpg",
    release_date: "2025-10-23",
    vote_average: 5.1,
    duration: "1h 10m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://short.icu/tQkMTCEon?thumbnail=https://media.themoviedb.org/t/p/w780/zaciqbV1bdUlbvrjUmPynXx9rdr.jpg",
    },
    overview:
      "In Elaichi, the spice of desire, Sonal’s quiet domestic life explodes into nights of burning lust when a chance encounter with a younger actor turns into a frivolous sexual affair - pushing her deeper into obsession until her family, her body, and her soul are scorched by betrayal.`",
  },
  {
    id: "Anaconda-2025-multi-lang",
    title: "Anaconda (2025) Multi-Lang",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qxMv3HwAB3XPuwNLMhVRg795Ktp.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/swxhEJsAWms6X1fDZ4HdbvYBSf9.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/wSmdv3CDpCNml",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/ubqlst0a8wuc",
      },
    overview:
      "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals",
  },
  {
    id: "chemistry-part-2",
    title: "Chemistry Part 2 (2026)",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BYzBiMWY2ZWEtYTNjOC00ZTg0LWJlMGQtODU1N2UwYWM3MDAyXkEyXkFqcGc@._V1_.jpg",
    backdrop_path:
      "https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: [{ id: 1, name: "Adult" }, { id: 2, name: "Romance" }, { id: 3, name: "Drama" }],
    streams: {
     "Server 1": "https://stmix.io/e/PNUePFxDwvjVx",
      "Server 2": "https://short.icu/QYmidACiu?thumbnail=https://media-files.atrangii.in/media-metadata/6979de0ef60fc20caae469ce",
    },
    overview: "Chemistry Part 2",
  },
  {
    id: "generation-gap-part-2",
    title: "Generation Gap Part 2 (2026)",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BMGFhYWQ3YjktNzg3OC00NmJlLTg4NWQtMzcyYWIwNjNkYTIwXkEyXkFqcGc@._V1_.jpg",
    backdrop_path:
      "https://i.ytimg.com/vi/ID1smTZldw0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3JVPV9kENRBn5u8fWkxQdl4K0_w",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/nKnly2xFa69Fs",
      "Server 2": "https://short.icu/nzkD33Ujr?thumbnail=https://img.youtube.com/vi/ID1smTZldw0/maxresdefault.jpg",
      "Server 3": "https://byseqekaho.com/e/w0nud4ssbmbt",
      },
    overview:
      "A steamy affair between Mrs. Poonam and her nephew (Vipin) begins to develop a gap when they both have different expectations from each other.",
  },
  {
    id: "1213898",
    title: "Border 2 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/hju9XncHxUxUS1GAJ4YqpdFCa5t.jpg",
    release_date: "2026-01-23",
    vote_average: 5.1,
    duration: "3h 19m",
    media_type: 'movie',
    genres: ["War", "Action", "Drama"],
    streams: {
      "Server 1": "https://xprime.today/watch/1213898",
      "Server 2": "https://cinemaos.tech/player/1213898",
      "Server 3":
        "https://zxcstream.xyz/player/movie/1213898/hindi?autoplay=false&back=true&server=0",
      "Server 4":
        "https://short.icu/fCjlBHVLI?thumbnail=https://media.themoviedb.org/t/p/w780/nPuXMmWmHJySh0cyOs0MjEQA67w.jpg",
      "Server 5": "https://www.cinezo.net/watch/movie/1213898",
      "Server 6": "https://vidsrc-embed.ru/embed/movie/1213898",
      "Server 7": "https://api.cinezo.net/embed/tmdb-movie-1213898",
    },
    overview:
      "During the events of the 1971 Indo-Pak war, a new generation of young Indian warriors were getting ready to defend the nation from an even bigger threat to the Indian motherland.",
  },
  {
    id: "1339876",
    title: "Mardaani 3 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/jLo8qcDOw9CD1COzMLBouOqHtqX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/q0aIpg6hiM9PafhGUknEPDBA6bW.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: [{ id: 1, name: "Crime" }, { id: 2, name: "Action" }, { id: 3, name: "Mystery" }],
    streams: {
      "Server 1": "https://stmix.io/e/kYuQQzKDopYa",
      "Server 2": "https://cinemaos.tech/player/1339876-3",
      "Server 3": "https://zxcstream.xyz/player/movie/1339876-3/hindi?autoplay=false&back=true&server=0",
    },
    overview: "Mardaani 3 (2026)",
  },
  {
    id: "786567",
    title: "Gandhi Talks (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/p4iQT3s97T3gQOLhTj0UplzYMOj.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Drama ", "Silence", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/BbQpHGHdJKZGn",
      "Server 2": "https://cinemaos.tech/player/786567",
      "Server 3":
        "https://zxcstream.xyz/player/movie/786567/english?autoplay=false&back=true&server=0",
      "Server 4 - MAIN":
        "https://short.icu/PhuS5WVOq?thumbnail=https://media.themoviedb.org/t/p/w780/4Cqad6ZpWJRhBumGE1QwHs9pVuB.jpg",
      "Server 5": "https://byseqekaho.com/e/oi0zc05mbgjt",
      "Server 6": "https://www.cinezo.net/watch/movie/786567",
      "Server 7": "https://vidsrc-embed.ru/embed/movie/786567",
      "Server 8": "https://api.cinezo.net/embed/tmdb-movie-786567",
    },
    overview:
      "A silent black comedy, about the monetary needs of a character & how it impacts the others. A young, unemployed graduate Mahadev’s struggle to land a job through any means possible and crosses paths with a businessman and petty thief. A subject wherein silence speaks much louder than words. Although a work of fiction by the writer, all the characters in the film are sketched out to seem very real and relatable ensuring an enriching journey as well a laugh riot as the cat and mouse guffaws amongst them unfold. Gandhi Talks aims at telling a story by switching off the device of dialogue, which is not only scary but also interesting and challenging.",
  },
  {
    id: "sirena-2026",
    title: "Sirena (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/vOI7DzSJQylwqo1UgiIBZIftY7h.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/bbjLZffHvztUrq4IfoepMzhE4VR.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/5XJazmKmm5l5Y",
      "Server 2": "https://byseqekaho.com/e/35nhuh8xcxvs",
       },
    overview:
      "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they’ve built. When Mara uncovers her groom’s betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  },
  {
    id: "the-wrecking-crew-2026-multi-lang",
    title: "The Wrecking Crew (2026) Multi-Lang",
    poster_path:
      "https://media.themoviedb.org/t/p/w500/gbVwHl4YPSq6BcC92TQpe7qUTh6.jpg",
    backdrop_path:
      "https://media.themoviedb.org/t/p/w780/e4OnHU8HNAhdS6C4Ypk6NA26kPQ.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/LOMcIVE2bYo9n",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/286iv24wz00l",
      },
    overview:
      "Estranged half-brothers Jonny and James reunite after their father's mysterious death. As they search for the truth, buried secrets reveal a conspiracy threatening to tear their family apart.",
  },
  {
    id: "maaldar-2026",
    title: "Maaldar (2026)",
    poster_path:  "/images/movie/mal.jpg",
    backdrop_path: "/images/movie/maldar.jpg",
    release_date: "2026-01-26",
    vote_average: 6.2,
    duration: "1h 19m",
    media_type: 'movie',
    genres: ["Adult", "Romance", "Drama"],
    streams: {
      "Server 1": "https://stmix.io/e/lYENS9mtvukML",
      "Server 2": "https://byseqekaho.com/e/aq6rr0tgebsi",
       },
    overview:
      "Lena and Mara are drawn into a secret affair that defies boundaries and threatens everything they’ve built. When Mara uncovers her groom’s betrayal, she finds solace in Lena, a newfound friend who soon becomes something more. As passion and secrecy collide, their choices endanger careers, fracture relationships, and lead to devastating consequences.",
  },
  {
    id: "speed-faster-2026",
    title: "Speed Faster (2026) ",
    poster_path:
      "https://media.themoviedb.org/t/p/w500/dKYp9uUlDufvL0gWHve8nuzePdk.jpg",
    backdrop_path:
      "https://media.themoviedb.org/t/p/w780/nUMclZJRRwREfeP8liJ7LOddjnY.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/cTWgLAJ4I50v7",
      "Server 2": "https://byseqekaho.com/e/ptpj1jv2799q",
      },
    overview:
      "Ace and his crew of elite street racers are forced into a high-stakes mission when a shadowy organization threatens someone close to him. In the aftermath of Four Amigos, they find themselves working for the infamous Church of Assassins, tasked with pulling off an impossible job. But as they push their limits, they uncover a chilling truth-failure was always part of the plan. Betrayal, speed, and survival collide in this adrenaline-fueled thriller where the real race isn't just for victory, but for their lives.",
  },
  {
    id: "missing-the-boat-2026",
    title: "Missing the Boat (2026) ",
    poster_path:
      "https://media.themoviedb.org/t/p/w500/2Lw8nVKLNvvfAG46fn2nAJwBrPg.jpg",
    backdrop_path:
      "https://media.themoviedb.org/t/p/w780/5Xiqdj6eiitWtyPmy0zakV3GYf.jpg",
    release_date: "2026-01-16",
    vote_average: 6.4,
    duration: "2h 40m",
    media_type: 'movie',
    genres: ["Adventure ", "Comedy", "Mystery"],
    streams: {
      "Server 1": "https://stmix.io/e/acWrQSPMfmrqZ",
      "Server 2": "https://byseqekaho.com/e/vo038510cxcp",
      },
    overview:
      "Strangers Kelly and Parker both end up on the same Italian cruise, but after missing the boat during a stop, they're forced to team up and race across southern Italy to catch up.",
  }
];

export const UNIQUE_TV_SHOWS: MediaItem[] = [
  {
    id: "249766",
    title: "Daldal S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/wvAwkKeIs7bkb6EJAYRzpANhfxM.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/bd0usdz6dgmEE6HVhEhepR5r6MP.jpg",
    release_date: "2025-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1": "https://stmix.io/e/4OtUU7kOtUK87",
      "Server 2": "https://xprime.today/watch/249766/1/1",
      },
    genres: [{ id: 1, name: "Drama" }, { id: 2, name: "Thriller" }, { id: 3, name: "Mystery" }],
    overview:
      "Haunted by the guilt of her past and dealing with the demons of her present, a newly-appointed DCP, Rita Ferreira, must embark on an investigation of a series of murders that puts her on a collision course with a cold-blooded serial killer.",
  },
  {
    id: "311632",
    title: "Space Gen: Chandrayaan S01 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/d6WIr1vycFCCdYewgRf8dpWxQQE.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1": "https://stmix.io/e/2zYH1fFQgKys",
      "Server 2": "https://xprime.today/watch/311632/1/1",
      "Server 3": "https://byseqekaho.com/e/yxv57pc9qtxs",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-311632/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/311632?season=1&episode=1",
    },
    genres: ["Sci-Fi", "Drama", "Mystery"],
    overview:
      "Indian space engineers face mounting pressure to redeem themselves following the Chandrayaan 2 lunar mission's unexpected outcome.",
  },
  {
    id: "308482",
    title: 'Taskaree: The Smuggler"s Web S01 (2026)',
    poster_path:
      "https://image.tmdb.org/t/p/w500/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/25fKRXvQLBq4nXu9vjOVJcvCiiD.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":"https://stmix.io/e/YJ80jBb6C9B5",
      "Server 2": "https://xprime.today/watch/308482/1/1",
      "Server 3": "https://byseqekaho.com/e/wrnmbynqqeyk",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-308482/1/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/308482?season=1&episode=1",
    },
    genres: ["Crime", "Drama", "Mystery"],
    overview:
      "A dedicated customs officer and his team take on a notorious smuggler leading a powerful syndicate, but unexpected obstacles threaten their mission.",
  },
  {
    id: "297594",
    title: "Bindiya Ke Bahubali S02 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/eSJGKRff52Pg2SfOiIdC4IlMMQR.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1": "https://stmix.io/e/PaMIpZTnAE7b",
      "Server 2": "https://xprime.today/watch/297594/2/1",
      "Server 3": "https://byseqekaho.com/e/hv81w9p30urb",
      "Server 4 ": "https://api.cinezo.net/embed/tmdb-tv-297594/2/1",
      "Server 5 ": "https://www.cinezo.net/watch/tv/297594?season=2&episode=1",
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "With humour, absurdity and family cat and mouse at its center, this is a tale of family gangsters in a fictitious madhouse city, Bindiya. As the current Don is put behind bars, the gangster familys alliances shift, new love, friendships, and betrayals explode until Bindiya becomes a full-blown circus-where love is a deal, power is personal, and every one has a card and blood on their hands.",
  },
  {
    id: "311171",
    title: "Bhootiyapa (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4NGdzyuffqhb1jMEvTfri3jn5Fj.jpg",
    release_date: "2025-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
        "https://stmix.io/e/euvvLY1BD8F7",
      "Server 2": "https://xprime.today/watch/311171/1/1",
      "Server 3": "https://byseqekaho.com/e/f1i18ua20w0r",
      "Server 4": "https://short.icu/5ALJ-TlBZ?thumbnail=https://media.themoviedb.org/t/p/w780/eQJUKQMl0SvoHiYwAW2E0VoAwR2.jpg"
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "Bhootiyapa revolves around a film crew documenting the untold stories of these ghosts, who, despite their spectral existence, have tales to tell about love, loss and laughter. Each ghost, from a different era, adds a layer of mystery and mirth to the story, revealing how life after death can be as vibrant and surprising as mortal life itself.",
  },
  {
    id: "243826",
    title: "Pharma (2025)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/hQWT47GFQyvO1tFqx6IgCOvrrr8.jpg",
    release_date: "2025-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1":
      "https://zxcstream.xyz/player/tv/243826/s=1/e=1/hindi?autoplay=false&back=true&server=0",
      "Server 2": "https://xprime.today/watch/243826/1/1",
      "Server 3 - HINDI": "https://short.icu/PqYLFFeKU?thumbnail=https://media.themoviedb.org/t/p/w780/n1qDEYpr3pq7bJ9GGaF9zVNjdNq.jpg"
    },
    genres: ["Drama", "Crime", "Mystery"],
    overview:
      "A young medical representative struggles against the pharma game, masters it and eventually fights against it.",
  },
  {
    id: "61859",
    title: "The Night Manager S02 (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/1MccRnw41qQjREuZkovqP2UX1i3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1 - HINDI": "https://byseqekaho.com/e/p9vhhvpow8rk",
      "Server 2 - HINDI":
        "https://short.icu/ndrmOyAuX?thumbnail=https://media.themoviedb.org/t/p/w780/lJoaiZcYMc8RkmPLROcdS2WQxn9.jpg",
    },
    genres: ["Spy", "Crime", "Mystery"],
    overview:
      "Former British soldier Jonathan Pine navigates the shadowy recesses of Whitehall and Washington where an unholy alliance operates between the intelligence community and the secret arms trade. To infiltrate the inner circle of lethal arms dealer Richard Onslow Roper, Pine must himself become a criminal.",
  },
    {
    id: "cheekatilo-2026",
    title: "Cheekatilo (2026)",
    poster_path:
      "https://image.tmdb.org/t/p/w500/pO86EjZb7QyGYk5RW4Xm4UWe5Uv.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/iHT55IAd2qErJKhH8vCGKbZSniU.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/F8buk6C8LoTbE",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/yjf50n6tpbkh",
      "Server 3 ":
        "https://short.icu/ME-KYdtBuU?thumbnail=https://media.themoviedb.org/t/p/w780/iHT55IAd2qErJKhH8vCGKbZSniU.jpg",
    },
    genres: ["Spy", "Crime", "Mystery"],
    overview:
      "When crime anchor Sandhya’s best friend is found dead under suspicious circumstances, she embarks on a dangerous investigation that collides with a dark past. As secrets unravel, Sandhya must face her trauma and rise as a fearless voice for the silenced.",
  },
  {
    id: "wonder-man-2026",
    title: "Wonder Man (2026) S01 Hindi Dubbed Series",
    poster_path:
      "https://image.tmdb.org/t/p/w500/2XSHwBHIvIDPpbcH4ntQIItlThG.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/los8S8iCRn5Q7irl0LNAp6C6Gmz.jpg",
    release_date: "2026-01-08",
    vote_average: 7.2,
    duration: "45m",
    media_type: 'tv',
    streams: {
      "Server 1 - Multi-Lang": "https://stmix.io/e/KkIRxv3mQDeP",
      "Server 2 - Multi-Lang": "https://byseqekaho.com/e/jm9h9ts4zkvl",
      "Server 3 ":
        "https://short.icu/Sl7KwC5M7?thumbnail=https://media.themoviedb.org/t/p/w780/los8S8iCRn5Q7irl0LNAp6C6Gmz.jpg",
    },
    genres: ["Spy", "Crime", "Mystery"],
    overview:
      "Simon and Trevor, two actors at opposite ends of their careers, chase life-changing roles.",
  }
];

export const getImageUrl = (path: string | null, size: 'w500' | 'original' = 'w500') => {
  if (!path) return 'https://picsum.photos/500/750'; 
  if (path.startsWith('http')) return path;
  if (path.startsWith('/images/') || path === '/18only.png' || path === '/logo.png') return path;
  return `${IMAGE_BASE_URL}/${size}${path.startsWith('/') ? path : `/${path}`}`;
};

const fetchTMDB = async (endpoint: string, params: Record<string, string> = {}) => {
  const queryParams = new URLSearchParams({ language: 'en-US', ...params });
  try {
      const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`, {
        method: 'GET',
        headers: { 
          accept: 'application/json', 
          Authorization: `Bearer ${ACCESS_TOKEN}` 
        }
      });
      if (!response.ok) {
        console.error(`TMDB API Error: ${response.status} ${response.statusText}`);
        throw new Error(`TMDB API Error: ${response.status}`);
      }
      return await response.json();
  } catch (error) { 
    console.error('TMDB fetch error:', error);
    throw error; 
  }
};

export const getTrending = async (page = 1) => {
  try {
    const data = await fetchTMDB('/trending/all/day', { page: page.toString() });
    return data.results;
  } catch (e) { return [...UNIQUE_MOVIES, ...UNIQUE_TV_SHOWS]; }
};

export const getMovies = async (category: any = 'popular', page = 1) => {
  try {
    const data = await fetchTMDB(`/movie/${category}`, { page: page.toString() });
    return data.results.map((m: any) => ({ ...m, media_type: 'movie' }));
  } catch (e) { return UNIQUE_MOVIES; }
};

export const getTVShows = async (category: any = 'popular', page = 1) => {
  try {
    const data = await fetchTMDB(`/tv/${category}`, { page: page.toString() });
    return data.results.map((s: any) => ({ ...s, media_type: 'tv' }));
  } catch (e) { return UNIQUE_TV_SHOWS; }
};

export const getSports = async () => UNIQUE_SPORTS;
export const getLiveTV = async () => UNIQUE_TV_LIVE;

export const getDetails = async (type: string, id: number | string): Promise<ContentDetails> => {
  let staticItem: MediaItem | undefined;
  const idStr = String(id);
  if (type === 'movie') staticItem = UNIQUE_MOVIES.find(m => String(m.id) === idStr);
  else if (type === 'tv') staticItem = UNIQUE_TV_SHOWS.find(s => String(s.id) === idStr);
  else if (type === 'sports') staticItem = UNIQUE_SPORTS.find(s => String(s.id) === idStr);
  else if (type === 'tv_live') staticItem = UNIQUE_TV_LIVE.find(s => String(s.id) === idStr);

  const cleanId = idStr.split('-')[0];
  const isNumeric = /^\d+$/.test(cleanId);
  let apiData: any = null;

  if (isNumeric && (type === 'movie' || type === 'tv')) {
      try { apiData = await fetchTMDB(`/${type}/${cleanId}`); } catch (e) {}
  }

  if (staticItem) {
      return {
          ...(apiData || staticItem),
          id: id,
          streams: staticItem.streams,
          genres: Array.isArray(staticItem.genres) ? staticItem.genres : [],
          media_type: type as any
      } as any;
  }

  if (apiData) return { ...apiData, media_type: type } as any;
  throw new Error("Content not found");
};

export const getCast = async (type: any, id: any) => {
  try {
    const data = await fetchTMDB(`/${type}/${String(id).split('-')[0]}/credits`);
    return data.cast;
  } catch (e) { return []; }
};

export const getRecommendations = async (type: string, id: any) => {
  if (type === 'sports') return UNIQUE_SPORTS;
  if (type === 'tv_live') return UNIQUE_TV_LIVE;
  try {
    const data = await fetchTMDB(`/${type}/${String(id).split('-')[0]}/recommendations`);
    return data.results.map((i: any) => ({ ...i, media_type: type }));
  } catch (e) { return type === 'movie' ? UNIQUE_MOVIES : UNIQUE_TV_SHOWS; }
};

// FIXED SEARCH FUNCTION - WORKS PERFECTLY
export const searchContent = async (query: string) => {
  if (!query || query.trim().length < 2) {
    console.log('Search query too short or empty');
    return [];
  }
  
  const searchTerm = query.trim().toLowerCase();
  console.log(`Searching for: "${searchTerm}"`);
  
  // SEARCH LOCAL DATA FIRST
  const localData = [
    ...UNIQUE_MOVIES,
    ...UNIQUE_TV_SHOWS,
    ...UNIQUE_SPORTS,
    ...UNIQUE_TV_LIVE
  ];
  
  const localResults = localData.filter(item => {
    const title = (item.title || item.name || '').toLowerCase();
    const overview = (item.overview || '').toLowerCase();
    
    // Check title and overview
    if (title.includes(searchTerm) || overview.includes(searchTerm)) {
      return true;
    }
    
    // Check genres
    if (item.genres && Array.isArray(item.genres)) {
      const genreString = item.genres
        .map(g => typeof g === 'string' ? g : g.name)
        .join(' ')
        .toLowerCase();
      if (genreString.includes(searchTerm)) {
        return true;
      }
    }
    
    return false;
  });
  
  console.log(`Found ${localResults.length} local results`);
  
  // SEARCH TMDB API
  let tmdbResults: any[] = [];
  try {
    console.log('Fetching from TMDB API...');
    const data = await fetchTMDB('/search/multi', { 
      query: searchTerm,
      include_adult: 'true',
      page: '1'
    });
    
    tmdbResults = (data.results || [])
      .filter((item: any) => 
        item.media_type === 'movie' || 
        item.media_type === 'tv'
      )
      .map((item: any) => ({
        id: item.id,
        title: item.title || item.name,
        name: item.name || item.title,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
        release_date: item.release_date || item.first_air_date,
        vote_average: item.vote_average || 0,
        overview: item.overview || '',
        media_type: item.media_type,
      }));
    
    console.log(`Found ${tmdbResults.length} TMDB results`);
  } catch (error) {
    console.log('TMDB API search failed, using local results only');
  }
  
  // Combine and deduplicate results
  const combinedResults = [...localResults];
  const seenIds = new Set(localResults.map(item => `${item.media_type}-${item.id}`));
  
  tmdbResults.forEach(tmdbItem => {
    const key = `${tmdbItem.media_type}-${tmdbItem.id}`;
    if (!seenIds.has(key)) {
      combinedResults.push(tmdbItem);
      seenIds.add(key);
    }
  });
  
  // Return unique results (limit to 50)
  const uniqueResults = combinedResults.slice(0, 50);
  console.log(`Total combined results: ${uniqueResults.length}`);
  
  return uniqueResults;
};