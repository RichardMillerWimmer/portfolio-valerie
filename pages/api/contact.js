"use strict"

require('dotenv').config()

const FROM_EMAIL = process.env.FROM_EMAIL
const PASSWORD = process.env.PASSWORD
const TO_EMAIL = process.env.TO_EMAIL

export default async function (req, res) {

    // console.log(req.body)

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