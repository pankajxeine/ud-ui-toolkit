import React from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import Box from '@mui/material/Box';
import { renderInputField } from './InputFieldMapper';
import { FormProps } from './FormProps';
import { Typography } from '../Typography';

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const Form = (props: FormProps) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const {
        initialValues,
        onSubmit,
        validationSchema,
        labelButtonSubmit = 'Submit'
    } = props

    const formMethods = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: { ...(initialValues as any) }
    })

    const handleChange = () => {
        setActiveStep(1);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            {props.inputs && props.inputs.length > 0 &&
                <Box
                    className="meta-form-stepper"
                    data-pagenumber={activeStep + 1}
                    sx={{ width: "100%", overflowX: "auto" }}
                >
                    <Stepper activeStep={activeStep}>
                        {props.inputs.map((step) => (
                            <Step key={step.formName}>
                                <StepLabel>{step.title}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <FormProvider {...formMethods}>
                        <form
                            onSubmit={formMethods.handleSubmit(onSubmit)}
                        >
                            <Typography>{props.inputs[activeStep].title}</Typography>
                            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
                                {renderInputField(props.inputs[activeStep].fields)}
                            </div>
                            <button
                                className='bg-primary transition-opacity text-white w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4'
                                type='submit'
                            >
                                {labelButtonSubmit}
                            </button>
                        </form>
                    </FormProvider >
                </Box>
            }
            {props.inputs && props.inputs.length > 0 &&
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={activeStep} onChange={handleChange} aria-label="basic tabs example">
                        {props.inputs.map((step) => (
                            <Tab key={step.formName} label={step.title} />
                        ))}
                    </Tabs>
                    <FormProvider {...formMethods}>
                        <form
                            onSubmit={formMethods.handleSubmit(onSubmit)}
                        >
                            <Typography>{props.inputs[activeStep].title}</Typography>
                            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
                                {renderInputField(props.inputs[activeStep].fields)}
                            </div>
                            <button
                                className='bg-primary transition-opacity text-white w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4'
                                type='submit'
                            >
                                {labelButtonSubmit}
                            </button>
                        </form>
                    </FormProvider >
                </Box>
            }
        </Box>
        // <FormProvider {...formMethods}>
        //     <form
        //         onSubmit={formMethods.handleSubmit(onSubmit)}
        //     >
        //         {props.inputs && props.inputs.length > 0 &&
        //             props.inputs.map(formSection => {

        //                 return (
        //                     <>
        //                         <Typography>{formSection.formName}</Typography>
        //                         <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
        //                             {renderInputField(formSection.fields)}
        //                         </div>
        //                         <button
        //                             className='bg-primary transition-opacity text-white w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4'
        //                             type='submit'
        //                         >
        //                             {labelButtonSubmit}
        //                         </button>
        //                     </>
        //                 )
        //             })
        //         }

        //     </form>
        // </FormProvider >

    )
}