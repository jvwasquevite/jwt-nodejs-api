import { Request, Response } from 'express'
import { ResetPasswordService } from '../services/ResetPasswordService'

/**
 * Receive request and response from route layer
 * Pass needed request data to service layer
 * Returns successful response
 *
 * @author João Wasquevite
 */

class ResetPasswordController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const { password, confirmPassword } = request.body

    const resetPasswordService = new ResetPasswordService()

    await resetPasswordService.execute({
      id: user_id,
      password,
      confirmPassword,
    })

    return response.status(200).json({
      message: 'Password successfully reseted',
    })
  }
}

export { ResetPasswordController }
