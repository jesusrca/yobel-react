import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";

const heroImage = "https://images.unsplash.com/photo-1607130232670-52123ba5be5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcnklMjBleHByZXNzJTIwcGFja2FnZSUyMG1vdG9yY3ljbGUlMjBjb3VyaWVyfGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  {
    title: "Entrega nacional",
    desc: "Puerta a puerta para documentos y paquetes."
  },
  {
    title: "Logística inversa",
    desc: "Recojo y retorno seguro de mercancía."
  },
  {
    title: "Puntos de atención",
    desc: "Red nacional para mayor conveniencia."
  }
];

const features = [
  { title: "Visibilidad total", desc: "Seguimiento en tiempo real vía web y app móvil." },
  { title: "Notificaciones automáticas", desc: "Alertas por SMS, correo o WhatsApp." },
  { title: "Flexibilidad operativa", desc: "Capacidad de respuesta para entregas urgentes." },
  { title: "Postventa dedicada", desc: "Soporte inmediato para resolver incidencias." }
];

const benefits = [
  "Alta confiabilidad: Cumplimiento OTIF (On Time, In Full) del 99.6%.",
  "Tecnología avanzada: Seguimiento en tiempo real 24/7.",
  "Equipo especializado: Entregas críticas y sensibles.",
  "Cobertura total: Llegamos a zonas urbanas y rurales en todo el Perú."
];

const processes = [
  { title: "Planificación de rutas", desc: "Optimización de envíos y recursos según la demanda." },
  { title: "Picking", desc: "Preparación y verificación de pedidos." },
  { title: "Transporte y programación", desc: "Movilización segura con seguimiento en tiempo real." },
  { title: "Entrega confirmada", desc: "Registro digital al momento de la recepción." },
  { title: "Postventa", desc: "Gestión de incidencias y soporte continuo." }
];

const industries = [
  { title: "Alimentos y Bebidas", description: "Distribuimos productos perecibles, muestras y despachos urgentes con control térmico y cumplimiento sanitario.", link: "/industrias/alimentos-y-bebidas" },
  { title: "Belleza y Cuidado Personal", description: "Movilizamos muestras, testers y pedidos urgentes de cosméticos con recolección y entrega puerta a puerta, asegurando trazabilidad total.", link: "/industrias/belleza-y-cuidado-personal" },
  { title: "Calzado y Moda", description: "Entregamos prendas, accesorios y devoluciones de e-commerce con control de estado, visibilidad y rapidez de ciclo.", link: "/industrias/calzado-y-moda" },
  { title: "Construcción", description: "Gestionamos entregas express de repuestos, herramientas y documentos técnicos directamente en obra o planta.", link: "/industrias/construccion" },
  { title: "Cuidado del Hogar", description: "Ejecutamos entregas rápidas para campañas de e-commerce o reposición retail, con seguimiento 24/7 y prueba de entrega digital.", link: "/industrias/cuidado-del-hogar" },
  { title: "Editorial", description: "Repartimos revistas, catálogos y coleccionables a puntos de venta o suscriptores con tiempos garantizados y seguimiento en línea.", link: "/industrias/editorial" },
  { title: "Farmacéutica", description: "Transportamos medicamentos y muestras bajo protocolos BPM y control de temperatura, garantizando integridad en cada envío.", link: "/industrias/farmaceutica" },
  { title: "Manufactura Industrial", description: "Movilizamos piezas críticas, insumos y documentación técnica con tiempos de tránsito mínimos y trazabilidad operativa.", link: "/industrias/manufactura-industrial" },
  { title: "Químicos", description: "Transportamos muestras o productos de baja escala cumpliendo normas HSE y protocolos de seguridad.", link: "/industrias/quimica" },
  { title: "Retail", description: "Ejecutamos recolección y entrega express entre tiendas, almacenes o clientes finales, manteniendo trazabilidad completa y control de inventario.", link: "/industrias/retail" },
  { title: "Tecnología y Electrónica", description: "Movilizamos componentes y dispositivos de alto valor con seguimiento GPS y control de entrega verificado.", link: "/industrias/tecnologia-y-electronica" }
];

const faqs = [
  { question: "¿Puedo rastrear mis envíos en tiempo real?", answer: "Sí, contamos con plataforma web y aplicación móvil que permiten seguimiento 24/7 con actualizaciones automáticas y notificaciones multicanal." },
  { question: "¿Puedo enviar paquetes de diferentes tamaños o pesos?", answer: "Sí, gestionamos envíos desde documentos hasta cargas medianas o voluminosas con el mismo nivel de eficiencia y trazabilidad." },
  { question: "¿Tienen servicio de recojo el mismo día?", answer: "Sí, según la zona y disponibilidad, ofrecemos recojo express y entregas same day o next day." },
  { question: "¿Ofrecen cobertura internacional?", answer: "Sí, coordinamos envíos internacionales mediante aliados estratégicos y nuestra red regional Yobel." }
];

export function Courier() {
  return (
    <>
      <PageHero 
        title="Entregas rápidas y eficientes en Perú"
        description="Puerta a puerta con trazabilidad 24/7 y cumplimiento OTIF del 99.6%."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel ofrecemos servicios de courier rápido, confiable y con cobertura nacional, diseñados para garantizar la seguridad y puntualidad de cada entrega.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Gestionamos entregas puerta a puerta</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Garantizamos que tus envíos lleguen a tiempo y en perfectas condiciones. Procesamos más de 10 mil pedidos al mes, integrando tecnología avanzada y atención personalizada.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="bg-gray-50 p-10 rounded-[30px] hover:shadow-lg transition-all border border-gray-100">
                        <h4 className="text-xl font-bold mb-4">{sol.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{sol.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="text-center">
                  <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 rounded-full text-lg transition-colors">Solicitar servicio de courier</Button>
               </div>
            </div>

            {/* Features */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Características del servicio Express</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feat, idx) => (
                     <div key={idx} className="bg-white border border-gray-200 p-8 rounded-[20px] hover:border-gray-400 transition-colors">
                        <h4 className="text-xl font-bold mb-3">{feat.title}</h4>
                        <p className="text-gray-600 text-base">{feat.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en optimizar tiempos y costos</h3>
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

            {/* Processes */}
            <div>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Llevamos tu operación al siguiente nivel</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Gestionamos todo el ciclo de entrega con trazabilidad digital.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {processes.map((proc, idx) => (
                     <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[30px] h-full hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mb-6">
                           {idx + 1}
                        </div>
                        <h4 className="text-lg font-medium mb-3 leading-tight">{proc.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{proc.desc}</p>
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
                 Cada industria tiene sus retos. Por eso en Yobel ofrecemos soluciones de courier rápidas y seguras, diseñadas para diferentes sectores.
               </p>
            </div>
         </Container>
      </Section>

      <FAQ items={faqs} />
    </>
  );
}
