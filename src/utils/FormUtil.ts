import { InputFieldProps } from "../types/InputProps";

class FormUtil {
    static getDisplayLabel(form: InputFieldProps) {
        const required = form.validations?.find(v => v.type === "required");
        console.log("required", required);
        return required ? form.label + " *" : form.label;
    }

    // /**
    //  * Get checkbox value - checkbox should contain only string values
    //  * @param value
    //  * @returns
    //  */
    // static getCheckboxValue(value: Exclude<TValue, Date>) {
    //     if (value === null || value === undefined) {
    //         return value;
    //     }
    //     let checkboxValue = value;
    //     switch (typeof checkboxValue) {
    //         case "boolean":
    //             checkboxValue = checkboxValue.toString();
    //             break;
    //         case "number":
    //             checkboxValue = checkboxValue.toString();
    //             break;
    //     }
    //     return checkboxValue;
    // }
}

export default FormUtil;
