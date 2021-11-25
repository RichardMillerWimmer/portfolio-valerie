import { TextField } from '@material-ui/core'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const FormInput: React.FC = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <div>
            <Controller name='name' control={control} defaultValue='' render={({ field }) => (<TextField {...field} label='name' variant='outlined' error={!!errors.name} helperText={errors.name ? errors.name?.message : ''} />)} />
        </div>
    )
}

export default FormInput
