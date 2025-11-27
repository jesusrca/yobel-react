import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1710073505347-8e892c1922e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHNob3BwaW5nJTIwbWFsbCUyMGludmVudG9yeXxlbnwxfHx8fDE3NjQxOTUyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Almacenamiento retail y omnicanal", desc: "Gestión centralizada de inventario por tienda, canal o marketplace con tecnología WMS." },
  { title: "Distribución nacional B2B y B2C", desc: "Abastecimiento de tiendas, supermercados y entregas directas al cliente con trazabilidad 24/7." },
  { title: "Valor Agregado (VAS)", desc: "Etiquetado, armado de combos, empaques promocionales y preparación por canal de venta." },
  { title: "Fulfillment e-commerce", desc: "Preparación, empaque y despacho de pedidos online con integración a tu plataforma digital." },
  { title: "Comercio exterior (COMEX)", desc: "Gestión de importaciones, despacho aduanero y transporte internacional de mercancías retail." }
];

const benefits = [
  "Trazabilidad total desde el centro de distribución hasta el punto de venta.",
  "Lead time reducido en reposición y entregas online.",
  "Optimización del espacio y flujo logístico.",
  "Integración omnicanal con sistemas ERP y e-commerce.",
  "Cumplimiento OTIF 99.6%"
];

const useCases = [
  "Reposición de tiendas: Entregas programadas y optimizadas por demanda.",
  "Fulfillment e-commerce: Procesamiento y despacho rápido de pedidos en línea.",
  "Campañas y promociones: Kitting, empaques promocionales y distribución nacional.",
  "Gestión de devoluciones: Logística inversa con control de calidad y reacondicionado.",
  "Integración de canales: Flujo unificado entre retail físico y digital."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas retail.",
  "Trazabilidad 100% en tiempo real.",
  "Lead time reducido hasta 30% en reposición.",
  "Integración total omnicanal con sistemas del cliente."
];

const certifications = [
  { title: "ISO 9001", desc: "Gestión de calidad." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental responsable." },
  { title: "BPM/BPA", desc: "Buenas prácticas operativas y de almacenamiento." }
];

export function Retail() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria Retail"
        description="Conectamos tu inventario con cada punto de venta, canal y consumidor final."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM diseñamos y operamos cadenas logísticas para empresas del sector retail, integrando almacenamiento, distribución, e-commerce y valor agregado. Aseguramos disponibilidad, trazabilidad y cumplimiento OTIF, optimizando el abastecimiento de tiendas físicas, marketplaces y clientes finales con eficiencia y visibilidad total.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en disponibilidad, eficiencia y experiencia del cliente</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">En Yobel SCM, operamos bajo certificaciones internacionales que garantizan calidad, seguridad y sostenibilidad en cada proceso de la cadena retail.</p>
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
