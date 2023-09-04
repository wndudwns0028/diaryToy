"use client";
import { Fragment, useEffect, useRef } from "react";
import styles from "./KakaoMap.module.scss";

export default function KakaoMap() {
  useEffect(() => {
    // script 태그를 직접 추가
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = true; // 순서 보장
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APPKEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("mapContainer");
        let options = {
          center: new window.kakao.maps.LatLng(35.1523, 129.11783),
          level: 5,
        };
        new window.kakao.maps.Map(mapContainer, options);
      });
    };
    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <div className={styles.mapBox}>
      <div id="mapContainer" className={styles.kakaoMap} />
    </div>
  );
}
