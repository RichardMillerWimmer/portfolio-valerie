import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { NextPage } from 'next'

import * as yup from 'yup'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import FormInput from '../components/FormInput'

type FormSubmit = {
    name: string,
    email: string,
    message: string
}

const schema: yup.SchemaOf<FormSubmit> = yup.object().shape({
    name: yup.string().max(20).required(),
    email: yup.string().max(30).email().required(),
    message: yup.string().max(250).required()
})

const Contact: NextPage = () => {
    const methods = useForm<FormSubmit>({ resolver: yupResolver(schema) })

    const [submitted, setSubmitted] = useState<boolean>(false)

    const formSubmitHandler: SubmitHandler<FormSubmit> = (data: FormSubmit, e: SyntheticEvent) => {
        e.preventDefault()

        axios.post('/api/contact/', data)
            .then(() => {
                setSubmitted(true)
                console.log(data)

            })
            .catch((err) => console.log(err))
    }

    if (submitted) {
        return (
            <div>Thank you. I will be in contact with you as soon as I can.</div>
        )
    }

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                    <div>
                        <FormInput {...{ label: 'name', multiline: false }} />
                        <FormInput {...{ label: 'email', multiline: false }} />
                        <FormInput {...{ label: 'message', multiline: true, rows: 5 }} />
                    </div>

                    <div>
                        <input type='submit'></input>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default Contact
