import mongoose from "mongoose";

export async function connectToDatabase() {
  const MONGO_URI = process.env.MONGO_URI || "";
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}
