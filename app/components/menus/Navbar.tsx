import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useSession } from "next-auth/react";
import LoginBtn from "../auth/LoginBtn";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoBox}>
        <Link href={"/"} className={styles.logo}>
          LOGO
        </Link>
      </div>
      <div className={styles.menuBox}>
        <Link href={"/myDiary"} className={styles.menuText}>
          내 다이어리
        </Link>
        <Link href={"/community"} className={styles.menuText}>
          임시 게시판
        </Link>
        <Link href={"/notice"} className={styles.menuText}>
          공지사항
        </Link>
        <Link href={"/notice"} className={styles.menuText}>
          서비스 소개
        </Link>
      </div>
      <div className={styles.accountBox}>
        <LoginBtn />
      </div>
    </div>
  );
}
