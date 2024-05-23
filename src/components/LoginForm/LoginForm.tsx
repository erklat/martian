"use client";
import { useFormState } from "react-dom";

import withLogger from "@/components/WithNameLogging/WithNameLogging";
import { Form, FormRow, FormCol } from "@/components/Form/Form";
import Text from "@/components/Form/components/Text/Text";
import Password from "@/components/Form/components/Password/Password";
import Button from "@/components/Button/Button";

import { login as loginAction } from "@/actions/auth";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, undefined);
  const { errors = [] } = { ...state };

  const getError = (fieldName: string) =>
    errors.find((error: { field: string }) => error.field === fieldName) ?? "";

  return (
    <div
      className={`
        flex
        flex-col
        h-full
        justify-center
        items-center
      `}
    >
      <Form
        action={formAction}
        className={`
          flex
          flex-wrap
          gap-4
        `}
      >
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
          <Button submit className="mt-2">
            Login
          </Button>
        </FormRow>
      </Form>
    </div>
  );
};

export default withLogger(LoginForm);
