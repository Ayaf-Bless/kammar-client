"use client";
import { useParams } from "next/navigation";

import Illustration from "@/components/auth/illustration";
import ResetPasswordForm from "@/components/auth/resetPassword";

function ResetPassword() {
  const { token } = useParams();

  return (
    <div className="relative flex h-screen w-screen">
      {/* Login Form */}
      <ResetPasswordForm token={token as string} />

      {/* Right side */}
      <Illustration />
    </div>
  );
}

export default ResetPassword;
