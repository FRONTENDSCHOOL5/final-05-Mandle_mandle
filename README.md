# <span id="top">🧤 만들만들 🧤</span>

![프로젝트 배너 이미지](https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/66aea2a1-8cef-4f34-b74e-af7842adc9fb)

## 함께 만드는 즐거움으로, 일상을 가득 채우다 🍏

| 🔗 배포 링크                       | 👩‍🏫 강사 계정                               | 👩‍👧‍👦 수강생 계정                     |
| ---------------------------------- | ------------------------------------------ | ---------------------------------- |
| https://mandle-mandle.netlify.app/ | ID: mandle2@mandle.com<br>PW: Mandletest2! | ID: dodo@mandle.com<br>PW: dodo123 |

## 0. 목차

1.  [프로젝트 소개](#1-프로젝트-소개)
2.  [기술 및 개발환경](#2-기술-및-개발환경)
3.  [협업 방식](#3-협업-방식)
4.  [폴더구조](#4-폴더구조)
5.  [기능 UI](#5-기능-UI)
6.  [피드백](#6-피드백)
7.  [주요 기능](#7-주요-기능)
8.  [팀원 소개](#8-팀원-소개)

## 1. 프로젝트 소개

> - 만들만들은 원데이 클래스 서비스를 제공하는 참여형 소셜 커머스 플랫폼 입니다.
> - 클래스 예약기능과 홍보를 지원해 강사들이 자유롭게 자신의 역량을 발휘하고 창의적인 활동을 할 수 있는 공간을 제공합니다.
> - 강사와 수강생이 서로 소통하고, 수강생이 자신의 관심 분야나 취미를 발전시키는 동시에 다른 사람들과 교류하며 함께 즐길 수 있는 SNS 공간을 제공합니다.
> - 역량을 나누고, 함께 성장하며, 자신의 능력을 발전시키는 공간을 통해 우리는 사용자들의 라이프 스타일을 더욱 풍요롭게 만들고자 합니다.

## 2. 기술 및 개발환경

### [기술 스택]

<table>
<tr>
 <td align="center" width="100px">사용 기술</td>
 <td width="800px">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
  <img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/axios-7F2B7B?style=for-the-badge&logo=axios&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"/>&nbsp
    </td>
</tr>
<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">포맷터</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp 
 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp  
 </td>
 <tr>
  <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>

### [기술스택 상세]

- **Recoil**을 택한 이유

  - React의 UseState훅과 비슷하게 동작하고 직관적이면서 간단한 구조를 가져 코드의 양을 줄일 수 있었습니다.
  - 대규모 데이터를 다루는 것이 아니고 상대적으로 적은 코드를 작성하는 Recoil이 Redux에 비해 유리하다 생각하였습니다.
  - 상태 관리 라이브러리를 사용해 본 경험의 필요성을 느껴 recoil로 상태관리하기로 결정하였습니다.
  - 유저정보의 지속성을 위해 사용한 recoil-Persist
    - recoil은 기본적으로 새로고침 또는 컴포넌트 언마운트 시 상태가 초기화되지만, recoil-persist를 사용하면서 세션 스토리지에 저장하여 지속성을 유지하였습니다.
      <br><br>

- **Custom Hook** 사용

  1. `useProfileInput`

  - 프로필 입력 폼에 관련된 상태 밑 이벤트 처리 로직을 관리하는데 사용하였습니다.
  - 프로필 입력 폼 컴포넌트에서 해당 훅을 호출하여 상태 및 이벤트를 관리하였습니다.

  2. `useTextareaResizeHook`

  - textarea 요소의 크기를 내용에 맞게 자동으로 조절하는데 사용하였습니다.
    <br><br>

- axios 라이브러리 활용
  - 비동기로 HTTP 통신을 할 수 있어 return을 promise 객체로 해주기 때문에 response 데이터를 쉽게 다루기 위해 사용하였습니다.
  - Promise 기반의 API를 제공하여 비동기적인 방식으로 HTTP 요청을 처리하였습니다.
    <br><br>
- 중첩 라우트 처리를 위한 route-Outlet
  - 일반적으로 부모 라우트 컴포넌트 내에서 사용되며, 중첩된 자식 라우트 컴포넌트의 출력을 표시하는데 사용하였습니다.
  - 중첩된 뷰를 구성하고 다양한 경로에 따라 적절한 컴포넌트를 렌더링 할 수 있었습니다.
    <br><br>

### [코딩 컨벤션]

<details>
<summary>Prettier & GlobalStyle</summary>
<div markdown="1">

```
Prettier 컨벤션

{
  "printWidth": 80, // 한줄에 80자 처리
  "singleQuote": true, // 홑따옴표로 처리
  "jsxSingleQuote": true,
  "tabWidth": 2, //들여쓰기 2칸으로 지정
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always"
}


GlobalStyled 커벤션

 :root{
    --main-color: #036635 ;
    --sub-color:#B1D4C3;
    --font-color: #000000;
    --sub-font-color: #767676;;
    --border-color: #DBDBDB ;
    --background-color: #F2F2F2;
    --error-color: #EB5757;
    --font-xl : 20px;
    --font-lg : 16px;
    --font-md : 14px;
    --font-sm : 12px;
  }

    :root {
    --font--bold: 700;
    --font--semibold: 500;
    --font-regular: 400;;
  }

```

 </div>
</details>

### [ Git-flow ]

기본적으로 5가지 브랜치를 활용하는 Git-flow 전략이 일방적이나, 프로젝트 규모에 맞춰 3가지로 축소하여 사용했습니다.

- `main` : 최종 배포하기 위한 브랜치
- `develop` : 기능 구현, 버그 수정과 같은 기능을 합쳐 확인하기 위한 브랜치
- `feature` : 세부 기능 작업들을 위한 브랜치
  - 각 브랜치의 이름은 `feat/세부기능`으로 이름 지어 어떠한 기능의 브랜치인지를 알 수 있도록 했습니다.
  - push 완료 후에는 해당 브랜치를 develop으로 merge하여 역할 별로 진행한 기능을 확인하며 구현했습니다.
    안녕

### [Git/Commit 컨벤션]

<detail>
  <summary>커밋 유형</summary>
  <table>
    <tr>
      <th>커밋 유형</th>
      <th>커밋 메세지</th>
      <th>의미</th>
    </tr>
    <tr>
      <td>✨</td>
      <td>Feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td>🐛</td>
      <td>Fix</td>
      <td>버그 & 에러 수정</td>
    </tr>
    <tr>
      <td>📝</td>
      <td>Docs</td>
      <td>리드미 등 문서 수정, 라이브러리 설치</td>
    </tr>
    <tr>
      <td>🎨</td>
      <td>Style</td>
      <td>코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우</td>
    </tr>
    <tr>
      <td>🖌</td>
      <td>Design</td>
      <td>UI 디자인 변경</td>
    </tr>
    <tr>
      <td>🔨</td>
      <td>Refactor</td>
      <td>코드 리팩토링</td>
    </tr>
    <tr>
      <td>🤔</td>
      <td>Test</td>
      <td>테스트 코드, 리팩토링 테스트 코드 추가</td>
    </tr>
    <tr>
      <td>⚙</td>
      <td>Chore</td>
      <td>빌드 업무 수정, 패키지 매니저 수정</td>
    </tr>
    <tr>
      <td>🗒</td>
      <td>Rename</td>
      <td>파일명 혹은 폴더명 수정, 위치 옮기기</td>
    </tr>
    <tr>
      <td>🔥</td>
      <td>Remove</td>
      <td>파일 삭제</td>
    </tr>
  </table>
</detail>

<details>
<summary>커밋 메시지(제목 /본문 /숫자)</summary>
<div markdown="1">

```
git commit -m "[✨Feat] 로그인 기능 구현 #13
// 커밋 구분 , 제목, 이슈 번호

```

 </div>
</details>

## 3. 협업 방식

- [**🌱 순서도 & 와이어 프레임**](https://www.figma.com/file/jEF9l7HGVDSYXRsvSwXqIY/%EC%88%9C%EC%84%9C%EB%8F%84?type=whiteboard&node-id=0%3A1&t=oeO5DurA19XcAwMW-1)

###

- **🗣 스크럼**

  `스크럼`을 매일 오전 9시와 오후 5시에 진행하여 각 구성원의 진행 상황과 겪은 문제, 해결 방안을 공유하였습니다.

- **📹 라이브 쉐어**

  `라이브 쉐어` 프로그램을 사용하여 오류나 어려움이 있는 부분을 함께 해결하고 기술적 중요도가 높은 파트에서는 함께 작업함으로써 전체 코드에 대한 각 구성원들의 이해도를 높였습니다.

- **🥢 페어 프로그래밍**

  공통으로 담당한 컴포넌트 작업 시 `페어 프로그래밍` 협업 방식을 사용해 팀원 모두가 코드 전체 흐름을 이해하고 기술적 완성도 높은 코드를 작성하도록 커뮤니케이션 기술을 적극적으로 사용할 수 있는 기회를 만들었습니다.

- **🗂 깃플로우 전략**

  `깃플로우 전략`을 프로젝트 규모에 맞춰 활용함으로 브랜치 및 이슈를 효율적으로 관리하고, 충돌을 효과적으로 처리했으며 `컨벤션`을 맞춰 커밋 메세지를 작성함으로 작업 진행 상황에 대한 빠른 이해를 도왔습니다.

- **📈 깃헙 프로젝트**

  `깃헙 프로젝트` 기능으로 전체 프로젝트의 일정과 구현해야 하는 기능들을 일목요연하게 정리할 수 있었고 원활한 커뮤니케이션으로 작업 속도와 안정성을 동시에 획득할 수 있었습니다.

## 4. 폴더구조

<details>
<summary>📂만들만들 폴더트리</summary>
📦 final-05-Mandle_mandle
├─ 📄 .gitignore<br>
├─ 📂 .vscode<br>
├─ 📄 .eslintrc.json<br>
├─ 📄 .prettier.json<br>
├─ 📄 settings.json<br>
├─ 📄 README.md<br>
├─ 📄 package-lock.json<br>
├─ 📄 package.json<br>
├─ 📂 public<br>
│ └─ 📂 src<br>
│ ├─ 📄 App.js<br>
├─ 📂 Hooks<br>
├─ 📂 Store<br>
├─ 📂 api<br>
├─ 📂 assets<br>
│ ├─ 📂 font<br>
│ └─ 📂 img<br>
│ └─ 📂 temp<br>
├─ 📂 componenent<br>
│ └─ 📂 Common<br>
├─ 📄 index.js<br>
├─ 📂 pages<br>
│ ├─ 📂 Chatting<br>
│ ├─ 📂 Class<br>
│ ├─ 📂 Home<br>
│ ├─ 📂 Loadinng<br>
│ ├─ 📂 Loging<br>
│ ├─ 📂 NotFound<br>
│ ├─ 📂 Posting<br>
│ ├─ 📂 Profile<br>
│ ├─ 📂 Signup<br>
│ └─ 📂 Splash<br>
└─ 📂 styles
</details>

## 5. 기능 UI

- ### Splash, 회원가입, 로그인

|                                                                      Splash                                                                       |                                                                     회원가입                                                                     |                                                                   프로필 설정                                                                    |                                                                      로그인                                                                      |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/f843c68c-7a20-4175-b75e-5c24d0be958f" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/78a710ce-4609-4c12-95df-2e65d41b2dff" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/1df4e0af-79eb-48e1-a45c-a18018d6a0e5" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/2abc2355-3867-4173-9603-27ecaa2b9cdb" height=462 width=220> |

- ### 홈피드, 검색

|                                                                  홈피드(팔로잉O)                                                                  |                                                                 홈피드(팔로잉X)                                                                  |                                                                       검색                                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/b39f24a3-f5d4-4527-9a24-610c97a47d0c" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/9d947583-00a9-4327-8769-6e38c7b17666" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/f6436b63-6d7d-42da-b9dd-b59e7af65e47" height=462 width=220> |

- ### 게시글

|                                                                게시물 상세(좋아요)                                                                |                                                                   게시글 등록                                                                    |                                                                   게시글 수정                                                                    |                                                                   게시글 삭제                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/218b41fa-f0ca-4b47-b9b2-75694401b3c0" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/188e8c5c-7c75-4c4a-b809-3146f00e625c" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/ff8fac16-9a63-4c3f-9e3f-03243ed0b7f3" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/a5bb9c8e-15fe-447c-9e49-11002c10871a" height=462 width=220> |

- ### 클래스

|                                                                    클래스 피드                                                                    |                                                                   클래스 상세                                                                    |                                                                 클래스 예약하기                                                                  |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/4883ba4b-eea2-44c5-8f0c-56a1eaabb147" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/c9b7877c-1bfd-4885-9de1-8b5b0c44ae4b" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/95c1fe1c-c05a-4c00-a2d0-60e49a50f7d5" height=462 width=220> |

|                                                                    클래스 등록                                                                    |                                                                   클래스 삭제                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/9cf076ae-8b5f-4043-a32c-90b5b956a1e8" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/f9e795c1-7c8f-4ee0-bc63-321f24a169c7" height=462 width=220> |

- ### 댓글

|                                                                     댓글 등록                                                                     |                                                                    댓글 삭제                                                                     |                                                                    댓글 신고                                                                     |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/d790b1a8-3c88-4bf3-b32e-6d1a0f97e120" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/6e706e74-3b2d-4452-aef3-9c169b40cd74" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/92780f6c-052c-4540-b1a6-1118cd33c748" height=462 width=220> |

- ### 마이 프로필

|                                                                    강사 프로필                                                                    |                                                                  수강생 프로필                                                                   |                                                                  게시물 앨범형                                                                   |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/20a16ee5-11f1-4e59-878a-889d5d083b1c" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/d9de7882-399a-4990-820b-b6be2dce26ff" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/fed74ad5-cf1b-4742-baa4-5cb11e504473" height=462 width=220> |

|                                                                   프로필 수정                                                                    |                                                                  팔로잉, 팔로우                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/c0c4d2aa-9185-48b5-b1b6-e19c2f42116e" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/30bd69ac-20af-42f7-9d03-a753e961a30c" height=462 width=220> |

- ### 다른 유저 프로필

|                                                                채팅, 팔로우, 공유                                                                 |                                                                 다른 강사 프로필                                                                 |                                                                다른 수강생 프로필                                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/fe674226-1a70-48b8-bb4e-e45d15a93b91" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/81075b57-963c-48cf-8597-926d53a5a083" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/073886a0-4c4c-42df-a8df-a1864efb6db9" height=462 width=220> |

- ### 채팅, NotFound(404), 로그아웃

|                                                                       채팅                                                                        |                                                                  NotFound(404)                                                                   |                                                                      로딩중                                                                      |                                                                     로그아웃                                                                     |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src= "https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/69f4715a-7a44-4fe0-b741-ce8ac1ee431c" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/8cc156eb-00a2-4094-91a7-90f55af33b7c" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/24954eb4-858e-4817-ab86-1640ba55fd87" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/18b6de8d-151a-43aa-9860-fe945fab40f1" height=462 width=220> |

<br/>

## 6. 피드백

## 7. 주요 기능

- ### 회원가입/ 프로필 설정 시 강사 /수강생 구분

  저희 팀은 원데이 클래스를 주제로 선택했기 때문에, `강사`와 `수강생` 두 가지 유저 유형으로 관리해야 하는 필요성을 느꼈습니다.

  ```js
  const [type, setType] = useState('Student');
  ```

  ```js
  const handleStudentBtnClick = () => {
    setType('Student');
  };

  const handleTeacherBtnClick = () => {
    setType('Teacher');
  };
  ```

  이를 구현하기 위해 저희는 회원 가입 페이지에서 사용자는 '일반 회원 (수강생)' 버튼과 '강사 회원' 버튼 중 하나를 선택하여 회원 유형을 선택할 수 있게 만들었습니다.
  이 선택은 `type`변수에 저장되고 '일반 회원 (수강생)' 버튼을 클릭한 경우 `type` 값은 `Student`로 설정되며, 강사 회원' 버튼을 클릭한 경우의 `type` 값은 `Teacher`로 설정됩니다.

  ```js
  const setSignup = useSetRecoilState(SignUpAtom);
  ```

  ```js
  if (email && password && emailValid && passwordValid) {
    setSignup({ email, password, type });
    navigate('/account/set_profile');
  } else {
    setSignup(false);
  }
  ```

  회원 가입 시에 입력한 정보와 선택한 회원 유형(type)은 가입한 이메일과 비밀번호와 함께 **Recoil**의 `SignUpAtom`을 통해 유저 정보로 저장됩니다.

  이 정보는 회원 가입 과정에서 유지되며, 유저는 프로필 설정 페이지로 이동할 수 있게 됩니다.

  ```js
  const handleSetProfileSubmit = async (event) => {
    event.preventDefault();

    if (username && accountname && usernameValid && accountValid) {
      const updatedAccountname = `${userInfo.type}${accountname}`;
      setUserInfo((prevValue) => {
        return {
          ...prevValue,
          username: username,
          accountname: updatedAccountname,
          intro: intro,
          image: image,
        };
      });
      navigate('/account/login');
    }
  };

  useEffect(() => {
    if (username && accountname && usernameValid && accountValid) {
      PostSignUp(userInfo);
    }
  }, [username, accountname, usernameValid, accountValid, userInfo]);
  ```

  프로필 설정 페이지로 넘어와 프로필 설정란을 다 작성하고 "만들만들 시작하기" 버튼을 클릭하면, 해당 정보는 API에 프로필 정보로 등록됩니다.

  그러나 API에서는 유저의 회원 유형에 대한 별도의 처리가 없기 때문에 회원 유형을 식별할 수 있도록 계정 ID (`accountname`) 값 앞에 `Student` 또는 `Teacher` 중 하나의 `type` 값을 추가하여 함께 전달하여 학생과 강사 계정을 구분할 수 있도록 하였습니다.

- ### 클래스 리스트 랜더링

  ```js
  const data = await GetClassData(token, userInfo.accountname);
  const filteredClasses = data.product.filter((classItem) =>
    classItem.author.accountname.includes('Teacher'),
  );
  ```

  GetClassData API는 제공된 token을 사용하여 클래스 데이터를 가져옵니다. 가져온 데이터는 `filter` 메소드를 사용하여 필터링되며,

  여기서 accountName에 전달된 회원 유형이 "Teacher"인 클래스 항목만 filteredClasses 배열에 포함됩니다.

  ```js
  const popularClasses = filteredClasses.slice(0, 3);
  ```

  그 다음, filteredClasses 배열에서 첫 세 개의 클래스를 선택하여 popularClasses 배열을 만듭니다.

  ```js
  {
    popularClasses.map((classItem) => (
      <li key={classItem._id}>
        <Link to={`/class/detail/${classItem._id}`}>
          <ClassPostMini
            miniImg={classItem.itemImage}
            miniName={classItem.itemName}
            miniTag={classItem.link}
          />
        </Link>
      </li>
    ));
  }
  ```

  마지막으로, popularClasses 배열의 각 항목을 map 함수를 통해 반복하여 해당 클래스 항목에 대한 링크를 포함하는 li 요소를 생성합니다.

  이 링크는 클래스의 세부 정보 페이지로 연결되며 ClassPostMini 컴포넌트를 통해 클래스의 구체적인 정보를 확인할 수 있습니다.

- ### 이미지 3장 업로드

  ```js
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageChange = async (event) => {
    const files = event.target.files;
    let imagesArray = [...selectedImages];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imagesArray.push(file);
    }

    setSelectedImages(imagesArray);
  };
  ```

  사용자가 게시물 작성을 위해 이미지를 선택할 때, 선택한 이미지들은 `빈 배열`에 저장됩니다.

  ```js
  const handleUploadPost = async () => {
    const images = await PostImagesUpload(selectedImages);
  };
  ```

  그리고 업로드 버튼을 클릭하면 선택한 이미지들이 서버로 전송됩니다.

  ```js
  const PostImagesUpload = async (files) => {
    const formData = new FormData();
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i]);
      }
    } else {
      formData.append('image', files);
    }
  };
  ```

  이때, 이미지의 개수를 확인하기 위해 조건문을 추가했습니다. 선택된 이미지 배열의 길이를 검사하여, 이미지가 여러 장인 경우에는 for 반복문을 사용하여 각 이미지의 `key`값에 접근하여 반복문을 순회하며 `formData` 객체에 파일로 추가합니다.

  하지만 이미지가 한 장인 경우에는 단일 이미지만을 formData 객체에 추가하도록 처리했습니다. 이렇게 여러 장과 한 장의 업로드 처리를 구분하였습니다.

  ```js
  const filenames =
  response.data.length > 1
  ? response.data
  .map(
  (image) => https://api.mandarin.weniv.co.kr/${image.filename},
  )
  .join(',')
  : https://api.mandarin.weniv.co.kr/${response.data[0].filename};

  return filenames;
  ```

  그 다음, 이미지를 서버로 전송하고 숫자로 이루어진 이미지 파일명들을 응답받습니다. 응답받은 여러 장의 이미지 파일명이 담긴 `filenames`을 다시 서버로 전송할 때는 이미지 파일명들을 하나의 `문자열`로 전송해야 하는 조건이 API 명세에 명시되어 있습니다.

  그러므로, 배열의 길이가 1보다 큰 경우(즉, 2장 이상의 이미지가 담겨 있다면) map 함수를 사용하여 서버의 기본 URL과 배열을 순회하며 각 이미지 파일명을 하나씩 추가하고, 이미지 파일명들을 쉼표로 기준으로 `join` 메서드를 활용하여 하나의 `문자열`로 결합하여 여러 장의 이미지를 전송할 수 있도록 처리했습니다.

  한 장의 이미지인 경우에는 해당 이미지 파일명 앞에 기본 URL을 추가하여 전송하도록 구현했습니다.

## 8. 팀원 소개

### [만들5️⃣조]

안녕하세요! 저희는 4명의 Front-end 개발자로 구성된 '만들5️⃣ 조' 입니다.<br/> <br/>
_(🦁멋쟁이사자처럼 프론트엔드스쿨 5기 프로젝트 5팀)_
|**차다연**|**김예지**|**우경석**|**윤서준** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="Dayeon_profile_img" src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/assets/105140201/85ec0387-21f3-4f1c-868e-32bc1d97812c"> | <img width="180"  alt="Yegi_profile_img" src="https://likelion.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F23901406-5d30-4f87-a166-03a79e52a991%2FKakaoTalk_Photo_2023-02-28-20-38-30.jpeg?table=block&id=f41783c9-bc51-4c24-ad37-de2caf59e1bd&spaceId=c69962b0-3951-485b-b10a-5bb29576bba8&width=2000&userId=&cache=v2"> | <img width="180" alt="kyungseuk_profile_img" src="https://cdn.discordapp.com/attachments/1114083723663650887/1114083747642482728/1668348982968.jpg"> | <img width="180" alt="seojun_profile_img" src="https://avatars.githubusercontent.com/u/72855681?v=4" > |
| [Da-Yeon](https://github.com/dayannne) | [ yeji_kim ](https://github.com/yejify) | [5647kr](https://github.com/5647kr) | [junny97](https://github.com/junny97) |
| 팀장 | 팀원 | 팀원 | 팀원 |

### [역할 분담]

<img src="https://github.com/FRONTENDSCHOOL5/final-05-Mandle_mandle/blob/cf0a8bfc179d31b2e0b6eeb49bbd7d9d3dd0f813/src/assets/img/role.png" >
