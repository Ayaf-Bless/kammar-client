import {
  IAuthToken,
  ISignInPayload,
  ISignUpPayload,
} from "@/interface/auth/auth.interface";
import { AppResponse } from "@/interface/RequestResponse";
import { api } from "@/store/api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AppResponse<string>, ISignUpPayload>({
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
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
