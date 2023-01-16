import { Router } from 'express'

import { authentication } from '@controllers/auth'

const authRouter = Router()

authRouter.post(
    '/',
    authentication
)

export default authRouter