"use client";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import React from "react";

type FormChild = React.ReactElement<{
  children: React.ReactNode | React.ReactNode[];
}>;

const FormRow = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="w-full flex">{children}</div>;
};

const FormCol = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="grow">{children}</div>;
};

const Form = ({
  action,
  children,
  className,
}: {
  action: (payload: FormData) => void;
  children: FormChild | FormChild[];
  className?: string;
}) => {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
};

const FormWithLogging = withLogger(Form);
const FormRowWithLogging = withLogger(FormRow);
const FormColWithLogging = withLogger(FormCol);

export {
  FormWithLogging as Form,
  FormRowWithLogging as FormRow,
  FormColWithLogging as FormCol,
};
