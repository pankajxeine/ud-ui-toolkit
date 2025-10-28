import { IMultiselect } from '../IMultiSelect';

export const multiSelectDefault: IMultiselect = {
  selectType:'none',
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: [],
  label: 'Select Options',
};

export const multiSelectChip: IMultiselect = {
  selectType: 'chip',
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: ['Option 1', 'Option 2'],
  label: 'Select Options',
};


export const multiSelectCheckbox: IMultiselect = {
  selectType: 'checkbox',
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: [],
  label: 'Select Options',
};