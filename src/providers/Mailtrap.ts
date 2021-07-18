import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class Mailtrap {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '4d27ebf54b2b8b',
        pass: '666d3586155e9d',
      },
    })
  }

  async sendEmail(email: string, token: string) {
    await this.transporter.sendMail({
      from: 'app@nlwvaloriza.com',
      to: email,
      subject: 'Password reset request',
      html: `<h3>Your token has arrived!</h3><p>${token}</p><span>Valid for single use.<span>`,
    })
  }
}
