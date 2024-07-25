"use client";

import Illustration from "@/components/auth/illustration";
import SignUpForm from "@/components/auth/signupForm";

function Signup() {
  return (
    <div className="relative flex h-screen w-screen">
      {/* Login Form */}
      <SignUpForm />

      {/* Right side */}
      <Illustration />
    </div>
  );
}

export default Signup;
