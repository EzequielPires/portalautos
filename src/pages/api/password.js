import { useRouter } from 'next/router';

const nodemailer = require('nodemailer')

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'email-ssl.com.br',
    port: '587',
    auth: {
      user: 'noreply@portalcatalao.com.br',
      pass: 'Portaldeveloper228687535?'
    }
  })

  transporter.sendMail({
    from: 'noreply@portalcatalao.com.br',
    to: req.body.email,
    subject: "Reset password ✔",
    text: "Hello world?",
    html: `<a href='http://portalautos.com.br/reset-password?token=${req.body.token}'>Reset password</a>`,
  }).then((response) => {
    res.send(response) 
  })
    .catch((error) => { res.send(error) });
}
