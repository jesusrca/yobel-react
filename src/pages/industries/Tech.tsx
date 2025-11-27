import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1744368191937-8fe5fde474a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRlY2hub2xvZ3klMjBjb21wdXRlciUyMGNoaXBzJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjQxOTUyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Almacenamiento seguro y controlado", desc: "Infraestructura con sistemas de acceso restringido, monitoreo y control de humedad y temperatura." },
  { title: "Distribución B2B y B2C de tecnología", desc: "Abastecimiento a retail, canales corporativos y clientes finales con trazabilidad 24/7." },
  { title: "Valor Agregado (VAS)", desc: "Etiquetado, armado de kits tecnológicos, reacondicionado y empaques promocionales por canal." },
  { title: "Transporte especializado", desc: "Unidades equipadas para el traslado seguro de equipos delicados o de alto valor." },
  { title: "Comercio exterior (COMEX)", desc: "Coordinación integral de importaciones, exportaciones y nacionalización de dispositivos electrónicos." }
];

const benefits = [
  "Protección integral de equipos y componentes electrónicos.",
  "Trazabilidad en tiempo real en toda la cadena.",
  "Reducción de mermas y riesgos operativos.",
  "Cumplimiento OTIF 99.6% en entregas nacionales.",
  "Gestión flexible ante lanzamientos o picos de demanda."
];

const useCases = [
  "Lanzamientos tecnológicos: Distribución nacional sincronizada para nuevos productos.",
  "Reposición de retail: Abastecimiento continuo de tiendas y mayoristas.",
  "E-commerce electrónico: Preparación y despacho de pedidos online.",
  "Kitting corporativo: Armado de paquetes tecnológicos para empresas o campañas.",
  "Transporte de equipos delicados: Traslado seguro con monitoreo y aseguramiento especializado."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas.",
  "Cero incidentes en transporte de equipos de alto valor.",
  "Trazabilidad completa por serial, lote o SKU.",
  "Lead time optimizado para lanzamientos y reposiciones."
];

const certifications = [
  { title: "ISO 9001", desc: "Gestión de calidad." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental." },
  { title: "ISO 45001", desc: "Seguridad y salud ocupacional." }
];

export function Tech() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria de Tecnología y Electrónica"
        description="Movemos innovación con precisión, seguridad y trazabilidad en cada entrega."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM gestionamos la cadena logística de equipos tecnológicos, componentes electrónicos y productos de alto valor. Ofrecemos almacenamiento seguro, transporte especializado y distribución omnicanal, garantizando la integridad del producto y la disponibilidad en todo el territorio nacional.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en seguridad, control y rapidez de entrega</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Cada operación está respaldada por certificaciones internacionales que garantizan la calidad, seguridad y sostenibilidad de nuestra gestión logística para el sector tecnológico.</p>
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
