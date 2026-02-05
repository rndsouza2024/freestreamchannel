import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, MonitorPlay, ChevronRight, Languages, Download } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Google Translate Loading
  useEffect(() => {
    // Define the init function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,pt,ru,ja,ko,zh-CN,ar,hi',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Load the script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
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
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-2 py-1.5 md:px-3 md:py-2 gap-2" suppressHydrationWarning>
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