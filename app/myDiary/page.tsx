"use client";
import GalleryItem from "./GalleryItem";
import styles from "./page.module.scss";
import { galleryData } from "./data";
import { Row, Col } from "react-bootstrap";
import Paginations from "../components/BootStrap/Pagination";
import SearchBar from "../components/BootStrap/SearchBar";

export default function myDiary() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.gallery}>
        <h1>다이어리 목록</h1>
        <div className="divideLine" />
        <div className={styles.galleryList}>
          <Row className={styles.galleryRow}>
            {galleryData.map((item) => (
              <Col
                key={item.id}
                xs={12}
                sm={6}
                md={3}
                lg={3}
                xl={3}
                className={styles.galleryCol}
              >
                <GalleryItem
                  imageUrl={item.imageUrl}
                  title={item.title}
                  author={item.author}
                  groupName={item.groupName}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <div className={styles.pagination}>
          <Paginations
            activePage={0} // 현재 페이지
            itemsCountPerPage={8} // 한 페이지랑 보여줄 아이템 갯수
            totalItemsCount={8} // 총 아이템 갯수
            pageRangeDisplayed={1} // paginator의 페이지 범위
            onChange={() => {}} // 페이지 변경을 핸들링하는 함수
          />
        </div>
      </div>
    </div>
  );
}
