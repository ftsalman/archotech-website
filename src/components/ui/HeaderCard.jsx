import React from "react";
import { CardContainer } from "./CardContainer";
import { cn } from "../../utils/utils";

export const HeaderCard = ({ children, className, header = "", italic = false }) => {
  return (
    <CardContainer
      className={cn(
        "flex items-center justify-center text-white font-extrabold bg-[#2B1700] py-10 rounded-xl text-center px-4 sm:px-8 md:px-16",
        className
      )}
    >
      <h3
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
          italic && "italic"
        )}
      >
        {header}
      </h3>

      {/* Optional children slot */}
      {children && <div className="mt-4">{children}</div>}
    </CardContainer>
  );
};
