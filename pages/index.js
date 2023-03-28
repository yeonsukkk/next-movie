import { Footer } from "@/component/Footer";
import { Layout } from "@/component/Layout";
import { MainVisual } from "@/component/MainVisual";
import { Nav } from "@/component/Nav";
import { Product } from "@/component/Product";
import Head from "next/head";
import { genreList } from "./api/api";
import { BtnTop } from "@/component/BtnTop";

export default function Home(props) {
    let scrollFlag = false // top버튼 관련
  if(typeof(window) === 'object'){
    window.addEventListener('scroll', function(){
      // 탑버튼
      if(window.scrollY > 100 && !scrollFlag) {
        document.querySelector('.btnTop').classList.add('act')
        scrollFlag = true
      }else if(window.scrollY <= 100 && scrollFlag){
        document.querySelector('.btnTop').classList.remove('act')
        scrollFlag = false
      }
    })
  }
  return (
    <>
      <Layout>
        <Head>
          <title>Next-movie</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="allWrap">
          <Nav />
          <main className="cntWrap">
            <MainVisual mainvisual={props.mainvisual} />
            <Product movie={props.movieData} genreList={genreList} />
          </main>
          <Footer />
          <BtnTop />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/json/mainVisual.json')
  const data = await res.json()

  const movieRes = await fetch('https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/json/movieData1.json')
  const movieData = await movieRes.json()

  return {
    props: {
      mainvisual: data,
      movieData
    }
  }
}