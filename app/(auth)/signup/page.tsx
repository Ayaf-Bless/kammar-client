"use client";

import Illustration from "@/components/auth/Illustration";
import SignUpForm from "@/components/auth/SignupForm";

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
