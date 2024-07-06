"use server";

import { z } from "zod";

import { AppResponse } from "@/interface/RequestResponse";
import { apiRequest } from "@/libs/api-query/api-server-request";
import { setCookies } from "@/libs/general/cookies";
import { BACK_END_BASE_URL } from "@/utils/constants";

const PASSWORD_MIN_LENGTH = 8;

export async function signInAction(prevState: any, formData: FormData) {
  const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(PASSWORD_MIN_LENGTH, {
      message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
    }),
  });

  const validated = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return {
      ok: false,
      errors: validated.error.flatten().fieldErrors,
      message: "There was an error with the provided data",
    };
  }

  try {
    const response = await apiRequest<
      AppResponse<{
        accessToken: string;
        refreshToken: string;
      }>
    >(`${BACK_END_BASE_URL}/auth/sign-in`, "POST", validated.data);

    if (response.ok) {
      setCookies("accessToken", response.data?.accessToken);
      setCookies("refreshToken", response.data?.refreshToken);
    }
  } catch (error: any) {
    return {
      ok: false,
      //   errors: validated.error.flatten().fieldErrors,
      message: error.response.data.message,
    };
  }
}
