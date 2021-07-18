import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { router } from './routes'
import * as dotenv from 'dotenv'

import './database'

// Initializating express to work with JSON
const app = express()
app.use(express.json())

// Dotenv default config
dotenv.config({ path: __dirname + '/.env' })

// Middleware to insert routes
app.use(router)

/**
 * Middleware for error handling
 * Verifies if it's a custom throwed error or a internal server one
 */
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  }
)

app.listen(3000, () => console.log('Server is running'))
