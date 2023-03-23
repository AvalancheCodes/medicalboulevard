import { createContext } from 'react';
import INotificationsContext from "./INotificationsContext";

const NotificationsStateContext = createContext<INotificationsContext>(null!);

export default NotificationsStateContext;
