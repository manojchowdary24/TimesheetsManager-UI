import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import LoginMutation from "../../constants/graphql/mutations/login.graphql";
import LoginForm from "../../components/Login";
import client from "../../constants/graphql/client";
import Toast from "../../components/Toast";
import { ToastContext } from "../../context/Toast";

interface Props {
  navigateToForgotPassword: () => void;
  navigateToRequestAccess: () => void;
  navigateToUpdatePassword: () => void;
}

const Login: React.FC<Props> = ({
  navigateToForgotPassword,
  navigateToRequestAccess,
  navigateToUpdatePassword
}) => {
  const { _, setToast } = useContext(ToastContext);
  const [login] = useMutation(LoginMutation, {
    ignoreResults: true,
    onError: () =>
      setToast({
        isError: true,
        showToast: true,
        toastMessage: "Error"
      }),
    update: (
      cache,
      {
        data: {
          login: { accessToken = "" }
        }
      }
    ) => {
      cache.writeData({
        data: {
          isAuthenicated: !!accessToken
        }
      });
    }
  });

  const onSubmit = (data: any) => login({ variables: { input: { ...data } } });
  return (
    <>
      <LoginForm
        onSubmit={onSubmit}
        navigateToForgotPassword={navigateToForgotPassword}
        navigateToRequestAccess={navigateToRequestAccess}
        navigateToUpdatePassword={navigateToUpdatePassword}
      />
      <Toast />
    </>
  );
};

export default Login;
