import mongoose, { ConnectOptions, Mongoose } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI || "";

const connectDB = async (): Promise<Mongoose | undefined> => {
  const options: ConnectOptions = {
    dbName: "Diary",
  };

  try {
    const connection = await mongoose.connect(MONGODB_URI, options);
    console.log("MongoDB connected");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return undefined;
  }
};

export default connectDB;
