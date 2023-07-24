"use client";

import SignBox from "./SignBox";
import styles from "./page.module.scss";

export default function Login() {
  return (
    <div className={styles.pageContainer}>
      <SignBox />
    </div>
  );
}
