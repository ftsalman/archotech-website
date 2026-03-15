import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import { IconShoppingCart } from "../../assets/icons/interfaceIcons2";

const NAV_LINKS = [
  { label: "About", path: "/abouts" },
  { label: "Service", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

const navContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: { y: -24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="show"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
      ${scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-[50px]"}`}
    >
      <div className="container mx-auto px-4 h-[7.4rem] sm:px-8 py-3 flex items-center justify-between">

        <Link to="/">
          <motion.h2
            variants={navItem}
            className={`text-2xl md:text-6xl font-extrabold leading-tight transition
            ${scrolled ? "text-black" : "text-white"}`}
          >
            Homart
          </motion.h2>
        </Link>

        <ul
          className={`hidden md:flex gap-8 items-center transition
          ${scrolled ? "text-black" : "text-white"}`}
        >
          {NAV_LINKS.map((item, index) => (
            <motion.li key={index} variants={navItem}>
              <Link
                to={item.path}
                className="relative block overflow-hidden h-6 group"
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {item.label}
                </span>

                <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                  {item.label}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={navItem}
          className="hidden md:flex items-center gap-4"
        >
          <Button
            variant="tertiary"
            size="md"
            className={`relative ${scrolled ? "text-black" : "text-white"}`}
          >
            <span className="absolute bottom-1 right-2 flex items-center justify-center rounded-full h-4 w-4 bg-red-600 text-xs text-white">
              1
            </span>

            <IconShoppingCart size="24" />
          </Button>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/contact")}
              className={`relative overflow-hidden px-8 rounded-full border font-semibold group
              ${
                scrolled
                  ? "border-black text-black"
                  : "border-white text-white"
              }`}
            >
              <span className="relative z-10 transition duration-300 group-hover:text-black">
                Contact
              </span>

              <span className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </motion.nav>
  );
};