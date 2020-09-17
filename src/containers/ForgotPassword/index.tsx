import React, { useContext } from "react";
import ForgotPasswordForm from "../../components/ForgotPassword";
import { ToastContext } from "../../context/Toast";
import axios from "axios";
import { API_URI } from "../../constants";

const ForgotPassword: React.FC = () => {
  const { _, setToast } = useContext(ToastContext);

  const onSubmit = async ({ emailId }: { emailId: string }) => {
    try {
      await axios.post(`${API_URI}/auth/${emailId}/resetPassword`);
      setToast({
        showToast: true,
        isError: false,
        toastMessage: "Email sent with Reset link, Please look into your email"
      });
    } catch (e) {
      setToast({
        showToast: true,
        isError: true,
        toastMessage: e.response.data.message || "An error occured"
      });
    }
  };
  return <ForgotPasswordForm onSubmit={onSubmit} />;
};

export default ForgotPassword;
