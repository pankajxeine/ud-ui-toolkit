import { InputFieldProps } from "../../types/InputProps";
import { FormInputFields } from "../Form";
import { Typography } from "../Typography";

const initFormFields = (
  name: string,
  fields: InputFieldProps[] | undefined,
) => {
  if (!fields) return [];
  return fields.map((f) => {
    return { ...f, ...{ name: `${name}.${f.name}` } };
  });
};

const FormSectionComponent = (props: InputFieldProps) => {
  const { name, fields: sectionFields, label } = props;

  return (
    <>
      <Typography>{label}</Typography>
      <FormInputFields fields={initFormFields(name, sectionFields)} />
    </>
  );
};

export default FormSectionComponent;
