import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
//CSS cho nút Next, Prev
import 'swiper/css/navigation';
//CSS phần chấm tròn phân trang
import 'swiper/css/pagination';

//Doc: https://swiperjs.com/react

const GallerySwipper = ()=>{
  return (
    <Swiper
     // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20} //KHoảng cách giữa các slide
      slidesPerView={2} //Số lượng slide trên một màn hình
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="item">
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/12/banner/720-220--1--720x220-5.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/10/banner/LAP-GAMING-720-220-720x220.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
  )
}


const MoviesList = ()=>{
  //Nhớ tạo typeScript cho state
  const [movies, setMovies] = React.useState(null);

  React.useEffect(()=>{
      //tạo hàm gọi API
      const fetchAPI = async ()=>{
        const urlAPI = 'https://api.themoviedb.org/3/movie/popular';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
          }
        };
        const response = await fetch(urlAPI, options);
        const data = await response.json();
        console.log(data);
        //Cắt mảng, chỉ lấy 4 items
        const slideMovies = data.results.slice(0,4);
        setMovies(slideMovies)
      }
      //Gọi Hàm để lấy Data
      fetchAPI();

  },[]); //gọi duy nhất lần đầu component render

  console.log('movies',movies);

  return (
    <ul>
      {
        movies && movies.map((movie)=>{
          return (
            <li key={movie.id}>
                {movie.title}
            </li>
          )
        })
      }
    </ul>
  )
}



const  HomePage  =( ) => {
  return (
    <div>
      <h1>Home Page</h1>
      <GallerySwipper />
      <MoviesList />
    </div>
  )
}

export default HomePage