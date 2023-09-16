# flotshop 클론 프로젝트

이 프로젝트는 flotshop를 클론한 프로젝트입니다. 원본 프로젝트의 구조와 기능을 이해하고, 개발 기술을 연습하기 위한 목적으로 만들었습니다.

## 프로젝트에서 구현한 기능이나 개선한 사항
- UI 개선
    - **메뉴 축소**
        - 개선 목적: 사용자의 편의성 향상
        - 개선 내용: 비슷한 내용의 메뉴를 통합하거나, 불필요한 메뉴를 제거
        - 개선 효과: 사용자의 메뉴 선택의 편의성 향상

## 프로젝트를 통해 배운 점
프로젝트 진행중 입니다...

## 개발 환경
* 프론트엔드
    * React
    * TypeScript
* 백엔드
    * Node.js
    * MongoDB
* 서버 환경 (미정)

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

- **메인**

* **메뉴**
    - **의류**
    - **산책**
    - **리빙**
    - **event**
    - **collection**
        - 하위 메뉴 삭제<br />
            - 많은 종류의 컬렉션이 존재하지만, 마우스 오버 시 세 가지 컬렉션만 표시되어 드롭다운 메뉴의 의미가 없다고 판단하였고, 대 메뉴를 통해 다양한 컬렉션이 있는 페이지로 바로 이동할 수 있도록 유도 했습니다.
    - **community**
        - **공지사항**
        - **자주묻는질문**
        - **협업문의**
        - **상품후기**
        - **문의하기**
        - 커뮤니티 삭제<br />
            - 기존에는 커뮤니티 메뉴 하위에 이벤트, 공지 등의 게시판을 모아뒀으나, 커뮤니티 메뉴를 한 번 더 클릭해야 게시판에 접근할 수 있어 불편하다고 판단하여 개선하였습니다.
        - 이벤트/뉴스 삭제 <br />
            - 이벤트 페이지는 이미 대 메뉴에 존재하고 있어 불필요하게 존재하는 중복되는 페이지라고 판단하였습니다.
    - **about**
        - **회사소개**
        - **영상소개**
        - **오프라인 스토어**
        - membership 삭제<br />
            - 회원가입 또는 구매금액에 대한 혜택에 대해 페이지를 따로 두는 것보다 회원가입부터 구매과정까지 혜택들을 아이콘이나 택스트로 바로 확인할 수 있도록 변경하고 자세한 내용은 공지사항에 포함하는 것이 맞다고 판단하였습니다.
        - FLOT Story 삭제<br />
            - 회사소개와 유사한 내용을 포함하고 있기 때문에 회사소개와 FLOT Story를 합치기로 결정했습니다.
        - FLOT History 삭제<br />
            - 마찬가지로 회사소개와 유사한 내용을 포함하고 있기 때문에 회사소개와 FLOT History를 합치기로 결정했습니다.
        - 온라인 구매처 삭제<br />
            - 온라인으로 구매할 수 있는 곳은 너무 많아서 모든 곳을 일일이 나열하는 것이 오히려 혼란을 가중시킬 수 있다고 판단했습니다.

- **채널톡** ( channel.io )

- **로그인**

- **회원가입**

- **아이디 찾기**

- **비밀번호 찾기**

* **마이쇼핑**
    * **적립금 조회**
    * **주문조회**
    * **쿠폰 조회**

- **장바구니**

- **최근 본 상품**

- **바탕화면 바로가기**

- **이용안내**

- **쇼핑몰 이용약관**

- **개인정보처리방침**

* 즐겨찾기 삭제
    - 브라우저에서 기본적으로 제공하는 즐겨찾기 기능을 사용하여 해당 기능을 대체할 수 있기 때문에 이 프로젝트에서는 해당 기능이 필요하지 않다고 판단하였습니다.

- 사은품 삭제
    - 구매시 증정하는 사은품을 알려주는 페이지로 구매과정에 녹일 수 있는 내용이라 판단하였습니다.

* B2B 사업자 쇼핑몰 삭제
    - 중복되는 기능이 많고 기존 페이지와 유사하여 이번 클론 프로젝트에서는 다루지 않기로 하였습니다.

전체적인 문제..
피씨와 모바일 비교해봤을때 피씨에 좀 소홀한 느낌이 듬 이미지도 너무 커서 pc로 보기가 힘듦