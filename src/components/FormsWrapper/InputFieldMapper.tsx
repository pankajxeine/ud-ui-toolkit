import { InputFieldProps } from '../../types/InputProps';
import { FormInputText } from "../Inputs/FormInputText";
import { FormAutocomplete } from "../Inputs/FormAutocomplete";
import { FormMultiCheckboxAutoComplete } from "../Inputs/FormMultiCheckboxAutoComplete";
// import { FormInputDate } from "../Inputs/FormInputDate";
import { FormInputRadio } from "../Inputs/FormInputRadio";
import { FormInputSelect } from "../Inputs/FormInputSelect";
// import { FormMultiCheckboxAutoComplete } from "../Inputs/FormMultiCheckboxAutoComplete";
// import { FormToggleSwitch } from "../Inputs/FormToggleSwitch";


export const renderInputField = (inputs: InputFieldProps[]) => {
    return (
        inputs.filter(input => input.show)
            .map((inputProps) => {
                switch (inputProps.type) {
                    case 'checkbox':
                        return <FormInputRadio {...inputProps} key={inputProps.name} />
                    case 'radio':
                        return <FormInputRadio {...inputProps} key={inputProps.name} />
                    case 'select':
                        return <FormInputSelect {...inputProps} key={inputProps.name} />
                    // case 'toggle':
                    //     return <FormToggleSwitch {...inputProps} key={inputProps.name} />
                    // case 'multi-checkbox':
                    //     return <FormInputDate {...inputProps} key={inputProps.name} />
                    // case 'multi-check-ac':
                    //     return <FormMultiCheckboxAutoComplete {...inputProps} key={inputProps.name} />
                    // case 'datepicker':
                    //     return <FormInputDate {...inputProps} key={inputProps.name} />
                    // case 'custom':
                    //     return <inputProps.component {...inputProps} key={inputProps.name} />
                    case 'autocomplete':
                        return <FormAutocomplete {...inputProps} key={inputProps.name} />
                    case 'multi-check-ac':
                        return <FormMultiCheckboxAutoComplete {...inputProps} key={inputProps.name} />
                    default:
                        return <FormInputText {...inputProps} key={inputProps.name} />
                }
            })
    )
}
