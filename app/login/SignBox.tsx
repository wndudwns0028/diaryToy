"use client";

import { useState } from "react";
import "./SignBox.css";

export default function SignBox() {
  const [isRightPanelActive, setRightPanelActive] = useState<boolean>(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
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
          <form action="/api/auth/signup" method="POST">
            <h1>회원정보입력</h1>
            <input type="text" placeholder="이름" />
            <input type="email" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <br />
            <br />
            <button>회원가입</button>
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
