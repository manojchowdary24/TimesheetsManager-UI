import React from "react";
import useForm from "react-hook-form";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { FormInput, createFormSchema } from "./utils/validationSchema";
import { mapInputToFormField } from "./utils";
import ErrorMessage from "../ErrorMessage";

interface FormProps {
  mode?: "onBlur" | "onChange" | "onSubmit";
  onSubmit: (data: any) => void;
  inputs: FormInput[];
  buttonProps: ButtonProps;
  buttonText?: string;
  formStyles?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
  mode = "onChange",
  onSubmit,
  inputs,
  buttonProps,
  buttonText = "Submit",
  formStyles,
}) => {
  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: createFormSchema(inputs),
    mode,
  });

  return (
    <form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input: FormInput) => (
        <div style={input.style} key={input.id}>
          {mapInputToFormField(input, register, errors)}
          {errors[input.name] && (
            <ErrorMessage errorMessage={String(errors[input.name].message)} />
          )}
        </div>
      ))}
      <Button disabled={!formState.isValid} {...buttonProps}>
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
