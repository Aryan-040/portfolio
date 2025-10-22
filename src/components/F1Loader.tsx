import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface F1LoaderProps {
  isLoading: boolean;
  forceMinDuration?: number;
}

const F1Loader = ({ isLoading, forceMinDuration = 400 }: F1LoaderProps) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      
      // Play F1 sound
      const audio = new Audio('/f1.mp3');
      audio.volume = 0.5;
      audio.play().catch(error => {
        console.log('Audio playback failed:', error);
      });

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, forceMinDuration);

    return () => clearTimeout(timer);
  }, [isLoading, forceMinDuration]);

  if (!showLoader) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Speed lines background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{
              top: `${(i * 5)}%`,
              width: '100%',
              opacity: 0.3
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.05
            }}
          />
        ))}
      </div>

      {/* Animated tire moving across screen */}
      <motion.div
        className="absolute w-32 h-32 left-0 top-1/2 -translate-y-1/2"
        initial={{ x: '-150%', opacity: 0 }}
        animate={{ 
          x: ['0vw', '100vw'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          x: {
            duration: 2,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            repeatDelay: 0.3
          },
          opacity: {
            duration: 2,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0.3
          }
        }}
      >
        {/* Motion blur effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            filter: [
              'blur(0px)',
              'blur(3px)',
              'blur(3px)',
              'blur(0px)'
            ]
          }}
          transition={{
            duration: 2,
            times: [0, 0.3, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 0.3
          }}
        >
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <motion.div 
              className="relative w-32 h-32"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255,165,0,0.6))'
              }}
            >
              <img 
                src="/f1-tire.png" 
                alt="F1 Tire"
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                  mixBlendMode: 'screen'
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Speed trail effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(to right, rgba(255,165,0,0.3), transparent)',
            filter: 'blur(20px)',
            width: '200%',
            left: '-100%'
          }}
        />
      </motion.div>

      {/* NEXT LAP text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-20 text-red-600 text-2xl font-bold tracking-wider uppercase"
        style={{ fontFamily: 'Arial, sans-serif', textShadow: '0 0 10px rgba(220, 38, 38, 0.5)' }}
      >
        NEXT LAP
      </motion.div>
    </motion.div>
  );
};

export default F1Loader;