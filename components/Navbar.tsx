// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Search, Menu, X, MonitorPlay, ChevronRight, Download } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setIsMenuOpen(false);
//       router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const clearSearch = () => setSearchQuery('');

  // const navLinks = [
  //   { name: 'Home', path: '/' },
  //   { name: 'Movies', path: '/Movies' },
  //   { name: 'TV Shows', path: '/tv' },
  //   { name: 'Sports', path: '/Sports' },
  //   { name: 'Live TV', path: '/live' },
  // ];

//   const isActive = (path: string) => {
//     if (path === '/' && router.pathname !== '/') return false;
//     return router.pathname.startsWith(path);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex items-center justify-between h-16 md:h-20">
          
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMenuOpen(false)}>
//             <div className="bg-gradient-to-br from-miraj-red to-red-800 p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300">
//                 <MonitorPlay className="text-white w-6 h-6 md:w-7 md:h-7" />
//             </div>
//             <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 tracking-tight">
//               UwatchFree<span className="text-miraj-red"> Official</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
//                   isActive(link.path)
//                     ? 'bg-miraj-red text-white shadow-lg' 
//                     : 'text-gray-400 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
            
//             {/* Download APK Button - Desktop */}
//             <a
//               href="https://median.co/share/xlrdylb"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
//             >
//               <Download size={16} />
//               Download APK
//             </a>
//           </div>

//           {/* Desktop Search & Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             {/* Search form commented out as per original code */}
//             {/* <form onSubmit={handleSearch} className="hidden md:flex relative group items-center">
//               <input
//                 type="text"
//                 placeholder="Search titles..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="bg-black/50 border border-white/10 rounded-full py-2 pl-10 pr-10 text-sm focus:outline-none focus:border-miraj-gold focus:ring-1 focus:ring-miraj-gold/50 focus:bg-black/80 transition-all w-48 focus:w-72 text-white placeholder-gray-500"
//               />
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-miraj-gold transition-colors" />
              
//               {searchQuery && (
//                 <button type="button" onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white p-1">
//                     <X size={14} />
//                 </button>
//               )}
//             </form> */}

            // {/* Download APK Button - Mobile (Visible only on mobile) */}
            // <a
            //   href="https://median.co/share/xlrdylb"
            //   target="_blank"
            //   rel="noopener noreferrer"
            //   className="md:hidden flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            // >
            //   <Download size={16} />
            //   APK
            // </a>

//             <button 
//                 className="md:hidden p-2 text-gray-300 hover:text-white active:scale-95 transition-transform" 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 aria-label="Toggle Menu"
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-miraj-black border-t border-white/10 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
//         <div className="px-4 py-6 flex flex-col gap-4">
//             {/* Mobile Search commented out as per original code */}
//             {/* <form onSubmit={handleSearch} className="relative mb-2">
//                 <input
//                     type="text"
//                     placeholder="Search movies, shows..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-miraj-red focus:outline-none focus:bg-black transition-colors"
//                 />
//                 <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             </form> */}

//             {/* Mobile Links */}
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 ${
//                   isActive(link.path) ? 'text-miraj-red pl-4 border-l-2 border-l-miraj-red' : 'text-gray-300'
//                 }`}
//               >
//                 {link.name}
//                 <ChevronRight size={16} className={`text-white/20 ${isActive(link.path) ? 'text-miraj-red' : ''}`} />
//               </Link>
//             ))}
            
            // {/* Download APK Link - Mobile Menu */}
            // <a
            //   href="https://median.co/share/xlrdylb"
            //   target="_blank"
            //   rel="noopener noreferrer"
            //   onClick={() => setIsMenuOpen(false)}
            //   className="flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 text-green-400 hover:text-green-300 transition-colors"
            // >
            //   <div className="flex items-center gap-2">
            //     <Download size={18} />
            //     Download APK
            //   </div>
            //   <ChevronRight size={16} className="text-green-400/60" />
            // </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; 
// import { useRouter } from 'next/router';
// import { Search, Menu, X, MonitorPlay, ChevronRight, Languages } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Re-trigger Google Translate if it didn't catch the element on initial load
//     const checkTranslate = setInterval(() => {
//       // Fix: cast window to any to access global Google Translate variables which are not defined on the standard Window type
//       const win = window as any;
//       if (win.google && win.google.translate && !document.querySelector('.goog-te-combo')) {
//         if (typeof win.googleTranslateElementInit === 'function') {
//           win.googleTranslateElementInit();
//         }
//       } else if (document.querySelector('.goog-te-combo')) {
//         clearInterval(checkTranslate);
//       }
//     }, 1000);
//     return () => clearInterval(checkTranslate);
//   }, []);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setIsMenuOpen(false);
//       router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const clearSearch = () => setSearchQuery('');

//     const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Movies', path: '/Movies' },
//     { name: 'TV Shows', path: '/tv' },
//     { name: 'Sports', path: '/Sports' },
//     { name: 'Live TV', path: '/live' },
//   ];

//   const isActive = (path: string) => {
//     if (path === '/' && router.pathname !== '/') return false;
//     return router.pathname.startsWith(path);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex items-center justify-between h-16 md:h-20">
          
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMenuOpen(false)}>
//             <div className="bg-gradient-to-br from-miraj-red to-red-800 p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300">
//                 <MonitorPlay className="text-white w-6 h-6 md:w-7 md:h-7" />
//             </div>
//             <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 tracking-tight">
//                UwatchFree<span className="text-miraj-red"> Official</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
//                   isActive(link.path)
//                     ? 'bg-miraj-red text-white shadow-lg' 
//                     : 'text-gray-400 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Search, Translate & Mobile Toggle */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Google Translate Widget Container */}
//             <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1 gap-2 group hover:border-miraj-gold transition-colors">
//                 <Languages size={14} className="text-miraj-gold shrink-0" />
//                 <div id="google_translate_element" className="translate-widget-container min-w-[120px]"></div>
//             </div>
//             <button 
//                 className="md:hidden p-2 text-gray-300 hover:text-white active:scale-95 transition-transform" 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 aria-label="Toggle Menu"
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-miraj-black border-t border-white/10 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
//         <div className="px-4 py-6 flex flex-col gap-4">
//             {/* Mobile Translate is usually handled by the same container or a second one. Google usually only supports one ID per page, so we rely on the main one or mobile-specific layout. */}
//             <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
//                  <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
//                     <Languages size={18} className="text-miraj-gold" />
//                     <span>Select Language</span>
//                  </div>
//                  <div id="google_translate_element_mobile"></div>
//             </div>

//             {/* Mobile Links */}
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 ${
//                   isActive(link.path) ? 'text-miraj-red pl-4 border-l-2 border-l-miraj-red' : 'text-gray-300'
//                 }`}
//               >
//                 {link.name}
//                 <ChevronRight size={16} className={`text-white/20 ${isActive(link.path) ? 'text-miraj-red' : ''}`} />
//               </Link>
//             ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search, Menu, X, MonitorPlay, ChevronRight, Languages, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkTranslate = setInterval(() => {
      const win = window as any;
      if (win.google && win.google.translate && !document.querySelector('.goog-te-combo')) {
        if (typeof win.googleTranslateElementInit === 'function') {
          win.googleTranslateElementInit();
        }
      } else if (document.querySelector('.goog-te-combo')) {
        clearInterval(checkTranslate);
      }
    }, 1000);
    return () => clearInterval(checkTranslate);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsMenuOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const clearSearch = () => setSearchQuery('');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/Movies' },
    { name: 'TV Shows', path: '/tv' },
    { name: 'Sports', path: '/Sports' },
    { name: 'Live TV', path: '/live' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && router.pathname !== '/') return false;
    return router.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-gradient-to-br from-miraj-red to-red-800 p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300">
                <MonitorPlay className="text-white w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 tracking-tight">
              UwatchFree<span className="text-miraj-red"> Official</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-miraj-red text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Download APK Button - Desktop */}
            <a
              href="https://median.co/share/xlrdylb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
            >
              <Download size={16} />
              Download APK
            </a>
          </div>

          {/* Desktop Search, Translate & Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Google Translate Widget Container - Desktop */}
            <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1 gap-2 group hover:border-miraj-gold transition-colors">
                <Languages size={14} className="text-miraj-gold shrink-0" />
                <div id="google_translate_element" className="translate-widget-container min-w-[120px]"></div>
            </div>

            {/* Download APK Button - Mobile (Visible only on mobile) */}
            <a
              href="https://median.co/share/xlrdylb"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            >
              <Download size={16} />
              APK
            </a>

            <button 
                className="lg:hidden p-2 text-gray-300 hover:text-white active:scale-95 transition-transform" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-miraj-black border-t border-white/10 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 flex flex-col gap-4">
            {/* Mobile Translate */}
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                 <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
                    <Languages size={18} className="text-miraj-gold" />
                    <span>Select Language</span>
                 </div>
                 <div id="google_translate_element_mobile"></div>
            </div>

            {/* Mobile Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 ${
                  isActive(link.path) ? 'text-miraj-red pl-4 border-l-2 border-l-miraj-red' : 'text-gray-300'
                }`}
              >
                {link.name}
                <ChevronRight size={16} className={`text-white/20 ${isActive(link.path) ? 'text-miraj-red' : ''}`} />
              </Link>
            ))}
            
            {/* Download APK Link - Mobile Menu */}
            <a
              href="https://median.co/share/xlrdylb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 text-green-400 hover:text-green-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Download size={18} />
                Download APK
              </div>
              <ChevronRight size={16} className="text-green-400/60" />
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;