import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Brendan",
    text: "Highly recommend for anyone seeking truly unique and contemporary architectural solutions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura Martinez",
    text: "The hiking trail offers breathtaking views and a chance to connect with nature.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel R.",
    text: "We are thrilled with the result and sincerely appreciate the entire team.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    text: "The office they designed for us has significantly boosted employee morale.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah Williams",
    text: "Absolutely amazing experience from start to finish.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    text: "A perfect blend of modern aesthetics and functional design.",
    rating: 5,
  },
];

export const CommitmentSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(rightRef.current, {
        y: 55,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    const topTween = gsap.to(topRef.current, {
      yPercent: -50,
      duration: 35,
      ease: "linear",
      repeat: -1,
    });

    const bottomTween = gsap.to(bottomRef.current, {
      yPercent: 50,
      duration: 35,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      topTween.kill();
      bottomTween.kill();
      ctx.revert();
    };
  }, []);

  const renderStars = (rating) => "*".repeat(rating);

  const topRow = reviews.slice(0, 3);
  const bottomRow = reviews.slice(3);

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-24 px-6 lg:px-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('/imgs/advantages-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
        <div ref={leftRef} className="max-w-xl space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight">
            Our commitment: <br /> quality and style
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            Whether you&apos;re looking for the perfect sofa to unwind after a
            long day or unique decor pieces to add a personal touch, our
            selection is designed to meet the highest standards of style and
            durability.
          </p>
        </div>

        <div ref={rightRef} className="grid grid-cols-2 gap-6 h-[500px] lg:h-[650px]">
          <div className="overflow-hidden">
            <div ref={topRef} className="flex flex-col gap-6">
              {[...topRow, ...topRow].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="bg-white text-black p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-yellow-500 mb-3">{renderStars(review.rating)}</div>
                  <p className="text-gray-700 mb-4">&quot;{review.text}&quot;</p>
                  <p className="font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div ref={bottomRef} className="flex flex-col gap-6">
              {[...bottomRow, ...bottomRow].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="bg-white text-black p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-yellow-500 mb-3">{renderStars(review.rating)}</div>
                  <p className="text-gray-700 mb-4">&quot;{review.text}&quot;</p>
                  <p className="font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
