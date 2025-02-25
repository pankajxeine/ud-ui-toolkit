import * as Yup from 'yup';
import { InputFieldProps } from '../../types/InputProps';

type YupBoolean = Yup.BooleanSchema<boolean | undefined, Yup.AnyObject, boolean | undefined>
type YupString = Yup.StringSchema<string | undefined, Yup.AnyObject, string | undefined>
// type YupNumber = Yup.NumberSchema<boolean | undefined, Yup.AnyObject, number | undefined>

const generateValidations = (field: InputFieldProps) => {
    //@ts-ignore
    let schema: Yup.AnySchema = Yup[field.typeValue || 'string']();

    if (field.validations) {
        for (const rule of field.validations) {
            switch (rule.type) {
                case 'isTrue': schema = (schema as YupBoolean).isTrue(rule.message); break;
                case 'isEmail': schema = (schema as YupString).email(rule.message); break;
                case 'minLength': schema = (schema as YupString).min(rule?.value as number, rule.message); break;
                case 'oneOf': schema = (schema as YupString).oneOf([Yup.ref((rule as any).ref)], rule.message); break;
                case 'minArray': schema = (schema as Yup.AnyObject).min(1, rule.message); break;
                case 'regex': schema = (schema as Yup.AnyObject).matches(rule.regexp, rule.message); break;
                default: schema = schema.required(rule.message); break;
            }
        }
    };

    return schema
}

export const getInputs = <T>(fields: InputFieldProps[]) => {

    let initialValues: { [key: string]: any } = {};

    let validationsFields: { [key: string]: any } = {};

    for (const field of fields) {

        initialValues[field.name] = field.value;

        if (!field.validations) continue;

        if (!field.validator) {
            const schema = generateValidations(field);
            validationsFields[field.name] = schema;
        } else {
            validationsFields[field.name] = field.validator;
        }
    }

    console.log("validationsFields", validationsFields);
    return {
        validationSchema: Yup.object({ ...validationsFields }),
        initialValues: initialValues as T,
        inputs: fields,
    };

};