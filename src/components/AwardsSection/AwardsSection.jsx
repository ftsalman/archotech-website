import React from "react";

const awards = [
  {
    title: "Business Excellence Award 2025",
    category: "Architecture Excellence",
    image: "/imgs/award1.png",
  },
  {
    title: "Best Performer Award 2024",
    category: "Construction Performance",
    image: "/imgs/award2.png",
  },
];

export const AwardsSection = () => {
  return (
    <section className="bg-white text-black">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 pt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Achievements & Awards
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          Recognized for excellence in architecture, construction, and
          innovative design solutions.
        </p>
      </div>

      {/* Awards Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-12">
        {awards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Image Card */}
            <div className="bg-black rounded-xl overflow-hidden shadow-md p-5 w-full">
              <div className="w-full h-[340px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-3">
              {/* Title */}
              <h3 className="text-xl font-semibold">{item.title}</h3>

              {/* Category */}
              <span className="inline-block text-xs text-gray-600 border border-gray-300 px-3 py-1 rounded-full">
                {item.category}
              </span>

              {/* Actions */}
              {/* <div className="flex justify-center gap-6 text-sm pt-2"> */}
              {/* <button className="underline hover:text-gray-500 transition"> */}
              {/* Open case */}
              {/* </button> */}
              {/* <button className="underline hover:text-gray-500 transition"> */}
              {/* More + */}
              {/* </button> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
