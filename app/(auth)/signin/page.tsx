"use client";

import React from "react";

import Illustration from "@/components/auth/illustration";
import SigninForm from "@/components/auth/signinForm";

export default function Component() {
  return (
    <div className="relative flex h-screen w-screen">
      {/* Login Form */}
      <SigninForm />

      {/* Right side */}
      <Illustration />
    </div>
  );
}
