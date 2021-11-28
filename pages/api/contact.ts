"use strict"
require('dotenv').config()

import type { NextApiRequest, NextApiResponse } from 'next'
import type { FormSubmit } from '../contact'



const FROM_EMAIL = process.env.FROM_EMAIL
const PASSWORD = process.env.PASSWORD
const TO_EMAIL = process.env.TO_EMAIL

export default async function (req: NextApiRequest, res: NextApiResponse) {

    const formData: FormSubmit = req.body
    formData.token = ''
    console.log(req.body)

    const validateReCaptchaToken = async (token: string): Promise<Boolean> => {
        const secret = process.env.RECAPTCH_SECRET_KEY
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {method: 'POST'})
        const data = await response.json()
        return data.success
    }

    const validate = await validateReCaptchaToken(req.body.token)
    if(!validate){
        res.send(400)
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
    // console.log(nodemailer)
    // console.log(transporter)

    let mailOptions = {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Message From ${req.body.name}`,
        text: `${req.body.message} - return email: ${req.body.email}`,
        html: `<div>${req.body.message}</div>`
    }

    // console.log(mailData)

    await transporter.sendMail(mailOptions, (err, info) => {
        // console.log('sendMail')
        if (err) {
            // console.log('Error', err)
            res.send(500)
        }
        else {
            // console.log('Info', info)
        }
    })
    res.send(200)

}