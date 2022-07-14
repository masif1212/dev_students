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


// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

// Error Handler
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.render('error_40x', { error });
});

app.listen(port, () => {
  console.log(`Server listening at :${port}`)
})



