import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

const generateBreakpoints = () => {
  const breakpoints = {};
  for (let width = 400; width <= 1024; width += 8) {
    const progress = (width - 400) / (1024 - 400);

    // slidesPerView sigue creciendo de 1.2 a 2.2
    const slides = 1.2 + progress * (2.2 - 1.2);

    // Reducimos spaceBetween mucho más: de 4 a 10
    const space = 4 + progress * (10 - 4);

    breakpoints[width] = {
      slidesPerView: parseFloat(slides.toFixed(2)),
      spaceBetween: parseInt(space.toFixed(0)),
      centeredSlides: true,
    };
  }
  return breakpoints;
};

const CarouselTarifas = ({ components, theme = 'violet' }) => {
  return (
    <div
      style={{
        width: '100%',
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
        breakpoints={generateBreakpoints()}
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
