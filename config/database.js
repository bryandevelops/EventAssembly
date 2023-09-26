import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log(`connected to ${mongoose.connection.name} at ${mongoose.connection.host}:${mongoose.connection.port}`)
})