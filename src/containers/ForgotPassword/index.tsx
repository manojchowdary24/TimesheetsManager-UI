import React, { useContext } from "react";
import ForgotPasswordForm from "../../components/ForgotPassword";
import { ToastContext } from "../../context/Toast";

const ForgotPassword: React.FC = () => {
  const { _, setToast } = useContext(ToastContext);

  const onSubmit = ({ emailId }: { emailId: string }) => console.log(emailId);
  return <ForgotPasswordForm onSubmit={onSubmit} />;
};

export default ForgotPassword;
