import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1758979658225-c833408a2e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbWF0ZXJpYWxzJTIwbG9naXN0aWNzfGVufDF8fHx8MTc2NDE5NTIwNXww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Almacenamiento In-House o Outsourcing", desc: "Administramos inventarios directamente en obra o en nuestras instalaciones, con tecnología WMS y control de materiales por lote o proyecto." },
  { title: "Distribución programada por fase", desc: "Planificamos rutas y entregas según cronograma de obra, evitando demoras y sobrecostos logísticos." },
  { title: "Courier técnico y de repuestos", desc: "Entregas urgentes de muestras, planos o piezas críticas con trazabilidad en tiempo real." },
  { title: "Valor Agregado (VAS)", desc: "Kitting y armado de kits de instalación o mantenimiento listos para uso en obra." },
  { title: "Comercio exterior (COMEX)", desc: "Coordinamos importación y despacho de maquinaria, insumos y materiales especializados." }
];

const benefits = [
  "Reducción de tiempos muertos por falta de materiales.",
  "Control y visibilidad del inventario por proyecto o etapa.",
  "Rutas optimizadas para entregas programadas.",
  "Cumplimiento OTIF 99.6% en despachos.",
  "Integración con sistemas ERP o plataformas del cliente."
];

const useCases = [
  "Abastecimiento por fases: Entregas programadas de materiales según avance de obra.",
  "Repuestos críticos: Courier urgente con trazabilidad total.",
  "Control de herramientas: Registro y rotación de activos en campo.",
  "Kits de instalación: Armado y envío por lote o punto de montaje.",
  "Gestión de importaciones: Coordinación logística de maquinaria o insumos especializados."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas a obra.",
  "Trazabilidad total del inventario y activos.",
  "Lead time reducido hasta 30% por proyecto.",
  "Disponibilidad asegurada por fase o requerimiento."
];

const certifications = [
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 45001", desc: "Seguridad y salud ocupacional." }
];

export function Construction() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria de la Construcción"
        description="Abastecemos tus proyectos con eficiencia, control y visibilidad total."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM gestionamos la cadena de suministro de materiales, repuestos y equipos para obras de construcción e infraestructura. Optimizamos tiempos y recursos con soluciones que integran almacenamiento, transporte y distribución, asegurando la entrega oportuna y la trazabilidad en cada punto de la operación.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en optimizar tiempos y recursos en obra</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">En Yobel SCM trabajamos bajo certificaciones internacionales y políticas internas que aseguran excelencia, seguridad y sostenibilidad en toda la operación.</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
