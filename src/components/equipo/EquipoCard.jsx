// src/components/EquipoCard.jsx
import React from 'react';

const EquipoCard = ({ nombre, descripcion, rol, imagen, especialidades, imagenClasses }) => {
  return (
    <div className=" h-[460px] sm:h-[480px]  
    sm:w-[300px] 
    md:w-[330px]
    2xl:w-[290px] 2xl:h-[500px]
    flex flex-col bg-theme-dark-gray shadow-lg rounded-2xl overflow-hidden">
      {/* Imagen del coach */}
      <img
        className={`w-full h-[230px] sm:h-[270px] object-cover ${imagenClasses}`}
        src={imagen}
        alt={nombre}
      />

      {/* Contenido */}
      <div className="flex flex-col w-full h-[210px] py-4 px-2 sm:px-4 gap-4 justify-between 2xl:py-0 2xl:pt-2">
        {/* Nombre, rol y descripción */}
        <div className="flex flex-col gap-2 px-2 2xl:h-[170px]">
          <h3 className="text-3xl font-bold text-primary text-theme-white text-left">{nombre}</h3>
          <div className="text-sm text-primary-blue tracking-wide">{rol}</div>
          <div className="text-sm text-theme-white font-sans md:text-base">{descripcion}</div>
        </div>

        {/* Especialidades */}
        <div className="flex flex-wrap justify-between w-full gap-1">
          {especialidades.map((spec, i) => (
            <div
              key={i}
              className="bg-theme-background-gray rounded-full px-2"
            >
              <span className="text-theme-light-gray font-sans text-xs sm:text-[13px] md:text-[15px] xl:text-sm ">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EquipoCard;
