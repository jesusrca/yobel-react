import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1570978541623-fe3fbe775696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHByaW50aW5nJTIwcHJlc3MlMjBlZGl0b3JpYWwlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY0MTk1MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Almacenamiento editorial especializado", desc: "Resguardamos libros, revistas y material impreso bajo condiciones adecuadas de humedad, temperatura y seguridad." },
  { title: "Distribución B2B y e-commerce", desc: "Entregamos publicaciones a puntos de venta, ferias, librerías y compradores online con visibilidad total del envío." },
  { title: "Valor Agregado (VAS)", desc: "Ofrecemos servicios de armado de sets, empaquetado promocional, etiquetado por punto de venta y preparación para exportación." },
  { title: "Courier Express editorial", desc: "Envíos urgentes de ejemplares, muestras o materiales de prensa con trazabilidad en tiempo real." }
];

const benefits = [
  "Entregas a tiempo en todo el territorio nacional.",
  "Control de inventario por título, lote o punto de venta.",
  "Reducción de costos logísticos y tiempos de distribución.",
  "Integración con plataformas e-commerce y ERP del cliente.",
  "Cobertura nacional con cumplimiento OTIF 99.6%"
];

const useCases = [
  "Lanzamientos editoriales: Distribución sincronizada con fechas de presentación o preventa.",
  "Reposición a librerías: Entregas periódicas y reposición automatizada.",
  "E-commerce editorial: Preparación y despacho de pedidos individuales.",
  "Kitting promocional: Armado de cajas de colección o paquetes educativos.",
  "Eventos y ferias: Distribución y retiro logístico de material impreso."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas B2B y e-commerce.",
  "Trazabilidad total desde la impresión hasta el punto de venta.",
  "Lead time optimizado para lanzamientos y reposiciones.",
  "Inventario 100% visible en tiempo real."
];

const certifications = [
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "ISO 14001", desc: "Gestión ambiental responsable." }
];

export function Editorial() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria editorial"
        description="Conectamos tus publicaciones con lectores y puntos de venta en todo el país."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM gestionamos la cadena de suministro del sector editorial con precisión, eficiencia y cuidado. Optimizamos el flujo desde la impresión y el almacenamiento hasta la distribución a librerías, mayoristas, eventos y plataformas e-commerce. Garantizamos entregas a tiempo, trazabilidad completa y un manejo especializado de material impreso.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en visibilidad, control y puntualidad</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">En Yobel SCM operamos bajo certificaciones internacionales que garantizan seguridad, calidad y sostenibilidad en todos nuestros procesos logísticos y de distribución editorial.</p>
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
