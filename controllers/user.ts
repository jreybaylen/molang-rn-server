import * as bcrypt from 'bcrypt'
import type { Request, Response } from 'express'

import UserModel from '@models/user'

import type { UserProps } from '@models/user'

type UserID = {
    userId: string
}

export async function information (
    req: Request<UserID>,
    res: Response
) {
    try {
        const user = await UserModel.findById(req.params.userId)

        res.status(200).json(user)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}

export async function registration (
    req: Request<{}, {}, UserProps>,
    res: Response
) {
    try {
        const salt = await bcrypt.genSalt()
        const { password, ...rest } = req.body
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = await (
            new UserModel({
                ...rest,
                password: passwordHash
            })
        ).save()

        res.status(201).json(newUser)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}