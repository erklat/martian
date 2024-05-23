"use client";

import { IInputWrapperProps } from "@/types/input";

const Input: React.FC<IInputWrapperProps> = ({
  children,
  name,
  label,
  error,
  focused,
}) => {
  return (
    <div
      className={`
        block
        relative
        text-black
      `}
    >
      {label && (
        <label
          htmlFor={name}
          className={`
            z-10
            leading-none
            transition-all
            text-white
          `}
        >
          {label}
        </label>
      )}
      <div className="mt-3 h-full w-full z-0 relative [&>*]:p-3">
        {children}
      </div>
      {typeof error === "object" && "message" in error && (
        <span>{error.message}</span>
      )}
    </div>
  );
};

export default Input;
