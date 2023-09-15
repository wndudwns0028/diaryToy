"use client";
import SimpleModal from "@/app/components/Utils/SimpleModal";
import styles from "../../write/page.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BoardType } from "@/types/boardTypes";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Update({ params }: { params: { boardId: string } }) {
  // state 변수 등록
  const [boardData, setBoardData] = useState<BoardType>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [titleText, setTitleText] = useState<string>(boardData?.title);
  const [contentText, setContentText] = useState<string>(boardData?.content);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // update 함수
  async function handleUpdate() {
    try {
      console.log("Client: " + boardData.title);
      const res = await fetch(`/api/board/notice/${params.boardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: boardData.title,
          content: boardData.content,
          views: boardData.views,
          date: boardData.date,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        console.log(data.message);
        setOpen(true);
      }
    } catch (err) {
      console.error("Error deleting board data:", err);
    }
  }

  // fetch data
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

  useEffect(() => {
    setBoardData((boardData) => ({
      ...boardData,
      title: titleText,
      content: contentText,
    }));
  }, [titleText, contentText]);

  return (
    <div className={styles.pageContainer}>
      <SimpleModal
        title="수정 성공"
        message="게시글이 성공적으로 수정되었습니다."
        show={isOpen}
        onHide={() => {
          setOpen(false);
          router.push("/notice");
        }}
      />
      <div className={styles.BannerWrapper}>
        <h2 className={styles.BannerTitle}>공지사항 수정</h2>
      </div>
      <div className={styles.routeBox}>
        <Link href={`/notice/${params.boardId}`}>뒤로가기</Link>
      </div>
      <div className={styles.writingBox}>
        {isLoading ? (
          <p>게시글 불러오는 중..</p>
        ) : (
          <>
            <div className={styles.titleArea}>
              <h2 className={styles.title}>글 제목</h2>
              <Form.Control
                size="lg"
                type="text"
                placeholder="공지 제목"
                onChange={(e) => setTitleText(e.target.value)}
                defaultValue={boardData?.title}
              />
            </div>
            <div className={styles.writingArea}>
              <h2 className={styles.title}>공지 내용</h2>
              <div className={styles.editor}>
                <Form.Control
                  as="textarea"
                  placeholder="글 내용 작성"
                  style={{ height: "80vh" }}
                  onChange={(e) => setContentText(e.target.value)}
                  defaultValue={boardData?.content}
                />
              </div>
              <div className={styles.fileAddArea}>첨부파일 : 준비중</div>
            </div>
          </>
        )}
        <div className={styles.btnGroup}>
          <Button
            variant="danger"
            size="lg"
            style={{ marginInline: "1%" }}
            onClick={handleUpdate}
          >
            공지 수정
          </Button>
          <Button
            variant="outline-danger"
            size="lg"
            style={{ marginInline: "1%" }}
          >
            취소하기
          </Button>
        </div>
      </div>
    </div>
  );
}
