// lib/db.ts
import mongoose, { ConnectOptions } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI || "";

const connectDB = async () => {
  const options: ConnectOptions = {
    // Add any other options you need here
    dbName: "User",
  };

  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
