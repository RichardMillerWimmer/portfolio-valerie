import React, { SyntheticEvent, useRef, useState } from 'react'
import axios from 'axios'
import { NextPage } from 'next'

import * as yup from 'yup'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import FormInput from '../components/FormInput'
import ReCAPTCHA from 'react-google-recaptcha'

export type FormSubmit = {
    name: string,
    email: string,
    subject: string,
    message: string,
    token: string
}

const schema: yup.SchemaOf<FormSubmit> = yup.object().shape({
    name: yup.string().max(20).defined(),
    email: yup.string().max(30).email().defined(),
    subject: yup.string().max(30).defined(),
    message: yup.string().max(250).defined(),
    token: yup.string().default('').defined()
})

const Contact: NextPage = () => {
    const methods = useForm<FormSubmit>({ resolver: yupResolver(schema) })
    const [submitted, setSubmitted] = useState<boolean>(false)
    const reCaptchaRef = useRef<ReCAPTCHA | null>(null)


    const formSubmitHandler: SubmitHandler<FormSubmit> = async (data: FormSubmit, e: SyntheticEvent): Promise<void> => {
        e.preventDefault()

        const token = await reCaptchaRef.current.executeAsync()
        // console.log(token)

        data = { ...data, token: token }
        // console.log(data)

        reCaptchaRef.current.reset()

        axios.post('/api/contact/', data)
            .then((res) => {
                console.log(res)
                setSubmitted(true)

            })
            .catch((err) => {
                console.log(err)
                // setSubmitted(true)
            })
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
                        <FormInput {...{ label: 'subject', multiline: false }} />
                        <FormInput {...{ label: 'message', multiline: true, rows: 5 }} />
                    </div>

                    <div>
                        <input type='submit'></input>
                    </div>
                </form>
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size='invisible' ref={reCaptchaRef} />
            </FormProvider>
        </>
    )
}

export default Contact
