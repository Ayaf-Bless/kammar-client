"use client";
import { StepProvider } from "@/contexts/seller/StepContext";
import { WithChildren } from "@/types";

function Layout({ children }: WithChildren) {
  return (
    // <ProtectedRoute>
    <StepProvider>
      <section className="">{children}</section>
    </StepProvider>
    //</ProtectedRoute>
  );
}

export default Layout;
