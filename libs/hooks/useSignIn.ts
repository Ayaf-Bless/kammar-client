import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { setCookies } from "../general/cookies";
import { apiRequest } from "../api-query/api-server-request";
import { AppRequestResponse } from "@/interface/RequestResponse";

const PASSWORD_MIN_LENGTH = 8;

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(PASSWORD_MIN_LENGTH, {
    message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  }),
  remember: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignInFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiRequest<
        AppRequestResponse<{
          accessToken: string;
          refreshToken: string;
        }>
      >(`http://localhost:3000/v1/gateway/auth/sign-in`, "POST", data);

      // if (response.ok && response.data) {
      //   setCookies(
      //     response.data.accessToken,
      //     response.data.refreshToken,
      //     data.remember,
      //   );
      // }
      // Handle successful sign-in (e.g., redirect to a protected page)
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, loading, error };
};
