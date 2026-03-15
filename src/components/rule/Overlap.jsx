import React from "react";

export const Overlap = ({  image,
  title,
  subtitle,
  description,
  zIndex = 10,}) => {
  return (
     <section
      className={`sticky top-0 h-screen w-full flex flex-col md:flex-row z-[${zIndex}]`}
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-[#365c6c] text-white flex items-center">
        <div className="max-w-xl px-12 md:px-20">

          <h2 className="text-5xl md:text-7xl font-light mb-8">
            {title}
          </h2>

          <p className="text-lg mb-4 text-white/90">
            {subtitle}
          </p>

          <p className="text-white/80">
            {description}
          </p>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
