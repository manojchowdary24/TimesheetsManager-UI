import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ToastProps {
  open: boolean;
  message: string;
  handleOnClose: () => void;
  severity?: Color;
  duration?: number;
  variant?: AlertProps["variant"];
}

const Toast: React.FC<ToastProps> = ({
  open,
  severity,
  message,
  duration,
  variant,
  handleOnClose
}) => {
  //   useEffect(() => {
  //     setIsOpen(open);
  //   }, [open]);

  //   const handleOnClose = () => {
  //     setIsOpen(false);
  //   };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={duration || 3000}
      onClose={handleOnClose}
    >
      <Alert
        onClose={handleOnClose}
        variant={variant || "filled"}
        severity={severity || "success"}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
