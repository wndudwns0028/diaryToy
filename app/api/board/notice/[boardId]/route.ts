import { getOneNotice } from "@/app/models/Notices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { boardId: string } }
) {
  const notice = await getOneNotice(params.boardId);

  return NextResponse.json(notice);
}
