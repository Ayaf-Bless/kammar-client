import { useEffect, useState } from "react";

import { getAccessToken } from "../general/token";

import { useMeQuery } from "@/services/auth/auth.services";
import {
  addAuthUser,
  clearAuthUser,
} from "@/services/auth/reducers/auth.reducers";
import { useAppDispatch } from "@/store/store";
import { IUser } from "@/interface/auth/auth.interface";

export const useValidateToken = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const accessToken = getAccessToken();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useMeQuery(accessToken as string, {
    skip: !accessToken,
  });

  useEffect(() => {
    if (data && data.data) {
      dispatch(addAuthUser({ authInfo: data.data as IUser }));
      console.log("dispatch");

      setIsValid(true);
    } else if (!isLoading && (error || !data)) {
      setIsValid(false);
      dispatch(clearAuthUser());
    }
  }, [data, error, isLoading, dispatch]);

  return { isValid, isLoading, data, error };
};
