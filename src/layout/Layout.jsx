import React, { useEffect } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import Lenis from '@studio-freight/lenis';

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update scroll when navigating
    window.scrollTo(0, 0);

    return () => lenis.destroy();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-brand-dark">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="grow flex flex-col pt-0 panel-scrolling">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
