"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthUser } from "../hooks/useAuthUser";

import { WithChildren } from "@/types";

interface RoleProtectedRouteProps extends WithChildren {
  requiredRole: string;
}

const RoleProtectedRoute = ({
  children,
  requiredRole,
}: RoleProtectedRouteProps) => {
  const router = useRouter();
  const { data, error, isLoading } = useAuthUser();

  useEffect(() => {
    if (!isLoading && (!data || error || !data.data?.role === requiredRole)) {
      router.push("/signin");
    }
  }, [isLoading, data, error, router, requiredRole]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return children;
};

export default RoleProtectedRoute;
