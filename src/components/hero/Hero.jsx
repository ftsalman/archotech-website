import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  const bgRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    title: "Homart Architects & Builders",
    text: "We specialize in architectural design, construction, and interior solutions. Our mission is to create modern, functional, and beautiful spaces that elevate the way you live.",
    image: "/imgs/hero-bg.webp",
  },

  {
    title: "Building Construction",
    text: "Professional residential and commercial construction services with high-quality materials.",
    image: "https://i.pinimg.com/736x/93/10/9a/93109afa8ea24d0e0145750a40f13fca.jpg",
  },



  {
    title: "Interior Design",
    text: "Elegant and functional interior design solutions that transform your living spaces beautifully.",
    image: "https://i.pinimg.com/1200x/8f/96/c9/8f96c9e18f4dc0aaf6f9ab08b2a996ed.jpg",
  },

  {
    title: "HADD Division",
    text: "Homart Approvals and Documentation Division handles approvals, permits, and technical drawings.",
    image: "https://i.pinimg.com/736x/41/b0/44/41b044cb9856e20792bf124b08d974d4.jpg",
  },
  ];

  /* Auto Slide Change */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* Content Animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: "power3.out" }
      );

      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <div className="relative flex h-[100svh] min-h-[44rem] items-end overflow-hidden bg-[#1f0605] pt-[9.55rem] pb-[7.5rem] md:min-h-[52rem]">
      
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,11,11,0.48)_0%,rgba(13,11,11,0.12)_42%,rgba(13,11,11,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,11,0.22)_0%,rgba(13,11,11,0)_36%,rgba(13,11,11,0.14)_100%)]" />

      {/* Content */}
      <div className="relative w-full px-6 md:px-40 z-20">
        <div className="max-w-xl text-white">
          
          <h1
            ref={titleRef}
            className="text-5xl md:text-8xl font-semibold leading-tight mb-6"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            ref={textRef}
            className="text-xl text-gray-200 mb-8 max-w-2xl"
          >
            {slides[currentSlide].text}
          </p>

          <Link to={"/contact"}>
            <Button
              variant="secondary"
              ref={buttonRef}
              className="relative overflow-hidden group text-md bg-white text-black px-10 py-3 rounded-full font-semibold"
            >
              <span className="relative block h-6 overflow-hidden">
                <span className="block mt-0.5 transition-transform duration-300 group-hover:-translate-y-full">
                  Get in touch
                </span>

                <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                  Get in touch
                </span>
              </span>
            </Button>
          </Link>

        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full cursor-pointer transition ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
};