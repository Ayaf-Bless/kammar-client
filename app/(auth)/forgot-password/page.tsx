"use client";

import React from "react";

import Illustration from "@/components/auth/illustration";
import ForgetPasswordForm from "@/components/auth/forgetPasswordForm";

export default function Component() {
  return (
    <div className="relative flex h-screen w-screen">
      {/* Login Form */}
      <ForgetPasswordForm />

      {/* Right side */}
      <Illustration />
    </div>
  );
}
