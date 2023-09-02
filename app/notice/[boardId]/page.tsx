"use client";
import { Fragment, useEffect, useState } from "react";
import styles from "./page.module.scss";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import { BoardType } from "@/types/boardTypes";

export default function BoardNotice({
  params,
}: {
  params: { boardId: string };
}) {
  const [boardData, setBoardData] = useState<BoardType>();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/board/notice/${params.boardId}`);
      const data = await res.json();
      console.log("console" + data);
      setBoardData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageBox}>
        <div className={styles.routeBox}>
          <Link
            href={"/notice"}
            style={{ textDecoration: "none", color: "gray" }}
          >
            {" "}
            &lt; 뒤로가기
          </Link>
        </div>
        <div className={styles.titleBox}>
          <h2 className={styles.titleText}>{boardData?.title}</h2>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoWrapper}>
            <p>{boardData?.date}</p>
            <div>
              <FaEye />
              <span style={{ marginLeft: "0.5em" }}>{boardData?.views}</span>
            </div>
          </div>
        </div>
        <div className="divideLine" />
        <div className={styles.boardBox}>
          <p>{boardData?.content}</p>
        </div>
      </div>
    </div>
  );
}
