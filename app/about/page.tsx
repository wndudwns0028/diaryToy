import KakaoMap from "../components/Utils/KakaoMap";
import styles from "./page.module.scss";

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.titleText}>서비스 소개</h2>
        </div>
        <div className="divideLine" />
      </div>
      <div className={styles.textBox}>설명글</div>
      <div className={styles.mapBox}>
        <KakaoMap />
      </div>
    </div>
  );
}
