import React from "react";
import red from "@material-ui/core/colors/red";

const ERROR_MESSAGE_STYLES = {
  color: red[500],
};

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <p style={ERROR_MESSAGE_STYLES}>{errorMessage}</p>
);

export default ErrorMessage;
