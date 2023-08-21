"use client";

import Carousel from "react-bootstrap/Carousel";
import Test from "@/public/static/images/test.png";
import Image from "next/image";
import { Button, SSRProvider } from "react-bootstrap";
import styles from "./Slides.module.scss";
import Box from "@/public/static/images/Box.png";
import Camera from "@/public/static/images/Camera.png";
import Book from "@/public/static/images/Book.png";
import { useEffect, useRef, useState } from "react";

function Slides() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [topPosition, setTopPosition] = useState(0);
  const amplitude = 20; // 움직임의 최대 높이

  useEffect(() => {
    const animationInterval = setInterval(() => {
      // 위아래 둥둥 떠다니는 애니메이션 로직 설정
      setTopPosition((prevTopPosition) =>
        prevTopPosition === 0 ? amplitude : 0
      );
    }, 1000); // 1초마다 위치 갱신

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <Carousel
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: "25px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel.Item>
        <div className={styles.bannerBox}>
          <div className={styles.titleBox}>
            <div className={styles.titleText}>서비스 타이틀</div>
            <div className={styles.subTitle}>서브 타이트 텍스트 위치</div>
            <div className={styles.linkButton}>
              {" "}
              <Button variant="light" className={styles.titleBtn}>
                서비스 자세히보기 &nbsp; &gt;
              </Button>
            </div>
          </div>
          <div className={styles.bannerImage}>
            <Image
              src={Box}
              alt=""
              width={400}
              height={400}
              ref={imageRef}
              style={{
                transform: `translateY(-${topPosition}px)`,
                transition: "transform 1s ease-in-out",
              }}
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.bannerBox}>
          <div className={styles.titleBox}>
            <div className={styles.titleText}>서비스 타이틀</div>
            <div className={styles.subTitle}>서브 타이트 텍스트 위치</div>
            <div className={styles.linkButton}>
              <Button variant="light" className={styles.titleBtn}>
                서비스 자세히보기 &nbsp; &gt;
              </Button>
            </div>
          </div>
          <div className={styles.bannerImage}>
            <Image
              src={Book}
              alt=""
              width={400}
              height={400}
              ref={imageRef}
              style={{
                transform: `translateY(-${topPosition}px)`,
                transition: "transform 1s ease-in-out",
              }}
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.bannerBox}>
          <div className={styles.titleBox}>
            <div className={styles.titleText}>서비스 타이틀</div>
            <div className={styles.subTitle}>서브 타이트 텍스트 위치</div>
            <div className={styles.linkButton}>
              <Button variant="light" className={styles.titleBtn}>
                서비스 자세히보기 &nbsp; &gt;{" "}
              </Button>
            </div>
          </div>
          <div className={styles.bannerImage}>
            <Image
              src={Camera}
              alt=""
              width={400}
              height={400}
              ref={imageRef}
              style={{
                transform: `translateY(-${topPosition}px)`,
                transition: "transform 1s ease-in-out",
              }}
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
