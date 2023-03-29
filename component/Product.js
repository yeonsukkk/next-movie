import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

export const Product = ({movie}) => {
  return(
    <section className="movieWrap">
      <h2>인기있는 영화 목록</h2>
      <div className="movieCnt">
        <Swiper
          slidesPerView={3.3}
          spaceBetween={15}
          breakpoints={{
            480: {
              slidesPerView: 3.3
            },
            768: {
              slidesPerView: 4.3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 5.3,
              spaceBetween: 20
            }
          }}
        >
          {
            movie?.map(item => (
              <SwiperSlide key={item.id}>
                <Link href="/movie/[id]" as={`/movie/${item.id}`}>
                  <figure>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={300}
                      unoptimized={true}
                      priority
                    />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}