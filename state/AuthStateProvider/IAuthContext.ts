import { User, UserCredential } from "firebase/auth";

export interface IAuthContext {
  user: User;
  isAuthReady: boolean;
  logout: () => Promise<void>;
  loginEmailPassword: (email: any, password: any) => Promise<UserCredential>;
  signUpEmailPassword: (email: string, password: string, data: any) => Promise<string>;
}
