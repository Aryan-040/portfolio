import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="relative z-10 flex flex-col min-h-screen transition-all duration-300">
        <Navbar />
        <div className="flex-1 pt-14 sm:pt-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
