import { Schema, model } from 'mongoose'

export type UserProps = {
    name: string
    age: number
    birthDay: string
    username: string
    password: string
}

const UserSchema = new Schema<UserProps>(
    {
        name: {
            min: 2,
            max: 50,
            type: String,
            required: true
        },
        age: Number,
        birthDay: String,
        username: {
            min: 2,
            max: 50,
            unique: true,
            type: String,
            required: true
        },
        password: {
            max: 50,
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default model('User', UserSchema)