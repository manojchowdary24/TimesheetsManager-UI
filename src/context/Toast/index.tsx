import React, { useState, createContext } from "react";

const INITIAL_STATE = { showToast: false, toastMessage: "", isError: false };

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }: any) => {
  const [toast, setToast] = useState(INITIAL_STATE);

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};
