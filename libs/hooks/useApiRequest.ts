import axios, { AxiosRequestConfig } from "axios";
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "react-query";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const useApiQuery = <T>(
  key: string,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: any,
  headers?: Record<string, string>,
  options?: UseQueryOptions<T>,
) => {
  return useQuery<T>(
    key,
    async () => {
      const config: AxiosRequestConfig = {
        url,
        method,
        headers,
        data,
      };
      const response = await axiosInstance.request<T>(config);

      return response.data;
    },
    options,
  );
};

export const useApiMutation = <T, TVariables = void>(
  url: string,
  method: "POST" | "PUT" | "DELETE" | "PATCH",
  headers?: Record<string, string>,
  options?: UseMutationOptions<T, unknown, TVariables>,
) => {
  return useMutation<T, unknown, TVariables>(async (variables: TVariables) => {
    const config: AxiosRequestConfig = {
      url,
      method,
      headers,
      data: variables,
    };
    const response = await axiosInstance.request<T>(config);

    return response.data;
  }, options);
};
