import type { Request, Response } from 'express'

export async function accountValidator (
    req: Request,
    res: Response
) {
    try {
        res.status(200).json({
            message: 'Awesome API'
        })
    } catch (ERROR: any) {
        res.status(500).json({
            error: ERROR.message
        })
    }
}