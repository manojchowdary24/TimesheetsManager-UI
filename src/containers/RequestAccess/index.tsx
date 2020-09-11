import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import RequestAccessMutation from "../../constants/graphql/mutations/requestAccess.graphql";
import RequestAccessForm from "../../components/RequestAccess";
import { useHistory } from "react-router-dom";
import { ToastContext } from "../../context/Toast";

const RequestAccess: React.FC = () => {
  const { _, setToast } = useContext(ToastContext);
  const history = useHistory();
  const [requestAccess] = useMutation(RequestAccessMutation, {
    ignoreResults: true,
    onCompleted: () => {
      setToast({
        showToast: true,
        isError: false,
        toastMessage:
          "We have sent the request to admin succesfully, Once Admin approves you will get an email"
      });
      history.push("/");
    },
    onError: () => {
      setToast({
        showToast: true,
        isError: true,
        toastMessage:
          "There was an error with your request. Please try again later."
      });
    }
  });

  const onSubmit = (data: any) =>
    requestAccess({
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
