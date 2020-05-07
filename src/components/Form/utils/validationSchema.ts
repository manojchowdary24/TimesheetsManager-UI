import React from "react";
import * as yup from "yup";

export enum FormInputType {
  text = "text",
  email = "email",
  password = "password",
}

export interface FormInput {
  id: string;
  type: FormInputType;
  name: string;
  label: string;
  style?: React.CSSProperties;
}

export const createFormSchema = (formInputs: FormInput[]) => {
  return yup.object().shape(mapInputsToSchema(formInputs));
};

export const mapInputsToSchema = (shape: FormInput[] = []) => {
  const formInputs: { [key: string]: yup.StringSchema<string> } = {};

  shape.forEach(({ name, type }: FormInput) => {
    formInputs[name] = mapInputToSchema(type);
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
    case FormInputType.text:
      return yup
        .string()
        .trim()
        .required();
    default:
      return yup.string();
  }
};
