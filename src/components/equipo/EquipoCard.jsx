import React from 'react';

const EquipoCard = ({ nombre, descripcion, rol, imagen, especialidades }) => {
  return (
    <div
      className="h-[500px] sm:h-[480px]  
      sm:w-[330px] 
      md:w-[330px]
      2xl:w-[330px] 2xl:h-[500px]
      flex flex-col bg-theme-dark-gray shadow-lg rounded-2xl overflow-hidden"
    >
      {/* Imagen: 60% */}
      <div className="flex-[6] h-full w-full">
        <img
          loading='lazy'
          className="w-full h-full object-cover"
          src={imagen}
          alt={nombre}
        />
      </div>

      {/* Contenido: 40% */}
      <div className="flex-[4] h-full flex flex-col w-full py-3 px-2 sm:px-4 gap-4 justify-between">
        {/* Nombre, rol y descripción */}
        <div className="flex flex-col gap-2 md:gap-1 px-2 overflow-hidden">
          <h3 className="text-2xl font-bold text-primary text-theme-white text-left">{nombre}</h3>
          <div className="text-sm text-primary-blue tracking-wide">{rol}</div>
          <div className="text-sm text-theme-white font-sans md:text-base">{descripcion}</div>
        </div>

        {/* Especialidades */}
        <div className="flex justify-around w-full gap-1 flex-nowrap overflow-x-auto">
          {especialidades.map((spec, i) => (
            <div
              key={i}
              className="bg-theme-background-gray rounded-full px-2 py-1 flex-shrink-0"
            >
              <span className="text-theme-light-gray font-sans text-[70%] sm:text-[83%] flex justify-center whitespace-nowrap">
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
