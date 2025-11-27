import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";

const heroImage = "https://images.unsplash.com/photo-1556743769-8d7477994b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NjQxOTUyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  {
    title: "Almacenamiento In-house",
    desc: "Gestionamos tus almacenes en sitio, con experiencia en espacios regulados y control de temperatura."
  },
  {
    title: "Almacenamiento Outsourcing",
    desc: "Guardamos tus productos en nuestras instalaciones seguras, liberando espacio y recursos para tu negocio."
  }
];

const benefits = [
  "Información en tiempo real: Acceso inmediato a tus inventarios.",
  "Eficiencia logística: Procesos optimizados de recepción a despacho.",
  "Optimización de recursos: Reduce costos y libera capital.",
  "Indicadores superiores: Mejor desempeño en tus operaciones.",
  "Trazabilidad total: Ubicación y estado de productos siempre visibles.",
  "Control de inventarios: Gestión precisa que evita pérdidas.",
  "WMS avanzado: Tecnología de última generación para un control impecable."
];

const processes = [
  { title: "Recepción", desc: "Descarga, paletizado, control de calidad y almacenamiento seguro." },
  { title: "Gestión de inventarios", desc: "Seguimiento de peso, cantidad y ubicación para reposición eficiente." },
  { title: "Acondicionado (Valor Agregado)", desc: "Etiquetado, inkjet, exportación, rotulado y más." },
  { title: "Preparación de pedidos (Picking)", desc: "Selección y recolección precisa por canal de venta." },
  { title: "Despacho", desc: "Validación, carga y documentación para envíos ágiles." },
  { title: "Logística inversa", desc: "Recepción, control y clasificación de devoluciones para optimizar inventario." }
];

const industries = [
  { title: "Alimentos y Bebidas", description: "Ofrecemos almacenamiento con control de temperatura y cuarentena sanitaria, preservando la inocuidad y la frescura de cada producto.", link: "/industrias/alimentos-y-bebidas" },
  { title: "Belleza y Cuidado Personal", description: "Resguardamos productos cosméticos y de higiene en entornos controlados, asegurando cumplimiento BPM y trazabilidad completa por lote.", link: "/industrias/belleza-y-cuidado-personal" },
  { title: "Calzado y Moda", description: "Ofrecemos almacenamiento textil con clasificación por talla, color, temporada y canal, garantizando organización y disponibilidad.", link: "/industrias/calzado-y-moda" },
  { title: "Construcción", description: "Administramos inventarios de materiales, repuestos y herramientas en obra o en nuestras instalaciones, optimizando espacio y control operativo.", link: "/industrias/construccion" },
  { title: "Cuidado del Hogar", description: "Gestionamos inventarios de productos de limpieza, utensilios y artículos domésticos con visibilidad en tiempo real y control por SKU.", link: "/industrias/cuidado-del-hogar" },
  { title: "Editorial", description: "Almacenamos libros, revistas y material impreso con condiciones adecuadas de humedad, seguridad y clasificación por título o lote.", link: "/industrias/editorial" },
  { title: "Farmacéutica", description: "Operamos almacenes regulados por DIGEMID, con temperatura controlada y trazabilidad total de medicamentos e insumos.", link: "/industrias/farmaceutica" },
  { title: "Manufactura Industrial", description: "Integramos procesos de reempaque, etiquetado y kitting técnico para optimizar la distribución y control de componentes.", link: "/industrias/manufactura-industrial" },
  { title: "Químicos", description: "Operamos almacenes segregados y ventilados para sustancias controladas, cumpliendo normas HSE y de seguridad industrial.", link: "/industrias/quimica" },
  { title: "Retail", description: "Centralizamos inventarios multicanal con trazabilidad por punto de venta y gestión eficiente de stock y reposición.", link: "/industrias/retail" },
  { title: "Tecnología y Electrónica", description: "Resguardamos equipos y componentes de alto valor en zonas seguras con control de acceso, humedad y temperatura.", link: "/industrias/tecnologia-y-electronica" }
];

const faqs = [
  { question: "¿Puedo integrar mi sistema de inventario con el de Yobel?", answer: "Sí, nuestro sistema WMS se conecta fácilmente con plataformas de inventario, ERP u otros sistemas corporativos, sincronizando datos en tiempo real y asegurando visibilidad total de tus operaciones." },
  { question: "¿Tienen cámaras de temperatura controlada?", answer: "Sí, contamos con espacios acondicionados para productos que requieren cadena de frío o condiciones especiales." },
  { question: "¿Ofrecen inventarios en tiempo real?", answer: "Sí, nuestro WMS permite monitorear inventarios 24/7 desde cualquier dispositivo, con información siempre actualizada." },
  { question: "¿Se pueden gestionar diferentes tipos de productos en un mismo almacén?", answer: "Sí, segmentamos por tipo, lote o canal para garantizar orden, seguridad y cumplimiento regulatorio." }
];

export function Warehousing() {
  return (
    <>
      <PageHero 
        title="Soluciones de Almacenamiento en Perú"
        description="Protege tu inventario con almacenes seguros, trazabilidad total y gestión eficiente de la cadena de suministro."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 Brindamos almacenamiento logístico en Perú diseñado para proteger tu inventario y optimizar la cadena de suministro con flexibilidad y eficiencia.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">In-house u outsourcing: tú eliges</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Gestionamos tu inventario en tus instalaciones o en las nuestras, siempre con trazabilidad y eficiencia garantizada.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="bg-gray-50 p-10 rounded-[30px] hover:shadow-lg transition-all border border-gray-100">
                        <h4 className="text-2xl font-bold mb-4">{sol.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{sol.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Elegir Yobel para tus necesidades de almacenamiento</h3>
               </div>
               <div className="lg:w-2/3">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                           <span className="text-lg text-gray-800 leading-relaxed">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Processes */}
            <div>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Llevamos tu operación al siguiente nivel</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Integramos todos los procesos logísticos de tu cadena de suministro, optimizando cada etapa para que tu negocio crezca con fluidez y control.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {processes.map((proc, idx) => (
                     <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[30px] hover:border-gray-300 transition-colors">
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                           {idx + 1}
                        </div>
                        <h4 className="text-xl font-medium mb-3">{proc.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      <Industries />

      <Section className="bg-gray-50 py-32">
         <Container>
            <div className="max-w-5xl mx-auto text-center">
               <p className="text-3xl md:text-4xl font-light leading-relaxed mb-10">
                 Desde startups hasta corporaciones líderes, diseñamos soluciones de almacenamiento seguras y flexibles que se adaptan a tu industria y aceleran el crecimiento de tu negocio.
               </p>
            </div>
         </Container>
      </Section>

      <FAQ items={faqs} />
    </>
  );
}
