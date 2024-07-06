import { createSlice, Slice } from "@reduxjs/toolkit";

import { IUser } from "@/interface/auth/auth.interface";

const initialState: IUser = {
  id: undefined, // Or set to an empty string if your IDs are strings
  _id: undefined, // Or set to an empty string if your IDs are strings

  username: "",

  firstName: "",

  lastName: "",

  password: "",

  emailVerified: false,

  lastActivity: new Date(),

  isOnline: false,

  userLever: 0, // Assuming userLever starts at 0

  profilePublicId: "",

  country: "",

  email: "",

  state: "", // Add state if applicable

  emailVerificationToken: "",

  isSeller: false,

  profilePicture: "",

  bio: "",

  isPremiumSubscriber: false,

  accountStatus: "",

  isAffiliate: false,

  remunerationWithdrawals: 0,

  dateOfBirth: new Date(),

  createdAt: new Date(),

  updatedAt: new Date(),

  LastLoginDate: new Date(),

  LastWithdrawalDate: new Date(),

  ratings: {},

  role: "",

  sellerId: "",

  sellerAvatar: "",
};

const authSlice: Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthUser: (state: IUser, action): IUser => {
      const { authInfo } = action.payload;

      state = { ...authInfo } as unknown as IUser;

      return state;
    },

    clearAuthUser: () => {
      return initialState;
    },
  },
});

export const { addAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;
