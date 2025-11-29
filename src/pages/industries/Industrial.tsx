import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY0MTk1MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Abastecimiento In-House o Just-in-Time", desc: "Operamos directamente dentro de tus plantas o centros productivos para garantizar un flujo continuo de materiales y componentes." },
  { title: "Almacenamiento industrial y control de insumos", desc: "Gestión avanzada de inventarios con WMS, control por lote, peso, dimensiones o tipo de material." },
  { title: "Distribución y transporte especializado", desc: "Rutas planificadas para abastecimiento B2B, distribución nacional o exportación de productos terminados." },
  { title: "Valor Agregado (VAS)", desc: "Kitting, armado de sets industriales, empaques técnicos y reacondicionado de piezas o repuestos." },
  { title: "Comercio exterior (COMEX)", desc: "Coordinación integral de importaciones y exportaciones de maquinaria, materias primas y productos industriales." }
];

const benefits = [
  "Abastecimiento continuo para evitar interrupciones de línea.",
  "Trazabilidad total de insumos y productos terminados.",
  "Integración con sistemas ERP o MES del cliente.",
  "Reducción de tiempos muertos y sobrecostos logísticos.",
  "Cumplimiento OTIF 99.6% en entregas industriales."
];

const useCases = [
  "Abastecimiento de línea: Flujo continuo de componentes en planta.",
  "Gestión de repuestos: Control y despacho rápido de piezas críticas.",
  "Kitting de ensamblaje: Preparación de kits de componentes por orden de producción.",
  "Reacondicionado: Ajustes de presentación o empaques técnicos.",
  "Exportaciones industriales: Coordinación logística de maquinaria o piezas."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas industriales.",
  "Lead time reducido hasta 25% en abastecimientos internos.",
  "Inventario visible 100% en tiempo real vía WMS.",
  "Optimización de espacio en planta y centros logísticos."
];

const certifications = [
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 45001", desc: "Seguridad y salud ocupacional." },
  { title: "ISO 14001", desc: "Gestión ambiental sostenible." }
];

export function Industrial() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria manufacturera"
        description="Impulsamos la productividad de tu planta con procesos integrados y suministro continuo."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-20">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM diseñamos soluciones logísticas integrales para empresas manufactureras e industriales. Conectamos el flujo de materias primas, componentes y productos terminados mediante almacenamiento, transporte, distribución y servicios de valor agregado, asegurando eficiencia, trazabilidad y reducción de costos operativos en toda la cadena.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-20">
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
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-20">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en eficiencia, control y seguridad operativa</h3>
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
            <div className="mb-20">
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
            <div className="bg-black text-white rounded-[40px] p-10 md:p-20 mb-20">
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
            <div className="mb-20">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Nuestros certificados nos respaldan</h3>
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">En Yobel SCM, garantizamos calidad, seguridad y eficiencia industrial bajo certificaciones internacionales que respaldan cada proceso de la cadena productiva.</p>
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
