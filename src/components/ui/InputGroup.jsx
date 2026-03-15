import React from "react";
import { IconInfo } from "../../assets/icons/InterfaceIcons";
import { InputBox } from "./input-box/InputBox";
import { cn } from "../../utils/utils";

export const InputGroup = ({
  groupId = "",
  label,
  labelRequired,
  errorMessage = "",
  inputClassName,
  labelClassName,
  // value,
  name,
  id,
  // onChange,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn("relative flex flex-col gap-1.5", className)}
      id={groupId}
    >
      {/* Label ------------------------ */}

      {label && (
        <label
          htmlFor={name}
          className={cn("font-medium text-sm text-gray-800", labelClassName)}
        >
          {label}
          {labelRequired && <span className="text-red-400"> *</span>}
        </label>
      )}

      {/* Input Box ------------------------ */}

      {children ? (
        children
      ) : (
        <>
          <InputBox
            type="text"
            id={id}
            name={name}
            className={inputClassName}
            variant={errorMessage ? "error" : "secondary"}
            {...rest}
          />

          {/* <input
            type="text"
            id={id}
            name={name}
            // value={value}
            // onChange={(e) => onChange?.(e)}
            className={cn(
              `h-11 w-full p-4 border rounded-md outline-none placeholder:text-sm text-sm text-gray-800 disabled:cursor-not-allowed disabled:bg-gray-100 ${
                errorMessage == ""
                  ? "border-gray-200 focus:shadow-input-box-shadow"
                  : "border-red-400 focus:shadow-red-200"
              } placeholder:text-gray-400 transition-colors duration-300`,
              inputClassName
            )}
            {...rest}
          /> */}
        </>
      )}

      {/* Error Message ------------------------ */}
      {errorMessage && (
        <small className="flex items-center gap-1 text-xs font-medium text-red-400">
          <>
            <IconInfo size="13" filled />
            {errorMessage}
          </>
        </small>
      )}
    </div>
  );
};
