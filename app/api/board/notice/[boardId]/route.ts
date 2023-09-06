import { Notice, getOneNotice } from "@/app/models/Notices";
import { BoardType } from "@/types/boardTypes";
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

export async function DELETE(
  request: Request,
  { params }: { params: { boardId: string } }
) {
  const res = await Notice.findByIdAndDelete(params.boardId);
  return NextResponse.json({ message: "삭제 성공" }, { status: 200 });
}

export async function PUT(request: Request, params: { boardId: string }) {
  const { title, content } = await request.json();
  await Notice.replaceOne({ _id: params.params.boardId }, { title, content });
  return NextResponse.json({ message: "수정 성공" }, { status: 200 });
}
