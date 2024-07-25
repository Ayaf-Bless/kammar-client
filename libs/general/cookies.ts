"use server";
import { cookies } from "next/headers";

export const setCookies = (key: string, value: any) => {
  cookies().set(key, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: Date.now() + 24 * 60 * 60 * 60 * 10000,
  });
};

export const getTokens = () => {
  const accessToken = cookies().get("accessToken");
  const refreshToken = cookies().get("refreshToken");

  return { accessToken, refreshToken };
};
