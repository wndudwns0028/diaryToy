import DrawingBoard from "./DrawingBoard";
import styles from "./page.module.scss";

export default function Community() {
  return (
    <div className={styles.pageContainer}>
      <DrawingBoard />
    </div>
  );
}
