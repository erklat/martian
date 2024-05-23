"use server";
import { redirect } from "next/navigation";
import { ValidationError } from "yup";

import { LoginFormSchema } from "@/actions/definitions";
import { createSession, deleteSession } from "./session";

export async function login(prevState: any, formData: FormData) {
  const validatedFields = async (formData: FormData) => {
    try {
      const { email, password } = await LoginFormSchema.validate(
        {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        },
        { abortEarly: false }
      );

      return {
        success: true,
        email,
        password,
        errors: [],
      };
    } catch (error) {
      const validationError = error as ValidationError;
      return {
        success: false,
        errors: validationError.inner.map((err: any) => ({
          field: err.path,
          message: err.message,
        })),
      };
    }
  };

  const validationResult = await validatedFields(formData);

  const { email, password, errors } = validationResult;

  if (!!errors?.length) {
    return {
      errors,
    };
  }

  if (email === "martian@martian.test" && password === "martian123!") {
    await createSession({ email });

    redirect("/app");
  }
}

export async function logout() {
  deleteSession();
  redirect("/");
}
