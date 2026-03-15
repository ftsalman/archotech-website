import React from "react";
import { motion } from "framer-motion";

export const OverlapSection = ({ image, title, subtitle, description }) => {
  return (
    <section className="relative h-screen sticky top-0 overflow-hidden">

      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20 text-white max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <h4 className="text-base sm:text-lg md:text-xl mb-3 md:mb-4 text-gray-200">
            {subtitle}
          </h4>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
            {description}
          </p>
        </motion.div>

      </div>
    </section>
  );
};