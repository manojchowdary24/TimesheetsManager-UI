import React from "react";
import { useMutation } from "@apollo/react-hooks";
import RequestAccessMutation from "../../constants/graphql/mutations/requestAccess.graphql";
import RequestAccessForm from "../../components/RequestAccess";
import { useHistory } from "react-router-dom";

const RequestAccess: React.FC = () => {
  const history = useHistory();
  const [requestAccess] = useMutation(RequestAccessMutation, {
    ignoreResults: true,
    onCompleted: () => history.push("/")
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
  return <RequestAccessForm onSubmit={onSubmit} />;
};

export default RequestAccess;
