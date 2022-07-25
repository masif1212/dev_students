import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import createHttpError from 'http-errors'


const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
dotenv.config()

// CORS Policy
app.use(cors())
// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)



app.listen(port, () => {
  console.log(`Server listening at :${port}`)
})



