"use client";

import Navbar from "@/components/navbar";
import GuestRoute from "@/libs/hoc/GuestRoute";
import { WithChildren } from "@/types";

function AuthLayout({ children }: WithChildren) {
  return (
    <GuestRoute>
      <Navbar />
      <section className="w-screen h-screen p-2 flex items-start justify-center">
        {children}
      </section>
    </GuestRoute>
  );
}

export default AuthLayout;
