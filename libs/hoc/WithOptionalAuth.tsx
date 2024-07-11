"use client";

import { useValidateToken } from "../hooks/useValidateToken";

import { WithChildren } from "@/types";

const WithOptionalAuth = ({ children }: WithChildren) => {
  const { isLoading } = useValidateToken();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default WithOptionalAuth;
