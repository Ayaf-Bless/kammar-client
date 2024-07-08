"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthUser } from "../hooks/useAuthUser";

import { WithChildren } from "@/types";

const ProtectedRoute = ({ children }: WithChildren) => {
  const router = useRouter();
  const { data, error, isLoading } = useAuthUser();

  useEffect(() => {
    if (!isLoading && !data && error) {
      router.push("/signin");
    }
  }, [isLoading, data, error, router]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
