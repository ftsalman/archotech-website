import React, { useState, useEffect } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import Button from "../components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { OverlapSection } from "../components/OverlapSection/OverlapSection";
import { TeamSection } from "../components/teams/TeamSection";
import { FAQSection } from "../components/faq/FAQSection";
import { TalkSection } from "../components/talk/TalkSection";
import { motion } from "framer-motion";

export const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageContainer className="px-0 py-0">
      {/* HERO SECTION */}
      <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px]">
        <img
          src="/imgs/aboutUs.png"
          alt="About us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 lg:px-40 text-white">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base tracking-widest uppercase text-gray-300 mb-3"
          >
            Homart Architects & Builders
          </motion.p>

          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4"
          >
            About Us
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
              ${scrolled ? "border-black text-black" : "border-white text-black"}`}
            >
              <span className="relative z-10 transition duration-300 group-hover:text-black">
                Get in Touch
              </span>
              <span className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ABOUT CONTENT SECTION */}
      <div className="bg-white py-16 md:py-24 px-6 md:px-16 lg:px-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              About Homart Builders
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Building Trust Since 2016
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Established in January 2016 in the historic land of Thunjan,
              Homart Builders LLP has grown into one of the most trusted names
              in the architectural and construction industry. Over the years, we
              have successfully completed more than 200 design and construction
              projects, reflecting our commitment to innovation, quality, and
              client satisfaction.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our firm operates from a fully equipped office with advanced
              design and project management facilities. We are proud to have a
              team of highly trained professionals and a large workforce of
              skilled labourers who work together to deliver excellence in every
              project we undertake.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Homart Builders, our primary focus lies in commercial building
              projects—creating modern, functional, and aesthetically refined
              spaces. We also contribute to urban development and sustainable
              city planning, ensuring long-term positive impact.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-lg"
          >
            <img
              src="https://i.pinimg.com/736x/2e/01/15/2e01156000af9220e5d367866c21cfe2.jpg"
              alt="Homart Builders"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* HOW WE HELP */}
      <div className="bg-[#f2f2f2] py-16 md:py-24 px-6 md:px-16 lg:px-40">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-12"
        >
          How we help
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Expert design consultations",
              desc: "Our experienced team of interior designers guides you through the creative process.",
            },
            {
              num: "02",
              title: "Customization for uniqueness",
              desc: "Make your home truly yours with personalized solutions and custom designs.",
            },
            {
              num: "03",
              title: "Quality assurance",
              desc: "We ensure every project meets the highest standards of craftsmanship and durability.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-lg transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 mb-6">
                {card.num}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OVERLAP SECTIONS */}
      <div>
        <OverlapSection
          image="https://cdn.prod.website-files.com/67409478e7d06cee556594cb/6876481a725738dce1dffb55_0101.webp"
          title="Responsive customer support"
          subtitle="Have questions or need assistance?"
          description="Our dedicated customer support team is here to help."
        />

        <OverlapSection
          image="https://cdn.prod.website-files.com/67409478e7d06cee556594cb/68764836bbcf0f66136e89f7_0102.webp"
          title="Timely delivery and setup"
          subtitle="Experience the joy of your new home additions"
          description="Our logistics team ensures everything arrives on time."
        />

        <OverlapSection
          image="https://cdn.prod.website-files.com/67409478e7d06cee556594cb/6876484fa2b9f2640bfac585_0103.webp"
          title="Inspiration for every room"
          subtitle="Whether you're revamping a single room"
          description="Explore our blog and design tips."
        />
      </div>

      {/* TEAM */}
      <TeamSection />

      {/* FAQ */}
      <FAQSection />

      {/* CONTACT */}
      <TalkSection />
    </PageContainer>
  );
};
