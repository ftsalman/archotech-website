import React, { useRef } from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import Button from "../ui/button/Button";
import { motion } from "framer-motion";
import { IconArrowForward } from "../../assets/icons/interfaceIcons2";

const team = [
  {
    id: 1,
    name: "Abhinav",
    role: "Homart Architects",
    image: "/imgs/stff1.png",
  },
  {
    id: 2,
    name: "Safuwana",
    role: "Homart Architects",
    image: "/imgs/staff2.png",
  },

  {
    id: 3,
    name: "MUHAMMED NASEEM HAJ",
    role: "ACCOUNTANT",
    image: "/imgs/staff9.png",
  },

  {
    id: 4,
    name: "Arshida",
    role: "Junior Draughtsman at  HADD",
    image: "/imgs/staff4.png",
  },
  {
    id: 5,
    name: "Mohammed Ashique",
    role: "Project Coordinator at Homart Builders",
    image: "/imgs/staff11.png",
  },

  {
    id: 6,
    name: "Ayisha Hiba",
    role: "Senior Engineer at HADD",
    image: "/imgs/staff3.png",
  },

  {
    id: 7,
    name: "Nuhmanul Hakeem",
    role: "structural Draughtman at homart builders",
    image: "/imgs/staff7.png",
  },

  {
    id: 8,
    name: "Rameesha Sherin",
    role: "Senior Engineer at HADD",
    image: "/imgs/staff12.png",
  },

  {
    id: 9,
    name: "Safuwan",
    role: "Project engineer  at Homart Builder",
    image: "/imgs/staff10.png",
  },
  {
    id: 10,
    name: "Sidin palliyeri",
    role: "Chief Engineer at Homart Builders & HADD",
    image: "/imgs/staff8.png",
  },
];

export const TeamSection = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  /* Smooth Hover Scroll */
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const width = rect.width;

    const maxScroll = container.scrollWidth - width;
    const percent = mouseX / width;

    const targetScroll = percent * maxScroll;

    cancelAnimationFrame(animationRef.current);

    const start = container.scrollLeft;
    const distance = targetScroll - start;
    const duration = 400;
    let startTime = null;

    const animateScroll = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      container.scrollLeft = start + distance * ease;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateScroll);
      }
    };

    animationRef.current = requestAnimationFrame(animateScroll);
  };

  /* Arrow Scroll */
  const handleArrowClick = () => {
    const container = containerRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".team-card");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24;

    container.scrollTo({
      left: container.scrollLeft + cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-32 px-4 lg:px-12 space-y-12 overflow-hidden bg-brand-light text-black">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our team of specialists
      </motion.h2>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-x-auto   no-scrollbar scrollbar-hide"
      >
        <List
          data={team}
          uniqueKey="id"
          className="flex  gap-6"
          render={(item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 55, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <Card
                className="team-card
                min-w-[260px]
                sm:min-w-[320px]
                lg:min-w-[420px]
                border-none
                rounded-none
                overflow-hidden
                shadow-none
                bg-transparent
                p-0"
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[30rem] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="pt-6 pb-2 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl lg:text-3xl font-normal tracking-tight mb-2 text-black">
                      {item.name}
                    </h3>

                    <p className="text-sm lg:text-base font-sans text-black/60">
                      {item.role}
                    </p>
                  </div>

                  <Button
                    onClick={handleArrowClick}
                    className="rounded-full
                    h-10 w-10
                    lg:h-12 lg:w-12
                    p-0
                    bg-black/10 text-black
                    hover:bg-brand-red hover:text-white border-none transition-colors duration-300 flex items-center justify-center shrink-0"
                  >
                    <IconArrowForward size="20" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        />
      </div>
    </section>
  );
};
