"use client";

import withLogger from "@/components/WithNameLogging/WithNameLogging";

const Button = ({ btnText, submit, onClick }) => {
  return (
    <button type={submit ? "submit" : "button"} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default withLogger(Button);
