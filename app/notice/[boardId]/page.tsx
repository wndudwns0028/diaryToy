import { Fragment } from "react";
import styles from "./page.module.scss";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";

export default function BoardNotice({
  params,
}: {
  params: { boardId: string };
}) {
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
          <h2 className={styles.titleText}>board: {params.boardId}</h2>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoWrapper}>
            <p>2000.00.00</p>
            <div>
              <FaEye />
              <span style={{ marginLeft: "0.5em" }}>100</span>
            </div>
          </div>
        </div>
        <div className="divideLine" />
        <div className={styles.boardBox}>
          <p>페이지 내용</p>
        </div>
      </div>
    </div>
  );
}
