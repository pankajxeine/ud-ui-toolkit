import { InputFieldProps } from "../../types/InputProps";
import { Typography } from "../Typography";
import { Grid } from "../Grid";
import { MinimizeOutlined } from "@mui/icons-material";
import FormDatePicker from "./FormDatePicker";
import dayjs from "dayjs";
import React from "react";

export const initFormFieldsForObjectValues = (
  name: string,
  fields: InputFieldProps[] | undefined,
) => {
  if (!fields) return [];
  return fields.map((f) => {
    return { ...f, ...{ name: `${name}.${f.name}` } };
  });
};

const FormDateRangePicker = (props: InputFieldProps) => {
  const { name, label, meta } = props;

  const {
    start = {
      key: "start",
      label: "Start",
    },
    end = { key: "end", label: "End" },
  } = meta;

  const [minDate, setMinDate] = React.useState<any>(dayjs());
  const onStarDateChange = (d: any) => setMinDate(d);
  start.onChange = onStarDateChange;
  end.onChange = () => false;

  return (
    <>
      <Typography>{label}</Typography>
      <Grid
        size={12}
        direction={"row"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid size={6}>
          <FormDatePicker
            label={start.label}
            name={name + "." + start.key}
            type="datepicker"
            value={dayjs()}
            meta={start}
          />
        </Grid>
        <Grid
          size={0.7}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"60px"}
        >
          <MinimizeOutlined />
        </Grid>
        <Grid size={6}>
          <FormDatePicker
            label={end.label}
            name={name + "." + end.key}
            type="datepicker"
            value={dayjs()}
            meta={{
              ...end,
              ...{
                minDate,
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormDateRangePicker;
