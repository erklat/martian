"use client";
import { useState } from "react";

import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Input from "@/components/Form/components/Input/Input";

import { IInputProps } from "@/types/input";

const Password: React.FC<IInputProps> = ({ name, label, error }) => {
  const [focused, isFocused] = useState(false);

  const onFocus = () => isFocused(true);
  const onBlur = () => isFocused(false);

  return (
    <Input name={name} label={label} error={error} focused={focused}>
      <input
        type="password"
        name={name}
        className="h-full w-full"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Input>
  );
};

export default withLogger(Password);
