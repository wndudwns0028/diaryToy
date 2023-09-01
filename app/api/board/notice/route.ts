import { ObjectId, Db } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/util/database";
import { getAllNotices } from "@/app/models/Notices";

export async function GET() {
  await connectDB("Boards");
  const notices = await getAllNotices();

  return NextResponse.json(notices);
}

export async function POST() {}
