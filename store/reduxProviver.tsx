"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRef } from "react";

import { persistor, RootState, store } from "./store";

// persistStore(store);
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<RootState>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
    storeRef.current.persitore = persistor;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={storeRef.current.persitore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
