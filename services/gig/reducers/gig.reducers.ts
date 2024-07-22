import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interface/auth/auth.interface";
import { Igig } from "@/interface/gig";

const initialState: Igig = {
  _id: "",
  category: "",
  descriptionTemplate: {
    introduction: "",
    process: "",
    requirements: [""],
    callToAction: "",
    getAttention: "",
    others: {
      paragraph: "",
      title: "",
    },
    uniqueSellingPoints: [""],
  },
  images: [""],
  packages: [],
  shortDescription: "",
  subCategory: "",
  title: "",
};

const authSlice = createSlice({
  name: "gig",
  initialState,
  reducers: {
    addAuthUser: (state, action: PayloadAction<{ authInfo: IUser }>) => {
      return { ...state, ...action.payload.authInfo };
    },
    clearAuthUser: () => {
      return initialState;
    },
  },
});

export const { addAuthUser, clearAuthUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
