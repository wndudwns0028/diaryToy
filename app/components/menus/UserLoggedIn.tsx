"use client";
import { NavDropdown } from "react-bootstrap";
import { signOut } from "next-auth/react";

type Propstype = {
  name: string;
};

export default function UserLoggedIn(props: Propstype) {
  const { name } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ marginTop: "1em" }}>환영합니다, </p>
      <NavDropdown title={`${name}`}>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          href="#action/3.4"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
            fontWeight: "bolder",
          }}
          onClick={() => signOut()}
        >
          로그아웃
        </NavDropdown.Item>
      </NavDropdown>
      <p style={{ marginTop: "1em" }}>님! </p>
    </div>
  );
}
