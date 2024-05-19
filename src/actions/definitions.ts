import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  // name: Yup.string().min(2, "Name must be at least 2 characters long.").trim(),
  email: Yup.string()
    .required("This field is required.")
    .email("Please enter a valid email.")
    .trim(),
  password: Yup.string()
    .min(8, "Be at least 8 characters long")
    .matches(/[a-zA-Z]/, "Contain at least one letter.")
    .matches(/[0-9]/, "Contain at least one number.")
    .matches(/[^a-zA-Z0-9]/, "Contain at least one special character.")
    .trim(),
});

export type FormState =
  | {
      errors?: {
        // name?: string[];
        email: string[];
        password: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  email: string;
};
