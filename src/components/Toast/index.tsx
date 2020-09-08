import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";
import { ToastContext } from "../../context/Toast";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ToastProps {}

const Toast: React.FC<ToastProps> = () => {
  const { toast, setToast } = useContext(ToastContext);
  const { showToast, toastMessage, isError } = toast || {};

  const handleOnClose = () => setToast(null);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={showToast}
      autoHideDuration={3000}
      onClose={handleOnClose}
    >
      <Alert
        onClose={handleOnClose}
        variant={"filled"}
        severity={isError ? "error" : "success"}
      >
        {toastMessage}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
