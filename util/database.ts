import { MongoClient, MongoClientOptions } from "mongodb";
export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  // Other properties as needed
}
const url =
  "mongodb+srv://admin:root1234@diary.xx54irx.mongodb.net/mydatabase?retryWrites=true&w=majority";
const options: MongoClientOptions = {}; // No need to specify `useNewUrlParser` here

let connectDB: MongoClient | undefined;

async function connectToDatabase() {
  try {
    if (!connectDB) {
      connectDB = await MongoClient.connect(url, options);
      console.log("Connected to MongoDB successfully!");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Handle the error as needed (e.g., throw, retry, etc.)
  }
}

// Call the function to establish the connection
connectToDatabase();

export { connectDB };
