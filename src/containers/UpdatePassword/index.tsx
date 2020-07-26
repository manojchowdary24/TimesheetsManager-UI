import React from "react";
import { useQueryParameters } from "../../hooks/queryParameters";
import { useMutation } from "@apollo/react-hooks";
import UpdatePasswordMutation from "../../constants/graphql/mutations/updatePassword.graphql";
import UpdatePasswordForm from "../../components/UpdatePassword";
import { useLocation } from "react-router-dom";

interface Props {
  navigateToLogin: () => void;
}

const UpdatePassword: React.FC<Props> = ({ navigateToLogin }) => {
  const queryParameters = useQueryParameters();
  const [updatePassword] = useMutation(UpdatePasswordMutation, {
    ignoreResults: true,
    onCompleted: () => {
      navigateToLogin();
    },
    onError: err => {
      console.log("Handle error");
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