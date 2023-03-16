import mongoose, { Schema } from "mongoose";

interface ICourse {
    title: string
    description?: string
}

const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }

}, { timestamps: true })

export default mongoose.model<ICourse>('Course', courseSchema)