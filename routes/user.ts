import { Router } from 'express'

import {
    accountInformation,
    accountRegister
} from '@controllers/user'

const userRouter = Router()

userRouter.get(
    '/:id',
    accountInformation
)

userRouter.post(
    '/sign-up',
    accountRegister
)

export default userRouter