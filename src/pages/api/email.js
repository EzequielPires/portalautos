import { useRouter } from 'next/dist/client/router';

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
        subject: "Active email ✔",
        text: "Hello world?",
        html: `<a href='http://portalautos.com.br/login/active_email?token=${req.body.token}'>Reset password</a>`,
    }).then((response) => {
        res.send(response)
    })
        .catch((error) => { res.send(error) });
}