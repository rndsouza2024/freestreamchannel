import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, MonitorPlay } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsMenuOpen(false); // Close mobile menu if open
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      // Optional: We can choose to keep the query or clear it. 
      // Keeping it lets the user modify their search easily.
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'TV Shows', path: '/tv' },
    { name: 'Sports', path: '/sports' },
    { name: 'Live TV', path: '/live' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-miraj-red to-red-800 p-1.5 rounded-lg group-hover:shadow-lg group-hover:shadow-red-900/40 transition-all duration-300">
                <MonitorPlay className="text-white w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
              UWatchfree <span className="text-miraj-red"> Stream </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-miraj-gold ${
                  location.pathname === link.path ? 'text-miraj-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative group items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-miraj-gray/50 border border-white/10 rounded-full py-1.5 pl-4 pr-16 text-sm focus:outline-none focus:border-miraj-gold/50 focus:bg-miraj-gray transition-all w-48 focus:w-64"
              />
              
              {/* Clear Button (Desktop) */}
              {searchQuery && (
                <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-9 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white p-1 transition-colors"
                >
                    <X size={14} />
                </button>
              )}

              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors">
                <Search size={16} />
              </button>
            </form>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-miraj-dark border-b border-white/10 animate-in slide-in-from-top-5">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 ${
                  location.pathname === link.path ? 'text-miraj-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-miraj-gray border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:border-miraj-gold/50 focus:outline-none"
              />
              
              {/* Clear Button (Mobile) */}
              {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white p-2"
                  >
                      <X size={16} />
                  </button>
              )}

              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;