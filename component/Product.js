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
          slidesPerView={2.5}
          spaceBetween={15}
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