import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/db";
import User from "../../models/User";

connectDB();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  console.log("겟");

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    alert("login");
    // res.status(200).json({ message: "Login successful" });
  } catch (error) {
    alert("error");
    // res.status(500).json({ message: "Login failed" });
  }
}
