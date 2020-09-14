import React, { useContext } from "react";
import RequestAccessForm from "../../components/RequestAccess";
import { useHistory } from "react-router-dom";
import { ToastContext } from "../../context/Toast";

const RequestAccess: React.FC = () => {
  const { _, setToast } = useContext(ToastContext);
  const history = useHistory();

  const onSubmit = (data: any) =>
    console.log({
      variables: {
        input: {
          ...data,
          roles: ["User"],
          active: true
        }
      }
    });
  return (
    <>
      <RequestAccessForm onSubmit={onSubmit} />
    </>
  );
};

export default RequestAccess;
