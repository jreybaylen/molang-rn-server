import { Router } from 'express'

import { accountValidator } from '@controllers/auth'

const authRouter = Router()

authRouter.get(
    '/sign-in',
    accountValidator
)

export default authRouter