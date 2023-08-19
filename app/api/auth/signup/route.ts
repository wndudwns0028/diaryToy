import connectDB from "@/lib/db";
import UserModel from "@/app/models/User";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, name } = req.body;
  console.log("저장");
  try {
    const existingUser = await UserModel.findOne({ email });
    console.log("유효 선언");
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new UserModel({ name, email, password });
    await user.save();
    return res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error while signing up:", error);
    return res.status(500).json({ message: "Signup failed" });
  }
}
