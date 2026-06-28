import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ffabhishek116_db_user:BBhA7xWsfOLVGVBh@cluster0.s2xle5p.mongodb.net/ExpenseTracker')
    .then(() => {
      console.log("MongoDB connected successfully");
    })
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};