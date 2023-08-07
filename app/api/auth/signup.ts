import connectDB from "@/app/lib/db";
import User from "@/app/models/User";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, name } = req.body;
  console.log("저장");
  const existingUser = await User.findOne({ email });
  console.log("유효 선언");
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ name, email, password });
  await user.save();
  if (res.statusCode === 200) {
    res.status(201).json({ message: "Signup successful" });
  } else {
    res.status(500).json({ message: "Signup failed" });
  }
}
