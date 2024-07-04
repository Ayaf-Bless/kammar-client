"use client";

import { Button, Input, Link, Divider, Checkbox } from "@nextui-org/react";
import NextLink from "next/link";
import { Icon } from "@iconify/react";

import Logo from "@/components/logo/Logo";
import usePasswordVisibility from "@/libs/hooks/usePasswordVisibility";

function SigninForm() {
  const { isVisible, toggleVisibility } = usePasswordVisibility();

  return (
    <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
        <div className="w-full text-left">
          <div className="mb-3">
            <Logo hasHref />
          </div>
          <p className="pb-2 text-xl font-medium">Welcome Back</p>
          <p className="text-small text-default-500">
            Log in to your account to continue
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            radius="none"
            required={true}
            type="email"
            variant="bordered"
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
            name="password"
            placeholder="Enter your password"
            radius="none"
            required={true}
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex items-center justify-between px-1 py-2">
            <Checkbox name="remember" radius="none" size="sm">
              Remember for 15 days
            </Checkbox>
            <Link as={NextLink} className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          <Button color="primary" radius="none" type="submit">
            Log In
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
