import { useEffect } from "react";

import { getAccessToken } from "../general/token";

import { useMeQuery } from "@/services/auth/auth.services";
import { addAuthUser } from "@/services/auth/reducers/auth.reducers";
import { IUser } from "@/interface/auth/auth.interface";
import { useAppDispatch } from "@/store/store";

export const useAuthUser = () => {
  const accessToken = getAccessToken();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useMeQuery(accessToken as string, {
    skip: !accessToken,
  });

  useEffect(() => {
    if (data && data.data) {
      dispatch(addAuthUser({ authInfo: data.data as IUser }));
    }
  }, [data, dispatch]);

  return { data, error, isLoading };
};
