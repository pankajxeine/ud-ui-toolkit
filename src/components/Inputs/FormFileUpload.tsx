// ud-ui-toolkit
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import BorderedFileUpload from "../BorderedFileUpload/BorderedFileUpload";
import InputWrapper from "./InputWrapper";

const FormFileUpload = (props: InputFieldProps) => {
    const { name, control, info, hint } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
                <InputWrapper info={info} hint={hint} error={error}>
                    <BorderedFileUpload onChange={onChange} />
                </InputWrapper>
            )}
        />
    );
};

export default FormFileUpload;