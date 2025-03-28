import PostMessage from '../models/postMessage.js';

// exports function called getPosts, which is used for the Express route handler
// all routes will take in a request and response

// async because PostMessage is async and takes time and will need the await
export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const create = async (req, res) => {
    const post = req.body;

    const newPost = newPostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}