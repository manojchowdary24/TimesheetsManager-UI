import React, { useContext } from "react";
import RequestAccessForm from "../../components/RequestAccess";
import { useHistory } from "react-router-dom";
import { ToastContext } from "../../context/Toast";
import axios from "axios";
import { API_URI } from "../../constants";

const RequestAccess: React.FC = () => {
  const { _, setToast } = useContext(ToastContext);
  const history = useHistory();

  const onSubmit = async (data: any) => {
    try {
      await axios.post(`${API_URI}/auth/requestAccess`, {
        ...data,
        roles: ["User"],
        active: true
      });
      history.push("/");
    } catch (e) {
      setToast({
        showToast: true,
        isError: true,
        toastMessage:
          "There was an error with your request. Please try again later."
      });
    }
  };
  return (
    <>
      <RequestAccessForm onSubmit={onSubmit} />
    </>
  );
};

export default RequestAccess;
