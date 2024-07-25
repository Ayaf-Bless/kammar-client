"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import usePasswordVisibility from "@/libs/hooks/usePasswordVisibility";
import { PASSWORD_MIN_LENGTH } from "@/utils/constants";
import { useResetPasswordMutation } from "@/services/auth/auth.services";
import { useToast } from "@/contexts/ToastContext";

interface Prop {
  token: string;
}

const resetPasswordSchema = z.object({
  password: z.string().min(PASSWORD_MIN_LENGTH, {
    message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  }),
  confirmPassword: z.string().min(PASSWORD_MIN_LENGTH, {
    message: `Confrm password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  }),
});

type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

function ResetPasswordForm({ token }: Prop) {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const router = useRouter();
  const { addToast } = useToast();

  const { isVisible, toggleVisibility } = usePasswordVisibility();

  const onSubmit = async (data: ResetPasswordData) => {
    try {
      await resetPassword({
        confirmPassword: data.confirmPassword,
        newPassword: data.password,
        resetToken: token,
      });

      addToast(
        "success",
        "Your password was reset successfully",
        "You can now use your new passwprd to login",
      );

      router.replace("/signin");
    } catch (err: any) {
      addToast("error", "Something went wrong", err.data.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  return (
    <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
        <div className="w-full text-left">
          <p className="pb-2 text-xl font-medium">Create Account</p>
          <p className="text-small text-default-500">
            Sign up for a new account to get started
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            required
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Password"
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={errors.password ? true : false}
            placeholder="Create a password"
            radius="sm"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Input
            isRequired
            required
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Confirm Password"
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message}
            isInvalid={errors.confirmPassword ? true : false}
            placeholder="Confirm your password"
            radius="sm"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Button
            color="primary"
            isLoading={isLoading}
            radius="sm"
            type="submit"
          >
            save
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
