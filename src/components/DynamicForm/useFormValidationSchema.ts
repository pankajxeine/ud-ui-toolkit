// ud-ui-toolkit
import { InputFormProps } from "./types";

import * as yup from "yup";

export const generateValidationSchema = (fields: InputFormProps[]) => {
  const validationSchema: any = {};

  fields.forEach((field) => {
    if (!field.dependentOn) {
      validationSchema[field.name] = fieldValidation(field);
    } else if (field.dependentOn && field.dependentOn.length > 0) {
      validationSchema[field.name] = yup.string().when(
        field.dependentOn.map((f) => `${f.field}`),
        {
          is: (...values: any) => {
            if (typeof field.dependentOn?.[0]?.value === "function") {
              return field.dependentOn?.[0]?.value(values);
            }
            if (Array.isArray(field.dependentOn?.[0]?.value)) {
              return field.dependentOn?.[0]?.value.some(values[0]);
            }
            return values[0] == field.dependentOn?.[0]?.value;
          },
          then: (schema: any) => {
            schema = fieldValidation(field);
            return schema;
          },
          otherwise: (schema) => schema,
        },
      );
    }
  });

  return yup.object(validationSchema);
};

const fieldValidation = (field: InputFormProps) => {
  let fieldValidation = yup.string();

  // Process default validations from the `validations` array
  if (field.validations) {
    field.validations.forEach((validation) => {
      switch (validation.type) {
        case "required":
          fieldValidation = fieldValidation.required(validation.message);
          break;
        case "isEmail":
          fieldValidation = fieldValidation.email(validation.message);
          break;
        case "minLength":
          fieldValidation = fieldValidation.min(
            validation.value as number,
            validation.message,
          );
          break;
        case "regex":
          fieldValidation = fieldValidation.matches(
            validation.regexp,
            validation.message,
          );
          break;
        default:
          break;
      }
    });
  }

  // Add custom validation if provided
  if (field.validator) {
    fieldValidation = fieldValidation.test(
      field.name,
      "Custom Validation Error",
      (value) => {
        const error = field.validator(value);
        if (error) {
          return false; // Validation failed
        }
        return true; // Validation passed
      },
    );
  }

  return fieldValidation;
};
