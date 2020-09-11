import React, { useContext } from "react";
import { useQueryParameters } from "../../hooks/queryParameters";
import { useMutation } from "@apollo/react-hooks";
import UpdatePasswordMutation from "../../constants/graphql/mutations/updatePassword.graphql";
import UpdatePasswordForm from "../../components/UpdatePassword";
import { ToastContext } from "../../context/Toast";

interface Props {
  navigateToLogin: () => void;
}

const UpdatePassword: React.FC<Props> = ({ navigateToLogin }) => {
  const { _, setToast } = useContext(ToastContext);
  const queryParameters = useQueryParameters();
  const [updatePassword] = useMutation(UpdatePasswordMutation, {
    ignoreResults: true,
    onCompleted: () => {
      setToast({
        showToast: true,
        isError: false,
        toastMessage: "Successfully updated your password."
      });
      navigateToLogin();
    },
    onError: () => {
      setToast({
        showToast: true,
        isError: true,
        toastMessage:
          "There was an error updating your password. Please try again later."
      });
    }
  });
  const onSubmit = (email: string, { token, password }: any) =>
    updatePassword({
      variables: { email, input: { token, newPassword: password } }
    });
  return (
    <UpdatePasswordForm
      email={queryParameters.get("email")}
      onSubmit={onSubmit}
    />
  );
};

export default UpdatePassword;
