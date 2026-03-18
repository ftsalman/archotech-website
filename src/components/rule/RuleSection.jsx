import React from "react";
import { motion } from "framer-motion";

const ruleCards = [
  {
    title: "Our rule: quality and style",
    subtitle:
      "We take pride in curating a diverse collection of home furnishings and decor that embody quality aesthetics.",
    desc: "Whether you're looking for the perfect sofa to unwind after a long day or unique decor pieces to add a personal touch, our selection is designed to meet the highest standards of style and durability.",
    bgColor: "bg-[#d4351c]",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Personalized solutions for every home",
    subtitle: "Understanding that each home is unique",
    desc: "Understanding that each home is unique, our team of experts is committed to offering personalized solutions tailored to your preferences.",
    bgColor: "bg-[#8b1000]",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Convenience meets exceptional service",
    subtitle: "We value your time and convenience.",
    desc: "We value your time and convenience. That's why we offer seamless online shopping experiences, swift delivery services, and flexible payment options.",
    bgColor: "bg-[#1a1a1a]",
    img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop",
  },
];

export const RuleSection = () => {
  return (
    <section className="w-full relative">
      {ruleCards.map((card, idx) => (
        <div
          key={idx}
          className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden"
          style={{
            zIndex: idx + 1, // 🔥 IMPORTANT for stacking
          }}
        >
          {/* LEFT TEXT */}
          <div
            className={`w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 ${card.bgColor} text-white`}
          >
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tighter mb-10"
              >
                {card.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <p className="text-xl md:text-2xl w-full md:w-1/2">
                  {card.subtitle}
                </p>

                <p className="text-sm md:text-base text-white/70 w-full md:w-1/2">
                  {card.desc}
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
            <motion.img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
