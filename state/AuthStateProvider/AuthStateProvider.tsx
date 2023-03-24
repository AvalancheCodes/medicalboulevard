import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { firebaseAuthService, firestoreUserProfileService } from "../../core/client/services/firebase";
import AuthStateContext from "./AuthStateContext";
import IAuthContext from "./IAuthContext";
import { IUserProfileEntity } from "../../core/shared/entities/UserProfileEntity";


export const AuthStateProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | undefined>();
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  const logout = useCallback(() => firebaseAuthService.signOut(), []);

  const loginEmailPassword = useCallback((email, password) => {
    return firebaseAuthService.signInWithLoginPassword(email, password);
  }, [])

  const sendResetPasswordEmail = useCallback((email) => {
    return firebaseAuthService.sendResetPasswordEmail(email)
      .catch((e) => {
        console.error(e);
        throw e;
      });
  }, []);

  const signUpEmailPassword = useCallback(async (email: string, password: string, data: Omit<IUserProfileEntity, "createdAtMs">) => {
    const userId = await firebaseAuthService.createUserWithEmailAndPassword(email, password);
    await firestoreUserProfileService.createUser(userId, {
      firstName: data.firstName,
      lastName: data.lastName
    });
  }, [])

  // Watch for User authentication state and set AppContext user object on changes
  useEffect(() => {
    const unsubscribeFn = onAuthStateChanged(firebaseAuthService.Auth, (user) => {
      console.log('Firebase user state changed:', user);
      setUser(user || undefined);
      setIsAuthReady(true);
    });
    return () => unsubscribeFn();
  }, []);

  const contextValue: IAuthContext = {
    user: user,
    isAuthReady: isAuthReady,
    logout: logout,
    loginEmailPassword: loginEmailPassword,
    signUpEmailPassword: signUpEmailPassword
  };

  return (
    <AuthStateContext.Provider value={contextValue}>
      {children}
    </AuthStateContext.Provider>
  );
};
