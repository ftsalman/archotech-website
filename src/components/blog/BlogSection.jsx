import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/button/Button";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import { IconArrowLeftAlt, IconArrowRightAlt } from "../../assets/icons/interfaceIcons2";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b21e2f8c8e53bbed046c_0011-p-2000.webp",
    date: "November 20, 2024",
    title: "Uncover the cutting-edge substances revolutionizing",
    read: "5 min to read",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b2995ed7074873d575a3_0041-p-2000.webp",
    date: "December 5, 2024",
    title: "Discover how integrating nature into cityscapes is",
    read: "9 min to read",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/676011e38753f7d22eefbfdf/6874b2745001139fbf8e5b4b_0031-p-2000.webp",
    date: "July 30, 2024",
    title: "Explore how pre-fabricated units are revolutionizing",
    read: "5 min to read",
  },
];

export const BlogSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      gsap.from(".blog-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardEnter = (event) => {
    gsap.to(event.currentTarget, {
      y: -10,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (event) => {
    gsap.to(event.currentTarget, {
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-[#f6f6f6] flex justify-center"
    >
      <div className="max-w-[1400px] w-full px-6">
        <div ref={titleRef} className="mb-14 flex items-center justify-between">
          <h2 className="text-6xl font-semibold tracking-tight">
            ProForma blog insights
          </h2>
        </div>

        <List
          data={blogs}
          uniqueKey="id"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          render={(blog) => (
            <div
              className="blog-card h-full"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              <Card className="h-full rounded-none bg-white overflow-hidden shadow-md hover:shadow-xl transition group p-0 flex flex-col">
                <div className="overflow-hidden h-[300px] w-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-500 text-base mb-3">{blog.date}</p>

                  <h3 className="text-2xl font-medium leading-tight mb-6 flex-grow">
                    {blog.title}
                  </h3>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-500 text-base">{blog.read}</span>

                    <Button className="w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 group-hover:text-white transition-colors cursor-pointer">
                      <IconArrowRightAlt/>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        />
      </div>
    </section>
  );
};
