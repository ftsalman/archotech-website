import React from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { BlogCard } from "../components/BlogCard/BlogCard";

const blogs = [
  {
    id: 1,
    title: "The Future of Architecture: Trends to Watch",
    date: "October 30, 2024",
    description:
      "Explore the pivotal shifts and exciting innovations shaping tomorrow's architecture.",
    readTime: "5 min to read",
    image: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b1f87d199e1c9937c4d7_0021.webp",
  },
  {
    id: 2,
    title: "Modern Architecture Inspiration",
    date: "October 25, 2024",
    description:
      "Explore the latest architectural inspirations from modern structures.",
    readTime: "4 min to read",
    image: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b21e2f8c8e53bbed046c_0011.webp",
  },
  {
    id: 3,
    title: "Interior Architecture Design",
    date: "October 20, 2024",
    description:
      "Understanding modern interior architecture concepts.",
    readTime: "6 min to read",
    image: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b2995ed7074873d575a3_0041.webp",
  },
  {
    id: 4,
    title: "Concrete Architecture Style",
    date: "October 15, 2024",
    description:
      "Concrete architecture continues to influence modern design.",
    readTime: "5 min to read",
    image: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b2995ed7074873d575a3_0041.webp",
  },
  {
    id: 5,
    title: "Future Urban Architecture",
    date: "October 10, 2024",
    description:
      "Exploring the future of urban architecture and sustainability.",
    readTime: "7 min to read",
    image: "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/68763f07a8769168f2894756_00111-p-2000.webp",
  },
];

export const BlogsPage = () => {
  return (
    <>
       <PageContainer>

      <div className="px-10 py-20">

        {/* Title */}
        <h1 className="text-7xl font-light mb-16">
          Blog
        </h1>

        {/* Blog Cards */}
        <div className="space-y-12">

          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}

        </div>

      </div>

    </PageContainer>
    </>
  );
};
