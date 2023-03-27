import { Layout } from "@/component/Layout"
import { Nav } from "@/component/Nav"
import { ProductItem } from "@/component/ProductItem"
import { genreList } from "@/pages/api/api"

const movieDetail = ({info}) => {
  return(
    <Layout>
      <Nav />
      <ProductItem data={info} genreList={genreList} />
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch('https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/json/movieData.json')
  const data = await res.json()

  const info = data.filter(item => item.id == context.params.id)

  return{
    props: {
      info
    }
  }
}

export default movieDetail