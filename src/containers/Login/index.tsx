import React, { useContext } from "react";
import LoginForm from "../../components/Login";
import { API_URI } from "../../constants";
import { ToastContext } from "../../context/Toast";
import { IsAuthenticatedContext } from "../../context/Authenication";
import axios from "axios";

interface Props {
  navigateToForgotPassword: () => void;
  navigateToRequestAccess: () => void;
}

const Login: React.FC<Props> = ({
  navigateToForgotPassword,
  navigateToRequestAccess
}) => {
  const { _, setToast } = useContext(ToastContext);
  const { __, setIsAuthenicated } = useContext(IsAuthenticatedContext);

  const onSubmit = async (data: any) => {
    try {
      await axios.post(`${API_URI}/auth/login`, data, {withCredentials: true});
      setIsAuthenicated(true);
    } catch (e) {
      setToast({
        showToast: true,
        isError: true,
        toastMessage: e.response.data.message || "An error occured"
      });
    }
  };
  return (
    <>
      <LoginForm
        onSubmit={onSubmit}
        navigateToForgotPassword={navigateToForgotPassword}
        navigateToRequestAccess={navigateToRequestAccess}
      />
    </>
  );
};

export default Login;
