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
    name: "emailId",
    style: INPUT_STYLES
  }
];

interface ForgotPasswordProps {
  onSubmit: (data: any) => void;
  handleCloseToast: () => void;
  showToast: boolean;
  toastMessage: string;
  isError: boolean;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  onSubmit,
  showToast,
  toastMessage,
  isError,
  handleCloseToast
}) => {
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
        onSubmit={onSubmit}
      />
      <Toast
        open={showToast}
        message={toastMessage}
        severity={isError ? "error" : "success"}
        handleOnClose={handleCloseToast}
      />
    </div>
  );
};

export default ForgotPassword;
