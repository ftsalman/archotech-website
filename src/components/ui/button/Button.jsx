import React, { forwardRef } from "react";
import { buttonVariants } from "./buttonVariants";
import { cn } from "../../../utils/utils";

const Button = forwardRef(
  (
    { size, variant, className, children, onClick, isLoading = false, ...otherProps },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ size, variant, className }))}
        onClick={(e) => onClick?.(e)}
        type="button"
        disabled={isLoading}
        {...otherProps}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
