import { useContext } from 'react';
import NotificationsStateContext from './NotificationsStateContext';
import INotificationsContext from "./INotificationsContext";

export default function useNotificationsContext(): INotificationsContext {
  const context = useContext(NotificationsStateContext);
  if (!context) {
    throw new Error('useNotificationsContext must be used within the NotificationsStateProvider');
  }
  return context;
}
