import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interface/auth/auth.interface";
import { Igig } from "@/interface/gig";

const initialState = {};

const gigSlice = createSlice({
  name: "gig",
  initialState,
  reducers: {},
});

export const {} = gigSlice.actions;
export const gigReducer = gigSlice.reducer;
