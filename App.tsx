// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import TVShows from './pages/TVShows';
// import Sports from './pages/Sports';
// import LiveTV from './pages/LiveTV';
// import Watch from './pages/Watch';
// import Search from './pages/Search';
// import About from './pages/About';
// import Privacy from './pages/Privacy';
// import Terms from './pages/Terms';
// import FAQ from './pages/FAQ';
// import Contact from './pages/Contact';
// import DMCA from './pages/DMCA';
// import Request from './pages/Request';
// import NotFound from './pages/NotFound';
// import ScrollToTop from './components/ScrollToTop';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen bg-miraj-black text-white font-sans selection:bg-miraj-red selection:text-white flex flex-col">
//         <Navbar />
//         <div className="flex-grow">
//             <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/tv" element={<TVShows />} />
//             <Route path="/sports" element={<Sports />} />
//             <Route path="/live" element={<LiveTV />} />
//             <Route path="/watch/:type/:id" element={<Watch />} />
//             <Route path="/search" element={<Search />} />
            
//             {/* Pages Routes */}
//             <Route path="/about" element={<About />} />
//             <Route path="/privacy" element={<Privacy />} />
//             <Route path="/terms" element={<Terms />} />
//             <Route path="/dmca" element={<DMCA />} />
//             <Route path="/request" element={<Request />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/contact" element={<Contact />} />

//             {/* 404 Route */}
//             <Route path="*" element={<NotFound />} />
//             </Routes>
//         </div>
        
//         {/* Footer Component */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;





import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Sports from './pages/Sports';
import LiveTV from './pages/LiveTV';
import Watch from './pages/Watch';
import Search from './pages/Search';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import DMCA from './pages/DMCA';
import Request from './pages/Request';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [showSecurityWarning, setShowSecurityWarning] = useState(false);

  // Global Right-Click Protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowSecurityWarning(true);
      // Hide warning after 2 seconds
      setTimeout(() => setShowSecurityWarning(false), 2000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    
    // Optional: cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Security Warning Toast */}
      <div 
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 pointer-events-none ${
          showSecurityWarning ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-red-600/95 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold shadow-2xl border border-white/20 flex items-center gap-3">
           <AlertTriangle size={20} className="text-white" />
           <span className="text-sm md:text-base">Cannot use this feature</span>
        </div>
      </div>

      <div className="min-h-screen bg-miraj-black text-white font-sans selection:bg-miraj-red selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVShows />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/live" element={<LiveTV />} />
            <Route path="/watch/:type/:id" element={<Watch />} />
            <Route path="/search" element={<Search />} />
            
            {/* Pages Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/request" element={<Request />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Route - Must be last */}
            <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;