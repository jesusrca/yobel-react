import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";

const heroImage = "https://images.unsplash.com/photo-1567570671138-76c7e06caa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFja2FnaW5nJTIwbGFiZWxpbmclMjBsaW5lfGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  "Maquila + Suministro: Gestión del material de empaque y acondicionamiento",
  "Blísteres y termoempacados",
  "Etiquetado y Codificación INKJET",
  "Packs Promocionales y Varios",
  "Selección e Inspección de Mercancia",
  "Recuperados y Reacondicionamientos",
  "Reempaque para Exportación o Venta Local"
];

const capacities = [
  { title: "Personal Capacitado", desc: "Para operaciones de alto volumen y precisión." },
  { title: "Infraestructura Adaptable", desc: "A diferentes categorías de productos." },
  { title: "Integración", desc: "Con servicios logísticos de distribución Yobel." }
];

const benefits = [
  "Alta confiabilidad con cumplimiento OTIF (On Time, In Full) del 99.6%.",
  "Tecnología para seguimiento en tiempo real 24/7.",
  "Equipo especializado en entregas críticas y sensibles.",
  "Cobertura en zonas urbanas y rurales."
];

const processes = [
  { title: "Solicitud y Programación", desc: "Registro y coordinación del envío de tus documentos o paquetería de forma ágil y sencilla." },
  { title: "Recolección", desc: "Retiro puntual en el punto de origen con confirmación inmediata." },
  { title: "Transporte y Seguimiento", desc: "Traslado seguro con monitoreo en tiempo real y control de calidad en cada fase." },
  { title: "Entrega Confirmada", desc: "Recepción garantizada con registro digital y trazabilidad completa." },
  { title: "Postventa", desc: "Gestión de incidencias y soporte personalizado para asegurar tu satisfacción." }
];

const industries = [
  { title: "Alimentos y Bebidas", description: "Gestionamos codificado, rotulado y empaques promocionales bajo control de temperatura y cumplimiento sanitario.", link: "/industrias/alimentos-y-bebidas" },
  { title: "Belleza y Cuidado Personal", description: "Realizamos etiquetado, envasado promocional y armado de kits cosméticos con control sanitario y trazabilidad garantizada.", link: "/industrias/belleza-y-cuidado-personal" },
  { title: "Calzado y Moda", description: "Ejecutamos etiquetado, tallado y empaque promocional por colección, con control de lote y trazabilidad de prenda.", link: "/industrias/calzado-y-moda" },
  { title: "Construcción", description: "Acondicionamos materiales y herramientas en kits por proyecto o cliente, optimizando preparación y entrega en obra.", link: "/industrias/construccion" },
  { title: "Cuidado del Hogar", description: "Desarrollamos empaques personalizados y kits promocionales para campañas o temporadas de consumo masivo.", link: "/industrias/cuidado-del-hogar" },
  { title: "Editorial", description: "Ofrecemos armado de colecciones, empaques promocionales y ensambles especiales para lanzamientos o suscripciones.", link: "/industrias/editorial" },
  { title: "Farmacéutica", description: "Realizamos etiquetado secundario, reempaque y acondicionamiento conforme a BPM y regulaciones DIGEMID.", link: "/industrias/farmaceutica" },
  { title: "Manufactura Industrial", description: "Integramos procesos de reempaque, etiquetado y kitting técnico para optimizar la distribución y control de componentes", link: "/industrias/manufactura-industrial" },
  { title: "Químicos", description: "Acondicionamos productos y reenvasamos materiales con medidas de seguridad y cumplimiento HSE.", link: "/industrias/quimica" },
  { title: "Retail", description: "Armamos kits promocionales, codificamos productos y preparamos exhibiciones listas para punto de venta.", link: "/industrias/retail" },
  { title: "Tecnología y Electrónica", description: "Realizamos reacondicionado, etiquetado y armado de bundles tecnológicos con control por serie y trazabilidad 100%.", link: "/industrias/tecnologia-y-electronica" }
];

const faqs = [
  { question: "¿Pueden realizar el acondicionamiento directamente en mi planta?", answer: "Sí, ofrecemos modalidad in-house para ejecutar el servicio en tus instalaciones, manteniendo el mismo estándar de calidad y control." },
  { question: "¿Qué tipo de empaques promocionales realizan?", answer: "Diseñamos y armamos packs, combos o kits promocionales personalizados según canal o temporada." },
  { question: "¿Realizan etiquetado o codificación por lote?", answer: "Sí, ofrecemos inkjet, codificado y etiquetado con trazabilidad completa para control de inventario." },
  { question: "¿Se puede integrar el servicio VAS con almacenamiento o distribución?", answer: "Sí, nuestros procesos se integran con almacenes y red de distribución para optimizar tiempos, costos y productividad." }
];

export function ValueAdded() {
  return (
    <>
      <PageHero 
        title="Servicio de Valor Agregado en Perú"
        description="Potenciamos tu operación con servicios de acondicionamiento, empaque y personalización, diseñados para agregar valor a tus productos y hacer más ágil tu cadena de suministro."
        imageUrl={heroImage}
        videoUrl="https://circular.ws/yobel/fondo-celeste.mp4"
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel agregamos valor a tus productos mediante servicios de acondicionamiento, empaque y personalización que se adaptan a la velocidad de tu mercado.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contacta Asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Damos valor a cada mercancía</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Ofrecemos soluciones que aumentan la competitividad de tus productos y fortalecen tu cadena de suministro</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="flex items-center gap-6 p-6 bg-gray-50 rounded-[20px] hover:shadow-md transition-shadow">
                        <div className="w-3 h-3 bg-blue-600 rounded-full shrink-0" />
                        <span className="text-lg md:text-xl font-medium">{sol}</span>
                     </div>
                  ))}
               </div>
               <div className="text-center">
                  <Button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 text-lg">Solicitar Servicio de Valor Agregado</Button>
               </div>
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
               {capacities.map((cap, idx) => (
                  <div key={idx} className="bg-gray-50 p-10 rounded-[30px] text-center hover:bg-gray-100 transition-colors">
                     <h4 className="text-2xl font-bold mb-4">{cap.title}</h4>
                     <p className="text-gray-600 leading-relaxed">{cap.desc}</p>
                  </div>
               ))}
            </div>

            {/* Benefits */}
            <div className="bg-black text-white rounded-[40px] p-10 md:p-20 mb-24">
               <div className="flex flex-col lg:flex-row gap-16 items-start">
                   <div className="lg:w-1/3">
                      <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en optimizar tiempos y costos</h3>
                   </div>
                   <div className="lg:w-2/3">
                      <ul className="space-y-6">
                         {benefits.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                               <div className="mt-2 w-2 h-2 bg-[#fff066] rounded-full shrink-0" />
                               <span className="text-lg md:text-xl opacity-90 font-light leading-relaxed">{item}</span>
                            </li>
                         ))}
                      </ul>
                   </div>
               </div>
            </div>

            {/* Processes */}
            <div>
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Descubre cómo llevamos tu operación al siguiente nivel</h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {processes.map((proc, idx) => (
                     <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[30px] hover:shadow-lg transition-shadow h-full">
                        <div className="text-4xl font-bold text-gray-200 mb-4">{idx + 1}</div>
                        <h4 className="text-lg font-bold mb-3">{proc.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{proc.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      <Industries />

      <FAQ items={faqs} />
    </>
  );
}
