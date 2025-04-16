// Clases.jsx
import CarouselTarifas from "@components/tarifas/Carousel/CarouselTarifas";
import ClassCard from "./ClassCard";

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

const Clases = () => {
  return (
    <section
      className="relative flex flex-col w-full overflow-hidden 
        bg-no-repeat bg-right bg-[length:auto_90%] h-fit min-h-screen max-h-full
        py-16 md:py-24 px-4 sm:px-8 xl:px-12"
      style={{ backgroundImage: "url('/leonGris.webp')" }}
    >
      <div
        id="clases"
        className="flex justify-center items-center gap-4 pt-20 pb-4 sm:py-12 alling-center"
      >
        <h2 className="flex-wrap">
          CLASES QUE <span className="text-primary-blue">TRANSFORMAN</span>
        </h2>
      </div>

      {/* Carrusel SOLO en móvil */}
      <div className="block md:hidden w-full h-[400px]">
        <CarouselTarifas
          components={clases.map((miembro, index) => (
            <ClassCard key={index} {...miembro} />
          ))}
        />
      </div>

      {/* Cards SOLO en escritorio */}
      <div className="hidden md:flex md:flex-wrap justify-center gap-4 xl:px-12">
        {clases.map((miembro, index) => (
          <ClassCard key={index} {...miembro} />
        ))}
      </div>
    </section>
  );
};

export default Clases;
