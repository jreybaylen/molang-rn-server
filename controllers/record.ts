import type { Request, Response } from 'express'

export async function recordQuiz (
    req: Request,
    res: Response
) {
    try {
        res.status(200).json({
            message: 'Record Quiz'
        })
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}