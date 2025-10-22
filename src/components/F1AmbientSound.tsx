// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Button } from './ui/button';
// import { Volume2, VolumeX } from 'lucide-react';

// const F1AmbientSound = () => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [isVisible, setIsVisible] = useState(true);
//   const [audio] = useState(new Audio('/f1-idle.mp3'));
//   const location = useLocation();

//   useEffect(() => {
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const updateVisibility = () => {
//       setIsVisible(window.scrollY < 100);
//       ticking = false;
//     };

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(updateVisibility);
//         ticking = true;
//       }
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     audio.loop = true;
    
//     if (!isMuted && location.pathname === '/') {
//       audio.play().catch(() => {
//         // Handle autoplay restrictions
//         setIsMuted(true);
//       });
//     } else {
//       audio.pause();
//     }

//     return () => {
//       audio.pause();
//     };
//   }, [isMuted, location.pathname, audio]);

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       className={`
//         fixed bottom-4 right-4 z-50 
//         bg-black/50 hover:bg-black/70
//         transform transition-all duration-300 ease-in-out
//         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
//       `}
//       onClick={toggleMute}
//       title={isMuted ? "Unmute engine sound" : "Mute engine sound"}
//     >
//       {isMuted ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
//     </Button>
//   );
// };

// export default F1AmbientSound;