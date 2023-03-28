import { BtnTop } from "@/component/BtnTop"
import { Footer } from "@/component/Footer"
import { Layout } from "@/component/Layout"
import { Nav } from "@/component/Nav"
import { ProductItem } from "@/component/ProductItem"
import { genreList } from "@/pages/api/api"

const movieDetail = ({info}) => {
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
  return(
    <Layout>
      <Nav />
      <ProductItem data={info} genreList={genreList} />
      <Footer />
      <BtnTop />
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch('https://ys-next-movie.s3.ap-northeast-2.amazonaws.com/json/movieData1.json')
  const data = await res.json()

  const info = data.filter(item => item.id == context.params.id)

  return{
    props: {
      info
    }
  }
}

export default movieDetail