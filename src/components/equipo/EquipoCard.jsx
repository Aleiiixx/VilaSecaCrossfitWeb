// src/components/EquipoCard.jsx
import React from 'react';

const EquipoCard = ({ nombre, descripcion, rol, imagen, especialidades, imagenClasses }) => {
  return (
    <div className="w-full max-w-[280px] h-[450px] sm:max-w-[300px] sm:h-[300px] flex flex-col items-center bg-theme-dark-gray shadow-lg rounded-2xl overflow-hidden">
      {/* Imagen del coach */}
      <img
        className={`w-full h-[250px] object-cover ${imagenClasses}`}
        src={imagen}
        alt={nombre}
      />

      {/* Contenido */}
      <div className="flex flex-col w-full py-4 px-6 gap-4">
        {/* Nombre, rol y descripción */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-primary text-theme-white text-left">{nombre}</h3>
          <div className="text-sm text-primary-blue tracking-wide">{rol}</div>
          <div className="text-sm text-theme-white font-sans">{descripcion}</div>
        </div>

        {/* Especialidades */}
        <div className="flex flex-wrap justify-between gap-1 w-full px-1">
          {especialidades.map((spec, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 px-3 py-1 bg-theme-background-gray rounded-full text-sm font-medium"
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
