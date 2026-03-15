import React from "react";
import { motion } from "framer-motion";

export const ProjectCard = ({ project }) => {
  return (
    <div className="group cursor-pointer bg-white   ">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          className="w-full h-[520px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            View
          </motion.div>
        </div>
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-gray-900">
          {project.title}
        </h3>

        <p className="text-gray-500 mt-1  font-semibold">{project.category}</p>
      </div>
    </div>
  );
};
