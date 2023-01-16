import * as cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as bodyParser from 'body-parser'

import authRouter from '@routes/auth'
import userRouter from '@routes/user'
import scoreRouter from '@routes/score'
import recordRouter from '@routes/record'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(
    bodyParser.json({
        limit: '30mb'
    })
)
app.use(
    bodyParser.urlencoded({
        limit: '30mb',
        extended: true
    })
)
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/score', scoreRouter)
app.use('/record', recordRouter)

mongoose
    .set('strictQuery', true)
    .connect(
        process.env.MONGO_DB as string
    )
    .then(
        () => {
            const PORT = process.env.PORT

            console.log('App is now connected to MongoDB')
            app.listen(PORT, () => {
                console.log(`App is now running using http://localhost:${ PORT }`)
            })
        }
    )
    .catch(
        (ERROR) => {
            console.error('ERROR: ', ERROR)
        }
    )