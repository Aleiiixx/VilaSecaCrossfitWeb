import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EquipoCard from '../EquipoCard';
import './CarouselEquipo.css';

const CarouselEquipo = () => {
  
  const equipo = [
    {
      nombre: 'Lu',
      descripcion: 'Coach de vida y experto en desarrollo personal.',
      rol: 'Head Coach',
      imagen: '/lu.webp',
      especialidades: ['Crossfit L2', 'Halterofilia', 'Gymnastics'],
      imagenClasses: '',
    },
    {
      nombre: 'Sergi',
      descripcion: 'Coach de vida y experto en desarrollo personal.',
      rol: 'Head Coach',
      imagen: '/sergi.webp',
      especialidades: ['Crossfit', 'Halterofilia', 'Gymnastics'],
      imagenClasses: '',
    },
    {
      nombre: 'Saray',
      descripcion: 'Coach de vida y experto en desarrollo personal.',
      rol: 'Head Coach',
      imagen: '/saray.webp',
      especialidades: ['Crossfit', 'Halterofilia', 'Gymnastics'],
      imagenClasses: '',
    },
    {
      nombre: 'Borja',
      descripcion: 'Coach de vida y experto en desarrollo personal.',
      rol: 'Head Coach',
      imagen: '/borja.webp',
      especialidades: ['Crossfit', 'Halterofilia', 'Gymnastics'],
      imagenClasses: 'top-50',
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
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="swiper-equipo" 
        breakpoints={{
          0: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
          },
        }}
      >
        {equipo.map((miembro, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center pb-8 px-4 w-full">
              <EquipoCard {...miembro} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselEquipo;
