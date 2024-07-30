"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useValidateToken } from "../hooks/useValidateToken";

import { WithChildren } from "@/types";

const ProtectedRoute = ({ children }: WithChildren) => {
  const router = useRouter();
  const { isValid, isLoading } = useValidateToken();

  useEffect(() => {
    if (!isLoading && isValid === false) {
      router.push("/signin");
    }
  }, [isLoading, isValid, router]);

  if (isLoading || isValid === null) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
