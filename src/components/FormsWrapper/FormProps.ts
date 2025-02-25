import { FieldProps, SchemaForm } from '../../types/InputProps';

export interface FormProps {
    onSubmit: (data: unknown) => void
    labelButtonSubmit?: string
    titleForm?: string
    initialValues: unknown
    validationSchema: SchemaForm
    inputs: FieldProps[]
    header?: any,
    contentToolbar?: any
    content?: any
    innerScroll?: boolean
}

export type DailogFormProps = {
    open: boolean
    title: string
    formMethods?: any
    children: any
    initialValues?: any
    toggleDrawerHandler: any
    onUpdateHandler?: any
    onDeleteHandler?: any
    mutationStart?: boolean
    isProcess?: boolean
}