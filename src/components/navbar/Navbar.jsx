import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/button/Button";
import { IconShoppingCart } from "../../assets/icons/interfaceIcons2";

const NAV_LINKS = [
  { label: "About", path: "/abouts" },
  { label: "Service", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
        ${scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-[50px]"}`}
      >
        <div className="container mx-auto px-4 sm:px-8 h-[70px] flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <div
              className={`transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
            >
              <div className="flex flex-col select-none">
                <span className="font-display italic font-light text-4xl leading-none">
                  Homart
                </span>
                {/* <span className="font-display font-medium text-2xl tracking-tighter leading-none -mt-1">forma</span> */}
              </div>
            </div>
          </Link>

          <ul
            className={`hidden md:flex gap-10 items-center font-sans uppercase tracking-widest text-xs font-semibold transition-colors duration-300
            ${scrolled ? "text-black" : "text-white"}`}
          >
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="overflow-hidden group">
                <Link
                  to={item.path}
                  className="relative flex flex-col h-[14px]"
                >
                  <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                    {item.label}
                  </span>
                  <span className="absolute top-full text-brand-red group-hover:-translate-y-full transition-transform duration-300">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              className={`transition-colors duration-300 hover:opacity-70 ${scrolled ? "text-black" : "text-white"}`}
            >
              <IconShoppingCart size="20" />
            </button>

            <Button
              onClick={() => navigate("/contact")}
              variant="secondary"
              className={`px-6 py-2 h-10 rounded-full border text-xs tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? "border-gray-200 text-black hover:bg-black/5 hover:text-black"
                  : "border-white/30 text-black hover:bg-white hover:text-black"
              }`}
            >
              Contact
            </Button>
          </div>

          {/* 🍔 MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <div className="flex flex-col gap-1">
                <span
                  className={`block w-6 h-0.5 transition ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 transition ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 transition ${
                    scrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[70px] left-0 w-full bg-white z-40 shadow-md md:hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {NAV_LINKS.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="px-6 rounded-full border border-black"
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
