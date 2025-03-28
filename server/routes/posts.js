import express from 'express';

// imports getPosts function
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

// routes 

// call back function and in the it will always have request and response 
// no logic in here it complicates requests with the logic
router.get('/', getPosts)

export default router;