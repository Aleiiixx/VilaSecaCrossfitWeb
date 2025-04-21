import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarouselFamily.css'

const imageCount = 24; // cantidad de imágenes que tienes
const startFrom = 0; // empieza desde family_3.webp

const images = Array.from({ length: imageCount }, (_, i) => `/family/family_${i + startFrom}.webp`);


const CarrouselFamily = () => {
  return (
    <div className={`w-full md:w-1/2 max-w-2xl`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        pagination={{ type: 'fraction' }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className={`swiper-family`}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`family ${index + 1}`}
              className="w-full h-auto aspect-video object-cover rounded-md shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrouselFamily;
