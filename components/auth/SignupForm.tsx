"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Checkbox, Divider, Input, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import usePasswordVisibility from "@/libs/hooks/usePasswordVisibility";
import { PASSWORD_MIN_LENGTH } from "@/utils/constants";
import { useSignUpMutation } from "@/services/auth/auth.services";

const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z
    .string()
    .min(5, { message: "Username should have at least 5 characters" }),
  password: z.string().min(PASSWORD_MIN_LENGTH, {
    message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  }),
  confirmPassword: z.string().min(PASSWORD_MIN_LENGTH, {
    message: `Confrm password must be at least ${PASSWORD_MIN_LENGTH} characters`,
  }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to terms and conditions",
  }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

function SignUpForm() {
  const [signUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();

  const { isVisible, toggleVisibility } = usePasswordVisibility();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUp({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        username: data.username,
      }).unwrap();
      const token = result.data as string;

      Cookies.set("onboardingToken", token, { expires: 14 });

      router.push(`/onboarding-user/${token}`);
    } catch (err) {
      // setError("Invalid credentials. Please try again.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
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
            label="Email Address"
            placeholder="Enter your email"
            radius="none"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={errors.email ? true : false}
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            required
            label="Username"
            placeholder="Enter your username"
            radius="none"
            {...register("username")}
            errorMessage={errors.username?.message}
            isInvalid={errors.username ? true : false}
            type="text"
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
            label="Password"
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={errors.password ? true : false}
            placeholder="Create a password"
            radius="none"
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
            radius="none"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Checkbox
            isRequired
            required
            className="py-4"
            {...register("agreeToTerms")}
            isInvalid={errors.agreeToTerms ? true : false}
            radius="none"
            size="sm"
          >
            I agree with the&nbsp;
            <Link href="#" size="sm">
              Terms
            </Link>
            &nbsp; and&nbsp;
            <Link href="#" size="sm">
              Privacy Policy
            </Link>
          </Checkbox>
          <Button
            color="primary"
            isLoading={isLoading}
            radius="none"
            type="submit"
          >
            Sign Up
          </Button>
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
            Sign Up with Google
          </Button>
        </div>

        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link as={NextLink} color="primary" href="signin" size="sm">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
