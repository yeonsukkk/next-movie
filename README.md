# 영화 사이트
현재 상영중인 영화, 상영 예정인 영화 목록을 볼 수 있는 사이트

<br />

## 개발환경
* Next.js
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 구조
📦component
 ┣ 📜BtnTop.js
 ┣ 📜Footer.js
 ┣ 📜Layout.js
 ┣ 📜MainVisual.js
 ┣ 📜Nav.js
 ┣ 📜Product.js
 ┗ 📜ProductItem.js
 📦pages
 ┣ 📂api
 ┃ ┗ 📜api.js
 ┣ 📂movie
 ┃ ┗ 📂[id]
 ┃ ┃ ┗ 📜index.js
 ┣ 📜index.js
 ┣ 📜_app.js
 ┗ 📜_document.js
 📦public
 ┣ 📜favicon.ico
 ┣ 📜logo.webp
 ┣ 📜next.svg
 ┣ 📜thirteen.svg
 ┗ 📜vercel.svg
 📦styles
 ┣ 📜globals.css
 ┣ 📜Home.module.css
 ┣ 📜layout.css
 ┗ 📜media.css