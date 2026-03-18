
import React, { useRef } from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import Button from "../ui/button/Button";
import { motion } from "framer-motion";
import { IconArrowForward } from "../../assets/icons/interfaceIcons2";

const team = [
  {
    id: 1,
    name: "Alexandra Turner",
    role: "Interior design director",
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686cba759671962810e71156_t001.webp",
  },
  {
    id: 2,
    name: "Jonathan Harris",
    role: "Senior furniture specialist",
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686cbb1598718f0d0aae69ba_t002.webp",
  },
  {
    id: 3,
    name: "Emil Rodriguez",
    role: "Customer manager",
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686cdb52fb6c1d10dc89412e_t003.webp",
  },
  {
    id: 4,
    name: "Olivia Foster",
    role: "Marketing & Branding",
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686cd85c53bc00829cd551b4_t004.webp",
  },
  {
    id: 5,
    name: "Daniel Carter",
    role: "Product Sourcing coordinator",
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686cda7d0e7ac6d9e8dbcf99_t005.webp",
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
          className="flex gap-6"
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

