// ud-ui-toolkit
import { useFormContext } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { Grid } from "../Grid";
import { renderInputField } from "./InputFieldMapper";

type FormInputFieldsProps = {
  fields: InputFieldProps[];
  leftPanelCol?: number;
  rightPanelCol?: number;
};

export const renderFields = (
  fields: InputFieldProps[],
  panelCol: number | undefined,
) => {
  return (
    <Grid
      size={{
        sm: panelCol || 12,
        xs: 12,
      }}
    >
      <Grid container spacing={3}>
        {fields
          .filter((field) => field.show)
          .map((input, index) => {
            return (
              <Grid
                key={`${input.name || "field"}-${index}`}
                size={{
                  md: input.fieldCol || 3,
                  sm: input.fieldCol || 6,
                  xs: 12,
                }}
              >
                {renderInputField(input)}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};
const FormInputFields = ({
  fields,
  leftPanelCol,
  rightPanelCol,
}: FormInputFieldsProps) => {
  const { watch, setValue } = useFormContext();
  const leftInputFields = fields.filter(
    (field) =>
      field.align === "left" && showDependentField(field, watch, setValue),
  );
  const rightInputFields = fields.filter(
    (field) =>
      field.align !== "left" && showDependentField(field, watch, setValue),
  );
  return (
    <Grid container spacing={3}>
      {leftInputFields &&
        leftInputFields.length > 0 &&
        renderFields(leftInputFields, leftPanelCol)}
      {rightInputFields &&
        rightInputFields.length > 0 &&
        renderFields(rightInputFields, rightPanelCol)}
    </Grid>
  );
};

const showDependentField = (
  field: InputFieldProps,
  watch: any,
  setValue: any,
) => {
  let isValid = true;
  if (!field.dependency || !field.show) {
    return field.show;
  }
  if (field.dependency) {
    // Ensure `ref` is always an array before passing it to `watch`
    const refs = Array.isArray(field.dependency.ref)
      ? field.dependency.ref
      : [field.dependency.ref];

    const valuesToCheck = watch(refs); // Watch multiple values if needed

    // If `refs` is an array, `valuesToCheck` will be an array; if single, it remains a single value
    const valueToCheck = Array.isArray(field.dependency.ref)
      ? valuesToCheck // Keep as array
      : valuesToCheck[0]; // Extract first value if it's a single ref

    // Perform validation
    if (typeof field.dependency.value === "function") {
      isValid = field.dependency.value(valueToCheck);
    } else if (Array.isArray(field.dependency.value)) {
      isValid = Array.isArray(valueToCheck)
        ? valueToCheck.some(
          (v) =>
            Array.isArray(field.dependency?.value) &&
            field.dependency?.value?.includes(v),
        ) // Check if any match
        : field.dependency.value.includes(valueToCheck);
    } else if (
      ["string", "number", "boolean"].includes(typeof field.dependency.value)
    ) {
      isValid = valueToCheck == field.dependency.value;
    } else if (typeof field.dependency.value === "object") {
      isValid = Array.isArray(valueToCheck)
        ? valueToCheck.every((v) =>
          Object.entries(field.dependency?.value || {}).every(
            ([key, val]) => v?.[key] === val,
          ),
        )
        : Object.entries(field.dependency.value).every(
          ([key, val]) => valueToCheck?.[key] === val,
        );
    }
  }

  // Reset field value on field hide
  if (!isValid) {
    setValue(field.name, "");
  }
  return !!isValid;
};

export default FormInputFields;
