import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { ProjectCard } from "../components/projectsCard/ProjectCard";
import Button from "../components/ui/button/Button";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/data";

export const ProjectsPage = () => {
  const [active, setActive] = useState("All");

  // 🔥 Convert full data
  const projects = PROJECTS_DATA.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.service,
    image: item.heroImage,
  }));

  // 🔥 Dynamic categories
  const categories = ["All", ...new Set(PROJECTS_DATA.map((p) => p.service))];

  // 🔥 Filter
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* 🔹 Header */}
        <div className="flex justify-between items-center mb-16 flex-wrap gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-charcoal"
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
                className={`px-6 py-3 text-sm rounded-md transition ${
                  active === cat
                    ? "bg-charcoal text-milk"
                    : "bg-oat text-mocha hover:bg-taupe/40"
                }`}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* 🔹 Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
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
                    show: { opacity: 1, y: 0 },
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
