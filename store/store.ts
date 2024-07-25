import {
  combineReducers,
  configureStore,
  createSelector,
  EnhancedStore,
  Reducer,
} from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./api";

import { authReducer } from "@/services/auth/reducers/auth.reducers";
import { gigCategoriesReducer } from "@/services/gig/reducers/gig.category";

// Combine reducers
export const combineReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  gigCategory: gigCategoriesReducer,
});

// Root reducer with a logout handler
const rootReducer: Reducer = (state, action) => {
  if (action.type === "logout/logout") {
    state = undefined; // Reset the state
  }

  return combineReducer(state, action);
};

// Configure the store
export const store: EnhancedStore = configureStore({
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
