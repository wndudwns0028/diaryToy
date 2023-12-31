import Head from "next/head";
import styles from "./page.module.scss";
import Slides from "./components/BootStrap/Slides";

export default function Home() {
  return (
    <>
      <Head>
        <title>함께 쓰는 일기 빵준다이어리</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.pageContainer}>
          <div className={styles.bannerBox}>
            <Slides />
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.serviceMenu}>서비스 소개 링크</div>
            <div className={styles.serviceMenu}>서비스 소개 링크</div>
          </div>
        </div>
      </main>
    </>
  );
}
