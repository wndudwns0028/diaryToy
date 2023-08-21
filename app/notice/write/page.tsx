"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import TextEditor from "@/app/components/Utils/TextEditor";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

const Editor = dynamic(() => import("@/app/components/Utils/TextEditor"), {
  ssr: false,
});

export default function Write() {
  // state
  const [htmlStr, setHtmlStr] = useState<string>("");

  return (
    <div className={styles.pageContainer}>
      <div className={styles.BannerWrapper}>
        <h2 className={styles.BannerTitle}>공지사항 작성</h2>
      </div>
      <div className={styles.routeBox}>
        <Link href={"/notice"}>뒤로가기</Link>
      </div>
      <div className={styles.writingBox}>
        <div className={styles.titleArea}>
          <h2 className={styles.title}>글 제목</h2>
          <Form.Control size="lg" type="text" placeholder="공지 제목" />
        </div>

        <div className={styles.writingArea}>
          <h2 className={styles.title}>공지 내용</h2>
          <div className={styles.editor}>
            <TextEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
          </div>
        </div>
        <div className={styles.btnGroup}>버튼 영역</div>
      </div>
    </div>
  );
}
