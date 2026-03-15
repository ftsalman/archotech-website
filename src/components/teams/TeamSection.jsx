
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
    <section className="py-16 px-4 lg:px-12 space-y-12 overflow-hidden">

      {/* Title */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-semibold"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our team of specialist
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
                lg:min-w-[400px]
                border-none
                rounded-b-sm
                rounded-t-none
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition p-0"
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
                <div className="p-6 lg:p-10 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg lg:text-2xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm lg:text-lg text-gray-500">
                      {item.role}
                    </p>
                  </div>

                  <Button
                    onClick={handleArrowClick}
                    variant="secondary"
                    size="md"
                    className="rounded-full
                    h-10 w-10
                    lg:h-14 lg:w-14
                    p-2
                    bg-gray-100
                    border-gray-50"
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

