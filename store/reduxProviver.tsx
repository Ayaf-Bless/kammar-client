"use client";

import { Provider } from "react-redux";
import { Persistor, persistStore } from "redux-persist";

import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

persistStore(store);
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
