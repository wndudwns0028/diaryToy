import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    let db = ((await connectDB) as MongoClient).db("User");
    await db.collection("users").insertOne(req.body);
    res.status(200).json("성공");
  }
}
