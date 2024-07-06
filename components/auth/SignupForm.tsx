"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Checkbox, Divider, Input, Link } from "@nextui-org/react";
import NextLink from "next/link";

import Logo from "../logo/Logo";

import usePasswordVisibility from "@/libs/hooks/usePasswordVisibility";

function SignUpForm() {
  const { isVisible, toggleVisibility } = usePasswordVisibility();

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
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            isRequired
            required
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            radius="none"
            type="email"
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
            name="password"
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
            name="confirmPassword"
            placeholder="Confirm your password"
            radius="none"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Checkbox
            isRequired
            required
            className="py-4"
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
          <Button color="primary" radius="none" type="submit">
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
          <Link as={NextLink} href="signin" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
