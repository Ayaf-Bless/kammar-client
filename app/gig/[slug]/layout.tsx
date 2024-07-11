"use client";

import Navbar from "@/components/general/navbar";
import WithOptionalAuth from "@/libs/hoc/WithOptionalAuth";
import { WithChildren } from "@/types";

function GigLayout({ children }: WithChildren) {
  return (
    <WithOptionalAuth>
      <Navbar />
      <section className="">{children}</section>
    </WithOptionalAuth>
  );
}

export default GigLayout;
