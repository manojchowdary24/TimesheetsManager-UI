import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import ForgotPasswordForm from "../../components/ForgotPassword";
import ForgotPasswordMutation from "../../constants/graphql/mutations/forgotPassword.graphql";

const INITIAL_STATE = {
  showToast: false,
  message: "",
  isError: false
};

const ForgotPassword: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const handleCloseToast = () => {
    setState(INITIAL_STATE);
  };
  const [forgotPassword] = useMutation(ForgotPasswordMutation, {
    ignoreResults: true,
    onCompleted: () =>
      setState({
        showToast: true,
        message: "Email sent with Reset link, Please look into your email",
        isError: false
      }),
    onError: () =>
      setState({
        showToast: true,
        message: "An error occurred.",
        isError: true
      })
  });

  const onSubmit = ({ emailId }: { emailId: string }) =>
    forgotPassword({ variables: { emailId } });
  return (
    <ForgotPasswordForm
      showToast={state.showToast}
      toastMessage={state.message}
      isError={state.isError}
      handleCloseToast={handleCloseToast}
      onSubmit={onSubmit}
    />
  );
};

export default ForgotPassword;
