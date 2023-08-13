import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },

  client: {
    // Linking the project to the user who posted it
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This refers to the User model
    required: true,
  },
  Category: {
    type: String,
    required: true,
    enum: [
      'Web & App design',
      'Content Writing',
      'Digital Marketing',
      'Software Development',
      'Graphics & Design',
    ],
  },
  ProjectName: {
    type: String,
    required: true,
    trim: true,
  },
  Location: {
    type: String,
    required: true,
    trim: true,
  },
  RandomNumber: {
    type: Number,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
    enum: ['Fixed', 'Hourly'],
  },
})
export default mongoose.model('Project', ProjectSchema)
