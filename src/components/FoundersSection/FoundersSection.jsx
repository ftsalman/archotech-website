import React from "react";
import { motion } from "framer-motion";

export const FoundersSection = () => {

  const founders = [
    {
      name: "Er. Jihad",
      role: "Founder",
      image: "/imgs/Jihad.jpeg",
      bio: "Architect and visionary behind Homart Architects & Builders, specializing in modern architectural design and construction."
    },
    {
      name: "Er. Shafeeq",
      role: "Co-Founder",
      image: "/imgs/shafeeq-nor.jpeg",
      bio: "Experienced structural engineer focusing on innovative building solutions and project management."
    }
  ];

  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/8b/04/0e/8b040e1db190fa0e5850486d7634cb26.jpg')"
      }}
    >

      {/* overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900">
            Meet Our Founders
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
              <div className="w-[220px] h-[220px] md:w-[360px] md:h-[360px] mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-all duration-500 shadow-lg"
                />
              </div>

              {/* Name */}
              <h3 className="text-4xl font-extrabold text-gray-900">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-gray-500 mb-3">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-gray-600 max-w-md leading-relaxed">
                {founder.bio}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};