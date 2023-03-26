import { Layout } from "@/component/Layout";
import { MainVisual } from "@/component/MainVisual";
import { Nav } from "@/component/Nav";
import { Product } from "@/component/Product";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next-movie</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main>
          <MainVisual />
          <Product />
        </main>
      </Layout>
    </>
  )
}
