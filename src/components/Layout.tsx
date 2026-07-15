import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import F1Loader from "./F1Loader";
import { usePageTransition } from "@/hooks/usePageTransition";
import { Volume2, VolumeX } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = usePageTransition();
  const [muted, setMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('f1-muted') === 'true';
    } catch (e) {
      return false;
    }
  });

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <F1Loader isLoading={isLoading} forceMinDuration={400} muted={muted} setMuted={setMuted} />
      
      {/* Global Audio Controller */}
      <button
        onClick={() => {
          const nextMuted = !muted;
          setMuted(nextMuted);
          localStorage.setItem("f1-muted", String(nextMuted));
        }}
        className="fixed bottom-6 left-6 z-[99] p-3 rounded-full bg-card/90 border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer"
        aria-label={muted ? "Unmute F1 engine sounds" : "Mute F1 engine sounds"}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
      </button>

      <div className="relative z-10 flex flex-col min-h-screen transition-all duration-300">
        <Navbar />
        <div className="flex-1 pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
