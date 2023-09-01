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
    const user = await User.findOne({ email });
    if (user.length === 0) {
      // 사용가능
      await User.create({ name, email, password: hashedPassword });
      return NextResponse.json(
        { message: "사용자가 등록되었습니다." },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "중복된 이메일 오류" },
        { status: 501 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "사용자 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
