import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const RuleSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(imageRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2 bg-red-600 text-white flex items-center">
        <div ref={textRef} className="max-w-3xl px-10 md:px-16 py-20">
          <h2 className="text-5xl md:text-8xl font-light leading-tight mb-10">
            Our rule: quality <br /> and style
          </h2>

          <p className="text-xl mb-6 text-white/90">
            We take pride in curating a diverse collection of home furnishings
            and decor that embody quality aesthetics.
          </p>

          <p className="text-md text-white/80 leading-relaxed">
            Whether you&apos;re looking for the perfect sofa to unwind after a
            long day or unique decor pieces to add a personal touch, our
            selection is designed to meet the highest standards of style and
            durability.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] md:h-auto overflow-hidden">
        <img
          ref={imageRef}
          src={"/imgs/advantages-bg.webp"}
          alt="building"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
