import { IUser } from "@/interface/auth/auth.interface";

export interface IReduxState {
  authUser: IUser;
  header: string;
  loggedOut: boolean;
  buyer: {};
  seller: {};
}
