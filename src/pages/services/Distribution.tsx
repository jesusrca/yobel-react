import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Industries } from "../../components/landing/Industries";

const heroImage = "https://images.unsplash.com/photo-1641290451977-a427586acf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrcyUyMGxvZ2lzdGljcyUyMGRpc3RyaWJ1dGlvbiUyMGNlbnRlciUyMGZsZWV0fGVufDF8fHx8MTc2NDE5NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  {
    title: "B2B Moderno",
    desc: "Distribución directa a autoservicios, centros de distribución y cadenas de farmacias."
  },
  {
    title: "B2B Mayoristas / Tradicional",
    desc: "Abastecimiento a mayoristas y canales tradicionales."
  },
  {
    title: "B2C Última Milla",
    desc: "Entregas directas al consumidor final."
  }
];

const transportTypes = [
  { title: "Fletes exclusivos", desc: "Traslado dedicado de mercancía de un único cliente, punto a punto." },
  { title: "Fletes consolidados", desc: "Transporte combinado (cargas del mismo cliente o hasta dos clientes) hacia uno o dos destinos." },
  { title: "Repartos express", desc: "Movimientos ágiles desde un origen hacia hasta tres puntos de destino." },
  { title: "Reparto exclusivo", desc: "Envíos de un solo cliente hacia múltiples destinos." },
  { title: "Reparto consolidado", desc: "Distribución consolidada desde uno o varios orígenes hacia múltiples destinos (3+)." }
];

const benefits = [
  "Cobertura en Lima y provincias con transporte especializado.",
  "Alta fiabilidad demostrada con entregas completas y a tiempo.",
  "Visibilidad y control gracias a la trazabilidad y seguimiento en tiempo real de cada pedido."
];

const processes = [
  { title: "Planificación de rutas", desc: "Diseñamos rutas y asignamos recursos según la demanda para una distribución eficiente en todo el Perú." },
  { title: "Picking", desc: "Preparación y verificación de pedidos, garantizando exactitud en cada entrega." },
  { title: "Transporte", desc: "Movilizamos tu mercancía según la modalidad logística elegida (fletes exclusivos, consolidados o express)." },
  { title: "Entrega confirmada", desc: "Confirmación de recepción con trazabilidad en tiempo real para mayor control." },
  { title: "Seguimiento y reporte", desc: "Monitoreo constante del estado de distribución con reportes digitales actualizados." }
];

const industries = [
  { title: "Alimentos y Bebidas", description: "Aseguramos entregas con control de temperatura y monitoreo continuo, preservando la cadena de frío y la inocuidad.", link: "/industrias/alimentos-y-bebidas" },
  { title: "Belleza y Cuidado Personal", description: "Distribuimos cosméticos e insumos con trazabilidad total y cumplimiento sanitario, garantizando entregas OTIF a retailers y mayoristas.", link: "/industrias/belleza-y-cuidado-personal" },
  { title: "Calzado y Moda", description: "Gestionamos entregas B2B y B2C de prendas y accesorios, cumpliendo tiempos de temporada y visibilidad en cada pedido.", link: "/industrias/calzado-y-moda" },
  { title: "Construcción", description: "Movilizamos materiales, repuestos y maquinaria pesada con planificación logística ajustada a cronogramas de obra.", link: "/industrias/construccion" },
  { title: "Cuidado del Hogar", description: "Distribuimos productos de limpieza y consumo masivo a retailers y centros logísticos con cobertura nacional y eficiencia comprobada.", link: "/industrias/cuidado-del-hogar" },
  { title: "Editorial", description: "Distribuimos publicaciones, coleccionables y materiales impresos a nivel nacional con control por punto de entrega y tiempos garantizados.", link: "/industrias/editorial" },
  { title: "Farmacéutica", description: "Entregamos medicamentos e insumos regulados bajo condiciones BPM/BPA y trazabilidad desde almacén hasta cliente final.", link: "/industrias/farmaceutica" },
  { title: "Manufactura Industrial", description: "Movilizamos productos terminados y repuestos con planificación sincronizada a líneas de producción y puntos de distribución.", link: "/industrias/manufactura-industrial" },
  { title: "Químicos", description: "Transportamos productos peligrosos y controlados bajo normas HSE y protocolos de seguridad certificados.", link: "/industrias/quimica" },
  { title: "Retail", description: "Entregamos mercancía a tiendas, centros de distribución y e-commerce con OTIF del 99.6% y control de inventario en ruta.", link: "/industrias/retail" },
  { title: "Tecnología y Electrónica", description: "Distribuimos equipos y componentes de alto valor con seguimiento GPS, seguridad reforzada y entrega validada.", link: "/industrias/tecnologia-y-electronica" }
];

const faqs = [
  { question: "¿Puedo coordinar envíos a cualquier región del Perú?", answer: "Sí, contamos con una red de transporte y centros estratégicos que nos permiten cubrir todo el país con eficiencia y puntualidad." },
  { question: "¿Puedo programar entregas según mi calendario comercial?", answer: "Sí, planificamos rutas y ventanas horarias adaptadas a la demanda de tu negocio." },
  { question: "¿Realizan entregas en zonas rurales o de difícil acceso?", answer: "Sí, contamos con cobertura nacional y aliados estratégicos que garantizan llegada a cualquier destino." },
  { question: "¿Ofrecen seguimiento de entregas?", answer: "Sí, disponemos de trazabilidad 24/7 y confirmación digital de cada despacho, accesible vía web o app móvil." }
];

export function Distribution() {
  return (
    <>
      <PageHero 
        title="Distribución logística nacional"
        description="Coordinamos entregas desde nuestras instalaciones (outsourcing) o directamente desde las tuyas (in-house), con cobertura nacional y trazabilidad total."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel diseñamos e implementamos soluciones de distribución eficientes para que tu cadena de suministro funcione sin interrupciones.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Soluciones de distribución para cada canal</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Atendemos todos los modelos de negocio con procesos adaptados a tu operación.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="bg-gray-50 p-10 rounded-[30px] hover:shadow-lg transition-all border border-gray-100">
                        <h4 className="text-2xl font-bold mb-4">{sol.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{sol.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Transport Types */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Tipos de transporte y reparto</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {transportTypes.map((type, idx) => (
                     <div key={idx} className="flex items-start gap-6 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded-[20px] transition-colors">
                        <div className="w-3 h-3 mt-2 bg-black rounded-full shrink-0" />
                        <div>
                           <h4 className="text-xl font-semibold mb-2">{type.title}</h4>
                           <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Optimizamos los tiempos y costos de tu distribución</h3>
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
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Así aseguramos tus entregas</h3>
               <p className="text-lg text-gray-500 mb-16 max-w-3xl">Gestionamos cada etapa, desde la planificación de rutas hasta el reporte final, asegurando entregas confiables y trazabilidad completa.</p>
               
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
                 Cada industria tiene sus retos. Por eso en Yobel ofrecemos soluciones de distribución flexibles y seguras, diseñadas para diferentes sectores.
               </p>
            </div>
         </Container>
      </Section>

      <FAQ items={faqs} />
    </>
  );
}
