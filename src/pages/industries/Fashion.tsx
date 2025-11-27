import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1675537057530-312348c6caa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjB3YXJlaG91c2UlMjBnYXJtZW50cyUyMHJhY2t8ZW58MXx8fHwxNzY0MTk1MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Almacenamiento textil especializado", desc: "Manejo cuidadoso de prendas, calzado y accesorios con clasificación por talla, color, temporada y canal." },
  { title: "Distribución omnicanal (retail y e-commerce)", desc: "Entregas a tiendas, marketplaces y consumidores finales con trazabilidad total y cumplimiento OTIF 99.6%" },
  { title: "Valor Agregado (VAS)", desc: "Planchado, etiquetado, armado de combos, empaques promocionales y personalización por punto de venta." },
  { title: "Logística inversa y reacondicionado", desc: "Gestión de devoluciones, control de calidad, reacondicionado y reempaque para reventa o liquidación." },
  { title: "Comercio exterior (COMEX)", desc: "Coordinación de importación y exportación de textiles y accesorios, cumpliendo regulaciones y tiempos de temporada." }
];

const benefits = [
  "Reducción de lead time en lanzamientos y reposiciones.",
  "Control por SKU, talla y color en tiempo real.",
  "Flexibilidad operativa ante cambios de temporada o promociones.",
  "Integración con plataformas retail y e-commerce.",
  "Cumplimiento OTIF 99.6% en entregas nacionales."
];

const useCases = [
  "Lanzamientos de temporada: Distribución sincronizada a tiendas y canales online.",
  "Reposición automática: Integración con ERP o plataformas retail.",
  "Empaques promocionales: Armado de sets o cajas especiales por colección.",
  "Gestión de devoluciones: Logística inversa con reacondicionado y control de calidad.",
  "Exportación textil: Coordinación logística a mercados regionales."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas retail y online.",
  "Lead time reducido hasta 25% en lanzamientos.",
  "Inventario 100% trazable por SKU y canal.",
  "Optimización de almacenamiento y rotación de stock."
];

const certifications = [
  { title: "ISO 9001", desc: "Gestión de calidad." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental responsable." },
  { title: "BPM/BPA", desc: "Buenas prácticas operativas y de almacenamiento." }
];

export function Fashion() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria de la Moda"
        description="Impulsamos tus colecciones con operaciones ágiles, trazables y listas para cada temporada."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM conectamos el diseño, la producción y la entrega final de tus prendas, calzado y accesorios. Gestionamos tu cadena de suministro con eficiencia, control de inventario y visibilidad total, integrando manufactura, almacenamiento y distribución para que cada lanzamiento llegue a tiempo, sin pérdidas y con una experiencia impecable para tus clientes.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en agilidad, visibilidad y control por temporada</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Respaldamos cada operación con certificaciones internacionales que garantizan calidad, seguridad y sostenibilidad en la cadena logística de la moda.</p>
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
