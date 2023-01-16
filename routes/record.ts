import { Router } from 'express'

import { verifyToken } from '@middlewares/auth'
import { recordQuiz } from '@controllers/record'

const recordRouter = Router()

recordRouter.post(
    '/:userId',
    verifyToken,
    recordQuiz
)

export default recordRouter