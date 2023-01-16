import { Router } from 'express'

import { verifyToken } from '@middlewares/auth'

import * as topScore from '@controllers/score'

const scoreRouter = Router()

scoreRouter.get(
    '/user/:userId',
    verifyToken,
    topScore.basedOnUser
)

scoreRouter.get(
    '/:day',
    verifyToken,
    topScore.basedOnDay
)

scoreRouter.get(
    '/:day/:category',
    verifyToken,
    topScore.basedOnCategory
)

export default scoreRouter