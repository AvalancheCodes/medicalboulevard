import Toast from "react-bootstrap/Toast";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import INotificationItem from "../state/NotificationsStateProvider/INotificationItem";

interface IProps extends INotificationItem {
  onClose: () => void;
}

const NotificationToast = ({ id, title, body, createdAtMs, onClose }: IProps) => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    if (!createdAtMs) {
      setTimeString("");
      return;
    }

    setTimeString(moment(createdAtMs).fromNow());
    const intervalId = setInterval(() => {
      setTimeString(moment(createdAtMs).fromNow());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [createdAtMs]);

  const onCloseClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Toast onClose={onCloseClick}>
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
        <small className="text-muted">{timeString}</small>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  )
}

export default NotificationToast;
