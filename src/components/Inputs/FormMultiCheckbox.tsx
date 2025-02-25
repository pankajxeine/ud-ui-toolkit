import React from "react";
import {
    FormControlLabel
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Controller } from "react-hook-form";
import { InputFieldProps } from '../../types/InputProps';
import InputWrapper from "./InputWrapper";
import FormControl from "@mui/material/FormControl";
import FormUtil from "../../utils/FormUtil";
// const options = [
//     {
//         label: "Radio Option 1",
//         value: "1",
//     },
//     {
//         label: "Radio Option 2",
//         value: "2",
//     },
// ];

export const FormMultiCheckbox: React.FC<InputFieldProps> = (props) => {
    const { name, control, info, hint } = props;
    const label = FormUtil.getDisplayLabel(props);
    // const err = errors[name]?.message as string | undefined
    // const generateRadioOptions = () => {
    //     return options.map((singleOption) => (
    //         <FormControlLabel
    //             value={singleOption.value}
    //             label={singleOption.label}
    //             control={<Radio />}
    //         />
    //     ));
    // };

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <InputWrapper info={info} hint={hint} error={error}>
                    <FormControl fullWidth>
                        <FormControlLabel control={<Checkbox onChange={onChange} checked={value} />} label={label} />
                    </FormControl>
                </InputWrapper>

            )}
        />

    );
};
