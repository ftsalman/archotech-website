import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import { PROJECTS_DATA } from "../../data/data";

export const OurProjects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const viewRefs = useRef([]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
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
    <section
      ref={sectionRef}
      className="w-full bg-brand-light py-20 px-6 lg:px-20 relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-black mb-16 tracking-tighter"
        >
          Our projects
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <List
            data={PROJECTS_DATA}
            uniqueKey="id"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            render={(itemData, idx) => (
              <motion.div key={itemData.id} variants={item}>
                <Card
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/projects/${itemData.id}`);
                  }}
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className="relative p-0 overflow-hidden bg-white/50 rounded-none group cursor-pointer border border-black/5"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={itemData.heroImage} // ✅ FIXED
                      alt={itemData.title}
                      className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div
                        ref={(el) => (viewRefs.current[idx] = el)}
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center text-black font-medium opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-500 will-change-transform"
                      >
                        View
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-normal mb-3 text-black">
                      {itemData.title}
                    </h3>

                    <p className="text-sm text-black/60 font-sans">
                      {itemData.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          />
        </motion.div>

        {/* Button */}
        <div className="flex justify-center mt-20">
          <Button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/projects");
            }}
            variant="secondary"
            className="px-8"
          >
            Go to project
          </Button>
        </div>
      </div>
    </section>
  );
};
