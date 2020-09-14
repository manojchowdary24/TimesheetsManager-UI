import React, { useContext } from "react";
import { useQueryParameters } from "../../hooks/queryParameters";
import UpdatePasswordForm from "../../components/UpdatePassword";
import { ToastContext } from "../../context/Toast";

interface Props {
  navigateToLogin: () => void;
}

const UpdatePassword: React.FC<Props> = ({ navigateToLogin }) => {
  const { _, setToast } = useContext(ToastContext);
  const queryParameters = useQueryParameters();
  const onSubmit = (email: string, { token, password }: any) =>
    console.log({
      variables: {
        email,
        input: { token, newPassword: password }
      }
    });
  return (
    <UpdatePasswordForm
      email={queryParameters.get("email")}
      onSubmit={onSubmit}
    />
  );
};

export default UpdatePassword;
