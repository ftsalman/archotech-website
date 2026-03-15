import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const services = [
  {
    name: "Decoration",
    image:
      "https://i.pinimg.com/1200x/39/41/f1/3941f1550542b342fdfdcfd5718a92aa.jpg",
  },
  {
    name: "Exterior design",
    image:
      "https://i.pinimg.com/1200x/27/7a/b2/277ab208eef04b666469ad8c1d52664c.jpg",
  },
  {
    name: "Space planning",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Architecture design",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Interior design",
    image:
      "https://i.pinimg.com/1200x/8e/81/c2/8e81c219afed2245ddd189e408d186c0.jpg",
  },
];

export const OurServices = () => {
  const [activeImage, setActiveImage] = useState(services[0].image);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const changeImage = useCallback((image, index) => {
    setActiveImage(image);
    setActiveIndex(index);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-24 px-6 lg:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT IMAGE */}
        <div className="sticky top-24 lg:block">

          <div className="relative overflow-hidden h-[520px] ">

            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt={services[activeIndex].name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1.1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>

          </div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-10 text-gray-600 text-xl leading-relaxed space-y-6"
          >
            <p>
              Our services are focused on creating spaces that are both
              visually stunning and highly functional. We work closely
              with clients to tailor every detail to their needs.
            </p>

            <p>
              Our approach combines creativity with practicality,
              ensuring that the spaces we design are not only beautiful,
              but also serve their intended purpose seamlessly.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SERVICES */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex flex-col space-y-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={{
                hidden: { x: 40, opacity: 0 },
                show: { x: 0, opacity: 1 },
              }}
              whileHover={{ x: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => changeImage(service.image, index)}
              onClick={() => changeImage(service.image, index)}
              className={`border-b border-gray-300 py-8 cursor-pointer transition-all duration-300 group
              ${
                activeIndex === index
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <h3 className="text-3xl lg:text-5xl font-light group-hover:font-normal transition-all duration-300">
                {service.name}
              </h3>

              {/* Active line */}
              {/* {activeIndex === index && (
                <motion.div
                  className="h-[2px] bg-black w-12 mt-2"
                  layoutId="activeIndicator"
                />
              )} */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};