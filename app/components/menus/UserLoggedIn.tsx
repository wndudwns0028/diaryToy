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
          onClick={() => {
            router.push("/chat");
          }}
        >
          쪽지
        </NavDropdown.Item>
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
    </div>
  );
}
