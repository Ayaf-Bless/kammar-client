"use client";

import { WithChildren } from "@/types";

function AuthLayout({ children }: WithChildren) {
  return (
    <section className="w-screen h-screen p-2 flex items-start justify-center">
      {children}
    </section>
  );
}

export default AuthLayout;
