"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { persistStore } from "redux-persist";
import { Provider as ReduxProvide } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist/es/types";

import { store } from "@/store/store";
import { WithChildren } from "@/types";

export interface ProvidersProps {
  themeProps?: ThemeProviderProps;
}

const persistor: Persistor = persistStore(store);

export function Providers({
  children,
  themeProps,
}: ProvidersProps & WithChildren) {
  const router = useRouter();

  return (
    <ReduxProvide store={store}>
      <PersistGate persistor={persistor}>
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
      </PersistGate>
    </ReduxProvide>
  );
}
