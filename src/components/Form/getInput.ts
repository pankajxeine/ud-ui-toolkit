// ud-ui-toolkit
import * as Yup from "yup";
import { InputFieldProps, FormFieldsProps } from "../../types/InputProps";
import * as yup from "yup";
import dayjs from "dayjs";

type YupBoolean = Yup.BooleanSchema<
  boolean | undefined,
  Yup.AnyObject,
  boolean | undefined
>;
type YupString = Yup.StringSchema<
  string | undefined,
  Yup.AnyObject,
  string | undefined
>;

const generateValidations = (field: InputFieldProps) => {
  // @ts-ignore
  let schema: Yup.AnySchema = Yup[field.typeValue || "string"]();

  if (field.validations) {
    for (const rule of field.validations) {
      switch (rule.type) {
        case "isTrue":
          schema = (schema as YupBoolean).isTrue(rule.message);
          break;
        case "isEmail":
          schema = (schema as YupString).email(rule.message);
          break;
        case "minLength":
          schema = (schema as YupString).min(
            rule?.value as number,
            rule.message,
          );
          break;
        case "oneOf":
          schema = (schema as YupString).oneOf(
            [Yup.ref((rule as any).ref)],
            rule.message,
          );
          break;
        case "minArray":
          schema = (schema as Yup.AnyObject).min(1, rule.message);
          break;
        case "regex":
          schema = (schema as Yup.AnyObject).matches(rule.regexp, rule.message);
          break;
        default:
          schema = schema.required(rule.message);
          break;
      }
    }
  }

  return schema;
};

export const getAllFields = (allForms: FormFieldsProps[]) => {
  const allFields: InputFieldProps[] = [];
  allForms.forEach((formFields) => {
    formFields.fields.map((a) => allFields.push(a));
  });
  return allFields;
};

export const getInputs = <T>(fields: InputFieldProps[], initialValue?: any) => {
  const initialValues: { [key: string]: any } = {};

  const validationsFields: { [key: string]: any } = {};

  for (const field of fields) {
    initialValues[field.name] = field.value; // Assign value from schema

    if (!field.validations && !field.validator) continue;
    if (field.type === "date-range-picker") {
      const sKey = field.meta.start.key || "start";
      const eKey = field.meta.end.key || "end";
      const sKeyLabel = field.meta.start.label || "Start date";
      const eKeyLabel = field.meta.end.label || "End date";
      validationsFields[field.name] = yup.lazy(() => {
        return yup.object().shape({
          [sKey]: yup.string().required(sKeyLabel + " is required!"),
          [eKey]: yup
            .date()
            .when(
              sKey,
              (start, schema) =>
                start &&
                schema.min(start, eKeyLabel + " can't be before " + sKeyLabel),
            ),
        });
      });
      initialValues[field.name] = {
        [sKey]: initialValue[field.name][sKey] || dayjs(),
        [eKey]: initialValue[field.name][eKey] || dayjs(),
      };
      continue;
    }

    if (!field.dependency) {
      validationsFields[field.name] = fieldValidations(field);
    } else if (field.dependency) {
      validationsFields[field.name] = Yup.string().when(field.dependency.ref, {
        is: (...values: any) => {
          if (typeof field.dependency?.value === "function") {
            return field.dependency?.value(values);
          }
          if (Array.isArray(field.dependency?.value)) {
            return field.dependency?.value.some(values[0]);
          }
          return values[0] == field.dependency?.value;
        },
        then: (schema: any) => {
          schema = fieldValidations(field);
          return schema;
        },
        otherwise: (schema) => schema,
      });
    }

    if (!field.validator) {
      const schema = generateValidations(field);
      validationsFields[field.name] = schema;
    } else {
      validationsFields[field.name] = field.validator;
    }
  }

  console.log("validationsFields", validationsFields);
  return {
    validationSchema: Yup.object({ ...validationsFields }),
    initialValues: initialValues as T,
    inputs: fields,
  };
};
function fieldValidations(field: InputFieldProps) {
  if (!field.validator) {
    return generateValidations(field);
  } else {
    return field.validator;
  }
}
