import connectDB from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";

export async function POST(req: Request, res: Response) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDB("User");
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { message: "사용자가 등록되었습니다." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "사용자 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
