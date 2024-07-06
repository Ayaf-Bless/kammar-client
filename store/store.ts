import {
  combineReducers,
  configureStore,
  EnhancedStore,
  Reducer,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { api } from "./api";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["clientApi", "_persit"],
};

export const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const rootReducers: Reducer<RootState> = (state, action) => {
  if (action.type === "logout/logout") {
    state = {} as RootState;
  }

  return combineReducers({ state, action });
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store: EnhancedStore = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // ignoreActions: true,
      },
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;

export const useAppDispatch: () => AppDispach = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
