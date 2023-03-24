import { User, UserCredential } from "firebase/auth";
import { IUserProfileEntity } from "../../core/shared/entities/UserProfileEntity";

export default interface IAuthContext {
  user: User;
  isAuthReady: boolean;
  logout: () => Promise<void>;
  loginEmailPassword: (email: string, password: string) => Promise<UserCredential>;
  signUpEmailPassword: (email: string, password: string, data: Omit<IUserProfileEntity, "createdAtMs">) => Promise<void>;
}
