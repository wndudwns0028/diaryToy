"use client";
import { Fragment, useEffect, useRef } from "react";
import styles from "./KakaoMap.module.scss";
import Image from "next/image";

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
        const map = new window.kakao.maps.Map(mapContainer, options);
        function zoomIn() {
          map.setLevel(map.getLevel() - 1);
        }

        // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomOut() {
          map.setLevel(map.getLevel() + 1);
        }

        const zoomInButton = document.getElementById("zoomInButton");
        const zoomOutButton = document.getElementById("zoomOutButton");

        zoomInButton.addEventListener("click", zoomIn);
        zoomOutButton.addEventListener("click", zoomOut);
      });
    };
    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <div className={styles.mapBox}>
      <div id="mapContainer" className={styles.kakaoMap} />
      <div className="custom_zoomcontrol radius_border">
        <span id="zoomInButton">
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
          />
        </span>
        <span id="zoomOutButton">
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
          />
        </span>
      </div>
    </div>
  );
}
