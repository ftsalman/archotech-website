import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { List } from "../ui/List";
import { IconMinimaze, IconPlus } from "../../assets/icons/interfaceIcons2";

export const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Can you cancel a project at any time?",
      answer:
        "Yes, you can cancel your project anytime. Please contact our support team for assistance.",
    },
    {
      id: 2,
      question: "How often do we work without prepayment?",
      answer:
        "We usually require prepayment, but special agreements can be discussed with our team.",
    },
    {
      id: 3,
      question: "How to contact technical support?",
      answer:
        "You can contact our support team via email or through the contact form on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-gray-200 py-16 lg:py-24 w-full">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-6 md:px-16 lg:px-32 mb-16"
      >
        Frequently asked questions
      </motion.h2>

      {/* FAQ List */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="flex flex-col w-full border-t border-gray-300"
      >
        <List
          data={faqData}
          uniqueKey="id"
          className="flex flex-col w-full"
          render={(item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group border-b border-gray-300 hover:bg-white transition-all"
            >
              
              {/* Question Row */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-6 md:py-8 lg:py-10 cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium pr-6 max-w-[900px]">
                  {item.question}
                </h3>

                {/* Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white transition-all"
                >
                  {openIndex === index ? (
                    <IconMinimaze size="24" />
                  ) : (
                    <IconPlus size="24" />
                  )}
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden px-6 md:px-16 lg:px-32"
                  >
                    <p className="text-gray-600 text-sm md:text-xl max-w-2xl pb-6 md:pb-8 lg:pb-10">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        />
      </motion.div>
    </section>
  );
};