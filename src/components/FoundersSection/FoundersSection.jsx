import React from "react";
import { motion } from "framer-motion";

export const FoundersSection = () => {
  const founders = [
    {
      name: "Er. Jihad",
      role: "Founder",
      image: "/imgs/Jihad.jpeg",
      bio: "Architect and visionary behind Homart Architects & Builders, specializing in modern architectural design and construction.",
    },
    {
      name: "Er. Shafeeq",
      role: "Founder",
      image: "/imgs/shafeeq-nor.jpeg",
      bio: "Dedicated Quality engineer delivering high-quality construction solutions. Skilled in innovative design and efficient project execution. Committed to precision, durability, and engineering excellence.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 bg-brand-light text-black overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Title */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter">
            Meet the founders
          </h2>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full max-w-[320px] aspect-[4/5] mb-8 overflow-hidden rounded-none border border-black/10">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl md:text-3xl font-normal tracking-tight mb-2">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-brand-red uppercase tracking-widest text-xs font-sans mb-4">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-black/60 max-w-md leading-relaxed font-sans mt-4">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
