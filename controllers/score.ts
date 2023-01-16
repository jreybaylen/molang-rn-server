import type { Request, Response } from 'express'

import RecordModel from '@models/record'

type TopScore = {
    day: string
    category: string
}

type UserId = {
    userId: string
}

export async function basedOnUser (
    req: Request<UserId>,
    res: Response
) {
    try {
        const { userId } = req.params
        const scores = await RecordModel.find({ userId })

        res.status(200).json(scores)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}

export async function basedOnDay (
    req: Request<Pick<TopScore, 'day'>>,
    res: Response
) {
    try {
        const { day } = req.params
        const scores = await RecordModel.find({ day })

        res.status(200).json(scores)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}

export async function basedOnCategory (
    req: Request<TopScore>,
    res: Response
) {
    try {
        const { day, category } = req.params
        const scores = await RecordModel.find({ day, category })

        res.status(200).json(scores)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}