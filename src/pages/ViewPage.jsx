import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/data";

export const ViewPage = () => {
  const { id } = useParams();
  const project = PROJECTS_DATA.find((p) => p.id === id);

  // ✅ FIX: force scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  if (!project) return <div>Not Found</div>;

  return (
    <div className="bg-[#f5f5f5]">
      {/* 🔥 HERO SECTION */}
      <div className="relative h-[80vh]">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-20 text-white">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-light"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-base md:text-lg max-w-xl"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      {/* 🔥 ABOUT */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 space-y-6 shadow"
        >
          <p><span className="text-gray-400">Client</span><br />{project.client}</p>
          <p><span className="text-gray-400">Budget</span><br />{project.budget}</p>
          <p><span className="text-gray-400">Date</span><br />{project.date}</p>
          <p><span className="text-gray-400">Location</span><br />{project.location}</p>
          <p><span className="text-gray-400">Service</span><br />{project.service}</p>
        </motion.div>

        <div className="md:col-span-2 space-y-12">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">About project</h2>
            <p className="text-gray-600 leading-8">
              {project.about}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">Client Background</h2>
            <p className="text-gray-600 leading-8">
              {project.clientBackground}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 🔥 IMAGE */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <img
          src={project.gallery[0]}
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </motion.div>

      {/* 🔥 GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {project.gallery.slice(1).map((img, i) => (
          <motion.img
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            src={img}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};