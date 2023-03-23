import { createContext } from 'react';
import IAuthContext from "./IAuthContext";

const AuthStateContext = createContext<IAuthContext>(null!);
export default AuthStateContext;
