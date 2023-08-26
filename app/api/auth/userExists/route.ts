import connectDB from "@/util/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();
    return NextResponse.json({});
  } catch (error) {
    console.log("에러 발생: " + error);
  }
}
