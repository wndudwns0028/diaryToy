import { ObjectId, Db } from "mongodb";
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Notices from "@/app/models/Notices";

export async function GET(req: NextRequest) {
  try {
    if (!_mongo) {
      throw new Error("MongoDB connection not established.");
    }

    const client = await _mongo;
    const db: Db = client.db("Boards");
    const noticeCollection = db.collection("notice");
    let result = noticeCollection.find().toArray();

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json("error", {
      status: 500,
    });
  }
}
