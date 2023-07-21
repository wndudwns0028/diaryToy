"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./LoginBtn.module.scss";

export default function LoginBtn() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session ? (
        <div className={styles.loginBox}>
          <p className={styles.loginText}>{session.user?.name}님, 환영합니다</p>
          <button className={styles.loginBtn} onClick={() => signOut()}>
            로그아웃
          </button>
        </div>
      ) : (
        <button className={styles.loginBtn} onClick={() => signIn()}>
          로그인
        </button>
      )}
    </>
  );
}
