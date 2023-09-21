"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useSession } from "next-auth/react";
import LoginBtn from "./LoginBtn";
import CustomButton from "../BootStrap/CustomButton";
import AccountBox from "./AccountBox";
import logoPic from "@/public/static/images/logoPic.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logoBox}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logoPic} alt="logo" width={150} height={150} />
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
        <Link href={"/about"} className={styles.menuText}>
          서비스 소개
        </Link>
      </div>
      <div className={styles.accountBox}>
        <AccountBox />
      </div>
    </div>
  );
}
