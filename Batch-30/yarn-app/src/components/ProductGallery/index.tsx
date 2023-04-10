import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { gallerys } from "../../data/gallerys";

const ProductGallery = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {gallerys.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.urlImage} alt={slide.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductGallery;
