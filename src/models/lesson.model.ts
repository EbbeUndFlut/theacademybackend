import mongoose, { Schema, Types } from "mongoose";

interface ILesson {
    title: string
    description?: string
    course: Types.ObjectId
    media?: string[]
}
const lessonSchema = new Schema<ILesson>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    media: {
        type: [String]
    }
}, { timestamps: true })

export default mongoose.model<ILesson>('Lesson', lessonSchema)