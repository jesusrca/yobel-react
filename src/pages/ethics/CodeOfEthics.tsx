import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";

const heroImage = "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV0aGljcyUyMGludGVncml0eSUyMGNvcnBvcmF0ZSUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjQxOTUyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const principles = [
  { title: "Integridad", desc: "Cumplimos promesas, cuidamos activos y rechazamos cualquier ventaja indebida." },
  { title: "Respeto y diversidad", desc: "Valoramos ideas, personas y contextos. Tolerancia cero al acoso o la discriminación." },
  { title: "Cumplimiento", desc: "Seguimos leyes y contratos. Reportamos conflictos de interés y prevenciones de lavado." },
  { title: "Seguridad y ambiente", desc: "Operamos con estándares HSE: prevenimos incidentes y reducimos nuestra huella." }
];

const policies = [
  { title: "Código de Ética", desc: "Principios de conducta: conflictos de interés, regalos, uso de activos, respeto, denuncias y sanciones" },
  { title: "Política Anticorrupción", desc: "Cero sobornos y pagos de facilitación; reglas con funcionarios/terceros, registros contables." },
  { title: "Política de Seguridad y Salud", desc: "Responsabilidades SST, uso de EPP. prevención y ergonomía, capacitaciones, emergencias y reporte de incidentes." },
  { title: "Política de Diversidad e Inclusión", desc: "Igualdad y no discriminación; prevención del acoso, lenguaje inclusivo, ajustes razonables y canales de apoyo." },
  { title: "Política Ambiental", desc: "Gestión de residuos y sustancias, uso eficiente de recursos, control de emisiones, cumplimiento y metas ambientales." }
];

const faqs = [
  { question: "¿Qué puedo reportar en el Canal de Ética?", answer: "Cualquier conducta que contravenga nuestro Código de Ética: fraude, sobornos, acoso, discriminación, violación de normas de seguridad, mal uso de activos, datos personales o conflictos de interés." },
  { question: "¿Puedo reportar de forma anónima?", answer: "Sí. Puedes realizar tu reporte de manera anónima o identificada. Ambos casos son tratados con la misma confidencialidad y rigor en la investigación." },
  { question: "¿Habrá represalias por reportar de buena fe?", answer: "No. En Yobel tenemos una política de cero represalias para quienes reportan de buena fe. Protegemos la integridad y el bienestar de cada colaborador o tercero que utiliza el canal." },
  { question: "¿Cómo se gestionan los casos?", answer: "Cada reporte es recibido por un equipo especializado en cumplimiento. Se evalúa, clasifica y da seguimiento hasta su cierre, asegurando transparencia, confidencialidad y comunicación continua con el denunciante." }
];

export function CodeOfEthics() {
  return (
    <>
      <PageHero 
        title="Código de Ética"
        description="Actuamos con integridad en cada eslabón. Nuestro Código de Ética y nuestras políticas guían cómo trabajamos con clientes, aliados y comunidades en toda Latinoamérica."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            {/* Principles */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Principios que nos guían</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {principles.map((prin, idx) => (
                     <div key={idx} className="bg-gray-50 p-10 rounded-[30px] border border-gray-100 hover:shadow-lg transition-all">
                        <h4 className="text-2xl font-bold mb-4">{prin.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{prin.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Ethics Channel */}
            <div className="bg-black text-white rounded-[40px] p-12 md:p-20 mb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="max-w-3xl">
                   <h3 className="text-3xl md:text-4xl font-normal mb-6">Reporta una preocupación con confianza</h3>
                   <p className="text-xl opacity-80 mb-8 font-light leading-relaxed">Si detectas conductas contrarias a nuestro Código de Ética, repórtalo. Puedes hacerlo de forma anónima, confidencial y sin represalias.</p>
                   <div className="flex flex-wrap gap-6 text-base md:text-lg opacity-70">
                       <span>Formulario web</span>
                       <span>•</span>
                       <span>Línea telefónica</span>
                       <span>•</span>
                       <span>Seguimiento de caso</span>
                   </div>
               </div>
               <div className="shrink-0">
                   <Button className="bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-full text-lg font-medium transition-colors">Abrir canal de Ética</Button>
               </div>
            </div>

            {/* Policies */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Políticas y documentos</h3>
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Nuestro negocio se sostiene en la integridad. Aquí puedes consultar nuestras políticas vigentes.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {policies.map((pol, idx) => (
                       <div key={idx} className="border border-gray-200 p-8 rounded-[30px] hover:shadow-md transition-all bg-white">
                           <h4 className="text-xl font-bold mb-4 text-blue-600">{pol.title}</h4>
                           <p className="text-gray-600 text-base leading-relaxed">{pol.desc}</p>
                       </div>
                   ))}
               </div>
            </div>

            {/* Sustainability Teaser */}
            <div className="bg-gray-50 rounded-[40px] p-16 text-center mb-24">
                <h3 className="text-3xl md:text-4xl font-normal mb-8">Nos movemos juntos a la sostenibilidad</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 font-light leading-relaxed">En Yobel trabajamos cada día para reducir huella, impulsar economía circular y generar impacto positivo en las comunidades. La sostenibilidad es parte de nuestra operación, desde las plantas hasta las rutas.</p>
                <Button className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Conoce nuestras iniciativas</Button>
            </div>

            <div className="mb-24 text-center">
               <div className="inline-block bg-gray-100 px-12 py-8 rounded-[30px]">
                  <p className="text-5xl font-bold mb-4">100%</p>
                  <p className="text-xl text-gray-600">colaboradores capacitados en BPA y BPM</p>
               </div>
               <p className="text-base text-gray-400 mt-6">Periodo de referencia: últimos 12 meses</p>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-24">
                <p className="text-gray-500 text-sm">Tus datos, siempre protegidos. Resguardamos la confidencialidad e integridad de tus datos según la normativa en toda la región.</p>
            </div>

         </Container>
      </Section>

      <FAQ items={faqs} />
    </>
  );
}
