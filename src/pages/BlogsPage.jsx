import React from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { BlogCard } from "../components/BlogCard/BlogCard";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "The Future of Architecture: Trends to Watch",
    date: "October 30, 2024",
    description:
      "Explore the pivotal shifts and exciting innovations shaping tomorrow's architecture.",
    readTime: "5 min to read",
    image: "/imgs/1.jpeg",
  },
  {
    id: 2,
    title: "Modern Architecture Inspiration",
    date: "October 25, 2024",
    description:
      "Explore the latest architectural inspirations from modern structures.",
    readTime: "4 min to read",
    image: "/imgs/3.jpeg",
  },
  {
    id: 3,
    title: "Interior Architecture Design",
    date: "October 20, 2024",
    description: "Understanding modern interior architecture concepts.",
    readTime: "6 min to read",
    image: "/imgs/5.jpeg",
  },
  {
    id: 4,
    title: "Concrete Architecture Style",
    date: "October 15, 2024",
    description: "Concrete architecture continues to influence modern design.",
    readTime: "5 min to read",
    image: "/imgs/6.jpeg",
  },
  {
    id: 5,
    title: "Future Urban Architecture",
    date: "October 10, 2024",
    description:
      "Exploring the future of urban architecture and sustainability.",
    readTime: "7 min to read",
    image: "/imgs/7.jpeg",
  },
];

export const BlogsPage = () => {
  return (
    <>
      <PageContainer>
        <div className="px-6 md:px-10 py-20 md:py-32 max-w-7xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light mb-16"
          >
            Blog
          </motion.h1>

          {/* Blog Cards */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-12"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </>
  );
};
