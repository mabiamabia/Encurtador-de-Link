import mongoose, { Schema, Document } from 'mongoose'

interface IURL extends Document {
    hash: string
    originURL: string
    shortURL: string
    createdAt: Date
}

const URLSchema = new Schema<IURL>({
    hash: {
        type: String,
        required: true,
        unique: true
    },
    originURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const URLModel = mongoose.model<IURL>('URL', URLSchema)
