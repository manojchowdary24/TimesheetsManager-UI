import React, { useContext } from "react";
import LoginForm from "../../components/Login";
import { ToastContext } from "../../context/Toast";

interface Props {
  navigateToForgotPassword: () => void;
  navigateToRequestAccess: () => void;
}

const Login: React.FC<Props> = ({
  navigateToForgotPassword,
  navigateToRequestAccess
}) => {
  const { _, setToast } = useContext(ToastContext);

  const onSubmit = (data: any) =>
    console.log({ variables: { input: { ...data } } });
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
