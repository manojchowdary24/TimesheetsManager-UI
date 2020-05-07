import React from "react";
import Form from "../../components/Form";
import {
  FormInput,
  FormInputType,
} from "../../components/Form/utils/validationSchema";

const CONTAINER_STYLES: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
};

const LINK_CONTAINER_STYLES: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "25%",
  marginTop: "1rem",
};

const INPUT_STYLES: React.CSSProperties = {
  width: "100%",
};

const FORM_STYLES: React.CSSProperties = {
  width: "20%",
};

const inputs: FormInput[] = [
  {
    id: "username",
    type: FormInputType.text,
    label: "Username",
    name: "username",
    style: INPUT_STYLES,
  },
  {
    id: "password",
    type: FormInputType.password,
    label: "Password",
    name: "password",
    style: INPUT_STYLES,
  },
];

interface LoginProps {
  onSubmit: (data: any) => void;
  navigateToForgotPassword: () => void;
  navigateToRequestAccess: () => void;
}

const Login: React.FC<LoginProps> = ({
  onSubmit,
  navigateToForgotPassword,
  navigateToRequestAccess,
}) => {
  return (
    <div style={CONTAINER_STYLES}>
      <Form
        buttonProps={{
          type: "submit",
          variant: "contained",
          color: "primary",
          style: { marginTop: "1rem", width: "100%" },
        }}
        formStyles={FORM_STYLES}
        inputs={inputs}
        onSubmit={onSubmit}
      />
      <div style={LINK_CONTAINER_STYLES}>
        <a onClick={navigateToForgotPassword}>Update/Reset password</a>
        <a onClick={navigateToRequestAccess}>Request Access</a>
      </div>
    </div>
  );
};

export default Login;
