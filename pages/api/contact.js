require('dotenv').config()

const FROM_EMAIL = process.env.FROM_EMAIL
const PASSWORD = process.env.PASSWORD
const TO_EMAIL = process.env.TO_EMAIL

export default async function (req, res) {

    console.log(req.body)

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: FROM_EMAIL,
            pass: PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Message From ${req.body.name}`,
        text: `${req.body.message} - return email: ${req.body.email}`,
        html: <div>{req.body.message}</div>
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log('Error', err)
        else
            console.log('Else', info)
    })

    res.status(200)

}