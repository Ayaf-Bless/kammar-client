"use client";

import Wrapper from "@/components/general/wrapper";
import { StepProvider } from "@/contexts/seller/StepContext";
import ProtectedRoute from "@/libs/hoc/ProtectedRoute";
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
