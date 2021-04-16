import { notification } from "antd";

export const openTheNotificationBox = (message, des, duration) => {
  const args = {
    message: message,
    description: des,
    duration: duration,
  };
  notification.open(args);
};
