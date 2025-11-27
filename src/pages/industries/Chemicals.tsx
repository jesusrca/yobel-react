import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1580281845022-233f93de0671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGluZHVzdHJ5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjQxOTUyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Almacenamiento especializado y seguro", desc: "Instalaciones con áreas segregadas, ventilación controlada y cumplimiento de normativas nacionales e internacionales." },
  { title: "Transporte y distribución de productos químicos", desc: "Rutas planificadas y vehículos habilitados para transporte de sustancias controladas y materiales peligrosos." },
  { title: "Valor Agregado (VAS)", desc: "Reenvasado, etiquetado regulatorio, kitting industrial y reacondicionado de productos con control por lote." },
  { title: "Gestión documental y cumplimiento normativo", desc: "Control exhaustivo de permisos, fichas de seguridad (MSDS) y documentación de transporte." },
  { title: "Comercio exterior (COMEX)", desc: "Coordinación integral de importaciones y exportaciones bajo normativas químicas y ambientales." }
];

const benefits = [
  "Cumplimiento normativo en toda la cadena de suministro.",
  "Trazabilidad total por lote, producto y ubicación.",
  "Gestión de riesgos bajo estándares HSE.",
  "Optimización de costos logísticos y tiempos de entrega.",
  "Cumplimiento OTIF 99.6% en entregas industriales."
];

const useCases = [
  "Distribución de químicos industriales: Transporte seguro y monitoreado.",
  "Almacenamiento segregado: Áreas diferenciadas por tipo de sustancia.",
  "Re-etiquetado regulatorio: Adaptación de etiquetas según país o cliente.",
  "Kitting técnico: Preparación de productos para laboratorios o plantas.",
  "Gestión de importaciones: Coordinación de sustancias controladas y materias primas químicas."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas.",
  "Trazabilidad total por lote y producto.",
  "Lead time optimizado para importación y distribución.",
  "Cero incidentes operativos bajo gestión HSE."
];

const certifications = [
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "ISO 14001", desc: "Gestión ambiental responsable." },
  { title: "ISO 45001", desc: "Seguridad y salud ocupacional." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." }
];

export function Chemicals() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria química"
        description="Gestionamos tus productos con seguridad, cumplimiento y trazabilidad total."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM ofrecemos soluciones integradas para el manejo, almacenamiento y transporte de productos químicos e industriales. Operamos bajo estrictos estándares de seguridad, salud y medio ambiente (HSE), garantizando cumplimiento normativo, trazabilidad completa y procesos eficientes desde la recepción hasta la entrega final.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en seguridad, cumplimiento y eficiencia</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">En Yobel SCM, respaldamos cada operación con certificaciones internacionales que aseguran seguridad, calidad y sostenibilidad en la gestión de productos químicos.</p>
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
