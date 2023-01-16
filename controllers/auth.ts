import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

import UserModel from '@models/user'

import type { MongooseError } from 'mongoose'
import type { Request, Response } from 'express'

type SignInProps = {
    username: string
    password: string
}

export async function authentication (
    req: Request<{}, {}, SignInProps>,
    res: Response
) {
    try {
        const { username, password } = req.body
        const user = await UserModel.findOne({ username })

        if (user) {
            const matchUser = await bcrypt.compare(password, user.password)

            if (matchUser) {
                const { password, ...restUser } = user
                const token = jwt.sign(
                    { id: restUser._id },
                    process.env.SECRET_KEY as string
                )
                
                return res.status(200).json({
                    token,
                    user: (restUser as typeof restUser & { _doc: typeof user })._doc
                })
            }

            return res.status(400).json({
                error: 'Invalid Credentials'
            })
        }

        res.status(400).json({
            error: 'User Not Found!'
        })
    } catch (ERROR: any) {
        res.status(500).json({
            error: (ERROR as MongooseError).message
        })
    }
}