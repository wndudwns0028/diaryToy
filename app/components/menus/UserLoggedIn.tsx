"use client";
import { NavDropdown } from "react-bootstrap";
import { signOut } from "next-auth/react";
import styles from "./UserLoggedIn.module.scss";

type Propstype = {
  name: string;
};

export default function UserLoggedIn(props: Propstype) {
  const { name } = props;
  return (
    <div className={styles.accountBox}>
      <p className={styles.welcomeTag}>환영합니다, </p>
      <NavDropdown title={`${name}`}>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          href="#action/3.4"
          onClick={() => signOut()}
          className={styles.navDropdown}
        >
          로그아웃
        </NavDropdown.Item>
      </NavDropdown>
      <p className={styles.welcomeTag}>님! </p>
    </div>
  );
}
