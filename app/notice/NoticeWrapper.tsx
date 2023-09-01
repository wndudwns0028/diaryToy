"use client";
import { useEffect, useState } from "react";
import { BoardType } from "../../types/boardTypes";
import BoardTable from "../components/BootStrap/BoardTable";

export default function NoticeWrapper() {
  const [boardList, setBoardList] = useState<BoardType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/board/notice");
      const data = await res.json();
      console.log("console" + data);
      setBoardList(data);
    }

    fetchData();
  }, []);
  return (
    <div>
      <BoardTable boardList={boardList} />
    </div>
  );
}
