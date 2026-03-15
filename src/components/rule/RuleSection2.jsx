import React from "react";

export const RuleSection2 = () => {
  return (
     <section className="h-screen relative z-20 flex">

      {/* LEFT */}
      <div className="w-1/2 bg-red-700 text-white flex items-center px-16">
        <div>
          <h2 className="text-6xl font-light leading-tight mb-10">
            Personalized <br /> solutions for every home
          </h2>

          <p className="text-lg">
            Understanding that each home is unique
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2">
        <img
          src="https://cdn.prod.website-files.com/67409478e7d06cee556594cb/686779bd54c1bb3b8dafa9d1_slide2.webp"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};
