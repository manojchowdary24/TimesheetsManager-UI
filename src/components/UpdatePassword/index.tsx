import React from "react";
import Form from "../Form";
import { FormInput, FormInputType } from "../Form/utils/validationSchema";

interface Props {
  navigateToLogin: () => void;
}

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
    id: "token",
    type: FormInputType.text,
    label: "Token",
    name: "token",
    style: INPUT_STYLES,
    validationType: FormInputType.text
  },
  {
    id: "password",
    type: FormInputType.password,
    label: "Password",
    name: "password",
    style: INPUT_STYLES,
    validationType: FormInputType.password
  },
  {
    id: "passwordConfirm",
    type: FormInputType.password,
    label: "Confirm Password",
    name: "confirm Password",
    style: INPUT_STYLES,
    validationType: FormInputType.confirmPassword
  }
];

const UpdatePassword: React.FC<Props> = ({ navigateToLogin }) => {
  return (
    <div style={CONTAINER_STYLES}>
      <Form
        buttonProps={{
          type: "submit",
          variant: "contained",
          color: "primary",
          style: { marginTop: "1rem", width: "100%" }
        }}
        formStyles={FORM_STYLES}
        inputs={inputs}
        onSubmit={data => {
          navigateToLogin();
        }}
      />
    </div>
  );
};

export default UpdatePassword;
