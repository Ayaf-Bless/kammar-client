import {
  IAuthToken,
  IOnboard,
  ISignInPayload,
  ISignUpPayload,
  IUser,
} from "@/interface/auth/auth.interface";
import { AppResponse } from "@/interface/RequestResponse";
import { api } from "@/store/api";

const PREFIX = "auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AppResponse<IAuthToken>, ISignUpPayload>({
      query(body: ISignUpPayload) {
        return {
          url: `${PREFIX}/sign-up`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    signIn: build.mutation<AppResponse<IAuthToken>, ISignInPayload>({
      query(body: ISignInPayload) {
        return {
          url: `${PREFIX}/sign-in`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    me: build.query<AppResponse<IUser>, string>({
      query(token: string) {
        return {
          url: `${PREFIX}/me`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Auth"],
    }),
    onboard: build.mutation<AppResponse<IUser>, IOnboard>({
      query(body: IOnboard) {
        return {
          url: `${PREFIX}/onboard`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useMeQuery,
  useOnboardMutation,
} = authApi;
