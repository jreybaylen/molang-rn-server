import { Router } from 'express'

import { accountValidator } from '@controllers/auth'

const leaderBoardRouter = Router()

leaderBoardRouter.get(
    '/:date',
    accountValidator
)

export default leaderBoardRouter