import React from 'react';

const PlanCard = ({
  tituloBono,
  precio,
  caracteristicas,
  alignLeft = false,
  responsiveWidth = 'w-[400px]', // ancho por defecto
}) => {
  return (
    <div
      className={`flex flex-col items-center max-h-[600px] max-w-[450px] bg-theme-dark-gray p-1 shadow-lg rounded-2xl overflow-hidden ${responsiveWidth}`}
    >
      <div className="w-full h-full rounded-2xl py-6 px-6 gap-4">
        <div className="flex flex-col w-full py-4">
          <h3
            className="text-3xl font-bold text-theme-white text-center"
            dangerouslySetInnerHTML={{ __html: tituloBono }}
          />
          <div className="flex flex-row justify-center items-end">
            <h4 className="text-3xl font-bold text-primary-blue text-center">{precio}</h4>
            <p className="text-sm text-[#c2c0c0] text-center pb-1">&nbsp;/mes</p>
          </div>
        </div>
        <div className={`flex flex-col w-full ${!alignLeft ? 'items-center pr-8' : ''} gap-2`}>
          {caracteristicas.map((caracteristica, i) => (
            <div key={i} className="flex flex-row pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-blue"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" />
              </svg>
              <div className="font-sans pl-1 text-theme-white">{caracteristica}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
