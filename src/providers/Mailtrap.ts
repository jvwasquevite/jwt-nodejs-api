import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

/**
 * Connects with Mailtrap sendbox service using dotenv
 * Send email method used on forgot password POST request
 *
 * @author João Wasquevite
 */

export class Mailtrap {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
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
