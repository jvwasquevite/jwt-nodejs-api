/**
 * Creates a custom type variable inside request
 * by overriding express types package
 */

declare namespace Express {
  export interface Request {
    user_id: string
  }
}
