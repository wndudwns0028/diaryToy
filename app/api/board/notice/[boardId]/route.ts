import { getOneNotice } from "@/app/models/Notices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { boardId: string } }
) {
  const notice = await getOneNotice(params.boardId);
  if (notice && !notice.isViewed) {
    // 이미 조회된 게시물이 아닌 경우에만 조회수 증가
    notice.views += 1;
    notice.isViewed = true;
    await notice.save();
  }
  return NextResponse.json(notice);
}