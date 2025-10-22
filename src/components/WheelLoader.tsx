import { useEffect, useState } from "react";

interface WheelLoaderProps {
  isLoading: boolean;
  duration?: number;
  forceMinDuration?: number;
}

const WheelLoader = ({ isLoading, duration = 400, forceMinDuration = 400 }: WheelLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
      setProgress(0);
      
      // Progress animation
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + (100 / duration) * 50;
        });
      }, 50);

      // Force minimum display duration
      const minDurationTimer = setTimeout(() => {
        setShow(false);
      }, forceMinDuration);

      return () => {
        clearInterval(interval);
        clearTimeout(minDurationTimer);
      };
    } else {
      // Keep showing for minimum duration even if loading finishes early
      const hideTimer = setTimeout(() => {
        setShow(false);
      }, 300);
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, duration, forceMinDuration]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-6">
        {/* F1 Wheel */}
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Outer Rim */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
          
          {/* Spinning Wheel with Spokes */}
          <div className="absolute inset-0 animate-wheel-spin">
            {/* Center Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary track-glow" />
            </div>
            
            {/* 5 Spokes */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-primary to-transparent origin-top"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 72}deg)`,
                }}
              />
            ))}
            
            {/* Inner Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-primary/50" />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-telemetry-pulse" />
        </div>

        {/* RPM Gauge */}
        <div className="w-64 md:w-80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm font-mono text-muted-foreground">RPM</span>
            <span className="text-xs md:text-sm font-mono text-primary">{Math.round(progress * 90)}00</span>
          </div>
          <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out track-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-sm md:text-base font-rajdhani font-bold text-foreground tracking-wider">
          LOADING<span className="animate-telemetry-pulse">...</span>
        </p>
      </div>
    </div>
  );
};

export default WheelLoader;
