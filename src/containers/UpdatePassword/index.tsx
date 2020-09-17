import React, { useContext } from "react";
import { useQueryParameters } from "../../hooks/queryParameters";
import UpdatePasswordForm from "../../components/UpdatePassword";
import { ToastContext } from "../../context/Toast";
import axios from "axios";
import { API_URI } from "../../constants";

interface Props {
  navigateToLogin: () => void;
}

const UpdatePassword: React.FC<Props> = ({ navigateToLogin }) => {
  const { _, setToast } = useContext(ToastContext);
  const queryParameters = useQueryParameters();
  const onSubmit = async (email: string, { token, password }: any) => {
    try {
      await axios.post(`${API_URI}/auth/${email}/updatePassword`, {
        token,
        password
      });
      setToast({
        showToast: true,
        isError: false,
        toastMessage: "Successfully updated your password."
      });
      navigateToLogin();
    } catch (e) {
      console.log("CATCH");
      setToast({
        showToast: true,
        isError: true,
        toastMessage:
          "There was an error updating your password. Please try again later."
      });
    }
  };
  return (
    <UpdatePasswordForm
      email={queryParameters.get("email")}
      onSubmit={onSubmit}
    />
  );
};

export default UpdatePassword;
