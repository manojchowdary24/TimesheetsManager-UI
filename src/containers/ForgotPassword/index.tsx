import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import ForgotPasswordForm from "../../components/ForgotPassword";
import ForgotPasswordMutation from "../../constants/graphql/mutations/forgotPassword.graphql";
import { ToastContext } from "../../context/Toast";
import Toast from "../../components/Toast";

const ForgotPassword: React.FC = () => {
  const { _, setToast } = useContext(ToastContext);
  const [forgotPassword] = useMutation(ForgotPasswordMutation, {
    ignoreResults: true,
    onCompleted: () =>
      setToast({
        isError: false,
        showToast: true,
        toastMessage: "Please check your email to reset your password."
      }),
    onError: () =>
      setToast({
        isError: true,
        showToast: true,
        toastMessage: "An error has occured."
      })
  });

  const onSubmit = ({ emailId }: { emailId: string }) =>
    forgotPassword({ variables: { emailId } });
  return <ForgotPasswordForm onSubmit={onSubmit} />;
};

export default ForgotPassword;
