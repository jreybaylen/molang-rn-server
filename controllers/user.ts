import * as bcrypt from 'bcrypt'
import type { Request, Response } from 'express'

import UserModel from '@models/user'

export async function accountInformation (
    req: Request,
    res: Response
) {
    try {
        res.status(200).json({
            message: 'Account Information'
        })
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}

export async function accountRegister (
    req: Request,
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