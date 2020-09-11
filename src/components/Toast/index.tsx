import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { ToastContext } from "../../context/Toast";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ToastProps {
  autoHideDuration?: number;
}

const Toast: React.FC<ToastProps> = ({ autoHideDuration = 3000 }) => {
  const { toast, setToast } = useContext(ToastContext);
  const { showToast, toastMessage, isError } = toast;

  const handleOnClose = () => setToast({});

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={showToast}
      autoHideDuration={autoHideDuration}
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
