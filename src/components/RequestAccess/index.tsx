import React from "react";
import Form from "../Form";
import { FormInput, FormInputType } from "../Form/utils/validationSchema";
import Toast from "../Toast";

const CONTAINER_STYLES: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column"
};

const INPUT_STYLES: React.CSSProperties = {
  width: "100%"
};

const FORM_STYLES: React.CSSProperties = {
  width: "20%"
};

const inputs: FormInput[] = [
  {
    id: "email",
    type: FormInputType.email,
    validationType: FormInputType.email,
    label: "Email",
    name: "email",
    style: INPUT_STYLES
  },
  {
    id: "username",
    type: FormInputType.text,
    validationType: FormInputType.text,
    label: "Username",
    name: "userName",
    style: INPUT_STYLES
  },
  {
    id: "firstName",
    name: "firstName",
    type: FormInputType.text,
    validationType: FormInputType.text,
    label: "First Name",
    style: INPUT_STYLES
  },
  {
    id: "lastName",
    name: "lastName",
    type: FormInputType.text,
    validationType: FormInputType.text,
    label: "Last Name",
    style: INPUT_STYLES
  }
];

interface RequestAccessProps {
  onSubmit: (data: any) => void;
}

const RequestAccess: React.FC<RequestAccessProps> = ({ onSubmit }) => {
  return (
    <div style={CONTAINER_STYLES}>
      <Form
        buttonProps={{
          type: "submit",
          variant: "contained",
          color: "primary",
          style: {
            marginTop: "1rem",
            width: "100%"
          }
        }}
        formStyles={FORM_STYLES}
        inputs={inputs}
        onSubmit={onSubmit}
      />
      <Toast />
    </div>
  );
};

export default RequestAccess;
