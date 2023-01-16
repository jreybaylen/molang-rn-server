import { Router } from 'express'

import { verifyToken } from '@middlewares/auth'

import { information, registration } from '@controllers/user'

const userRouter = Router()

userRouter.get(
    '/:userId',
    verifyToken,
    information
)

userRouter.post(
    '/',
    registration
)

export default userRouter