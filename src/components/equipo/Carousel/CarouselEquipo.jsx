// src/components/MyCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EquipoCard from '../EquipoCard';
import './CarouselEquipo.css'; // Aquí meteremos estilos personalizados para las bolitas

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
        paddingBottom: '4rem', // más espacio para que quepan las bolitas
        position: 'relative',  // importante para ubicar la paginación
      }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {equipo.map((miembro, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <EquipoCard {...miembro} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselEquipo;
