import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './ProductsGallery.module.css'

const ProductsGallery = () => {
  return (
    <div className={styles.product_gallery}>
    <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/goods_img/xiaomi-redmi-note-11s-5g-G4305-1650508487726.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367782874.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://ecshopvietnam.com/ecshopmi/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860405.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default ProductsGallery