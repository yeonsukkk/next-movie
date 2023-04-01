# 영화 사이트
현재 상영중인 영화, 상영 예정인 영화 목록을 볼 수 있는 사이트<br />
[사이트방문](https://next-movie-sepia.vercel.app/)
## 목차
1. [언어&#x0026;툴](#언어&툴)
2. [스토리보드](#스토리보드)
3. [구조](#구조)
4. [페이지](#페이지)
5. [기능설명](#기능설명)

<br />

### 💡언어&#x0026;툴
<img src="https://img.shields.io/badge/HTML5-E34F26?style=E34F26&logo=HTML5&logoColor=fff"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=1572B6&logo=CSS3&logoColor=fff"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=F7DF1E&logo=JavaScript&logoColor=333"/> <img src="https://img.shields.io/badge/Node.js-339933?style=339933&logo=Node.js&logoColor=fff"/> <img src="https://img.shields.io/badge/npm-CB3837?style=CB3837&logo=npm&logoColor=fff"/> <img src="https://img.shields.io/badge/next.js-000000?style=000000&logo=next.js&logoColor=fff"/> <img src="https://img.shields.io/badge/vercel-000000?style=000000&logo=vercel&logoColor=fff"/>
<br />
<br />

### 💡스토리보드
[스토리보드](https://www.figma.com/file/axHPHVJauw2uOHcOWK6CVd/%EB%84%A5%EC%8A%A4%ED%8A%B8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A41-%EC%98%81%ED%99%94?node-id=0-1&t=qe8DGN26TiuLikqv-0)
<img src="https://img.shields.io/badge/figma-F24E1E?style=000000&logo=figma&logoColor=fff"/>
<br />
<br />

### 💡구조
```
next-movie
├─ component
│  ├─ BtnTop.js
│  ├─ Footer.js
│  ├─ Layout.js
│  ├─ MainVisual.js
│  ├─ Nav.js
│  ├─ Product.js
│  └─ ProductItem.js
├─ pages
│  ├─ api
│  │  └─ api.js
│  ├─ index.js
│  ├─ movie
│  │  └─ [id]
│  │     └─ index.js
│  ├─ _app.js
│  └─ _document.js
├─ public
│  ├─ favicon.ico
│  └─ logo.webp
├─ styles
   ├─ globals.css
   ├─ Home.module.css
   ├─ layout.css
   └─ media.css

```

### 💡페이지
  1. 홈
  2. 상세페이지
<br />

### 💡기능설명
  1. 홈<br />
    *pages>index.js*
    <br />
    <img src="https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/img/git/home.png" alt="홈 이미지" width="300" />
      - 데이터
        - getStaticProps()을 이용하여 <메인 비주얼 영역>, <인기있는 영화 목록> 데이터 가져옴
          ```bash
          <메인 비주얼 영역 json 파일 형식>
          [
            {
              "id": 1,
              "title": "title",
              "imgUrl": "url"
            }
          ]

          <인기있는 영화 목록 json 파일 형식>
          [
            {
              "id": 1,
              "tilte": "title"
              "img": "imgUrl",
              "subImg": [
                "subImgUrl1",
                "subImgUrl2"
              ],
              "genre": [0],
              "subscript": "subscript",
              "director": ["director1"],
              "cast": ["cast1"],
              "open": 1678201200000
            }
          ]
          ```
      - 레이아웃(메인 비주얼 영역 & 인기있는 영화 목록)
        - Swiper 이용하여 가져온 데이터로 슬라이드 구현
        - 인기있는 영화 목록 리스트 클릭 시 상세페이지로 이동
<br />
<br />

  2. 상세페이지<br/>
    *pages>movie>[id]>index.js*
    <br />
    <img src="https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/img/git/sub.png" alt="서브 이미지" width="300" />

      - 데이터
        - getServerSideProps()를 이용하여 데이터 가져온 후 filter() 이용하여 선택한 영화의 데이터만 가져옴
        - 가져온 데이터를 컴포넌트에 *(component>ProductItem.js)* props로 넘겨줌
        <br /><br />
      - 레이아웃
         - 상단 비주얼 영역
            - "subImg"에 해당하는 데이터를 가져와서 Swiper를 이용하여 슬라이드 구현
         - 영화 정보 영역
            - 밀리초로 되어있는 개봉일을 년.월.일 로 표기되는 함수 구현 (changeDate)<br />
              *(pages>api>api.js)*
            - D-day 함수 구현 (dday)<br />
              개봉일 > 오늘 날짜 : “D-?” 로 표기<br />
              개봉일 <= 오늘 날짜 : “상영중” 으로 표기<br />
              *(pages>api>api.js)*
        
