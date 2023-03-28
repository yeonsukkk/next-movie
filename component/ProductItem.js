import Image from "next/image"

export const ProductItem = ({data, genreList}) => {
  console.log(data, genreList)
  return(
    <section className="productItemWrap">
      <h3 className="hide">{`영화 ${data[0].title} 상세페이지`}</h3>
      <figure>
        <div>
          <Image
            src={data[0].img}
            alt={data[0].title}
            width={500}
            height={300}
            unoptimized={true}
            priority
          />
        </div>
        <figcaption>
          <dl>
            <dt className="hide">영화 제목</dt>
            <dd>{data[0].title}</dd>
          </dl>
        </figcaption>
      </figure>
    </section>
  )
}