import React from "react";
import { cn } from "../../utils/utils";

export const Header = ({
  header = "Section Title",
  subHeader = "",
  _image = "", // optional image (reserved for future use)
  className,
}) => {
  return (
    <div className={cn("text-center mb-10", className)}>
      {/* Sub header */}
      {subHeader && (
        <p className="text-sm text-red-500 font-semibold uppercase tracking-wide">
          {subHeader}
        </p>
      )}

      {/* Main header */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
        {header}
      </h2>

      {/* Red underline */}
      <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4"></div>
    </div>
  );
};
