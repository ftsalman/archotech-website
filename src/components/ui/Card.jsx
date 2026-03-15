import React from "react";
import { cn } from "../../utils/utils";

export const Card = ({
  className = "",
  onClick = () => {},
  children,
  ...rest
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg shadow-lg  border border-gray-200  duration-300 hover:shadow-lg  focus:shadow-lg focus:shadow-gray-200 cursor-pointer bg-white",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
