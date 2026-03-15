import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { motion } from "framer-motion";
import Button from "../components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { List } from "../components/ui/List";
import { OurServices } from "../components/our-services/OurServices";
import { Brands } from "../components/brand/Brands";
import { ScrollCards } from "../components/scoll-card/ScrollCards";
import { OurProjects } from "../components/projects/OurProjects";

const help = [
  {
    num: "01",
    title: "Expert design consultations",
    desc: "Our experienced team of interior designers is here to guide you through the creative process. From selecting the perfect color palette to optimizing spatial layouts.",
  },
  {
    num: "02",
    title: "Customization for uniqueness",
    desc: "Make your home truly yours with our customization options. Whether it's personalized furniture or bespoke decor.",
  },
  {
    num: "03",
    title: "Quality assurance",
    desc: "We take pride in delivering products of the highest quality. Our commitment to craftsmanship ensures every piece meets our standards.",
  },
];

export const ServicesPage = () => {
  const [scrolled] = useState(false);
  const navigate = useNavigate();

  return (
    <PageContainer className="px-0 py-0">

      {/* HERO */}
      <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px]">

        <img
          src="https://cdn.prod.website-files.com/5eb576c61be1ba0d46d82e8c/5ec69d0921f4a95532603871_Kloud_LOW_3-p-800.jpeg"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 lg:px-40 text-white">

          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4"
          >
            Services
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-xl mb-10 text-base md:text-lg lg:text-xl text-gray-200"
          >
            We create innovative architectural and design solutions that combine
            creativity, technology and functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/contact")}
              className={`relative overflow-hidden px-8 rounded-full border font-semibold group
              ${scrolled ? "border-black text-black" : "border-white text-white"}`}
            >
              <span className="relative z-10 transition duration-300 group-hover:text-black">
                Get in Touch
              </span>

              <span className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
            </Button>
          </motion.div>

        </div>
      </div>

      <Brands/>

      {/* WHAT WE OFFER */}
   <OurServices/>


   <ScrollCards/>


   <OurProjects/>


      {/* HOW WE HELP */}
      <section className="bg-[#f2f2f2] py-20 md:py-24 px-6 md:px-16 lg:px-40">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-12"
        >
          How we help
        </motion.h2>

        <List
          data={help}
          uniqueKey="num"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          render={(item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-lg transition"
            >

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 mb-6">
                {item.num}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          )}
        />

      </section>

    </PageContainer>
  );
};