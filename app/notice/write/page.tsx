"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import SimpleModal from "@/app/components/Utils/SimpleModal";
import { useRouter } from "next/navigation";

export default function Write() {
  // 게시물 정보 state
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  // api 요청 메모이제이션
  const apiRequestBody = useMemo(
    () =>
      JSON.stringify({
        title: title,
        content: content,
      }),
    [title, content]
  );

  // 게시물 초기화
  async function setEmptyState() {
    setTitle("");
    setContent("");
  }

  // 게시물 등록 handlers
  const handleSignup = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const res = await fetch("/api/board/notice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: apiRequestBody,
        });
        if (res.status === 201) {
          await setEmptyState();
          setOpen(true);
        }
      } catch (err) {
        console.log("공지 등록 오류: " + err);
      }
    },
    [apiRequestBody]
  );

  return (
    <div className={styles.pageContainer}>
      <SimpleModal
        title="등록 성공"
        message="게시글이 성공적으로 등록되었습니다."
        show={isOpen}
        onHide={() => {
          setOpen(false);
          router.push("/notice");
        }}
      />
      <div className={styles.BannerWrapper}>
        <h2 className={styles.BannerTitle}>공지사항 작성</h2>
      </div>
      <div className={styles.routeBox}>
        <Link href={"/notice"}>뒤로가기</Link>
      </div>
      <div className={styles.writingBox}>
        <div className={styles.titleArea}>
          <h2 className={styles.title}>글 제목</h2>
          <Form.Control
            size="lg"
            type="text"
            placeholder="공지 제목"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.writingArea}>
          <h2 className={styles.title}>공지 내용</h2>
          <div className={styles.editor}>
            <Form.Control
              as="textarea"
              placeholder="글 내용 작성"
              style={{ height: "80vh" }}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles.fileAddArea}>
            첨부파일 (준비중) : <input type="file" />
          </div>
        </div>
        <div className={styles.btnGroup}>
          <Button
            variant="danger"
            size="lg"
            style={{ marginInline: "1%" }}
            onClick={handleSignup}
          >
            공지 등록
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
