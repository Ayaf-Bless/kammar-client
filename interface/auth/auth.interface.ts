export interface IUser {
  id?: string;
  _id?: string;

  username: string;

  firstName: string;

  lastName: string;

  password: string;

  emailVerified: boolean;

  lastActivity: Date;

  isOnline: boolean;

  userLever: number;

  profilePublicId: string;

  country: string;

  email: string;

  state: string;

  emailVerificationToken: string;

  isSeller: boolean;

  profilePicture: string;

  bio: string;

  isPremiumSubscriber: boolean;

  accountStatus: string;

  isAffiliate: boolean;

  remunerationWithdrawals: number;

  dateOfBirth: Date;

  createdAt: Date;

  updatedAt: Date;

  LastLoginDate: Date;

  LastWithdrawalDate: Date;

  ratings: object;

  role: string;

  sellerId: string;

  sellerAvatar: string;
}

export interface ISignUpPayload {
  email: string;

  username: string;

  password: string;

  confirmPassword: string;
}

export interface IAuthToken {
  refreshToken: string;

  accessToken: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface IOnboard {
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  country: string;
  state: string;
  dateOfBirth: Date;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}

export interface IResetPassword {
  newPassword: string;
  confirmPassword: string;
  resetToken: string;
}
