"use client";

import { useState } from "react";
import "./SignBox.css";
import axios from "axios";

export default function SignBox() {
  const [isRightPanelActive, setRightPanelActive] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(1);
    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
    });
  };
  return (
    <div className="pageContainer">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
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
