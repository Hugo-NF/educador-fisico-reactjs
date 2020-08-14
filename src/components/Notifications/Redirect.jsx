import React from 'react';
import { toast } from 'react-toastify';

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
    toastFunction(() => (
      <>
        <div className="toast-header">
          <i className={`${notification.icon} mr-2`} />
          <strong className="mr-auto">{notification.title}</strong>
        </div>
        <div className="toast-body">
          {notification.text}
        </div>
      </>
    ), {
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
