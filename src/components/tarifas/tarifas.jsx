import React from 'react';
import BonoCard from './BonoCard';
import CarouselTarifas from '../Carousel/Carousel';
import ExtraCard from './ExtraCard';
import PlanCard from './PlanCard';

const ClasesSection = () => {
  return (
    <section id="tarifas" className="relative flex flex-col w-full overflow-hidden py-12 mb-24 gap-6">
      <h2 className="text-theme-white">ELIGE TU BONO</h2>

      <div className="hidden md:flex flex-row justify-center gap-8">
        <BonoCard
          tituloBono="BONO 1 <br> SESION"
          precio="10€"
          caracteristicas={[]}
        />
        <BonoCard
          tituloBono="BONO 5 <br> SESIONES"
          precio="40€"
          caracteristicas={[]}
        />
        <BonoCard
          tituloBono="BONO 10 <br> SESIONES"
          precio="75€"
          caracteristicas={[]}
        />
      </div>
      <div className='md:hidden'>
        <CarouselTarifas
          components={[
            <BonoCard tituloBono="BONO 1 <br> SESION" precio="10€" caracteristicas={[]}/>,
            <BonoCard tituloBono="BONO 5 <br> SESIONES" precio="40€" caracteristicas={[]}/>,
            <BonoCard tituloBono="BONO 10 <br>SESIONES" precio="75€" caracteristicas={[]}/>
          ]}
        />
      </div>

      <h2 className="text-theme-white">PLANES MENSUALES</h2>

      <div className="flex-row gap-2 justify-center hidden md:flex">
        <PlanCard
          tituloBono="IRON"
          precio="29€"
          caracteristicas={["5 sesiones al mes"]}
        />
        <PlanCard
          tituloBono="BRONZE"
          precio="46€"
          caracteristicas={["9 sesiones al mes"]}
        />
        <PlanCard
          tituloBono="SILVER"
          precio="57€"
          caracteristicas={["13 sesiones al mes"]}
        />
        <PlanCard
          tituloBono="GOLDEN"
          precio="69€"
          caracteristicas={["17 sesiones al mes"]}
        />
      </div>

      <div className='md:hidden'>
        <CarouselTarifas
          components={[
            <PlanCard key="iron" tituloBono="IRON" precio="29€" caracteristicas={["5 sesiones al mes"]} />,
            <PlanCard key="bronze" tituloBono="BRONZE" precio="46€" caracteristicas={["9 sesiones al mes"]} />,
            <PlanCard key="silver" tituloBono="SILVER" precio="57€" caracteristicas={["13 sesiones al mes"]} />,
            <PlanCard key="golden" tituloBono="GOLDEN" precio="69€" caracteristicas={["17 sesiones al mes"]} />,
          ]}
          theme='blue'
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-12 2xl:px-30">
        <PlanCard
          tituloBono="MORNING DIAMOND"
          precio="60€"
          caracteristicas={[
            "7 sesiones WOD / OPEN semanales",
            "1 clase de GYMNASTIC semanal",
            "1 clase de MOBILITY semanal",
            "1 clase de HALTEROFILIA semanal",
          ]}
          alignLeft
        />
        <PlanCard
          tituloBono="DIAMOND"
          precio="79€"
          caracteristicas={[
            "7 sesiones WOD / OPEN semanales",
            "1 clase de GYMNASTIC semanal",
            "1 clase de MOBILITY semanal",
            "1 clase de HALTEROFILIA semanal",
          ]}
          alignLeft
        />
        <ExtraCard
          tituloBono="EXTRA"
          precio="+ 10€"
          caracteristicas={[
            "5 sesiones de programación de 1h complementaria (4 BOX + 1 OUTSIDE)",
          ]}
          descripcionExtra="Los planes Diamond y Morning Diamond tienen disponible:"
        />
      </div>
    </section>
  );
};

export default ClasesSection;
