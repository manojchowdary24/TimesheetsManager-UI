import React from "react";
import * as yup from "yup";

export enum FormInputType {
  text = "text",
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword"
}

export interface FormInput {
  id: string;
  type: FormInputType;
  name: string;
  label: string;
  style?: React.CSSProperties;
  validationType: FormInputType;
}

export const createFormSchema = (formInputs: FormInput[]) => {
  return yup.object().shape(mapInputsToSchema(formInputs));
};

export const mapInputsToSchema = (shape: FormInput[] = []) => {
  const formInputs: { [key: string]: yup.StringSchema<string> } = {};

  shape.forEach(({ name, validationType }: FormInput) => {
    formInputs[name] = mapInputToSchema(validationType);
  });

  return formInputs;
};

export const mapInputToSchema = (type: FormInputType) => {
  switch (type) {
    case FormInputType.email:
      return yup
        .string()
        .trim()
        .email("Please enter a valid email")
        .required("Email is required");
    case FormInputType.password:
      return yup.string().required();
    case FormInputType.confirmPassword:
      return yup
        .string()
        .required()
        .test("passwords-match", "Passwords must match", function(value) {
          return this.parent[FormInputType.password] === value;
        });
    case FormInputType.text:
      return yup
        .string()
        .trim()
        .required();
    default:
      return yup.string();
  }
};
