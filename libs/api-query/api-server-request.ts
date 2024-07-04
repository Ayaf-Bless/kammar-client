import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL, // Ensure this is set in your environment variables
});

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: any,
  headers?: Record<string, string>,
): Promise<T> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    headers,
    data,
  };

  const response = await axiosInstance.request<T>(config);

  return response.data;
};
