"use server";
import { redirect } from "next/navigation";

import { LoginFormSchema, FormState } from "@/actions/definitions";
import { createSession } from "./session";

export async function login(prevState, formData: FormData) {
  console.log(formData.getAll("email"));
  const validatedFields = async (formData) => {
    try {
      return await LoginFormSchema.validate(
        {
          // name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        },
        { abortEarly: false }
      );
    } catch (error) {
      return {
        success: false,
        errors: error.inner.map((err) => ({
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
