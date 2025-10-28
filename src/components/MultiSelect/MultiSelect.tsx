// ud-ui-toolkit
import * as React from 'react';
import { Box } from '../../components/Box';
import { Checkbox } from '../../components/Checkbox';
import { Chip } from '../../components/Chip';
import { FormControl } from '../../components/FormControl';
import { InputLabel } from '../../components/InputLabel';
import ListItemText from '../../components/List/ListItemText';
import { MenuItem } from '../../components/MenuItem';
import { OutlinedInput } from '../../components/OutlinedInputWrapper';

import Select, { IMultiselect, SelectChangeEvent } from './IMultiSelect';

export default function MultipleSelect({
    selectType,
    value,
    options,
    label,
    ...props
}: IMultiselect) {
    const [personName, setPersonName] = React.useState<string[]>(value);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const { target: { value } } = event;
        setPersonName(value as string[]);
    };

    const handleRender = (selected: unknown) => {

        const selectedValues = Array.isArray(selected) ? selected : [];

        if (selectedValues.length > 0) {
            if (selectType === 'chip') {
                return (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selectedValues.map((value) => (
                            <Chip key={value} label={value} title={value} />
                        ))}
                    </Box>
                );
            }

            else {
                return selectedValues.join(', '); // Join values with comma when type is checkbox
            }
        }
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel>{label}</InputLabel>
                <Select
                    multiple
                    value={personName}
                    input={<OutlinedInput label={label} />}
                    onChange={handleChange}
                    renderValue={handleRender}
                    {...props}
                >
                    {options.map((name) => (
                        <MenuItem key={name} value={name}>
                            {selectType === 'checkbox' ? (
                                <>
                                    <Checkbox checked={personName.includes(name)} label='' />
                                    <ListItemText primary={name} />
                                </>
                            ) : (
                                name
                            )}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
