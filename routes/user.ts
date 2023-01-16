import { Router } from 'express'

import { verifyToken } from '@middlewares/auth'

import {
    accountInformation,
    accountRegister
} from '@controllers/user'

const userRouter = Router()

userRouter.get(
    '/:userId',
    verifyToken,
    accountInformation
)

userRouter.post(
    '/sign-up',
    accountRegister
)

export default userRouter