import { useFieldArray } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { FormInputFields } from "../Form";
import { useMemo } from "react";
import { Button } from "@mui/material";
import ContainerBasic from "../Container/Container";
import { Typography } from "../Typography";
import { Add, Delete } from "@mui/icons-material";
import { Grid } from "../Grid";

const initAddressMulti = (
  name: string,
  index: number,
  fields: InputFieldProps[] | undefined,
) => {
  if (!fields) return [];
  return fields.map((f) => {
    return { ...f, ...{ name: `${name}[${index}].${f.name}` } };
  });
};

const MultiSectionComponent = (props: InputFieldProps) => {
  const { name, fields: sectionFields, label } = props;

  const { fields, append, remove } = useFieldArray({
    name: name, // unique name for your Field Array
  });

  const keySchema = useMemo(() => {
    const s: any = {};
    sectionFields?.forEach((field) => {
      s[field.name] = "";
    });
    return s;
  }, [sectionFields]);

  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Typography>{label}</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            append(keySchema);
          }}
          endIcon={<Add />}
        >
          Add {label}
        </Button>
      </Grid>
      {fields.map((_fields, index) => (
        <>
          <Typography variant="caption">
            {label} {index + 1}
          </Typography>
          <FormInputFields
            fields={initAddressMulti(name, index, sectionFields)}
          />
          <ContainerBasic
            style={{
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              flexDirection: "row",
              paddingRight: 0,
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                remove(index);
              }}
              endIcon={<Delete />}
            >
              Delete
            </Button>
          </ContainerBasic>
        </>
      ))}

      <ContainerBasic
        style={{
          paddingRight: 0,
          display: "flex",
          justifyContent: "end",
        }}
      ></ContainerBasic>
    </>
  );
};

export default MultiSectionComponent;
