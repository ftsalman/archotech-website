import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#ef1d1d] text-white overflow-hidden">
        {/* Top Content */}
        <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-32 grid md:grid-cols-5 gap-12 relative z-10">
          {/* Company Title */}
          <div className="col-span-1  w-full flex items-start">
            <h2 className="text-xl font-semibold leading-snug">
              Homart Architects & Builders
            </h2>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/abouts">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Architecture Design</li>
              <li>Interior Design</li>
              <li>Construction</li>
              <li>3D Visualization</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>

              <p className="text-white/80 leading-relaxed">
                Homart Architects & Builders <br />
                Kerala, India
              </p>

              <div className="mt-4 space-y-2 text-white/80">
                <p>
                  <a href="tel:+918075749002">+91 8075749002 — Er. Jihad</a>
                </p>

                <p>
                  <a href="tel:+918075979003">+91 8075979003 — Er. Shafeeq</a>
                </p>

                <p>
                  <a href="tel:+914944043248">+91 494-4043248 — Office</a>
                </p>

                <p>
                  <a href="mailto:homartbuilder@gmail.com">
                    homartbuilder@gmail.com
                  </a>
                </p>

                <p>
                  <a href="mailto:homartarchitects@gmail.com">
                    homartarchitects@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-10 right-10 w-14 h-14 rounded-full  bg-white text-red-500 flex items-center justify-center hover:scale-105 transition"
        >
          <IoIosArrowUp size={22} />
        </button>

        {/* Huge Background Text */}
        <div className="absolute bottom-0 left-0 w-full  text-center pointer-events-none">
          <h1 className="text-[12vw] font-bold text-white/90 tracking-widest leading-none">
            HOMART
          </h1>
        </div>
      </footer>
    </>
  );
};
