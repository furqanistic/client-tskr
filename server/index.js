import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import portfoliosRoute from './routes/portfolio/index.js'
import reviewsRoute from './routes/ratings/index.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
// routes
app.use('/api/auth/', authRoute)
app.use('/api/portfolios/', portfoliosRoute)
app.use('/api/reviews/', reviewsRoute)
// MongoDB connection function
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
  }
}
// listen on port
app.listen(8800, () => {
  connect()
  console.log('Server running at 8800')
})
