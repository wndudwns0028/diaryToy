import { NavDropdown } from "react-bootstrap";
import { signOut } from "next-auth/react";
import styles from "./UserLoggedIn.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Propstype = {
  name: string;
};

export default function UserLoggedIn(props: Propstype) {
  const { name } = props;
  const router = useRouter();
  return (
    <div className={styles.accountBox}>
      <NavDropdown title={`환영합니다, ${name}님`}>
        <NavDropdown.Item
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("user");
            signOut();
          }}
        >
          로그아웃
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
