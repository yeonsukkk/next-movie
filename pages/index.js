import { Layout } from "@/component/Layout";
import { MainVisual } from "@/component/MainVisual";
import { Nav } from "@/component/Nav";
import { Product } from "@/component/Product";
import Head from "next/head";
import { genreList } from "./api/api";

export default function Home(props) {
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
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/json/mainVisual.json')
  const data = await res.json()

  const movieRes = await fetch('https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/json/movieData.json')
  const movieData = await movieRes.json()

  return {
    props: {
      mainvisual: data,
      movieData
    }
  }
}