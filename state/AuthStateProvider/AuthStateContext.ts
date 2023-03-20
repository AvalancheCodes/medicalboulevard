import { createContext } from 'react';
import { IAuthContext } from "./IAuthContext";

export const AuthStateContext = createContext<IAuthContext>(null!);
