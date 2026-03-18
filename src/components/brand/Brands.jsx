import React, { useEffect, useRef } from "react";
import { canAnimate, registerGsap } from "../../../lib/animation";
import gsap from "gsap";

export const Brands = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  // ✅ Company list (ADD MORE HERE anytime)
  const companies = [
    {
      name: "Homart Architects & Builders",
      logo: "/imgs/homatr_logo.png",
    },
    {
      name: "HADD Homart-approvals and documentation",
      logo: "/imgs/homatr_logo.png",
    },
  ];

  const marqueeItems = Array(8).fill(companies).flat();

  useEffect(() => {
    registerGsap();

    if (!sectionRef.current || !canAnimate()) return;

    const ctx = gsap.context(() => {
      // 🔹 Reveal animation
      gsap.fromTo(
        "[data-logo-reveal]",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );

      // 🔹 Infinite marquee animation
      marqueeTweenRef.current = gsap.to(trackRef.current, {
        xPercent: -20, // move half width for seamless loop
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pause / Resume on hover
  const pauseMarquee = () => marqueeTweenRef.current?.pause();
  const resumeMarquee = () => marqueeTweenRef.current?.resume();

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-14 overflow-hidden"
      onMouseEnter={pauseMarquee}
      onMouseLeave={resumeMarquee}
    >
      {/* Track */}
      <div ref={trackRef} className="flex items-center gap-16 w-max">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            data-logo-reveal
            className="flex items-center gap-3 whitespace-nowrap opacity-70 hover:opacity-100 transition duration-300"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />

            {/* Company Name */}
            <span className="text-sm md:text-base font-medium tracking-wide uppercase text-gray-600">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Gradient fade (premium look) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>
    </section>
  );
};
