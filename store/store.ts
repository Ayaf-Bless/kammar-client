import {
  combineReducers,
  configureStore,
  createSelector,
  EnhancedStore,
  Reducer,
} from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./api";

import { authReducer } from "@/services/auth/reducers/auth.reducers";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const authPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["api"],
};
const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const combineReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: persistedReducer,
});

const rootReducer: Reducer = (state, action) => {
  if (action.type === "logout/logout") {
    storage.removeItem("persist:root"); // Clear persisted state
    state = undefined; // Reset the state
  }

  return combineReducer(state, action);
};

// const rootReducer = combineReducers({
//   [api.reducerPath]: api.reducer,
//   auth: persistedReducer,
// });

export const store: EnhancedStore & { persitore?: Persistor } = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});
store.persitore = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const selectAuth = (state: RootState) => state.auth;

export const selectCurrentUser = createSelector([selectAuth], (auth) =>
  auth && auth.email ? auth : null,
);

export const persistor = persistStore(store);
