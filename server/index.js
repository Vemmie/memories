import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

// loads the express about
const app = express();

app.use('/posts', postRoutes);

// adds middleware to the application's request processing pipeline (express replaces body parser now)
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// https://www.mongodb.com/cloud/atlas for cloud sever
// later on before  deployment create enviromental variable to store creditionals
const CONNECTION_URL = 'mongodb+srv://Vemmie:Vemmie123@cluster0.2qimbbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// 5000 is temp and heroku will populate it automatically
const PORT = process.env.PORT || 5000;

// connects to datebase (url, object with all the options)
mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true })
    // returns a promise if success full
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // if sucessfully listen it returns the callback function
    .catch((error) => console.log(error.message));
