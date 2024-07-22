"use client";

import Navbar from "@/components/general/navbar";
import Wrapper from "@/components/general/wrapper";
import WithOptionalAuth from "@/libs/hoc/WithOptionalAuth";
import { WithChildren } from "@/types";

function GigLayout({ children }: WithChildren) {
  return (
    <WithOptionalAuth>
      <Navbar />
      <Wrapper>
        <section>{children}</section>
      </Wrapper>
    </WithOptionalAuth>
  );
}

export default GigLayout;
