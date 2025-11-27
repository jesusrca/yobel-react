import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1715848504087-11a748ce0058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0cyUyMGxhYiUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY0MTk1MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Manufactura y acondicionamiento de productos cosméticos", desc: "Producción, envasado y reacondicionado de cosméticos, fragancias y artículos de higiene bajo estándares BPM y normativas sanitarias internacionales." },
  { title: "Almacenamiento especializado y regulado", desc: "Conservación de productos sensibles en entornos con temperatura y humedad controlada, garantizando trazabilidad por lote y fecha de vencimiento." },
  { title: "Distribución nacional e internacional", desc: "Entregas B2B, retail y e-commerce con visibilidad total, seguridad y cumplimiento OTIF 99.6%." },
  { title: "Servicios de Valor Agregado (VAS)", desc: "Armado de kits promocionales, etiquetado, codificado y empaques personalizados para lanzamientos o temporadas." },
  { title: "Comercio Exterior (COMEX)", desc: "Coordinación de importaciones de materias primas y exportaciones de productos terminados, asegurando cumplimiento sanitario y aduanero." }
];

const benefits = [
  "Cumplimiento de normas BPM y regulaciones sanitarias.",
  "Reducción de tiempos de entrega mediante procesos integrados.",
  "Control total de inventario y trazabilidad por lote o SKU.",
  "Flexibilidad para campañas, temporadas o lanzamientos.",
  "Entrega garantizada con OTIF 99.6%"
];

const useCases = [
  "Lanzamientos de líneas cosméticas: Producción, armado y distribución integral.",
  "Campañas promocionales: Kitting y empaques personalizados por temporada.",
  "Reposición retail: Abastecimiento continuo a tiendas, perfumerías y marketplaces.",
  "Gestión e-commerce: Preparación y despacho directo al consumidor.",
  "Reacondicionado sanitario: Actualización de empaques o etiquetas por regulación o canal."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas B2B y retail.",
  "Trazabilidad completa desde planta hasta punto de venta.",
  "Lead time reducido en lanzamientos y reposiciones.",
  "Control sanitario continuo en todos los procesos BPM."
];

const certifications = [
  { title: "ISO 9001", desc: "Gestión de calidad." },
  { title: "BPM/BPA", desc: "Buenas prácticas de manufactura y almacenamiento." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental." }
];

export function Beauty() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria cosmética y de cuidado personal"
        description="Impulsamos marcas de belleza con manufactura, logística y distribución seguras, eficientes y 100% trazables."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel gestionamos la cadena de suministro de cosméticos, fragancias, productos de higiene y cuidado personal. Integramos manufactura, almacenamiento, transporte y distribución con tecnología avanzada y cumplimiento de normas BPM, asegurando calidad, trazabilidad y cumplimiento sanitario en cada etapa del proceso.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en calidad, trazabilidad y eficiencia operativa</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Operamos bajo certificaciones internacionales que aseguran la calidad, seguridad y sostenibilidad en toda la cadena de suministro.</p>
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
