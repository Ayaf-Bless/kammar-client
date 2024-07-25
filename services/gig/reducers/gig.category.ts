import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGigcategory } from "@/interface/gig/category";

const initialState: IGigcategory[] = [];

const gigCategorySlice = createSlice({
  name: "gigCategories",
  initialState,
  reducers: {
    addCageGories: (
      state,
      action: PayloadAction<{ categories: IGigcategory[] }>,
    ) => {
      return action.payload.categories;
    },
    clearCategories: () => {
      return initialState;
    },
  },
});

export const { addCageGories, clearCategories } = gigCategorySlice.actions;
export const gigCategoriesReducer = gigCategorySlice.reducer;
