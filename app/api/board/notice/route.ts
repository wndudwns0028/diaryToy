import { ObjectId, Db } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/util/database";

export async function GET() {
  const db = (await connectDB).db("Boards");
  const queryResult = await db.collection("notice").find().toArray();
  const processedResult = queryResult.map((item) => ({
    _id: String(item._id),
    title: item.title,
    content: item.content,
    views: item.views,
    date: item.date,
  }));
  return NextResponse.json(processedResult);
}
