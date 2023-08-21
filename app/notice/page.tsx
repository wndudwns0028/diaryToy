import styles from "./page.module.scss";
import Paginations from "../components/BootStrap/Pagination";
import NoticeWrapper from "./NoticeWrapper";
import CustomButton from "../components/BootStrap/CustomButton";
import Link from "next/link";

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
            <NoticeWrapper />
          </div>
          <div className={styles.postBtnWrapper}>
            <Link href={"/notice/write"}>
              <CustomButton variant={"danger"} btnText={"공지 등록"} />
            </Link>
          </div>
          <div className={styles.pagenationWrapper}>
            <Paginations />
          </div>
        </div>
      </div>
    </div>
  );
}
