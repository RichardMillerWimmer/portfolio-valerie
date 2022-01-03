import React, { BaseSyntheticEvent, useRef, useState } from 'react'
import axios from 'axios'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Contact.module.scss'
import { NextRouter, useRouter } from 'next/router'
import SendIcon from '@mui/icons-material/Send';

import * as yup from 'yup'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import FormInput from '../components/FormInput'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from '@material-ui/core'

export type FormSubmit = {
    name: string,
    email: string,
    subject: string,
    message: string,
    token: string
}

const schema: yup.SchemaOf<FormSubmit> = yup.object().shape({
    name: yup.string().max(20).defined().required(),
    email: yup.string().max(30).email().defined().required(),
    subject: yup.string().max(30).defined().required(),
    message: yup.string().max(250).defined().required(),
    token: yup.string().default('').defined()
})

const Contact: NextPage = () => {
    const methods = useForm<FormSubmit>({ mode: 'onChange', reValidateMode: 'onChange', resolver: yupResolver(schema) })
    const [submitted, setSubmitted] = useState<boolean>(false)
    const reCaptchaRef = useRef<ReCAPTCHA>(null)
    const router: NextRouter = useRouter()

    const homeRedirect = (): void => {
        setTimeout((): void => {
            router.push('/')
        }, 4000)
    }

    const formSubmitHandler: SubmitHandler<FormSubmit & BaseSyntheticEvent> = async (data: FormSubmit, event?: BaseSyntheticEvent): Promise<void> => {

        if (event) {
            event.preventDefault()
        }

        let token = await reCaptchaRef.current?.executeAsync()

        if (token) {
            data = { ...data, token: token }
        }

        reCaptchaRef.current?.reset()

        axios.post('/api/contact/', data)
            .then((res) => {
                console.log(res)
                setSubmitted(true)
                homeRedirect()
            })
            .catch((err) => {
                console.log(err)
                // setSubmitted(true)
            })
    }

    if (submitted) {
        return (
            <div className={styles.submitted}>
                <h4>Thank you, <br /> I will be in contact with you as soon as I can.</h4>
                <h4 className={styles.redirect}>Redirecting to <Link href='/'><a className='inTextLink bounce'>Home</a></Link>...</h4>
            </div>
        )
    }

    return (
        <>
            <FormProvider {...methods}>
                <form className={styles.form} onSubmit={methods.handleSubmit(formSubmitHandler)}>
                    <h2 className='visualHidden'>Contact</h2>
                    <div>
                        <FormInput {...{ label: 'name', multiline: false }} />
                        <FormInput {...{ label: 'email', multiline: false }} />
                        <FormInput {...{ label: 'subject', multiline: false }} />
                        <FormInput {...{ label: 'message', multiline: true, rows: 5 }} />
                    </div>
                    <div className={styles.formSubmit}>
                        <Button variant='outlined' type='submit' disabled={!methods.formState.isValid}>Send<SendIcon className={styles.materialIcon} /></Button>

                    </div>
                </form>
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} size='invisible' ref={reCaptchaRef} />
            </FormProvider>
        </>
    )
}

export default Contact
