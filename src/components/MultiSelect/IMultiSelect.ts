// ud-ui-toolkit
import { Select, SelectChangeEvent, SelectProps } from '../Select';

export interface IMultiselect extends Omit<SelectProps, 'multiple'> {
    label: string;
    selectType?: 'checkbox' | 'chip' | 'none';
    value: string[];
    options: Array<string>;
}

export type { SelectChangeEvent };
export default Select; 
