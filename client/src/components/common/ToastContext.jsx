import React, { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast {...toast} />}
    </ToastContext.Provider>
  );
};

/* ===============================
   TOAST UI
================================ */
const Toast = ({ message, type }) => {
  return (
    <div className={`rtx-toast rtx-toast-${type}`}>
      {message}
    </div>
  );
};
