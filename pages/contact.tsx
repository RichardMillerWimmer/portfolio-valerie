import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { NextPage } from 'next'

import yup, { SchemaOf } from 'yup'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type FormSubmit = {
    name: string,
    email: string,
    message: string
}

const schema: SchemaOf<FormSubmit> = yup.object().shape({
    name: yup.string().max(20).required(),
    email: yup.string().max(30).email().required(),
    message: yup.string().max(250).required()
})

const Contact: NextPage = () => {
    const methods = useForm<FormSubmit>({ resolver: yupResolver(schema) })
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [submitted, setSubmitted] = useState<boolean>(false)

    const formSubmitHandler: SubmitHandler<FormSubmit> = (data: FormSubmit, e: SyntheticEvent) => {
        e.preventDefault()
        console.log(data)

        // axios.post('/api/contact/', data)
        //     .then(() => {
        //         console.log('.then hit')
        //         setSubmitted(true)
        //         setName('')
        //         setEmail('')
        //         setMessage('')
        //     })
        //     .catch((err) => console.log(err))
    }

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <br />
                        <input type='text' name='name' required onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input type='text' name='email' required onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <br />
                        <textarea rows={4} cols={20} name='message' required onChange={e => setMessage(e.target.value)}></textarea>
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
