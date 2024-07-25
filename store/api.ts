import { createApi } from "@reduxjs/toolkit/query/react";
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { getAccessToken, getRefreshToken } from "@/libs/general/token";

const BASE_ENDPOINT = "http://localhost:3000";

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_ENDPOINT}/v1/gateway`,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("accept", "application/json");

    const token = getAccessToken();

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  credentials: "include",
});

// TODO: to test if the token is expired
const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs | unknown | FetchBaseQueryError
> = async (args, api, extraOption) => {
  const result = await baseQuery(args as string | FetchArgs, api, extraOption);

  if (result.error && result.error.status === 401) {
    // get the refreshToken from cookie
    const refreshToken = getRefreshToken();

    await baseQuery(
      {
        url: "/auth/refresh-tokens",
        method: "POST",
        body: { refreshToken },
      },
      api,
      extraOption,
    );
  }

  return result;
};

export const api = createApi({
  reducerPath: "clientApi",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Auth", "Seller", "Chat", "Gig", "Category"], //TODO: add more for caching
  endpoints: () => ({}),
});
