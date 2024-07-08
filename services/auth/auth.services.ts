import {
  IAuthToken,
  ISignInPayload,
  ISignUpPayload,
  IUser,
} from "@/interface/auth/auth.interface";
import { AppResponse } from "@/interface/RequestResponse";
import { api } from "@/store/api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AppResponse<IAuthToken>, ISignUpPayload>({
      query(body: ISignUpPayload) {
        return {
          url: "auth/sign-up",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    signIn: build.mutation<AppResponse<IAuthToken>, ISignInPayload>({
      query(body: ISignInPayload) {
        return {
          url: "auth/sign-in",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    me: build.query<AppResponse<IUser>, string>({
      query(token: string) {
        return {
          url: "auth/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Auth"],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useMeQuery } = authApi;
