import { ObjectId, Db } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/util/database";
import { Notice, getAllNotices } from "@/app/models/Notices";

export async function GET() {
  await connectDB();
  const notices = await getAllNotices();

  return NextResponse.json(notices);
}

export async function POST(req: Request) {
  const { title, content } = await req.json();
  let date = new Date();
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}.${month}.${day}`;
  let views = 0;
  await connectDB();
  await Notice.create({ title, content, date: formattedDate, views });
  return NextResponse.json({ message: "게시물 등록완료" }, { status: 201 });
}
