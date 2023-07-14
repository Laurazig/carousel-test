import './App.css';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import React, { useRef, useState } from 'react';
import Swiper, { SwiperSlide } from 'swiper/react';
// import Swiper, {SwiperOptions} from "swiper";
// import { Navigation } from 'swiper/modules';
// import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import matrix from './matrix.jpg';
import matrixPill from './matrix_pill.jpeg';

function App() {

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Swiper</h1>
      </header>
      {/* <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide"> <img src={matrix} /> </div>
          <div className="swiper-slide"><img src={matrixPill} /></div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div> */}
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
        {/* <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        > */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={matrix}/></SwiperSlide>
          <SwiperSlide><img src={matrixPill}/></SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      {/* </div> */}
    </div>
  );
}

export default App;
