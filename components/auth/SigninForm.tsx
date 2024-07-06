"use client";

import { Button, Input, Link, Divider } from "@nextui-org/react";
import NextLink from "next/link";
import { Icon } from "@iconify/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Cookies from "js-cookie";

import usePasswordVisibility from "@/libs/hooks/usePasswordVisibility";
import { PASSWORD_MIN_LENGTH } from "@/utils/constants";
import { useSignInMutation } from "@/services/auth.services";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(PASSWORD_MIN_LENGTH, {
    message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  }),
  remember: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

function SigninForm() {
  const [signIn, { isLoading }] = useSignInMutation();
  const { isVisible, toggleVisibility } = usePasswordVisibility();

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignInFormData) => {
    setError(null);

    try {
      const result = await signIn({
        email: data.email,
        password: data.password,
      }).unwrap();

      Cookies.set("accessToken", result.data?.accessToken as string);
      Cookies.set("refreshToken", result.data?.refreshToken as string);

      // redirect("/");
      // const response = useSignInMutation({})
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
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
        <div className="w-full text-left">
          <p className="pb-2 text-xl font-medium">Welcome Back</p>
          <p className="text-small text-default-500">
            Log in to your account to continue
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
            radius="none"
            required={true}
            type="email"
            variant="bordered"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={errors.email ? true : false}
          />
          <Input
            isRequired
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
            placeholder="Enter your password"
            radius="none"
            required={true}
            type={isVisible ? "text" : "password"}
            variant="bordered"
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={errors.password ? true : false}
          />
          <div className="flex items-end justify-end px-1 py-2">
            <Link as={NextLink} className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          <Button
            color="primary"
            isLoading={isLoading}
            radius="none"
            type="submit"
          >
            Log In
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        <div className="flex w-full items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <Button
            radius="none"
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            Continue with Google
          </Button>
        </div>

        <p className="text-center text-small">
          Need to create an account?&nbsp;
          <Link as={NextLink} href="signup" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SigninForm;
