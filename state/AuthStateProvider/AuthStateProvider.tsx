import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { authService } from "../../services/firebase";
import { AuthStateContext } from "./AuthStateContext";
import { IAuthContext } from "./IAuthContext";

export const AuthStateProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | undefined>();
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  const logout = useCallback(() => authService.signOut(), []);

  const loginEmailPassword = useCallback((email, password) => {
    return authService.signInWithLoginPassword(email, password);
  }, [])

  const sendResetPasswordEmail = useCallback((email) => {
    return authService.sendResetPasswordEmail(email)
      .catch((e) => {
        console.error(e);
        throw e;
      });
  }, []);

  const signUpEmailPassword = useCallback((email: string, password: string, data) => {
    return authService.createUserWithEmailAndPassword(email, password, data);
  }, [])

  // Watch for User authentication state and set AppContext user object on changes
  useEffect(() => {
    const unsubscribeFn = onAuthStateChanged(authService.getAuth(), (user) => {
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
