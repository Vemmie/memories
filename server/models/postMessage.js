import mongoose from 'mongoose';

// kinda like a defining a table in SQL, where you specify column names and data types
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// creates a model based on the schema
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;