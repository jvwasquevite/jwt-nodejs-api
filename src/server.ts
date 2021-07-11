import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { router } from './routes'

import './database'

const app = express()
app.use(express.json())

// Middleware usado para inserir a rota no express
app.use(router)

// Middleware de tratamento de erro
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    // Verifica se é do tipo do erro que foi lançado ou não
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
