import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { ProjectCard } from "../components/projectsCard/ProjectCard";
import Button from "../components/ui/button/Button";

export const projects = [
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
      <div className="max-w-[100rem] mx-auto  py-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-16 flex-wrap gap-6">
          <h1 className="text-7xl font-light">Projects</h1>

          <div className="flex gap-4 flex-wrap">
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
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
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
                <div
                  key={rowIndex}
                  className={`grid md:grid-cols-[1.7fr_1fr] gap-10 ${
                    reverse ? "md:grid-cols-[1fr_1.3fr]" : ""
                  }`}
                >
                  {row.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </PageContainer>
  );
};
