import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { ProjectCard } from "../components/projectsCard/ProjectCard";
import Button from "../components/ui/button/Button";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The Green Bridge Urban",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "The Art District",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 3,
    title: "Modern Interior",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  {
    id: 4,
    title: "Concrete Architecture",
    category: "Architecture",
    image: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/686ced1bbe8ddaf6d65d5b29_013-p-2000.webp",
  },
];

export const ProjectsPage = () => {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Architecture",
    "Interior",
    // "Decoration",
    "Exterior",
  ];

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageContainer>
      <div className="max-w-400 mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-16 flex-wrap gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light"
          >
            Projects
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActive(cat)}
                className={`
        px-6 py-3 text-sm font-medium rounded-md transition-all duration-300
        ${
          active === cat
            ? "bg-white text-gray-900 border border-gray-300 shadow-sm"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        }
      `}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
          className="space-y-16"
        >
          {filtered
            .reduce((rows, _, index) => {
              if (index % 2 === 0) {
                rows.push(filtered.slice(index, index + 2));
              }
              return rows;
            }, [])
            .map((row, rowIndex) => {
              const reverse = rowIndex % 2 !== 0;

              return (
                <motion.div
                  key={rowIndex}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                  }}
                  className={`grid md:grid-cols-[1.7fr_1fr] gap-10 ${
                    reverse ? "md:grid-cols-[1fr_1.3fr]" : ""
                  }`}
                >
                  {row.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </PageContainer>
  );
};
