import User from "@/app/models/User";
import connectDB from "@/util/database";
import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }) {
  const email = params.userEmail;
  try {
    await connectDB();
    const user = await User.findOne({ email });
    console.log("server user: " + user);
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "정보 조회 실패" }, { status: 500 });
  }
}
