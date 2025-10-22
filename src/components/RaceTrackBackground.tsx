import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

// Define the vertical positions for each route - evenly spaced from top to bottom
const trackPositions = {
  '/': 10,         // StartGrid - very top
  '/about': 35,    // Pit Stop - upper section
  '/projects': 60, // Race Laps - lower section
  '/contact': 85   // Podium - bottom
};

const RaceTrackBackground = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth spring animation configuration
  const springConfig = {
    damping: 25,     // Increased damping for smoother stops
    stiffness: 120,  // Increased stiffness for faster initial movement
    mass: 0.6,      // Reduced mass for quicker response
  };

  // Create spring-animated y position
  const y = useSpring(trackPositions['/'], springConfig);

  useEffect(() => {
    // Update y position based on current route
    const targetY = trackPositions[location.pathname] || trackPositions['/'];
    y.set(targetY);
  }, [location.pathname, y]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 bottom-0 w-14 sm:w-20 md:w-24 lg:w-28 pointer-events-none transition-all duration-300">
      <div className="relative h-full flex items-center">
        {/* Track background */}
        <div 
          className="absolute left-0 inset-y-0 w-10 sm:w-12 md:w-14 lg:w-16 bg-black/10"
          style={{
            borderRight: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Track markers with labels */}
          <div className={`
            h-full py-4 sm:py-6 md:py-8 px-1 sm:px-2 flex flex-col justify-between
            transition-opacity duration-300
            ${isScrolled ? 'sm:opacity-100 opacity-0' : 'opacity-100'}
          `}>
            {[
              { path: '/', label: 'START GRID', shortLabel: '◉', medLabel: 'START' },
              { path: '/about', label: 'PIT STOP', shortLabel: '◉', medLabel: 'PIT' },
              { path: '/projects', label: 'RACE LAPS', shortLabel: '◉', medLabel: 'RACE' },
              { path: '/contact', label: 'PODIUM', shortLabel: '◉', medLabel: 'END' }
            ].map(({ path, label, shortLabel, medLabel }) => (
              <div 
                key={path}
                className={`
                  relative flex items-center group
                  transition-transform duration-300
                  ${isScrolled && path !== location.pathname ? 'sm:translate-x-0 -translate-x-full' : 'translate-x-0'}
                `}
              >
                <div 
                  className={`
                    w-full h-[2px] bg-red-500/20
                    transition-all duration-300
                    ${isScrolled && path !== location.pathname ? 'sm:opacity-100 opacity-0' : 'opacity-100'}
                  `}
                  style={{
                    boxShadow: '0 0 8px rgba(255, 0, 0, 0.3)'
                  }}
                />
                <span 
                  className={`
                    absolute left-full pl-1 sm:pl-2 md:pl-3 lg:pl-4 
                    text-[10px] sm:text-xs md:text-sm font-bold tracking-wider
                    text-red-500/80 whitespace-nowrap
                    transition-all duration-300
                    ${isScrolled ? (
                      path === location.pathname ? 'opacity-100' : 'sm:opacity-40 opacity-0'
                    ) : (
                      'opacity-40 group-hover:opacity-100'
                    )}
                  `}
                  style={{
                    textShadow: '0 0 10px rgba(255, 0, 0, 0.3)'
                  }}
                >
                  <span className="hidden lg:inline">{label}</span>
                  <span className="hidden sm:inline lg:hidden">{medLabel}</span>
                  <span className="sm:hidden">{shortLabel}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            position: 'absolute',
            width: 'min(6px, 1.5vw)',
            height: 'min(6px, 1.5vw)',
            minWidth: '4px',
            minHeight: '4px',
            backgroundColor: '#ff0000',
            borderRadius: '50%',
            boxShadow: `
              0 0 min(10px, 2.5vw) rgba(255, 0, 0, 0.6),
              0 0 min(16px, 4vw) rgba(255, 0, 0, 0.4)
            `,
            top: `${y.get()}%`,
            opacity: 0.9,
            transition: 'box-shadow 0.3s ease-out',
          }}
          whileHover={{
            scale: 1.2,
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default RaceTrackBackground;
