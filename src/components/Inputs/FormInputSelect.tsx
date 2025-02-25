import { Controller } from "react-hook-form";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import FormUtil from "../../utils/FormUtil";
import InputWrapper from "./InputWrapper";
import { InputFieldProps } from '../../types/InputProps';

export const FormInputSelect = (props: InputFieldProps) => {
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
                    <FormControl>
                        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={value || []}
                            error={!!error}
                            onChange={onChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value: string) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            {...meta}
                        >
                            {options && options.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.desc}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </InputWrapper>
            )
            }
        />
    );
};
