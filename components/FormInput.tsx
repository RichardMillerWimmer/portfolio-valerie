import { TextField } from '@material-ui/core'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'


type InputProps = {
    label: string,
    multiline: boolean,
    rows?: number
}

const FormInput: React.FC<InputProps> = (props: InputProps) => {
    const { label, multiline, rows } = props

    const { control, formState: { errors } } = useFormContext()

    let dynamicErrorObj: typeof errors

    if (errors && Object.keys(errors)[0] === label) {
        dynamicErrorObj = Object.values(errors)[0]
        console.log(dynamicErrorObj)
    }

    return (
        <div>
            <Controller name={label} control={control} defaultValue='' render={({ field }) => (<TextField multiline={multiline} rows={rows} {...field} label={label} variant='outlined' error={!!dynamicErrorObj} helperText={dynamicErrorObj ? dynamicErrorObj?.message : ''} />)} />
        </div>
    )
}

export default FormInput
