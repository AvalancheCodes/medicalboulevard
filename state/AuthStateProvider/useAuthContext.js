import { useContext } from 'react';
import { AuthStateContext } from './AuthStateContext';

export const useAuthContext = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuthContext must be used within the AuthStateProvider');
  }
  return context;
};
