"use client";
import { Fragment, useEffect, useState } from "react";
import styles from "./page.module.scss";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import { BoardType } from "@/types/boardTypes";
import { Button } from "react-bootstrap";
import SimpleModal from "@/app/components/Utils/SimpleModal";
import PromptModal from "@/app/components/Utils/PromptModal";
import { useRouter } from "next/navigation";
import DOMPurify from "dompurify";

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
  const router = useRouter();

  // 게시글 삭제
  function handleDelete() {
    setOpen(true);
    setTitleText("게시글 삭제");
    setContentText("정말 삭제하시겠습니까?");
  }

  const deleteData = async () => {
    try {
      const res = await fetch(`/api/board/notice/${params.boardId}`, {
        method: "DELETE",
        body: JSON.stringify({
          boardId: params.boardId,
        }),
      });
      if (res.status === 200) {
        router.push("/notice");
      } else {
        console.log("Error deleting board data");
      }
    } catch (err) {
      console.error("Error deleting board data:", err);
    } finally {
      setOpen(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(`/api/board/notice/${params.boardId}`);
      const data = await res.json();
      setBoardData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <PromptModal
        title={titleText}
        message={contentText}
        show={isOpen}
        isconfirm={deleteData}
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
            {/* <p>{boardData?.content}</p> */}
            {process.browser && (
              <div
                style={{
                  width: "60vw",
                  whiteSpace: "normal",
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(boardData?.content)),
                }}
              />
            )}

            {/* } */}
          </div>
        )}
        <p> 첨부파일: 준비중</p>
        <div className="divideLine" />
        <div className={styles.btnGroup}>
          <Button
            variant="danger"
            size="lg"
            style={{ marginInline: "1%" }}
            onClick={() => {
              router.push(`/notice/update/${params.boardId}`);
            }}
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
