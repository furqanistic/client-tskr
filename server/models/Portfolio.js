import mongoose from 'mongoose'

const PortfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  link: String,
  image: String,
  addedDate: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Portfolio', PortfolioSchema)
