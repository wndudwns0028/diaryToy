import { GalleryItemType } from "@/types/boardTypes";
import styles from "./page.module.scss";
import Image from "next/image";

export default function GalleryItem(props: GalleryItemType) {
  const { imageUrl, title, author, groupName } = props;
  return (
    <div className={styles.galleryItem}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.imageSrc}
          width={220}
          height={170}
        />
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <div style={{ display: "flex" }}>
          <p>작성자: {author}</p>
          <p>그룹명: {groupName}</p>
        </div>
      </div>
    </div>
  );
}
