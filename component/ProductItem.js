import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
SwiperCore.use([Autoplay, Pagination]);

import Image from "next/image"
import { changeDate } from "@/pages/api/api";

export const ProductItem = ({data, genreList}) => {
  console.log(data, genreList)
  return(
    <>
      <main>
        <section className="productItemWrap">
          <h3 className="hide">{`영화 ${data[0].title} 상세페이지`}</h3>
          <div className="detailImgWrap">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              speed={700}
              loop={true}
              pagination={{clickable: true}}
            >
              {
                data[0].subImg?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={item}
                      alt="상세이미지"
                      width={500}
                      height={200}
                      unoptimized={true}
                      priority
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className="infoWrap">
            <figure>
              <div className="poster">
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
                <dl className="genre">
                  <dt className="hide">장르</dt>
                  <dd>
                    {
                      data[0].genre?.map((item, idx) => {
                        if(idx !== data[0].genre.length - 1){
                          return <span key={idx}>{genreList[item]}, </span>
                        }else {
                          return <span key={idx}>{genreList[item]}</span>
                        }
                      })
                    }
                  </dd>
                </dl>
                <dl className="title">
                  <dt className="hide">영화 제목</dt>
                  <dd>{data[0].title}</dd>
                </dl>
                <dl>
                  <dt>감독</dt>
                  <dd>
                    {data[0].director.join(', ')}
                  </dd>
                </dl>
                <dl>
                  <dt>출연진</dt>
                  <dd>{data[0].cast.join(', ')}</dd>
                </dl>
                <dl>
                  <dt>개봉일</dt>
                  <dd>
                    {changeDate(data[0].open)}
                    <span className="dday">D-2</span>
                  </dd>
                </dl>
              </figcaption>
            </figure>
            <div className="subscript">
              <dl>
                <dt>줄거리</dt>
                <dd>{data[0].subscript}</dd>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}