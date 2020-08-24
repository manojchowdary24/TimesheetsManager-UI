import React from "react";
import { Typography } from "@material-ui/core";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <Typography color="error">{errorMessage}</Typography>
);

export default ErrorMessage;
