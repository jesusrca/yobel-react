import React, { useState, useRef } from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";
import { FAQ } from "../../components/landing/FAQ";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const principles = [
  {
    id: "01",
    title: "Integridad",
    fullDesc: "Cumplimos promesas, cuidamos activos y rechazamos cualquier ventaja indebida. Actuamos con transparencia en cada decisión."
  },
  {
    id: "02",
    title: "Respeto y Diversidad",
    fullDesc: "Valoramos ideas, personas y contextos diferentes. Tenemos tolerancia cero al acoso, la discriminación y cualquier forma de violencia."
  },
  {
    id: "03",
    title: "Cumplimiento",
    fullDesc: "Seguimos rigurosamente leyes, normativas y contratos. Reportamos proactivamente conflictos de interés y prevenimos el lavado de activos."
  },
  {
    id: "04",
    title: "Seguridad y Ambiente",
    fullDesc: "Operamos con los más altos estándares HSE (Health, Safety & Environment), previniendo incidentes y reduciendo nuestra huella ambiental."
  }
];

const policies = [
  { title: "Código de Ética", desc: "Principios de conducta: conflictos de interés, regalos, uso de activos, respeto, denuncias y sanciones." },
  { title: "Política Anticorrupción", desc: "Cero sobornos y pagos de facilitación; reglas claras con funcionarios y terceros." },
  { title: "Seguridad y Salud", desc: "Responsabilidades SST, uso de EPP, prevención, ergonomía y reporte de incidentes." },
  { title: "Diversidad e Inclusión", desc: "Igualdad y no discriminación; prevención del acoso y canales de apoyo." },
  { title: "Política Ambiental", desc: "Gestión de residuos, uso eficiente de recursos y cumplimiento de metas ambientales." }
];

const faqs = [
  { question: "¿Qué puedo reportar en el Canal de Ética?", answer: "Cualquier conducta que contravenga nuestro Código de Ética: fraude, sobornos, acoso, discriminación, violación de normas de seguridad, mal uso de activos, datos personales o conflictos de interés." },
  { question: "¿Puedo reportar de forma anónima?", answer: "Sí. Puedes realizar tu reporte de manera anónima o identificada. Ambos casos son tratados con la misma confidencialidad y rigor en la investigación." },
  { question: "¿Habrá represalias por reportar de buena fe?", answer: "No. En Yobel tenemos una política de cero represalias para quienes reportan de buena fe. Protegemos la integridad y el bienestar de cada colaborador o tercero que utiliza el canal." },
  { question: "¿Cómo se gestionan los casos?", answer: "Cada reporte es recibido por un equipo especializado en cumplimiento. Se evalúa, clasifica y da seguimiento hasta su cierre, asegurando transparencia, confidencialidad y comunicación continua con el denunciante." }
];

export function CodeOfEthics() {
  const [activePrinciple, setActivePrinciple] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://circular.ws/yobel/fondo-celeste.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black">Ética y Sostenibilidad</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[900px]">
                  Código de Ética
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[400px] pt-2">
                  Actuamos con integridad en cada eslabón. Nuestros principios guían cómo trabajamos con clientes, aliados y comunidades.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="bg-white py-24">
        <Container>
           <div className="flex flex-col gap-8 max-w-[1000px] mx-auto items-center text-center">
             <div className="w-12 h-12 relative mb-2">
               <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                 <path d={svgPaths.pff39b00} fill="black" />
               </svg>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-light text-gray-400">
               Integridad Corporativa
             </h2>
             <div className="flex flex-col gap-12 items-center">
               <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal text-black">
                 En Yobel nuestro negocio se sostiene en la confianza. Cada decisión que tomamos está alineada con nuestros valores éticos, asegurando relaciones transparentes y sostenibles a largo plazo.
               </p>
             </div>
           </div>
        </Container>
      </Section>

      {/* Principles Section (Accordion Style) */}
      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col gap-12">
             <div className="flex flex-col gap-2 items-start">
               <span className="text-xl text-gray-400 font-medium">Valores</span>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Principios que nos guían</h3>
             </div>
             
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 flex flex-col gap-0 border-t border-black">
                  {principles.map((prin) => (
                    <div 
                      key={prin.id}
                      className="group border-b border-black py-10 cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setActivePrinciple(prin.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-baseline">
                           <span className="text-3xl md:text-4xl font-light whitespace-nowrap">{prin.id} /</span>
                           <h3 className="text-3xl md:text-4xl font-light">{prin.title}</h3>
                        </div>
                        <div className="shrink-0">
                           <div className="w-[50px] h-[30px] rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                             <ChevronRight size={20} />
                           </div>
                        </div>
                      </div>
                      <div className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${activePrinciple === prin.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <p className="text-xl text-gray-600 font-light max-w-lg ml-0 md:ml-20">
                           {prin.fullDesc}
                         </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="w-full lg:w-1/2 relative h-[600px] rounded-[30px] overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbnRlZ3JpdHklMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NDQxNjM1Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
                     alt="Integridad Corporativa" 
                     className="absolute inset-0 w-full h-full object-cover" 
                   />
                </div>
             </div>
           </div>
        </Container>
      </Section>

      {/* Ethics Channel Section (Dark) */}
      <Section className="bg-black text-white py-24">
         <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2">
                   <h3 className="text-3xl md:text-4xl font-normal mb-8">Reporta una preocupación con confianza</h3>
                   <p className="text-xl opacity-80 mb-10 font-light leading-relaxed max-w-xl">
                      Si detectas conductas contrarias a nuestro Código de Ética, repórtalo. Puedes hacerlo de forma anónima, confidencial y sin represalias.
                   </p>
                   <div className="flex flex-wrap gap-4 mb-12">
                       {['Formulario web', 'Línea telefónica', 'Seguimiento de caso'].map((item, i) => (
                           <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20">
                               <div className="w-2 h-2 bg-[#59c1e6] rounded-full" />
                               <span className="text-sm md:text-base">{item}</span>
                           </div>
                       ))}
                   </div>
                   <Button className="bg-white text-black px-10 py-5 rounded-full text-lg hover:bg-gray-200 transition-colors">
                      Abrir Canal de Ética
                   </Button>
               </div>
               <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                   <div className="bg-[#1A1A1A] p-10 rounded-[30px] max-w-md w-full border border-white/10">
                       <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 bg-[#59c1e6]/20 rounded-full flex items-center justify-center text-[#59c1e6]">
                               <ArrowUpRight size={24} />
                           </div>
                           <h4 className="text-xl font-bold">Canales Disponibles</h4>
                       </div>
                       <ul className="space-y-4">
                           <li className="text-gray-400 text-lg">Perú: 0-800-00-000</li>
                           <li className="text-gray-400 text-lg">Internacional: +51 1 123 4567</li>
                           <li className="text-gray-400 text-lg">etica@yobel.com</li>
                       </ul>
                   </div>
               </div>
            </div>
         </Container>
      </Section>

      {/* Policies Section (Grid) */}
      <Section className="bg-white py-24">
         <Container>
            <div className="flex flex-col gap-12 text-center mb-20">
               <h2 className="text-4xl md:text-[45px] leading-tight font-normal">
                  Políticas y Documentos
               </h2>
               <p className="text-xl md:text-[25px] font-light leading-relaxed text-gray-800 max-w-3xl mx-auto">
                  Nuestro marco normativo asegura la coherencia y transparencia en todas nuestras operaciones.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {policies.map((pol, idx) => (
                   <div key={idx} className="border border-black/10 p-8 rounded-[30px] hover:shadow-xl transition-all bg-white flex flex-col gap-4 group">
                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                           <Check size={20} />
                       </div>
                       <h4 className="text-2xl font-bold font-augenblick">{pol.title}</h4>
                       <p className="text-lg text-gray-600 leading-relaxed">{pol.desc}</p>
                   </div>
               ))}
            </div>
         </Container>
      </Section>
      
      {/* Sustainability Banner */}
      <Section className="bg-gray-50 py-24">
          <Container>
            <div className="bg-white rounded-[40px] p-12 md:p-20 text-center shadow-sm">
                <h3 className="text-3xl md:text-4xl font-normal mb-6">Nos movemos juntos a la sostenibilidad</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 font-light leading-relaxed">
                   En Yobel trabajamos cada día para reducir huella, impulsar economía circular y generar impacto positivo en las comunidades.
                </p>
                <Button className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">
                   Conoce nuestras iniciativas
                </Button>

                <div className="mt-16 pt-16 border-t border-gray-100">
                   <div className="inline-block">
                      <p className="text-6xl font-bold mb-2">100%</p>
                      <p className="text-xl text-gray-600">colaboradores capacitados en Ética</p>
                   </div>
                </div>
            </div>
          </Container>
      </Section>

      {/* FAQ Section */}
      <FAQ items={faqs} />
    </>
  );
}
