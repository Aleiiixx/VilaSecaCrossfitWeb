import React from "react";

const ClassCard = ({ titulo, descripcion, imagen }) => {
  return (
    <div className="w-full max-w-[280px] h-[360px] sm:max-w-[300px] sm:h-[300px] flex flex-col items-center bg-gradient-to-b from-primary-blue to-primary-violet p-1 shadow-lg rounded-2xl overflow-hidden">

      <div className="bg-theme-dark-gray w-full h-full rounded-2xl">
        {/* Imagen del coach */}
        <img src={imagen} alt="" className="w-full h-[55%] object-cover rounded-t-2xl" />

        {/* Contenido */}
        <div className="flex flex-col w-full py-2 px-6 gap-4">
          {/* Nombre, rol y descripción */}
          <div className="flex flex-col gap-2 h-fit">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary text-primary-blue text-left">
              {titulo}
            </h3>
            <div className="text-sm text-theme-white font-sans">
              {descripcion}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
