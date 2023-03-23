import { useContext } from 'react';
import AuthStateContext from './AuthStateContext';
import IAuthContext from "./IAuthContext";

export default function useAuthContext(): IAuthContext {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthContext must be used within the AuthStateProvider');
  }
  return context;
}
