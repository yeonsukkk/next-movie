import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
SwiperCore.use([Autoplay, Pagination, EffectFade]);

import Image from "next/image"

export const MainVisual = ({mainvisual}) => {
  // console.log(mainvisual)
  return(
    <section className="mainVisualWrap">
      <h2 className="hide">메인비주얼 영역</h2>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        speed={1000}
        loop={true}
        pagination={{clickable: true}}
        effect={"fade"}
      >
        {
          mainvisual?.map(item => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={500}
                height={300}
                unoptimized={true}
                priority
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

