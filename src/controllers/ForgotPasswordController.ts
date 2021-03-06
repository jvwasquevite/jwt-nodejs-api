import { Request, Response } from 'express'
import { ForgotPasswordService } from '../services/ForgotPasswordService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns successful response
 *
 * @author João Wasquevite
 */

class ForgotPasswordController {
  async handle(request: Request, response: Response) {
    const { email } = request.body

    const forgotPasswordService = new ForgotPasswordService()
    await forgotPasswordService.execute(email)

    return response.status(200).json({
      message: `Token successfully sent to ${email}`,
    })
  }
}

export { ForgotPasswordController }
