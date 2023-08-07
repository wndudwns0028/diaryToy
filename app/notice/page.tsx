import { MongoClient } from "mongodb";
import styles from "./page.module.scss";

export default async function Notice() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.titleText}>공지사항</h2>
        </div>
        <div className={styles.noticeBox}>
          <div className={styles.tableWrapper}></div>
          <div className={styles.pagenationWrapper}></div>
        </div>
      </div>
    </div>
  );
}
