import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../components/ui/ScrollToTop";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen  ">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow flex flex-col pt-[64px] panel-scrolling  bg-[#D3D3D3] ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
