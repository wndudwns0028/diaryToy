"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./page.module.scss";

export default function Login() {
  const { data: session } = useSession();
  return (
    <div className={styles.pageContainer}>
      {session ? (
        <button onClick={() => signOut()}>로그아웃</button>
      ) : (
        <button onClick={() => signIn()}>로그인</button>
      )}
    </div>
  );
}
