import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Homart Architects & Builders",
    text: "We design and build modern, functional spaces with a focus on quality, innovation, and client satisfaction.\nFrom concept to completion, we deliver reliable architectural and construction solutions.",
    image: "/imgs/hero-bg.webp",
  },
  {
    title: "HADD",
    text: "Homart Approvals and Documentation Division provides expert support for approvals, permits, and technical drawings, ensuring smooth and hassle-free project execution.",
    image:
      "https://cdn.prod.website-files.com/69155df8219de2cb7924d494/69158242d3a4d61ac864b4f6_backgraound-1.webp",
  },

  {
    title: "Impeccable \nInteriors",
    text: "Elegant and functional interior design solutions that transform your living spaces beautifully.",
    image:
      "https://i.pinimg.com/1200x/8f/96/c9/8f96c9e18f4dc0aaf6f9ab08b2a996ed.jpg",
  },
];

export const Hero = () => {
  const bgRef = useRef();
  const contentRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /* Animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-elem",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        bgRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 10, ease: "sine.out" },
      );
    }, contentRef);

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <div className="relative flex items-center h-[100svh] min-h-[600px] overflow-hidden  pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-5%] bg-cover bg-right transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        />
      </div>

      {/* Gradient Overlay (LEFT → transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 w-full px-6 sm:px-10 md:px-20 lg:px-32"
      >
        <div className="max-w-4xl pt-32">
          {/* Title */}
          <h1 className="hero-text-elem text-5xl md:text-7xl lg:text-[120px] font-semibold leading-[0.9] tracking-tight mb-10 text-white whitespace-pre-line drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
            {slides[currentSlide].title}
          </h1>

          {/* Button + Text */}
          <div className="flex flex-col gap-8 mt-8">
            {/* Button */}
            <div className="hero-text-elem">
              <Link to="/projects">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 font-semibold text-lg hover:scale-105 transition-transform duration-300">
                  Got a project?
                </Button>
              </Link>
            </div>

            {/* Text */}
            <p className="hero-text-elem text-base md:text-lg text-white max-w-xl leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              {slides[currentSlide].text}
            </p>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-6 sm:left-10 md:left-20 lg:left-32 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 cursor-pointer transition-all duration-500 rounded-full ${
              currentSlide === index ? "w-12 bg-white" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
