"use client";

import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Input from "@/components/Form/components/Input/Input";

const Text = ({ name, label, error }) => {
  return (
    <Input name={name} label={label} error={error}>
      <input type="text" id={name} name={name} />
    </Input>
  );
};

export default withLogger(Text);
