import { Router } from 'express'

import { verifyToken } from '@middlewares/auth'
import { recordQuiz } from '@controllers/record'

const recordRouter = Router()

recordRouter.get(
    '/',
    verifyToken,
    recordQuiz
)

export default recordRouter