import mongoose, { Document } from "mongoose";
const { Schema } = mongoose

interface IUser {
    email: string
    password: string
    avatar: string
    role?: string
    lastLogin?: Date
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    avatar: {
        type: String,
        required: true
    }

},
    {
        timestamps: true
    }
)

export default mongoose.model<IUser>('User', userSchema)