"use client";

import ProtectedRoute from "@/libs/hoc/ProtectedRoute";
import { WithChildren } from "@/types";

function AuthLayout({ children }: WithChildren) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-20 max-w-[90%] ml-20 mt-5 overflow-x-hidden">
        <section className="w-screen h-screen p-2 flex items-start">
          {children}
        </section>
      </div>
    </ProtectedRoute>
  );
}

export default AuthLayout;
