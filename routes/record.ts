import { Router } from 'express'

import { verifyToken } from '@middlewares/auth'
import { quiz, summary } from '@controllers/record'

const recordRouter = Router()

recordRouter.get(
    '/:userId/:day',
    verifyToken,
    summary
)

recordRouter.post(
    '/:userId',
    verifyToken,
    quiz
)

export default recordRouter