# flotshop 클론 프로젝트

이 프로젝트는 flotshop를 클론한 프로젝트입니다. 사이트의 구조와 기능을 이해하고, 개발 기술을 연습하기 위한 목적으로 만들었습니다.

## 프로젝트에서 구현한 기능이나 개선한 사항
- UI 개선
    - **메뉴 축소**
        - 개선 목적: 사용자의 편의성 향상
        - 개선 내용: 비슷한 내용의 메뉴를 통합하거나, 불필요한 메뉴를 제거
        - 개선 효과: 사용자의 메뉴 선택의 편의성 향상

## 프로젝트를 통해 배운 점
- `naver map api`를 사용하여 가맹점을을 마커로 표시해주었지만 naver map에서 리액트로 제공하는 api가 있을것이라 생각했는데 찾지 못하여서 아쉽습니다.
- 관리자 화면에서 `tailwind`를 도입하였고 마치 bootstrap을 떠올리게 해 주었습니다. 접근성은 어렵지만 사용성은 뛰어난 css 프레임워크인것 같습니다.
- `CKEditor`를 사용하여 html작성 또는 이미지 업로드를 쉽게 처리할 수 있었고 다양한 플러그인 및 확장 기능을 사용해봄으로 경험을 쌓을 수 있었습니다.
- `react Query`를 사용함으로 길었던 코드를 간결하고 가독성높게 수정하였고 로딩,에러,패치 등 여러 이벤트 핸들링을 쉽게 할 수 있었습니다.

## 프로젝트를 통해 얻고싶은 점
- `cypress`로 테스트 코드 작성을 하고 테스트 코드 작성 기술을 알아보고 싶습니다.
- `Lighthouse`를 이용해 성능 최적화를 하여 성능 개선 경험을 해보고 싶습니다.

## 배포 주소
프로젝트 진행중 입니다.

## 개발 환경
### frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
### backend ([https://github.com/JeanYoungPark/flotshop-backend](https://github.com/JeanYoungPark/flotshop-backend))
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### 서버 환경 (미정)

## 실행 방법

### 1. 프로젝트 클론
```bash
git clone https://github.com/JeanYoungPark/flotshop.git
```
### 2. 프로젝트 디렉터리로 이동
```bash
cd flotshop
```
### 3. 종속성 설치
```bash
npm install
```
### 4. 개발 서버 실행
```bash
npm start
```

## 리뉴얼 로드맵
- **collection 메뉴 삭제**<br/>
    많은 종류의 컬렉션이 존재하지만, 마우스 오버 시 세 가지 컬렉션만 표시되어 드롭다운 메뉴의 의미가 없다고 판단하였고, 대 메뉴를 통해 다양한 컬렉션이 있는 페이지로 바로 이동할 수 있도록 유도 했습니다.

- **커뮤니티 메뉴 삭제**<br/>
    기존에는 커뮤니티 메뉴 하위에 이벤트, 공지 등의 게시판을 모아뒀으나, 커뮤니티 메뉴를 한 번 더 클릭해야 게시판에 접근할 수 있어 불편하다고 판단하여 개선하였습니다.

- **이벤트/뉴스 메뉴 삭제**<br/>
    이벤트 페이지는 이미 대 메뉴에 존재하고 있어 불필요하게 존재하는 중복되는 페이지라고 판단하였습니다.

- **membership 메뉴 삭제**<br/>
    회원가입 또는 구매금액에 대한 혜택에 대해 페이지를 따로 두는 것보다 회원가입부터 구매과정까지 혜택들을 아이콘이나 택스트로 바로 확인할 수 있도록 변경하고 자세한 내용은 공지사항에 포함하는 것이 맞다고 판단하였습니다.

- **온라인 구매처 삭제**<br/>
    온라인으로 구매할 수 있는 곳은 너무 많아서 모든 곳을 일일이 나열하는 것이 오히려 혼란을 가중시킬 수 있다고 판단했습니다.
