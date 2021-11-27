require('dotenv').config()

const FROM_EMAIL = process.env.FROM_EMAIL
const PASSWORD = process.env.PASSWORD
const TO_EMAIL = process.env.TO_EMAIL

export default async function (req, res) {

    console.log(req.body)

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: FROM_EMAIL,
            pass: PASSWORD,
        }
    })

    let mailData = {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Message From ${req.body.name}`,
        text: `${req.body.message} - return email: ${req.body.email}`,
        html: <div>{req.body.message}</div>
    }

    let info = await transporter.sendMail(mailData, (err, info) => {
        console.log('sendMail')
        if (err) {
            console.log('Error', err)
            res.send(500)
        }
        else {
            console.log('Else', info)
            res.send(200)
        }
    })


}