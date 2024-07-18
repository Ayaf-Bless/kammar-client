import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useMeQuery } from "@/services/auth/auth.services";
import { WithChildren } from "@/types";

const GuestRoute = ({ children }: WithChildren) => {
  const router = useRouter();
  const { data, isLoading } = useMeQuery();

  useEffect(() => {
    if (!isLoading && data) {
      router.push("/");
    }
  }, [isLoading, data, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return !data ? children : null;
};

export default GuestRoute;
