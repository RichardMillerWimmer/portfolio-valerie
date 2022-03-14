"use strict"
require('dotenv').config()

import type { NextApiRequest, NextApiResponse } from 'next'
import { SentMessageInfo } from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/sendmail-transport'

import type { FormSubmit } from '../contact'

const FROM_EMAIL = process.env.FROM_EMAIL
const PASSWORD = process.env.PASSWORD
const TO_EMAIL = process.env.TO_EMAIL


export default async function (req: NextApiRequest, res: NextApiResponse) {

    const formData: FormSubmit = req.body
    const {name, email, subject, message, token} = formData

    const validateReCaptchaToken = async (token: string): Promise<Boolean> => {
        const secret = process.env.RECAPTCH_SECRET_KEY
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {method: 'POST'})
        const data = await response.json()
        console.log('data', data)
        return data.success
    }

    const validate = await validateReCaptchaToken(token)
    if(!validate){
        res.status(400).send("error")
        return
    }

    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: FROM_EMAIL,
            pass: PASSWORD,
        }
    })

    let mailOptions: MailOptions = {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `${subject}`,
        text: `${message} - from ${name} - return email: ${email}`,
        html: `<div>${message}</div>`
    }

    await transporter.sendMail(mailOptions, (err: SentMessageInfo, info: SentMessageInfo) => {
        console.log('sendMail')
        if (err) {
            console.log('Error', err)
            res.send(500)
        }
        else {
            console.log('Info', info)
        }
    })
    res.send(200)

}