"use client";
import { MouseEventHandler } from "react";
import withLogger from "@/components/WithNameLogging/WithNameLogging";

const Button = ({
  children,
  submit,
  onClick,
  className,
  unstyled,
}: {
  children: string | React.ReactNode;
  submit?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  unstyled?: boolean;
}) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={`${
        unstyled ? `` : `w-24 py-2 text-center text-black bg-white rounded-md`
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default withLogger(Button);
