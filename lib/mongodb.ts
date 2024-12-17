import mongoose from 'mongoose';

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI! || "mongodb://localhost:27017/Yagleel");
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
} 