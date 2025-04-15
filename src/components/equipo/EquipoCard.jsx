// src/components/EquipoCard.jsx
import React from 'react';

const EquipoCard = ({ nombre, descripcion, rol, imagen, especialidades, imagenClasses }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[330px] sm:min-w-[330px] max-h-[500px] xl:min-w-[270px] xl:max-w-[330px] bg-theme-dark-gray rounded-2xl overflow-hidden">
      {/* Imagen del coach */}
      <img
        className={`w-full h-[250px] object-cover ${imagenClasses}`}
        src={imagen}
        alt={nombre}
      />

      {/* Contenido */}
      <div className="flex flex-col w-full py-4 px-4 2xl:px-6 gap-4">
        {/* Nombre, rol y descripción */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-primary text-theme-white text-left">{nombre}</h3>
          <div className="text-sm text-primary-blue tracking-wide">{rol}</div>
          <div className="text-sm text-theme-white font-sans">{descripcion}</div>
        </div>

        {/* Especialidades */}
        <div className="flex flex-wrap justify-evenly gap-1 sm:gap-2 w-full">
          {especialidades.map((spec, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-3 py-1 bg-theme-background-gray rounded-full"
            >
              <span className="flex justify-center items-center w-full text-center text-theme-light-gray font-sans text-xs">
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
