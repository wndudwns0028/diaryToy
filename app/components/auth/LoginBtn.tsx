"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./LoginBtn.module.scss";
import { useRouter } from "next/navigation";

export default function LoginBtn() {
  const { data: session } = useSession();
  const router = useRouter();
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
        <button
          className={styles.loginBtn}
          onClick={() => router.push(`/login`)}
        >
          로그인
        </button>
      )}
    </>
  );
}
