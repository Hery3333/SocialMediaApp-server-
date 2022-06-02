import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()
const PORT = process.env.PORT
mongoose.connect(process.env.DATABASE_URI)
    .then(()=> console.log('Database connected'))
    .then(()=> app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
    .catch(err => console.log(err))