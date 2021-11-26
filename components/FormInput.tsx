import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'


type InputProps = {
    label: string,
    multiline: boolean,
    rows?: number
}

const FormInput: React.FC<InputProps> = (props: InputProps) => {
    const { label, multiline, rows } = props
    const [errorObj, setErrorObj] = useState()
    const { control, formState: { errors } } = useFormContext()
    let dynamicErrorObj

    if (errors && Object.keys(errors)[0] === label) {
        dynamicErrorObj = Object.values(errors)[0]
    }
    // let dynamicErrorObj = Object.values(errors)[0]

    console.log(dynamicErrorObj)
    console.log(errors)


    return (
        <div>
            <Controller name={label} control={control} defaultValue='' render={({ field }) => (<TextField multiline={multiline} rows={rows} {...field} label={label} variant='outlined' error={!!dynamicErrorObj} helperText={dynamicErrorObj ? dynamicErrorObj?.message : ''} />)} />
        </div>
    )
}

export default FormInput
