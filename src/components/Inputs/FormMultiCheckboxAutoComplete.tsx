import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Autocomplete from '@mui/material/Autocomplete';
import { InputFieldProps } from '../../types/InputProps';
import InputWrapper from "./InputWrapper";
import FormUtil from "../../utils/FormUtil";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const FormMultiCheckboxAutoComplete = (props: InputFieldProps) => {
    const { name, control, info, hint, options, meta } = props;
    const label = FormUtil.getDisplayLabel(props);
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) => (
                <InputWrapper info={info} hint={hint} error={error}>
                    <Autocomplete
                        multiple
                        id={`checkboxes-${name}`}
                        defaultValue={value || []}
                        //@ts-ignore
                        onChange={(event, newValue) => {
                            console.log("************", newValue);
                            onChange(newValue);
                        }}
                        options={options || []}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.desc}
                        renderOption={(props, option, { selected }) => {
                            console.log("selected", selected);
                            const { key, ...optionProps } = props;
                            return (
                                <li key={key} {...optionProps}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.desc}
                                </li>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                error={!!error}
                                label={label}
                                {...meta}
                            />
                        )}
                    />
                </InputWrapper>
            )
            }
        />
    );
};
