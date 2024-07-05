"use server";

import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create();

const getAccessToken = (): string | null => {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken");

  return token ? token.value : null;
};

const handleMissingToken = () => {
  // Here you can handle the scenario when the token is missing.
  // You might want to redirect to the login page or throw an error.
  throw new Error("Access token not found. Please log in.");
};

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: any,
  headers: Record<string, string> = {},
  protectedEndPoint: boolean = true,
): Promise<T> => {
  if (protectedEndPoint) {
    const accessToken = getAccessToken();

    if (!accessToken) {
      handleMissingToken();
    }
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    headers,
  };

  try {
    const response = await axiosInstance.request<T>(config);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      // Handle known errors, like 401 unauthorized
      if (error.response.status === 401) {
        // Possibly refresh token or redirect to login
        handleMissingToken();
      }
    }
    throw error;
  }
};
