"use client";

import { Button, Input, Link, Divider } from "@nextui-org/react";
import NextLink from "next/link";
import { Icon } from "@iconify/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForgotPasswordMutation } from "@/services/auth/auth.services";
import { useToast } from "@/contexts/ToastContext";

const forgetPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>;

function ForgetPasswordForm() {
  const [forgetPassword, { isLoading }] = useForgotPasswordMutation();

  const { addToast } = useToast();

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: ForgetPasswordFormData) => {
    setError(null);

    try {
      await forgetPassword({
        email: data.email,
      }).unwrap();

      addToast(
        "success",
        "Password reset email sent",
        "We have sent a password reset link to your email address. Please check your inbox to reset your password.",
      );
    } catch (err) {
      addToast(
        "error",
        "Something went wrong",
        "Invalid credentials. Please try again.",
      );
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  return (
    <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
        <div className="w-full text-left">
          <p className="pb-2 text-xl font-medium">Recover password</p>
          <p className="text-small text-default-500">
            Enter your email address and we will send you a link to reset your
            password
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            label="Email Address"
            placeholder="Enter your email"
            radius="sm"
            required={true}
            type="email"
            variant="bordered"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={errors.email ? true : false}
          />

          <Button
            color="primary"
            isLoading={isLoading}
            radius="sm"
            type="submit"
          >
            Reset password
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
