import type { Request, Response } from 'express'

import RecordModel from '@models/record'

import type { RecordProps } from '@models/record'

type UserID = {
    userId: string
}

type RecordQuiz = {
    day: string
    record: {
        timezone: string
    } & Omit<RecordProps, 'day' | 'userId'>
}

type Summary = {
    day: string
} & UserID

export async function summary (
    req: Request<Summary>,
    res: Response
) {
    try {
        const { userId, day } = req.params
        const records = await RecordModel.find({ userId, day }).sort({ createdAt: 'desc' })

        res.status(200).json(records)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}

export async function quiz (
    req: Request<UserID, {}, RecordQuiz>,
    res: Response
) {
    try {
        const { userId } = req.params
        const {
            day,
            record: {
                timezone,
                ...rest
            }
        } = req.body
        const newRecord = await RecordModel.findOneAndUpdate(
            {
                day,
                userId,
                category: rest.category,
                question: rest.question
            },
            {
                day,
                userId,
                ...rest
            },
            {
                new: true,
                upsert: true
            }
        )

        res.status(201).json(newRecord)
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}