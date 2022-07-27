import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    service: 'Gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
  debug: true, // show debug output
  logger: true // log information in console
  });

export default transporter
