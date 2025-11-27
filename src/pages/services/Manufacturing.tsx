import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";

const heroImage = "https://images.unsplash.com/photo-1735494033834-d303e729aa09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvbWF0ZWQlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzY0MTkzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Análisis de Laboratorio", desc: "Estudios fisicoquímicos y microbiológicos para garantizar calidad y seguridad." },
  { title: "Desarrollo de Productos", desc: "Formulación, pruebas piloto y apoyo en lanzamientos." },
  { title: "Producto Terminado", desc: "Gestión integral hasta la entrega final" }
];

const categories = [
  { title: "Cosméticos", items: ["Cremas", "Talcos", "Champú", "Hidroalcoholes"] },
  { title: "Galénicos", items: ["Alcoholes", "Aceites", "Pomadas"] },
  { title: "Higiene", items: ["Higiene para el hogar", "Higiene Industrial"] },
  { title: "Plásticos", items: ["Inyección de tapas", "Soplado de frascos en PET", "Soplado de frascos en PEAD"] }
];

const benefits = [
  "Alta flexibilidad de producción, adaptada a tu sector.",
  "Reducción de inventarios y costos operativos.",
  "Optimización de recursos y tiempos de desarrollo.",
  "Calidad garantizada en cada etapa de manufactura."
];

const processes = [
  { title: "Evaluación", desc: "Análisis de requerimientos y planificación de la producción." },
  { title: "Desarrollo y Pruebas", desc: "Formulación piloto y validación de calidad (si aplica)." },
  { title: "Producción", desc: "Fabricación con control de calidad en cada fase." },
  { title: "Entrega Confirmada", desc: "Validación digital y auditoría final del pedido antes del despacho." },
  { title: "Postventa", desc: "Soporte y retroalimentación para mejorar continuamente tu operación." },
  { title: "Envasado y Acondicionado", desc: "Acondicionamos según tus especificaciones: blíster, termoempacado, embalaje, etiquetado y packs personalizados." },
  { title: "Entrega final", desc: "Despacho y recepción en destino con trazabilidad completa y registro digital de la entrega." }
];

const industries = [
  { title: "Alimentos y Bebidas", description: "Gestionamos operaciones internacionales bajo control sanitario y de temperatura, asegurando inocuidad y entregas en tiempos óptimos.", link: "/industrias/alimentos-y-bebidas" },
  { title: "Belleza y Cuidado Personal", description: "Facilitamos la importación de insumos y la exportación de productos terminados, cumpliendo normativas sanitarias y garantizando trazabilidad por lote.", link: "/industrias/belleza-y-cuidado-personal" },
  { title: "Calzado y Moda", description: "Movemos textiles, prendas y accesorios entre mercados con cumplimiento regulatorio y tiempos de entrega ajustados a temporada.", link: "/industrias/calzado-y-moda" },
  { title: "Construcción", description: "Coordinamos el transporte internacional de materiales, maquinaria y repuestos, optimizando tiempos y reduciendo costos logísticos.", link: "/industrias/construccion" },
  { title: "Cuidado del Hogar", description: "Gestionamos la importación de materias primas y productos terminados con visibilidad total desde origen hasta destino.", link: "/industrias/cuidado-del-hogar" },
  { title: "Editorial", description: "Administramos la importación de papel, tintas y materiales gráficos, y exportamos publicaciones con procesos aduaneros eficientes y seguros.", link: "/industrias/editorial" },
  { title: "Farmacéutica", description: "Movilizamos medicamentos e insumos bajo estándares BPM/BPA y cumplimiento DIGEMID, asegurando integridad y control documental.", link: "/industrias/farmaceutica" },
  { title: "Manufactura Industrial", description: "Coordinamos importaciones de componentes, materias primas y repuestos con trámites aduaneros integrados y despacho ágil.", link: "/industrias/manufactura-industrial" },
  { title: "Químicos", description: "Administramos importaciones y exportaciones de sustancias controladas, cumpliendo normas internacionales de seguridad y medio ambiente.", link: "/industrias/quimica" },
  { title: "Retail", description: "Aceleramos la importación de mercancías y equipamiento, garantizando disponibilidad continua y reducción de lead time en tienda.", link: "/industrias/retail" },
  { title: "Tecnología y Electrónica", description: "Gestionamos el traslado internacional de dispositivos, componentes y equipos de alto valor con seguridad, seguimiento y control aduanero.", link: "/industrias/tecnologia-y-electronica" }
];

const faqs = [
  { question: "¿Puedo tercerizar solo una parte del proceso de producción?", answer: "Sí, podemos encargarnos de todo el ciclo o de etapas específicas como envasado, acondicionado o control de calidad, según tus necesidades." },
  { question: "¿Qué tipos de productos pueden fabricar o acondicionar?", answer: "Trabajamos con categorías de consumo masivo, cuidado personal, hogar, alimentos no perecibles y más." },
  { question: "¿Cuentan con control de calidad durante la producción?", answer: "Sí, cada lote se revisa bajo protocolos de calidad y trazabilidad, garantizando uniformidad y cumplimiento técnico." },
  { question: "¿Puedo usar mis propios materiales o envases?", answer: "Sí, adaptamos el proceso a tus insumos y especificaciones, garantizando eficiencia y compatibilidad con tu línea de productos." }
];

export function Manufacturing() {
  return (
    <>
      <PageHero 
        title="Manufactura en Perú para empresas"
        description="Producción, envasado y desarrollo de productos con altos estándares internacionales."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel ofrecemos servicios de manufactura de alta calidad y adaptados a las necesidades de tu negocio. Contamos con experiencia en la producción de cosméticos, productos de higiene, plásticos y más, garantizando eficiencia, cumplimiento normativo y tiempos de entrega competitivos.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar Asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Servicio de manufactura a tu medida</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Gestionamos tus procesos productivos en nuestras plantas o directamente en tus instalaciones, aplicando tecnología avanzada y asegurando el cumplimiento de todas las normativas vigentes.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="bg-gray-50 p-10 rounded-[30px] hover:bg-gray-100 transition-colors">
                        <h4 className="text-xl font-bold mb-4">{sol.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="text-center">
                  <Button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 text-lg">Solicitar Servicio de Manufactura</Button>
               </div>
            </div>

             {/* Categories */}
             <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Conoce todas nuestras categorías</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categories.map((cat, idx) => (
                     <div key={idx} className="border border-gray-200 p-8 rounded-[30px] hover:shadow-md transition-all">
                        <h4 className="text-xl font-bold mb-6 text-blue-600">{cat.title}</h4>
                        <ul className="space-y-3">
                           {cat.items.map((item, i) => (
                              <li key={i} className="text-base text-gray-600">• {item}</li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Maximizamos la eficiencia de tu producción</h3>
               </div>
               <div className="lg:w-2/3">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 w-2 h-2 bg-black rounded-full shrink-0" />
                           <span className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Processes */}
            <div>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Procesos de manufactura con trazabilidad completa</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Gestionamos todo el ciclo productivo, desde la evaluación inicial hasta la postventa, asegurando eficiencia y cumplimiento normativo.</p>
               
               <div className="space-y-4">
                  {processes.map((proc, idx) => (
                     <div key={idx} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 border-b border-gray-100 pb-8 last:border-0 pt-4">
                        <div className="text-3xl font-bold text-gray-300 w-16">{String(idx + 1).padStart(2, '0')}</div>
                        <div>
                           <h4 className="text-xl font-medium mb-2">{proc.title}</h4>
                           <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
                        </div>
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
