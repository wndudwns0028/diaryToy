"use client";
import { useEffect, useState } from "react";
import { BoardType } from "../../types/boardTypes";
import BoardTable from "../components/BootStrap/BoardTable";
import Spinner from "react-bootstrap/Spinner";

export default function NoticeWrapper() {
  const [boardList, setBoardList] = useState<BoardType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function fetchData() {
    setIsLoaded(false);
    const res = await fetch("/api/board/notice");
    const data = await res.json();
    console.log("console" + data);
    setBoardList(data);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoaded ? (
        <BoardTable boardList={boardList} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}
