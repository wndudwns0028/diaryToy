# DIARYTOY[진행중]

### NEXT JS 활용 토이프로젝트

<div align="center">
    <a href="http://thismypc.com/">
        <img src="https://raw.githubusercontent.com/supunlakmal/thismypc/master/thisMyPCWeb/angular-deprecated/src/assets/images/logo/logo-mini.png" crossorigin>
    </a>
</div>

<br />

> <strong>프로젝트 목적</strong>: NEXT TS 프레임워크를 통해 서버사이드 렌더링의 활용, 서버 API 구성과 NoSQL DB 활용, NEXT-Auth와 같은 라이브러리 지식을 습득하는 것. 또한 이번에 stable된 13버전의 app 디렉토리 업데이트 내용을 프로젝트에 적용하는 것이 목적이다.


## 서비스 구성

|                                                                                          Desktop App Login                                                                                           |                                                                                         Desktop App Open                                                                                         |                                                                                      Web App computer hard drives                                                                                      |                                                                                   Web App computer hard drives Open                                                                                    |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/supunlakmal/thismypc/master/thisMyPCWeb/angular-deprecated/src/assets/images/screen/app-login.PNG" title="Desktop App  Login " width="100%" crossorigin> | <img src="https://raw.githubusercontent.com/supunlakmal/thismypc/master/thisMyPCWeb/angular-deprecated/src/assets/images/screen/app-home.PNG" title="Desktop App Open" width="100%" crossorigin> | <img src="https://raw.githubusercontent.com/supunlakmal/thismypc/master/thisMyPCWeb/angular-deprecated/src/assets/images/screen/web-system.PNG" title="Web App  PC  Drivers" width="100%" crossorigin> | <img src="https://raw.githubusercontent.com/supunlakmal/thismypc/master/thisMyPCWeb/angular-deprecated/src/assets/images/screen/web-system.PNG" title="Web App  PC  Drivers" width="100%" crossorigin> |

## 프로젝트 폴더 구조

    .
    ├── .github/ISSUE_TEMPLATE
    ├── doc                          # All Api doc and gif files
    ├── thisMyPCApp                  # Electron JS app folder
    ├── thisMyPCServer               # Node JS MongoDB and Express JS server folder
    ├── thisMyPCWeb                  # Angular website folder
    ├── .gitignore
    ├── .gitlab-ci.yml
    ├── CODE_OF_CONDUCT.md
    ├── LICENSE
    └── README.md

## 개발 설명

#### Built With

#### Clone Project

```shell
git clone https://github.com/sub9707/diaryToy.git
```

## REST API 구성

### API Reference

| Web API             | URL                          | Description |
| ------------------- | ---------------------------- | ----------- |
| User Register       | /api/v1/user/register        | -           |
| User Login          | /api/v1/user/login           | -           |
| User Logout         | /api/v1/user/:userID/logout  | -           |
| User Auth           | /api/v1/user/athentication   | -           |
| User Info           | /api/v1/user/:userID         | -           |
| User Online PC List | /api/v1/user/computer/online | -           |

### App API

| APP API             | URL                                        | Description |
| ------------------- | ------------------------------------------ | ----------- |
| User Login From App | /api/v1/user/computer/login                | -           |
| User Info           | /api/v1/user/:userID/computer/:computerKey | -           |
| User Logout         | /api/v1/user/:userID/computer/logout       | -           |

## Database

MongoDB use as Database.

```
diaryToy
├─ .eslintrc.json
├─ .gitignore
├─ app
│  ├─ about
│  │  ├─ page.module.scss
│  │  └─ page.tsx
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ signup
│  │  │  │  └─ route.ts
│  │  │  └─ [...nextauth]
│  │  │     └─ route.ts
│  │  ├─ board
│  │  │  └─ notice
│  │  │     ├─ route.ts
│  │  │     └─ [boardId]
│  │  │        └─ route.ts
│  │  └─ chat
│  │     ├─ route.ts
│  │     └─ socketio.ts
│  ├─ chat
│  │  ├─ MyBox.tsx
│  │  ├─ OtherBox.tsx
│  │  ├─ page.module.scss
│  │  └─ page.tsx
│  ├─ community
│  │  ├─ page.module.scss
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ BootStrap
│  │  │  ├─ BoardTable.tsx
│  │  │  ├─ CustomButton.tsx
│  │  │  ├─ Pagination.tsx
│  │  │  ├─ Slides.module.scss
│  │  │  └─ Slides.tsx
│  │  ├─ menus
│  │  │  ├─ AccountBox.tsx
│  │  │  ├─ Fonts.tsx
│  │  │  ├─ FooterMenu.css
│  │  │  ├─ FooterMenu.tsx
│  │  │  ├─ LoginBtn.tsx
│  │  │  ├─ Navbar.module.scss
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ UserLoggedIn.module.scss
│  │  │  └─ UserLoggedIn.tsx
│  │  └─ Utils
│  │     ├─ KakaoMap.module.scss
│  │     ├─ KakaoMap.tsx
│  │     ├─ PromptModal.tsx
│  │     └─ SimpleModal.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  ├─ page.module.scss
│  │  ├─ page.tsx
│  │  ├─ SignBox.css
│  │  └─ SignBox.tsx
│  ├─ models
│  │  ├─ Notices.ts
│  │  └─ User.ts
│  ├─ myDiary
│  │  ├─ page.module.scss
│  │  └─ page.tsx
│  ├─ notice
│  │  ├─ NoticeWrapper.tsx
│  │  ├─ page.module.scss
│  │  ├─ page.tsx
│  │  ├─ update
│  │  │  └─ [boardId]
│  │  │     └─ page.tsx
│  │  ├─ write
│  │  │  ├─ page.module.scss
│  │  │  └─ page.tsx
│  │  └─ [boardId]
│  │     ├─ page.module.scss
│  │     └─ page.tsx
│  ├─ page.module.scss
│  ├─ page.tsx
│  ├─ Provider.tsx
│  └─ styles
│     └─ variables.scss
├─ functions
│  ├─ .eslintrc.js
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  └─ index.ts
│  ├─ tsconfig.dev.json
│  └─ tsconfig.json
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.json
├─ types
│  ├─ boardTypes.ts
│  ├─ chat.d.ts
│  ├─ componentTypes.ts
│  ├─ global.d.ts
│  ├─ mongodb.ts
│  └─ userType.ts
└─ util
   └─ database.ts
```
