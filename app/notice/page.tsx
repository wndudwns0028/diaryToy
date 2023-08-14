"use client";

import { MongoClient } from "mongodb";
import styles from "./page.module.scss";
import BoardTable from "../components/BootStrap/BoardTable";
import Paginations from "../components/BootStrap/Pagination";

export default function Notice() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.titleText}>공지사항</h2>
        </div>
        <div className="divideLine" />
        <div className={styles.noticeBox}>
          <div className={styles.tableWrapper}>
            <BoardTable />
          </div>
          <div className={styles.pagenationWrapper}>
            <Paginations />
          </div>
        </div>
      </div>
    </div>
  );
}
