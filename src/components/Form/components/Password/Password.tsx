"use client";

import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Input from "@/components/Form/components/Input/Input";

const Password = ({ name, label, error }) => {
  return (
    <Input name={name} label={label} error={error}>
      <input type="password" name={name} />
    </Input>
  );
};

export default withLogger(Password);
