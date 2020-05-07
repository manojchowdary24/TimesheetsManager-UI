import React from "react";
import { FormInput } from "./validationSchema";
import TextField from "@material-ui/core/TextField";

// TODO: add other form types based on type
export const mapInputToFormField = (
  { id, name, label, type, style }: FormInput,
  register: any,
  errors: any,
) => {
  switch (type) {
    default:
      return (
        <TextField
          id={id}
          key={id}
          name={name}
          label={label}
          type={type}
          inputRef={register}
          error={!!errors[name]}
          style={style}
        />
      );
  }
};
