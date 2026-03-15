import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import { List } from "../ui/List";
import { Card } from "../ui/Card";

export const OurProjects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const viewRefs = useRef([]);

  const projects = [
    {
      id: 1,
      img: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686ce805ecfafe3123fe5efc_011%20(1).webp",
      title: "Garden House",
      desc: "A peaceful modern home surrounded by nature, designed to bring the outdoors inside.",
    },
    {
      id: 2,
      img: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686ce92f749222f9928a6814_019p.webp",
      title: "Modern Dining",
      desc: "A warm minimalist dining space with natural wood textures and soft lighting.",
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686ceac6ecfafe31230155e3_012p.webp",
      title: "Minimal Living",
      desc: "A clean and elegant living space focused on organic shapes and neutral tones.",
    },
    {
      id: 4,
      img: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686ceac6ecfafe31230155e3_012p.webp",
      title: "Studio Terrace",
      desc: "A compact urban interior that balances open flow with high-end comfort.",
    },
    {
      id: 5,
      img: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686ceac6ecfafe31230155e3_012p.webp",
      title: "Lake View Home",
      desc: "A bright residence designed around natural light and uninterrupted views.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const handleMouseMove = (e, index) => {
    const target = viewRefs.current[index];
    if (!target) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    target.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = (index) => {
    const target = viewRefs.current[index];
    if (!target) return;

    target.style.transform = `translate(0px,0px)`;
  };

  return (
    <section ref={sectionRef} className="w-full bg-gray-100 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-12 md:mb-16"
        >
          Our projects
        </motion.h2>

        {/* Project Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <List
            data={projects}
            uniqueKey="id"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            render={(itemData, idx) => (
              <motion.div key={itemData.id} variants={item}>
                <Card
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className="relative p-0 overflow-hidden bg-white rounded-md group cursor-pointer shadow-sm"
                >
                  {/* Image */}

                  <div className="relative overflow-hidden">
                    <img
                      src={itemData.img}
                      alt={itemData.title}
                      className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    {/* View Circle */}

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                       
                        ref={(el) => (viewRefs.current[idx] = el)}
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center text-gray-800 font-medium opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-500"
                      >
                        View
                      </div>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-5">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {itemData.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {itemData.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          />
        </motion.div>

        {/* Bottom Button */}

        <div className="flex justify-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/projects")}
              className="relative overflow-hidden px-8 rounded-full border border-gray-200 text-black font-semibold group"
            >
              <span className="relative z-10 transition duration-300 group-hover:text-white">
                Go to Project
              </span>

              <span className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
