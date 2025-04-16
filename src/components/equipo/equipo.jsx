// Equipo.jsx
import CarouselTarifas from "@components/tarifas/Carousel/CarouselTarifas";
import EquipoCard from "./EquipoCard";

const equipo = [
  {
    nombre: "Lu",
    descripcion:
      "Responsable del entrenamiento en el box. Co-Owner, atleta de CrossFit… y la culpable de que sufras en cada WOD.",
    rol: "Head Coach & Co-Owner",
    imagen: "/lu.webp",
    especialidades: ["Crossfit L2", "Halterofilia", "Gymnastics"],
    imagenClasses: "",
  },
  {
    nombre: "Sergi",
    descripcion:
      "Co-Owner del box. Le encontrarás entrenando, ayudando… o metiéndose contigo (con cariño).",
    rol: "Co-Owner",
    imagen: "/sergi.webp",
    especialidades: ["Crossfit", "Halterofilia", "Gymnastics"],
    imagenClasses: "",
  },
  {
    nombre: "Saray",
    descripcion:
      "Saray, la Srta. Inkisidora. Coach del box, siempre dispuesta a ayudarte a mejorar cada día.",
    rol: "Coach",
    imagen: "/saray.webp",
    especialidades: ["Crossfit", "Halterofilia", "Gymnastics"],
    imagenClasses: "",
  },
  {
    nombre: "Borja",
    descripcion: "Coach del box, siempre dispuesto a ayudarte a mejorar cada día.",
    rol: "Coach",
    imagen: "/borja.webp",
    especialidades: ["Crossfit", "Halterofilia", "Gymnastics"],
    imagenClasses: "top-50",
  },
  {
    nombre: "Vanessa",
    descripcion: "Mobility Coach y experta en movilidad.",
    rol: "Coach",
    imagen: "/borja.webp",
    especialidades: ["Crossfit", "Halterofilia", "Gymnastics"],
    imagenClasses: "top-50",
  },
];

const Equipo = () => {
  return (
    <section
      id="nosotros"
      className="relative flex flex-col w-full overflow-hidden bg-[#F0F0F0] min-h-[90vh] max-h-full justify-center
        px-4 sm:px-8 xl:px-18 2xl:px-4 sm:py-16 md:py-20"
    >
      <div className="flex justify-center py-2 sm:gap-4 sm:py-12">
        <h2 className="flex-wrap text-theme-dark-gray">
          <span className="text-theme-dark">NUESTRO</span>{" "}
          <span className="text-theme-violet-text">EQUIPO</span>
        </h2>
      </div>

      {/* Carrusel SOLO en móvil */}
      <div className="block md:hidden w-full h-[500px]">
        <CarouselTarifas
          components={equipo.map((miembro, index) => (
            <EquipoCard key={index} {...miembro} />
          ))}
        />
      </div>

      {/* Cards SOLO en escritorio */}
      <div className="hidden md:flex md:flex-wrap md:justify-center md:w-full md:px-8 md:gap-6 2xl:gap-4 2xl:px-40">
        {equipo.map((miembro, index) => (
          <EquipoCard key={index} {...miembro} />
        ))}
      </div>
    </section>
  );
};

export default Equipo;
