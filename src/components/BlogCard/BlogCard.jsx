// components/BlogCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 bg-white"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[520px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-12 flex flex-col justify-between">

        <div>
          <p className="text-gray-500 text-sm mb-4">{blog.date}</p>

          <h2 className="text-3xl font-medium mb-4">
            {blog.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {blog.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-10">

          <p className="text-gray-700">
            {blog.readTime}
          </p>

          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
            <HiArrowRight size={20} />
          </div>

        </div>

      </div>
    </motion.div>
  );
};