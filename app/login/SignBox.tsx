"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./SignBox.css";
import axios from "axios";
import SimpleModal from "../components/Utils/SimpleModal";
import { useRouter } from "next/navigation";
import { Badge, BadgeProps } from "react-bootstrap";
import { signIn } from "next-auth/react";

export default function SignBox() {
  // Session 로그인 정보

  // Register states 변수 등록
  const [isRightPanelActive, setRightPanelActive] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpen, setOpen] = useState(false);
  const errorRef = useRef<HTMLDivElement>();

  // Login states 변수 등록
  const [loginEmail, setloginEmail] = useState<string>("");
  const [loginPassword, setloginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
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
        rule: "user",
      }),
    [name, email, password]
  );

  const chatSubmit = async () => {
    try {
      const res = await fetch("htts://api.chatengine.io/users/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Private-key": process.env.CHATENGINE_KEY,
        },
      });
      if (res.status === 200) {
        console.log("챗 등록");
      } else {
        // Handle error
        console.log("Error registering user: " + res.statusText);
      }
    } catch (error) {
      console.log("사용자 등록 중 오류 발생: " + error);
    }
  };

  // 회원가입 함수
  const handleSignup = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!name || !email || !password) {
        setError("모든 정보를 입력하지 않았습니다.");
        animateBadge();
        return;
      }

      await chatSubmit();

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
  // 로그인 함수
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        loginEmail,
        loginPassword,
        redirect: false,
      });

      if (res.error) {
        setLoginError("로그인 정보가 일치하지 않습니다.");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ loginEmail, loginPassword })
      );

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

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
          message="회원가입에 성공하셨습니다."
          show={isOpen}
          onHide={() => {
            setOpen(false);
            setRightPanelActive(false);
          }}
        />
        {/* Register */}
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
        {/* Login */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>로그인</h1>
            <input
              type="text"
              placeholder="이메일 입력"
              onChange={(e) => setloginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호 입력"
              onChange={(e) => setloginPassword(e.target.value)}
            />
            <div ref={errorRef}>
              <Badge
                style={{
                  marginTop: "1em",
                  paddingBlock: "0.6em",
                  paddingInline: "2em",
                }}
                bg="danger"
              >
                {loginError}
              </Badge>
            </div>
            <a href="#">비밀번호 찾기</a>
            <button type="submit">로그인하기</button>
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
