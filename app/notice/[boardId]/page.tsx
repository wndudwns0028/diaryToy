"use client";
import { Fragment, useEffect, useState } from "react";
import styles from "./page.module.scss";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import { BoardType } from "@/types/boardTypes";
import { Button } from "react-bootstrap";
import SimpleModal from "@/app/components/Utils/SimpleModal";
import PromptModal from "@/app/components/Utils/PromptModal";

export default function BoardNotice({
  params,
}: {
  params: { boardId: string };
}) {
  // state 변수 등록
  const [boardData, setBoardData] = useState<BoardType>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [titleText, setTitleText] = useState<string>("");
  const [contentText, setContentText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 게시글 삭제
  function handleDelete() {
    setOpen(true);
    setTitleText("게시글 삭제");
    setContentText("정말 삭제하시겠습니까?");
  }
  function handlePut() {
    setOpen(true);
    setTitleText("게시글 수정");
    setContentText("게시글을 수정하시겠습니까?");
  }
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(`/api/board/notice/${params.boardId}`);
      const data = await res.json();
      console.log("console" + data);
      setBoardData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <PromptModal
        title={`${titleText}`}
        message={`${contentText}`}
        show={isOpen}
        onConfirm={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
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
        {isLoading ? (
          <p>게시글 불러오는 중..</p>
        ) : (
          <div className={styles.boardBox}>
            <p>{boardData?.content}</p>
          </div>
        )}
        <p> 첨부파일: 준비중</p>
        <div className="divideLine" />
        <div className={styles.btnGroup}>
          <Button
            variant="danger"
            size="lg"
            style={{ marginInline: "1%" }}
            onClick={handlePut}
          >
            글 수정
          </Button>
          <Button
            variant="outline-danger"
            size="lg"
            style={{ marginInline: "1%" }}
            onClick={handleDelete}
          >
            글 삭제
          </Button>
        </div>
      </div>
    </div>
  );
}
