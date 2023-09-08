"use client";
import { Button, Form } from "react-bootstrap";
import styles from "./page.module.scss";
import Other from "./OtherBox";
import MyBox from "./MyBox";

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBox}>
        <h2 className={styles.headerText}>채팅</h2>
      </div>
      <div className={styles.pageBox}>
        <div className={styles.listBox}>friendsList</div>
        <div className={styles.chatBox}>
          <div className={styles.formControl}>
            <Other />
            <MyBox />
          </div>
          <div className={styles.formStyle}>
            <Form.Control type="textarea" className={styles.inputControl} />
            <Button variant="primary" type="submit" className={styles.inputBtn}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
