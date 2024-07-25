"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { WithChildren } from "@/types";
import { ToastProvider } from "@/contexts/ToastContext";

export interface ProvidersProps {
  themeProps?: ThemeProviderProps;
}

export function Providers({
  children,
  themeProps,
}: ProvidersProps & WithChildren) {
  const router = useRouter();

  return (
    <ToastProvider>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </ToastProvider>
  );
}
