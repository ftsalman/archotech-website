import React from "react";
import { cn } from "../../../utils/utils";
import { inputboxVariants } from "./inputboxVariants";

export const InputBox = ({
  className = "",
  size = "md",
  variant = "secondary",
  ...props
}) => {
  return (
    <input
      type="text"
      className={cn(inputboxVariants({ size, variant, className }))}
      {...props}
    />
  );
};
