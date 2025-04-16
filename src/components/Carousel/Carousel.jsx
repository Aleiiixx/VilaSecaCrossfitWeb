import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

const CarouselTarifas = ({ components, theme = 'violet' }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className={`swiper ${theme}`}
        breakpoints={{
          400: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
            centeredSlides: true,
          },
        }}
      >
        {components.map((element, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center pb-8 px-2 w-full">
              {element}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTarifas;
