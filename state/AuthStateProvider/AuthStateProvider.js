import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "../../services/firebase";
import { AuthStateContext } from "./AuthStateContext";

export const AuthStateProvider = ({children}) => {
  const [user, setUser] = useState();
  const [isAuthReady, setIsAuthReady] = useState(false);

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

  const signUpEmailPassword = useCallback((email, password, data) => {
    return authService.createUserWithEmailAndPassword(email, password, data);
  }, [])

  // Watch for User authentication state and set AppContext user object on changes
  useEffect(() => {
    const unsubscribeFn = onAuthStateChanged(authService._auth, (user) => {
      console.log('Firebase user state changed:', user);
      setUser(user || undefined);
      setIsAuthReady(true);
    });
    return () => unsubscribeFn();
  }, []);

  const contextValue = {
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
