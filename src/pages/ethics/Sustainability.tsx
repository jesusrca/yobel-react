import React from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";

const pillars = [
  { title: "Clima y energía", desc: "Rutas optimizadas, eficiencia en sedes y pilotos de movilidad eléctrica para bajar emisiones." },
  { title: "Residuos y economía circular", desc: "Reutilizamos embalajes, valorizamos residuos y reacondicionamos productos para prolongar su vida útil." },
  { title: "Cadena responsable (ESG)", desc: "Exigimos estándares éticos, ambientales y de DD.HH. a proveedores; evaluamos y acompañamos mejoras." },
  { title: "Impacto social", desc: "Programas de empleabilidad, seguridad vial y donación logística en emergencias, cerca de nuestras sedes" }
];

const kpis = [
  { value: "-18%", label: "tCO2e por pedido vs. 2022" },
  { value: "72%", label: "residuos valorizados en sedes principales" },
  { value: "95%", label: "proveedores críticos con evaluación ESG" },
  { value: "4,600h", label: "de voluntariado en LATAM (12 meses)" }
];

const initiatives = [
  { title: "Ruteo inteligente en Lima/Callao", desc: "Menos kilómetros en vacío y menor consumo energético por entrega" },
  { title: "Embalajes retornables", desc: "Ciclo de uso prolongado y menor desperdicio en VAS y distribución." },
  { title: "Valorización en CD", desc: "Segregación en origen y convenios de reciclaje por categoría." },
  { title: "Voluntariado logístico", desc: "Donaciones y reparto coordinado en campañas y emergencias." }
];

const faqs = [
  { question: "¿Qué mide nuestro reporte de sostenibilidad?", answer: "Emisiones, eficiencia energética, residuos valorizados, impacto social, diversidad y desempeño ESG en toda nuestra cadena de suministro." },
  { question: "¿Cómo trabajamos con proveedores?", answer: "Evaluamos y acompañamos a nuestros proveedores bajo criterios éticos, ambientales y sociales, promoviendo una cadena de valor responsable y sostenible." },
  { question: "¿Puedo proponer una iniciativa?", answer: "Sí. Recibimos ideas y proyectos sostenibles de colaboradores, aliados y comunidades. Todas las propuestas se evalúan según su impacto ambiental y social." },
  { question: "¿Qué acciones concretas realizamos por el medio ambiente?", answer: "Optimizamos rutas de transporte, impulsamos movilidad eléctrica, reutilizamos embalajes y valorizamos residuos en todas nuestras operaciones." }
];

export function Sustainability() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#fff066] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Responsabilidad Corporativa</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  RSE y Sostenibilidad
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Nos movemos juntos a la sostenibilidad. Reducimos huella, impulsamos economía circular y generamos impacto positivo.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
         <Container>
            {/* Pillars */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Nuestros pilares</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pillars.map((pil, idx) => (
                     <div key={idx} className="bg-green-50 p-10 rounded-[30px] border border-green-100 hover:shadow-lg transition-all">
                        <h4 className="text-2xl font-bold mb-4 text-green-800">{pil.title}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">{pil.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* KPIs */}
            <div className="bg-black text-white rounded-[40px] p-12 md:p-20 mb-24">
                <h3 className="text-3xl md:text-4xl font-normal mb-6 text-center">Personas y diversidad que nos mueven</h3>
                <p className="text-xl text-center opacity-80 mb-16 max-w-4xl mx-auto font-light leading-relaxed">Impulsamos inclusión, bienestar y seguridad para desarrollar talento con formación continua y oportunidades equitativas.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {kpis.map((kpi, idx) => (
                        <div key={idx} className="text-center">
                           <p className="text-5xl md:text-6xl font-bold mb-4 text-green-400">{kpi.value}</p>
                           <p className="text-base md:text-lg font-light opacity-90 leading-snug">{kpi.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Initiatives */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Iniciativas destacadas</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {initiatives.map((init, idx) => (
                       <div key={idx} className="bg-white border border-gray-200 p-8 rounded-[30px] hover:shadow-md transition-all h-full">
                           <h4 className="text-xl font-bold mb-4">{init.title}</h4>
                           <p className="text-gray-600 text-base leading-relaxed">{init.desc}</p>
                       </div>
                   ))}
               </div>
            </div>

            {/* Impact Map Teaser */}
            <div className="bg-gray-50 rounded-[40px] p-16 text-center mb-24">
                <h3 className="text-3xl md:text-4xl font-normal mb-6">Explora nuestro impacto sostenible en Latinoamérica</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">Toca el mapa o elige un país para ver iniciativas y resultados medibles: reducción de emisiones, valorización de residuos y acción social por operación.</p>
                <div className="h-80 bg-gray-200 rounded-[30px] flex items-center justify-center mb-10">
                    <span className="text-gray-500 text-xl">Mapa Interactivo (Placeholder)</span>
                </div>
                <Button className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Descubre nuestros casos de impacto</Button>
            </div>

            <div className="bg-blue-50 rounded-[40px] p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-normal mb-8">Sumemos impacto a tu operación</h3>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Te ayudamos a diseñar soluciones logísticas más eficientes y sostenibles.</p>
                <Button className="bg-black text-white px-12 py-5 rounded-full text-xl hover:bg-gray-800 transition-colors">Contactar un asesor</Button>
            </div>

         </Container>
      </Section>

      <FAQ items={faqs} />
    </>
  );
}