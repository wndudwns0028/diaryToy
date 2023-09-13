"use client";
import styles from "./page.module.scss";
import Paginations from "../components/BootStrap/Pagination";
import NoticeWrapper from "./NoticeWrapper";
import CustomButton from "../components/BootStrap/CustomButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BoardType } from "@/types/boardTypes";
import { useSession } from "next-auth/react";
import { useUserContext } from "../context/userContext";

export default function Notice() {
  // Session State
  const { data: session } = useSession();
  const { user } = useUserContext();
  const [boardList, setBoardList] = useState<BoardType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // pagination
  // 한 페이지에 보여줄 아이템 갯수
  const itemsCountPerPage = 10;
  // 총 아이템 갯수
  const totalItemsCount = boardList.length;
  // 페이지 변경 핸들러 함수
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // 현재 페이지 항목들만 정제
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsCountPerPage;
    const endIndex = startIndex + itemsCountPerPage;
    return boardList.slice(startIndex, endIndex);
  };

  // 페이지 범위
  const pageRangeDisplayed = Math.ceil(totalItemsCount / 10);
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
    <div className={styles.pageContainer}>
      <div className={styles.pageBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.titleText}>공지사항</h2>
        </div>
        <div className="divideLine" />
        <div className={styles.noticeBox}>
          <div className={styles.tableWrapper}>
            <NoticeWrapper
              boardList={getCurrentPageItems()}
              isLoaded={isLoaded}
              currentPage={currentPage}
              itemsCountPerPage={itemsCountPerPage}
            />
          </div>
          <div className={styles.postBtnWrapper}>
            {(user && user.rule) == "admin" && (
              <Link href={"/notice/write"}>
                <CustomButton variant={"danger"} btnText={"공지 등록"} />
              </Link>
            )}
          </div>
          <div className={styles.pagenationWrapper}>
            <Paginations
              activePage={currentPage} // 현재 페이지
              itemsCountPerPage={itemsCountPerPage} // 한 페이지랑 보여줄 아이템 갯수
              totalItemsCount={totalItemsCount} // 총 아이템 갯수
              pageRangeDisplayed={pageRangeDisplayed} // paginator의 페이지 범위
              onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
            />
          </div>
        </div>
      </div>
    </div>
  );
}
