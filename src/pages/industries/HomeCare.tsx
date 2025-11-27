import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1581580059951-d24a4fed1da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwY2xlYW5pbmclMjBzdXBwbGllcyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjQxOTUyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Manufactura y acondicionamiento de productos del hogar", desc: "Producción, envasado y reacondicionado de artículos de limpieza, ambientadores y utensilios, cumpliendo estándares BPM y de seguridad." },
  { title: "Almacenamiento flexible y seguro", desc: "Gestión de inventarios por cada línea de producto o canal de venta, con WMS y control por lote o fecha de vencimiento." },
  { title: "Distribución nacional e internacional", desc: "Entregas B2B, retail y e-commerce con trazabilidad total y cumplimiento OTIF 99.6%" },
  { title: "Valor Agregado (VAS)", desc: "Kitting, armado de packs promocionales, etiquetado y personalización para temporadas o lanzamientos." },
  { title: "Comercio exterior (COMEX)", desc: "Coordinación de importaciones y exportaciones de materias primas y productos terminados para abastecer mercados regionales." }
];

const benefits = [
  "Reducción de costos logísticos mediante integración total de procesos.",
  "Trazabilidad 24/7 desde el origen hasta el punto de venta.",
  "Flexibilidad operativa ante campañas o temporadas.",
  "Control por lote, SKU o canal de distribución.",
  "Entrega confiable con cumplimiento OTIF 99.6%"
];

const useCases = [
  "Campañas promocionales: Armado y distribución de packs especiales o combos por temporada.",
  "Reposición retail: Abastecimiento continuo a supermercados, tiendas por departamento y marketplaces.",
  "Lanzamientos de línea: Distribución nacional de nuevos productos o versiones mejoradas.",
  "Gestión e-commerce: Preparación y despacho directo al consumidor.",
  "Reacondicionado: Ajustes de empaque, rotulado o formato según canal."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas B2B y B2C.",
  "Lead time reducido en abastecimientos estacionales.",
  "Visibilidad total del inventario en tiempo real.",
  "Disminución de mermas y sobrestock mediante control WMS."
];

const certifications = [
  { title: "ISO 9001", desc: "Gestión de calidad." },
  { title: "BPM/BPA", desc: "Buenas prácticas de manufactura y almacenamiento." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental." }
];

export function HomeCare() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria del Hogar"
        description="Hacemos que tus productos lleguen a cada hogar con eficiencia, cuidado y puntualidad."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM gestionamos la cadena de suministro de productos para el hogar, decoración, limpieza y cuidado del ambiente doméstico. Integramos manufactura, almacenamiento, transporte y distribución con tecnología avanzada y control total de inventario, optimizando tiempos, costos y la experiencia final del consumidor.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">¿Cómo te ayudamos?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="bg-gray-50 p-8 rounded-[30px] hover:shadow-lg transition-all">
                        <h4 className="text-xl font-bold mb-4">{sol.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en agilidad, trazabilidad y optimización</h3>
               </div>
               <div className="lg:w-2/3">
                  <ul className="space-y-6">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                           <span className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Use Cases */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Casos de uso típicos</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {useCases.map((item, idx) => (
                       <li key={idx} className="flex gap-4 items-start border border-gray-100 p-6 rounded-[20px] hover:border-gray-300 transition-colors">
                           <div className="w-2 h-2 mt-2 bg-black rounded-full shrink-0" />
                           <span className="text-lg text-gray-700 font-light">{item}</span>
                       </li>
                   ))}
               </ul>
            </div>

            {/* Results */}
            <div className="bg-black text-white rounded-[40px] p-10 md:p-20 mb-24">
                <h3 className="text-3xl md:text-4xl font-normal mb-16 text-center">Indicadores que priorizamos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {results.map((res, idx) => (
                        <div key={idx} className="text-center border-r last:border-0 border-gray-800 px-4 flex flex-col items-center">
                           <div className="w-3 h-3 bg-white rounded-full mb-6 opacity-50" />
                           <p className="text-xl font-light leading-relaxed">{res}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Nuestros certificados nos respaldan</h3>
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Operamos bajo certificaciones internacionales y políticas internas que garantizan calidad, seguridad y sostenibilidad en cada proceso logístico.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {certifications.map((cert, idx) => (
                       <div key={idx} className="border border-gray-200 p-8 rounded-[30px] hover:shadow-md transition-all">
                           <h4 className="text-xl font-bold mb-3">{cert.title}</h4>
                           <p className="text-gray-600">{cert.desc}</p>
                       </div>
                   ))}
               </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gray-50 rounded-[40px] p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-normal mb-8">Conversemos sobre tu operación</h3>
                <Button className="bg-black text-white px-12 py-5 rounded-full text-xl hover:bg-gray-800 transition-colors">Contactar asesor</Button>
            </div>

         </Container>
      </Section>
    </>
  );
}
