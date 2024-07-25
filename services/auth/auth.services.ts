import {
  IAuthToken,
  IChangePassword,
  IOnboard,
  IResetPassword,
  ISignInPayload,
  ISignUpPayload,
  IUser,
} from "@/interface/auth/auth.interface";
import { IGig } from "@/interface/gig";
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
    me: build.query<AppResponse<IUser>, void>({
      query() {
        return {
          url: `${PREFIX}/me`,
          method: "GET",
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
    logout: build.query<AppResponse<{}>, string>({
      query(token: string) {
        return {
          url: `${PREFIX}/logout`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Auth"],
    }),
    changePassword: build.mutation<AppResponse<IUser>, IChangePassword>({
      query(body: IChangePassword) {
        return {
          url: `${PREFIX}/change-password`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    deleteMe: build.mutation<AppResponse<{}>, void>({
      query() {
        return {
          url: `${PREFIX}/delete-me`,
          method: "DELETE",
          body: {},
        };
      },
      invalidatesTags: ["Auth"],
    }),
    updateMe: build.mutation<AppResponse<IUser>, Partial<IUser>>({
      query(body: Partial<IUser>) {
        return {
          url: `${PREFIX}/update-me`,
          method: "DELETE",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    getLikedGig: build.query<AppResponse<IGig[]>, void>({
      query() {
        return {
          url: `${PREFIX}/liked-gigs`,
          method: "GET",
        };
      },
      providesTags: ["Auth"],
    }),
    getUser: build.query<AppResponse<IUser>, string>({
      query(username: string) {
        return {
          url: `${PREFIX}/${username}`,
          method: "GET",
        };
      },
      providesTags: ["Auth"],
    }),
    resetPassword: build.mutation<AppResponse<IUser>, IResetPassword>({
      query(body: IResetPassword) {
        return {
          url: `${PREFIX}/reset-password?resetToken=${body.resetToken}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    forgotPassword: build.mutation<AppResponse<IUser>, { email: string }>({
      query(body) {
        return {
          url: `${PREFIX}/forgot-password`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    verifyEmail: build.mutation<
      AppResponse<IUser>,
      Partial<{ email: string; token: string; otp: string }>
    >({
      query(body) {
        return {
          url: `${PREFIX}/verify-email?emailToken${body.token}`,
          method: "PATCH",
          body: {
            email: body.email,
            otp: body.otp,
          },
        };
      },
      invalidatesTags: ["Auth"],
    }),
    RegenarateVerifyEmail: build.mutation<
      AppResponse<IUser>,
      Partial<{ email: string }>
    >({
      query(body) {
        return {
          url: `${PREFIX}/regenerate-email-verification`,
          method: "PATCH",
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
  useLogoutQuery,
  useChangePasswordMutation,
  useDeleteMeMutation,
  useUpdateMeMutation,
  useGetLikedGigQuery,
  useGetUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRegenarateVerifyEmailMutation,
  useVerifyEmailMutation,
} = authApi;
