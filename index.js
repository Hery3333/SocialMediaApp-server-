import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv";

import AuthRoute from './routes/AuthRoutes.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'



const app = express();

app.use(express.json())
app.use(cors())

dotenv.config();

  // usage of routes
  app.use('/auth', AuthRoute)
  app.use('/user', UserRoute)
  app.use('/post', PostRoute)

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


