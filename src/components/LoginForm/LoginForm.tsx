"use client";
import { useFormStatus, useFormState } from "react-dom";

import withLogger from "@/components/WithNameLogging/WithNameLogging";
import { Form, FormRow, FormCol } from "@/components/Form/Form";
import Text from "@/components/Form/components/Text/Text";
import Password from "@/components/Form/components/Password/Password";
import Button from "@/components/Button/Button";

import { login as loginAction } from "@/actions/auth";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, undefined);
  const { errors = [] } = { ...state };

  const getError = (fieldName) =>
    errors.find((error) => error.field === fieldName) ?? "";

  console.log(state);

  return (
    <Form action={formAction}>
      <FormRow>
        <FormCol>
          <Text name="email" label="Email" error={getError("email")} />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol>
          <Password
            name="password"
            label="Password"
            error={getError("password")}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <Button btnText="Login" onClick={() => {}} submit />
      </FormRow>
    </Form>
  );
};

export default withLogger(LoginForm);
