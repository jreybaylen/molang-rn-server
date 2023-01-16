import { Schema, model } from 'mongoose'

export type RecordProps = {
    day: string
    userId: string
    category: string
    question: string
    answer: {
        user: string
        system: string
    }
    result: boolean
}

const RecordShema = new Schema<RecordProps>(
    {
        day: String,
        userId: String,
        category: String,
        question: String,
        answer: {
            user: String,
            system: String
        },
        result: Boolean
    },
    { timestamps: true }
)

export default model('Record', RecordShema)