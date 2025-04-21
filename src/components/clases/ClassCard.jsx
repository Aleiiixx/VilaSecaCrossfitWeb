import React from "react";

const ClassCard = ({ titulo, descripcion, imagen }) => {
  return (
    <div className=" w-[280px] h-[390px] 
    sm:w-[400px] sm:h-[330px] 
    2xl:w-[450px] 2xl:h-[380px] 
    flex flex-col 
    bg-gradient-to-b from-primary-blue to-primary-violet 
    p-0.5 shadow-lg rounded-2xl overflow-hidden">

      <div className="bg-theme-dark-gray w-full h-full rounded-2xl">
        {/* Imagen del coach */}
        <img src={imagen} alt="" className="w-full h-[65%] object-cover rounded-t-2xl" loading="lazy" />

        {/* Contenido */}
        <div className="flex flex-col w-full py-2 px-6">
          {/* Nombre, rol y descripción */}
          <div className="flex flex-col gap-1 h-fit">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary text-primary-blue text-left">
              {titulo}
            </h3>
            <div className="text-xs md:text-sm text-theme-white font-sans">
              {descripcion}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
