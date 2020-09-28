import React from 'react';
import { toast } from 'react-toastify';
import TextWithTitle from './TextWithTitle';
import TextWithButton from './TextWithButton';

const references = {
  default: toast,
  success: toast.success,
  info: toast.info,
  danger: toast.error,
  warning: toast.warn,
  dark: toast.dark,
};

const notifyRedirect = ({ location }) => {
  const { state: { notifications } = { notifications: [] } } = location;
  // Checks notifications from redirect
  notifications.forEach((notification) => {
    const toastFunction = references[notification.type];
    toastFunction(() => <TextWithButton {...notification} />, {
      position: 'bottom-right',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  });
};

export default notifyRedirect;
