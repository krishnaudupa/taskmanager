import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'krishusj@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to app, ${name}. Let me know how you get along with the app.`
    })
}

export const sendcancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'krishusj@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back soon`
    })
}
