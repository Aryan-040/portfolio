import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RaceTrackBackground from "./RaceTrackBackground";
import F1Loader from "./F1Loader";
import F1AmbientSound from "./F1AmbientSound";
import { usePageTransition } from "@/hooks/usePageTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = usePageTransition();

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <F1Loader isLoading={isLoading} forceMinDuration={400} />
      <F1AmbientSound />
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
