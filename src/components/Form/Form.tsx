"use client";
import withLogger from "@/components/WithNameLogging/WithNameLogging";

const FormRow = ({ children }) => {
  return <div>{children}</div>;
};

const FormCol = ({ children }) => {
  return <div>{children}</div>;
};

const Form = ({ action, children }) => {
  return <form action={action}>{children}</form>;
};

const FormWithLogging = withLogger(Form);
const FormRowWithLogging = withLogger(FormRow);
const FormColWithLogging = withLogger(FormCol);

export {
  FormWithLogging as Form,
  FormRowWithLogging as FormRow,
  FormColWithLogging as FormCol,
};
