import React, { useEffect, useRef } from "react";
import { canAnimate, registerGsap } from "../../../lib/animation";
import gsap from "gsap";

const BRANDS = [
  {
    logo: "https://i.pinimg.com/736x/da/03/35/da033593e99e9126903f881d55435258.jpg",
    name: "FocalPoint",
  },
  {
    logo: "https://i.pinimg.com/1200x/de/14/16/de1416fe5279150351317ebf27be67d8.jpg",
    name: "Nietzsche",
  },
  {
    logo: "https://i.pinimg.com/1200x/de/14/16/de1416fe5279150351317ebf27be67d8.jpg",
    name: "GlobalBank",
  },
  {
    logo: "https://i.pinimg.com/736x/da/03/35/da033593e99e9126903f881d55435258.jpg",
    name: "Catalog",
  },
  {
    logo: "https://i.pinimg.com/1200x/de/14/16/de1416fe5279150351317ebf27be67d8.jpg",
    name: "Capsule",
  },
  {
    logo: "https://i.pinimg.com/736x/da/03/35/da033593e99e9126903f881d55435258.jpg",
    name: "Sisypus",
  },
  {
    logo: "https://i.pinimg.com/1200x/de/14/16/de1416fe5279150351317ebf27be67d8.jpg",
    name: "Layers",
  },
  {
    logo: "https://i.pinimg.com/736x/da/03/35/da033593e99e9126903f881d55435258.jpg",
    name: "Acme Corp",
  },
];

export const Brands = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  useEffect(() => {
    registerGsap();

    if (!sectionRef.current || !canAnimate()) return;

    const ctx = gsap.context(() => {
      // Logo reveal animation
      gsap.fromTo(
        "[data-logo-reveal]",
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
          },
        },
      );

      // Marquee scroll animation
      marqueeTweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pauseMarquee = () => marqueeTweenRef.current?.pause();
  const resumeMarquee = () => marqueeTweenRef.current?.resume();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-14 overflow-hidden"
      onMouseEnter={pauseMarquee}
      onMouseLeave={resumeMarquee}
    >
      <div ref={trackRef} className="flex items-center gap-16 w-max">
        {[...BRANDS, ...BRANDS].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            data-logo-reveal
            className="flex items-center gap-3 text-gray-700 font-semibold whitespace-nowrap opacity-80 hover:opacity-100 transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 w-48 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
