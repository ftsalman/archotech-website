import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Elevate \nyour living",
    text: "We understand that every home is unique. Our team of experts is ready to help you choose the perfect solutions to suit your taste and needs.",
    image: "/imgs/hero-bg.webp",
  },
  {
    title: "Timeless \nArchitecture",
    text: "Professional residential and commercial construction services with high-quality materials to build your future.",
    image:
      "https://i.pinimg.com/736x/93/10/9a/93109afa8ea24d0e0145750a40f13fca.jpg",
  },
  {
    title: "Impeccable \nInteriors",
    text: "Elegant and functional interior design solutions that transform your living spaces beautifully.",
    image:
      "https://i.pinimg.com/1200x/8f/96/c9/8f96c9e18f4dc0aaf6f9ab08b2a996ed.jpg",
  }
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
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(bgRef.current, 
        { scale: 1.05 },
        { scale: 1, duration: 10, ease: "sine.out" }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <div className="relative flex items-center h-[100svh] min-h-[600px] overflow-hidden bg-brand-dark pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-5%] bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-dark/40" />

      {/* Content */}
      <div ref={contentRef} className="relative z-20 w-full px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="max-w-4xl pt-32">
          {/* Title */}
          <h1 className="hero-text-elem text-6xl md:text-8xl lg:text-[140px] font-medium leading-[0.9] tracking-tighter mb-12 text-white whitespace-pre-line drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center mt-12">
            {/* Button */}
            <div className="hero-text-elem">
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 font-semibold text-lg hover:scale-105 transition-transform duration-300">
                  Got a project?
                </Button>
              </Link>
            </div>

            {/* Text */}
            <p className="hero-text-elem text-base md:text-xl text-white/90 max-w-md leading-relaxed font-sans font-medium drop-shadow-md">
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
              currentSlide === index ? "w-12 bg-white" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
