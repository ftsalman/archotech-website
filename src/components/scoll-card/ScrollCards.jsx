import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { List } from "../ui/List";
import { Card } from "../ui/Card";

gsap.registerPlugin(ScrollTrigger);

// ... CARDS_DATA stays the same

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
  const cardsContainerRef = useRef(null); // Ref for the right side

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".scroll-card-item");

      // 1. PIN THE SECTION: This keeps the left text and BG in place
      // while the user scrolls the cards.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 400}`, // Length of scroll depends on card count
        pin: true,
        scrub: 1,
      });

      // 2. TEXT ENTRANCE
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

      // 3. INDIVIDUAL CARD ANIMATION (Stacking effect)
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            y: 200,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              // This triggers based on the pinned section's scroll progress
              start: () => `top+=${i * 400} bottom`,
              end: () => `top+=${(i + 1) * 400} bottom`,
              scrub: true,
            },
          },
        );
      });

      // 4. PARALLAX BACKGROUND
      gsap.to(bgRef.current, {
        scale: 1.15,
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
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/imgs/carosel.png')" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* LEFT TEXT (Pinned) */}
        <div className="flex items-center px-6 md:px-12 lg:px-20 xl:px-32 text-white h-screen">
          <div ref={textRef} className="max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-light leading-tight uppercase tracking-tighter">
              Elevate your <br /> living space
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-md italic">
              Find inspiration for every corner of your home.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Scrollable Cards) */}
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
                className="scroll-card-item bg-white p-10 rounded-none shadow-2xl w-full max-w-md border-t-4 border-black"
              >
                <div className="text-xs font-mono mb-4 text-gray-400">
                  SECTION / {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                  {item.head}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.descp}</p>
              </Card>
            )}
          />
          {/* Spacer to allow last card to scroll up */}
          <div className="h-[20vh] w-full" />
        </div>
      </div>
    </section>
  );
};
