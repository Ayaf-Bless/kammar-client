// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { persistReducer, persistStore } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { Reducer } from "redux";

// import { api } from "./api";

// import { authReducer } from "@/services/auth/reducers/auth.reducers";
// import createWebStorage from "redux-persist/es/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem() {
//       return Promise.resolve(null);
//     },
//     setItem(_key: string, value: number) {
//       return Promise.resolve(value);
//     },
//     removeItem() {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createNoopStorage();

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["api"],
// };

// const combinedReducer = combineReducers({
//   [api.reducerPath]: api.reducer,
//   authUser: authReducer,
// });

// const rootReducer: Reducer = (state, action) => {
//   if (action.type === "logout/logout") {
//     storage.removeItem("persist:root"); // Clear persisted state
//     state = undefined; // Reset the state
//   }

//   return combinedReducer(state, action);
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   devTools: true,
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(api.middleware),
// });

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const persistor = persistStore(store);

import {
  combineReducers,
  configureStore,
  createSelector,
} from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer } from "@/services/auth/reducers/auth.reducers";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

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

// const rootReducer: Reducer = (state, action) => {
//   if (action.type === "logout/logout") {
//     storage.removeItem("persist:root"); // Clear persisted state
//     state = undefined; // Reset the state
//   }

//   return combinedReducer(state, action);
// };

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});
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
