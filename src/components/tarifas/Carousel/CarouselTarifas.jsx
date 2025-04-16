import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarouselTarifas.css';

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
        spaceBetween={1}
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className={`swiper-tarifas ${theme}`} // 👈 Aquí se inyecta el tema
        breakpoints={{
          0: { slidesPerView: 'auto', centeredSlides: true },
          640: { slidesPerView: 'auto', centeredSlides: true },
        }}
      >
        {components.map((element, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
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
