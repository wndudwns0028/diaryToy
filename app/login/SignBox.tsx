"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./SignBox.css";
import axios from "axios";
import SimpleModal from "../components/Utils/SimpleModal";
import { useRouter } from "next/navigation";
import { Badge, BadgeProps } from "react-bootstrap";

export default function SignBox() {
  // states 변수 등록
  const [isRightPanelActive, setRightPanelActive] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpen, setOpen] = useState(false);
  const errorRef = useRef<HTMLDivElement>();

  // routing 변수
  const router = useRouter();

  // 이벤트 함수 목록
  // 로그인 창 애니메이션
  const handleSignUpClick = useCallback(() => {
    setRightPanelActive(true);
  }, []);

  const handleSignInClick = useCallback(() => {
    setRightPanelActive(false);
  }, []);
  // error badge 애니메이션
  const animateBadge = () => {
    if (errorRef.current) {
      const { current } = errorRef;
      current.style.transition = "transform 0.3s ease-out";
      current.style.transform = "translateX(-20px)";
      setTimeout(() => {
        current.style.transform = "translateX(20px)";
        setTimeout(() => {
          current.style.transform = "translateX(0)";
        }, 50);
      }, 50);
    }
  };

  // setState to Empty Function
  async function setEmptyState() {
    setName("");
    setEmail("");
    setPassword("");
  }

  // api 요청 메모이제이션
  const apiRequestBody = useMemo(
    () =>
      JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    [name, email, password]
  );

  // 회원가입 함수
  const handleSignup = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!name || !email || !password) {
        setError("모든 정보를 입력하지 않았습니다.");
        animateBadge();
        return;
      }

      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: apiRequestBody,
        });

        if (res.status === 201) {
          await setEmptyState();
          setOpen(true);
          setRightPanelActive(false);
        } else if (res.status === 501) {
          setError("중복된 이메일입니다.");
          animateBadge();
        }
      } catch (error) {
        console.log("사용자 등록 중 오류 발생: " + error);
      }
    },
    [apiRequestBody, name, email, password]
  );
  return (
    <div className="pageContainer">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <SimpleModal
          title="회원가입 성공!"
          message="회원가입에 성공하셨습니다. 로그인해주십시오."
          show={isOpen}
          onHide={() => setOpen(false)}
        />
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignup}>
            <h1>회원정보입력</h1>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="패스워드"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div ref={errorRef}>
              <Badge
                style={{ paddingBlock: "0.6em", paddingInline: "2em" }}
                bg="danger"
              >
                {error}
              </Badge>
            </div>
            <br />
            <button type="submit">회원가입</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>로그인</h1>
            <input type="text" placeholder="아이디 입력" />
            <input type="password" placeholder="비밀번호 입력" />
            <a href="#">비밀번호 찾기</a>
            <button>로그인하기</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>환영합니다!</h1>
              <p>
                제공하신 개인정보는 회원 관리와 인증 수단 외에 <br /> 사용되지
                않습니다.
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                로그인하기
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>처음이신가요?</h1>
              <p>간단한 정보 입력과 함께 가입하세요</p>
              <button className="ghost" onClick={handleSignUpClick}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
