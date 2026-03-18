import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { List } from "../ui/List";
import { Card } from "../ui/Card";

gsap.registerPlugin(ScrollTrigger);

const CARDS_DATA = [
  {
    id: "1",
    head: "Expert guidance",
    descp:
      "Benefit from the expertise of our dedicated team, offering personalized advice and tailored solutions to bring your design vision to life.",
  },
  {
    id: "2",
    head: "Contemporary style",
    descp:
      "Stay on trend with our curated collection of stylish and modern home accessories.",
  },
  {
    id: "3",
    head: "Premium materials",
    descp:
      "We use high-quality materials to ensure durability and timeless elegance.",
  },
  {
    id: "4",
    head: "Custom designs",
    descp:
      "Every project is customized to match your taste and lifestyle perfectly.",
  },
];

export const ScrollCards = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef();
  const textRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".scroll-card-item");

      // PIN SECTION
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 400}`,
        pin: true,
        scrub: 1,
      });

      // TEXT ANIMATION
      gsap.from(textRef.current?.children, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // CARD ANIMATION
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            y: 200,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: () => `top+=${i * 400} bottom`,
              end: () => `top+=${(i + 1) * 400} bottom`,
              scrub: true,
            },
          },
        );
      });

      // BACKGROUND PARALLAX
      gsap.to(bgRef.current, {
        scale: 1.1,
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
      className="relative w-full h-screen overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* ✅ Overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* LEFT TEXT */}
        <div className="flex items-center px-6 md:px-12 lg:px-20 xl:px-32 text-white h-screen">
          <div ref={textRef} className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] tracking-tighter mb-8">
              Elevate your <br /> living space
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-md font-sans">
              Find inspiration for every corner of your home, from cozy bedrooms
              to chic living spaces, with our thoughtfully curated collections.
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div
          ref={cardsContainerRef}
          className="flex flex-col items-center lg:items-end px-6 md:px-12 lg:px-20 py-[20vh] space-y-[30vh]"
        >
          <List
            data={CARDS_DATA}
            uniqueKey="id"
            className="w-full flex flex-col items-center lg:items-end"
            render={(item, index) => (
              <Card
                key={item.id}
                className="scroll-card-item bg-white/90 backdrop-blur-md p-10 md:p-14 w-full max-w-lg border border-gray-200 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm font-sans">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-normal tracking-tight text-gray-900">
                    {item.head}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-sans">
                  {item.descp}
                </p>
              </Card>
            )}
          />

          <div className="h-[20vh] w-full" />
        </div>
      </div>
    </section>
  );
};
