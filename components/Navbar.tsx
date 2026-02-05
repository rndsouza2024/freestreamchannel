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













// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Search, Menu, X, MonitorPlay, ChevronRight, Languages, Download } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const checkTranslate = setInterval(() => {
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

//   const navLinks = [
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
//               UwatchFree<span className="text-miraj-red"> Official</span>
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

//           {/* Desktop Search, Translate & Mobile Toggle */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Google Translate Widget Container - Desktop */}
//             <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1 gap-2 group hover:border-miraj-gold transition-colors">
//                 <Languages size={14} className="text-miraj-gold shrink-0" />
//                 <div id="google_translate_element" className="translate-widget-container min-w-[120px]"></div>
//             </div>

//             {/* Download APK Button - Mobile (Visible only on mobile) */}
//             <a
//               href="https://median.co/share/xlrdylb"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
//             >
//               <Download size={16} />
//               APK
//             </a>

//             <button 
//                 className="lg:hidden p-2 text-gray-300 hover:text-white active:scale-95 transition-transform" 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 aria-label="Toggle Menu"
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden bg-miraj-black border-t border-white/10 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
//         <div className="px-4 py-6 flex flex-col gap-4">
//             {/* Mobile Translate */}
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
            
//             {/* Download APK Link - Mobile Menu */}
//             <a
//               href="https://median.co/share/xlrdylb"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setIsMenuOpen(false)}
//               className="flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 text-green-400 hover:text-green-300 transition-colors"
//             >
//               <div className="flex items-center gap-2">
//                 <Download size={18} />
//                 Download APK
//               </div>
//               <ChevronRight size={16} className="text-green-400/60" />
//             </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; 
// import { useRouter } from 'next/router';
// import { Search, Menu, X, MonitorPlay, ChevronRight, Languages, Download } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   // Initialize Google Translate for both desktop and mobile
//   useEffect(() => {
//     const loadGoogleTranslate = () => {
//       const win = window as any;
      
//       if (win.google && win.google.translate) {
//         // Initialize desktop translate
//         if (!document.querySelector('#google_translate_element .goog-te-combo')) {
//           try {
//             new win.google.translate.TranslateElement(
//               { 
//                 pageLanguage: 'en',
//                 layout: win.google.translate.TranslateElement.InlineLayout.SIMPLE,
//                 autoDisplay: false,
//                 includedLanguages: 'en,es,fr,de,hi,ar,zh-CN,ru,ja,ko,pt,it'
//               }, 
//               'google_translate_element'
//             );
//           } catch (e) {
//             console.log('Desktop translate init error:', e);
//           }
//         }

//         // Initialize mobile translate
//         if (!document.querySelector('#google_translate_element_mobile .goog-te-combo')) {
//           try {
//             new win.google.translate.TranslateElement(
//               { 
//                 pageLanguage: 'en',
//                 layout: win.google.translate.TranslateElement.InlineLayout.SIMPLE,
//                 autoDisplay: false,
//                 includedLanguages: 'en,es,fr,de,hi,ar,zh-CN,ru,ja,ko,pt,it'
//               }, 
//               'google_translate_element_mobile'
//             );
//           } catch (e) {
//             console.log('Mobile translate init error:', e);
//           }
//         }
//       }
//     };

//     // Check if Google Translate script is already loaded
//     const checkTranslate = setInterval(() => {
//       const win = window as any;
//       if (win.google && win.google.translate) {
//         loadGoogleTranslate();
//         clearInterval(checkTranslate);
//       }
//     }, 500);

//     // Also try on window load
//     window.addEventListener('load', loadGoogleTranslate);

//     return () => {
//       clearInterval(checkTranslate);
//       window.removeEventListener('load', loadGoogleTranslate);
//     };
//   }, []);

//   // Fix mobile dropdown positioning
//   useEffect(() => {
//     const fixMobileTranslateDropdown = () => {
//       const mobileSelect = document.querySelector('#google_translate_element_mobile .goog-te-combo') as HTMLSelectElement;
//       if (mobileSelect && window.innerWidth < 768) {
//         mobileSelect.style.width = '100%';
//         mobileSelect.style.maxWidth = '100%';
//         mobileSelect.style.padding = '8px 12px';
//         mobileSelect.style.backgroundColor = '#1a1a1a';
//         mobileSelect.style.borderRadius = '8px';
//         mobileSelect.style.border = '1px solid rgba(255,255,255,0.1)';
//       }
//     };

//     // Fix after a short delay to ensure DOM is ready
//     const timer = setTimeout(fixMobileTranslateDropdown, 100);
//     return () => clearTimeout(timer);
//   }, [isMenuOpen]);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setIsMenuOpen(false);
//       router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const clearSearch = () => setSearchQuery('');

//   const navLinks = [
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
//               UwatchFree<span className="text-miraj-red"> Official</span>
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

//           {/* Desktop Right Section: Translate + Mobile Toggle */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {/* Google Translate Widget Container - Desktop */}
//             <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 gap-2 group hover:border-miraj-gold transition-colors">
//                 <Languages size={16} className="text-miraj-gold shrink-0" />
//                 <div id="google_translate_element" className="translate-widget-container min-w-[120px]"></div>
//             </div>

//             {/* Download APK Button - Mobile (Visible only on mobile) */}
//             <a
//               href="https://median.co/share/xlrdylb"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="md:hidden flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
//             >
//               <Download size={16} />
//               APK
//             </a>

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
//             {/* Mobile Translate Widget */}
//             <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
//                  <div className="flex items-center gap-2 text-gray-400 text-sm font-bold mb-2">
//                     <Languages size={18} className="text-miraj-gold" />
//                     <span>Select Language</span>
//                  </div>
//                  <div id="google_translate_element_mobile" className="w-full"></div>
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
            
//             {/* Download APK Link - Mobile Menu */}
//             <a
//               href="https://median.co/share/xlrdylb"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setIsMenuOpen(false)}
//               className="flex items-center justify-between text-lg font-bold py-3 px-2 border-b border-white/5 text-green-400 hover:text-green-300 transition-colors"
//             >
//               <div className="flex items-center gap-2">
//                 <Download size={18} />
//                 Download APK
//               </div>
//               <ChevronRight size={16} className="text-green-400/60" />
//             </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, MonitorPlay, ChevronRight, Languages, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Google Translate Re-Initialization for reliability
  useEffect(() => {
    const initTranslate = () => {
      const win = window as any;
      if (win.google && win.google.translate && !document.querySelector('.goog-te-combo')) {
        new win.google.translate.TranslateElement({
          pageLanguage: 'en',
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    const interval = setInterval(() => {
      if ((window as any).google) {
        initTranslate();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

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
    <>
      {/* MAIN NAVBAR: Fixed position with max z-index */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-xl border-b border-white/10 h-16 md:h-20 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group shrink-0" 
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-miraj-red p-1.5 rounded-lg shadow-lg group-hover:scale-105 transition-transform">
              <MonitorPlay className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
              UwatchFree<span className="text-miraj-red"> Official</span>
            </span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-full text-[11px] font-black transition-all uppercase tracking-[0.1em] ${
                  isActive(link.path)
                    ? 'text-white bg-miraj-red shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
              className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
            >
              <Download size={14} />
              Download APK
            </a>
          </div>

          {/* Controls: Language + Download APK (Mobile) + Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Language Dropdown Container */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-2 py-1.5 md:px-3 md:py-2 gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                    <Languages size={14} className="text-miraj-gold" />
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-tighter hidden sm:block"></span>
                </div>
                <div id="google_translate_element" className="flex items-center min-w-[120px] h-7 overflow-hidden"></div>
            </div>

            {/* Download APK Button - Mobile (Visible only on mobile) */}
            <a
              href="https://median.co/share/xlrdylb"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            >
              <Download size={14} />
              <span className="hidden xs:inline">APK</span>
            </a>

            {/* Mobile Hamburger/Close Toggle Button */}
            <button 
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${isMenuOpen ? 'bg-white/10 text-white rotate-90' : 'bg-miraj-red text-white'}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE BACKDROP */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-[10000] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR: Cleaned and updated with dedicated Close Option */}
      <aside className={`fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-black border-l border-white/10 z-[10001] lg:hidden transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Explicit Close Button inside Sidebar */}
        <div className="absolute top-4 right-4">
            <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all active:scale-90"
            >
                <X size={24} />
            </button>
        </div>

        <div className="flex flex-col h-full pt-20 px-6 pb-12">
          
          <div className="mb-8 border-b border-white/10 pb-4">
             <div className="flex items-center gap-2">
                <MonitorPlay className="text-miraj-red" size={20} />
                <span className="text-lg font-black tracking-tighter text-white">UWATCHFREE MENU</span>
             </div>
          </div>
          
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between p-4 rounded-2xl font-black text-lg transition-all ${
                  isActive(link.path) 
                    ? 'bg-miraj-red text-white shadow-xl shadow-miraj-red/20 translate-x-1' 
                    : 'text-gray-400 bg-white/5 hover:bg-white/10'
                }`}
              >
                {link.name}
                <ChevronRight size={20} className={isActive(link.path) ? 'text-white' : 'text-gray-800'} />
              </Link>
            ))}
          </div>

          {/* Download APK Link - Mobile Sidebar */}
          <div className="mt-auto">
            <a
              href="https://median.co/share/xlrdylb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl font-black text-lg transition-all bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-400 hover:text-green-300 hover:bg-green-500/10 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Download size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base">Download APK</span>
                  <span className="text-xs text-green-300/70 font-normal">Latest Version</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-green-400/60" />
            </a>
          </div>

          <div className="mt-8 text-center">
             <div className="h-px bg-white/5 w-1/2 mx-auto mb-4"></div>
             <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.6em]">UwatchFree Official</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;