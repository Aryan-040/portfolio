import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const TelemetryHUD = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fps, setFps] = useState(60);
  const [lapTime, setLapTime] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    // FPS Counter
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round(frameCount));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFPS);
    };
    
    countFPS();

    // Lap Time Counter
    const lapInterval = setInterval(() => {
      setLapTime((prev) => prev + 0.1);
    }, 100);

    // Simulate speed variations
    const speedInterval = setInterval(() => {
      setSpeed(Math.floor(Math.random() * 20) + 280);
    }, 2000);

    return () => {
      clearInterval(lapInterval);
      clearInterval(speedInterval);
    };
  }, []);

  if (!isVisible) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsVisible(true)}
        className="fixed top-20 right-4 z-40 bg-background/80 backdrop-blur-sm border-primary/50 text-xs"
      >
        Show Telemetry
      </Button>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-40 bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 md:p-4 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-rajdhani font-bold text-primary tracking-wider">
          TELEMETRY
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="h-6 w-6 text-muted-foreground hover:text-foreground"
        >
          <X className="w-3 h-3" />
        </Button>
      </div>

      <div className="space-y-2 min-w-[140px]">
        {/* Speed */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs font-mono text-muted-foreground">SPEED</span>
          <span className="text-xs md:text-sm font-mono text-foreground telemetry-text" style={{ textShadow: "0 0 8px hsl(0 100% 42% / 0.8)" }}>
            {speed} km/h
          </span>
        </div>

        {/* Lap Time */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs font-mono text-muted-foreground">LAP TIME</span>
          <span className="text-xs md:text-sm font-mono text-foreground telemetry-text" style={{ textShadow: "0 0 8px hsl(120 100% 40% / 0.8)" }}>
            {lapTime.toFixed(1)}s
          </span>
        </div>

        {/* FPS */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs font-mono text-muted-foreground">FPS</span>
          <span 
            className="text-xs md:text-sm font-mono telemetry-text"
            style={{ 
              color: fps >= 55 ? "hsl(120 100% 40%)" : fps >= 30 ? "hsl(45 100% 50%)" : "hsl(0 100% 42%)",
              textShadow: fps >= 55 ? "0 0 8px hsl(120 100% 40% / 0.8)" : "0 0 8px hsl(45 100% 50% / 0.8)"
            }}
          >
            {fps}
          </span>
        </div>

        {/* Status Indicator */}
        <div className="pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-telemetry-pulse" />
            <span className="text-[10px] font-mono text-muted-foreground">ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelemetryHUD;
