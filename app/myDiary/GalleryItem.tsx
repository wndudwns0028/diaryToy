import { GalleryItemType } from "@/types/boardTypes";
import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function GalleryItem(props: GalleryItemType) {
  const { imageUrl, title, author, groupName } = props;
  const [showTempText, setShowTempText] = useState(false);

  const handleMouseEnter = () => {
    setShowTempText(true);
  };

  const handleMouseLeave = () => {
    setShowTempText(false);
  };

  return (
    <div
      className={styles.galleryItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.imageSrc}
          width={220}
          height={170}
        />
        <div className={styles.tempTextContainer}>
          <p className={styles.tempText}>임시 텍스트</p>
          <p className={styles.tempTextDetail}>
            임시 다이어리 설명하는 공간인데 어떤 내용을 적어야하는지 아직 잘
            모르겠습니다. 대충 다이어리 그룹 설명하는 내용을 받고 여기다가
            넣어야겠습니다. 다이어리 설명 글입니다.
          </p>
        </div>
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.detailTextBox}>
          <p className={styles.detailText}>작성자: {author}</p>
          <p className={styles.detailText}>그룹명: {groupName}</p>
        </div>
      </div>
    </div>
  );
}
