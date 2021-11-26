require('dotenv').config()

const { EMAIL, PASSWORD } = process.env

export default function (req, res) {
    console.log(req.body)
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
        secure: true,
    })
    

}