import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClassCard from '../ClassCard';
import './CarouselClases.css';

const CarouselClases = () => {
  
    const clases = [
        {
          titulo: "CROSSFIT",
          descripcion:
            "Entrenamiento de alta intensidad que mejora la fuerza, resistencia cardiovascular y agilidad mediante movimientos funcionales.",
          imagen: "/crossfitCard.webp",
        },
        {
          titulo: "HALTEROFILIA",
          descripcion:
            "Entrenamiento en levantamiento de pesas centrado en desarrollar fuerza y mejorar la técnica. Con ejercicios específicos como el clean and jerk y el snatch.",
          imagen: "/crossfitCard.webp",
        },
        {
          titulo: "GYMNASTICS",
          descripcion:
            "Clases enfocadas en mejorar movimientos gimnásticos de CrossFit, como el pull-up y el muscle-up, desarrollando fuerza, flexibilidad y control corporal.",
          imagen: "/crossfitCard.webp",
        },
        {
          titulo: "MOBILITY",
          descripcion:
            "Clases con Quirones para mejorar la flexibilidad y el rango de movimiento, previniendo lesiones y favoreciendo la recuperación muscular.",
          imagen: "/crossfitCard.webp",
        },
        {
          titulo: "LONGEVIA FIT",
          descripcion:
            "Nunca es tarde para empezar. Un entrenamiento diseñado para mejorar tu movilidad, fuerza y equilibrio, para disfrutar de una vida activa y saludable",
          imagen: "/crossfitCard.webp",
        },
      ];
      
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
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="swiper-clases" // 👈 nombre único
    >

        {clases.map((miembro, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center pb-8 px-12 w-full max-w-full">
              <ClassCard {...miembro} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselClases;