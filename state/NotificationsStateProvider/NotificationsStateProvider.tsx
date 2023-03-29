import { PropsWithChildren, useCallback, useState } from "react";
import { nanoid } from "nanoid";
import NotificationsStateContext from "./NotificationsStateContext";
import INotificationsContext from "./INotificationsContext";
import ToastContainer from "react-bootstrap/ToastContainer";
import INotificationItem from "./INotificationItem";
import NotificationToast from "../../components/NotificationToast";


export const NotificationsStateProvider = ({ children }: PropsWithChildren) => {

  const [notifications, setNotifications] = useState<INotificationItem[]>([]);

  const pushNotification = useCallback((item: { title: string, message: string }) => {
    const newItem: INotificationItem = {
      id: nanoid(),
      title: item.title,
      body: item.message,
      createdAtMs: Date.now()
    };
    setNotifications(curr => [...curr, newItem])
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(curr => curr.filter(x => x.id !== id));
  }, [])

  const contextValue: INotificationsContext = {
    pushNotification: pushNotification
  };

  return (
    <NotificationsStateContext.Provider value={contextValue}>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-transparent position-fixed"
        style={{
          top: "0",
          right: "0",
          minWidth: '360px',
          zIndex: 9999
        }}
      >
        <ToastContainer position="top-end" className="p-3">
          {notifications?.map(x => (
            <NotificationToast
              key={x.id}
              id={x.id}
              title={x.title}
              body={x.body}
              createdAtMs={x.createdAtMs}
              onClose={() => removeNotification(x.id)}
            />
          ))}
        </ToastContainer>
      </div>
      {children}
    </NotificationsStateContext.Provider>
  );
};
