import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCountry } from "../../contexts/CountryContext";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";
import { FAQ } from "../../components/landing/FAQ";
import { ProcessItem } from "../../components/company/ProcessItem";
import svgPathsProcess from "../../imports/svg-u5y25zzhvz";
import { motion, useScroll, useTransform } from "motion/react";
import { GradientCTA } from "../../components/ui/GradientCTA";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const MetallicGradient = ({ id, delay }: { id: string; delay: number }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#000000" />
      <stop offset="30%" stopColor="#000000" />
      <stop offset="50%" stopColor="#59C1E6" />
      <stop offset="70%" stopColor="#000000" />
      <stop offset="100%" stopColor="#000000" />
      <animate attributeName="x1" from="-100%" to="100%" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
      <animate attributeName="x2" from="0%" to="200%" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
    </linearGradient>
  </defs>
);

const ProcessIcon = ({ type, index = 0 }: { type: string; index?: number }) => {
  const gradientId = `metallic-shimmer-ethics-${index}`; // Added prefix to avoid collision
  const strokeUrl = `url(#${gradientId})`;
  const strokeBlack = "black";
  const width = 4.5;
  const delay = index * 1.2;

  switch (type) {
    case "Seguridad y calidad":
      return (
        <div className="relative w-[127px] h-[127px] flex items-center justify-center">
            <svg className="w-[75%] h-[87%]" viewBox="0 0 100 111" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <path d={svgPathsProcess.p1471ab00} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p3dea9000} stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
      );
    case "Datos y visibilidad":
      return (
        <div className="relative w-[127px] h-[127px]">
             <svg className="w-full h-full" viewBox="0 0 127 127" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <g opacity="0.7">
                    <path d={svgPathsProcess.p1876f440} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M89.9583 31.75H121.708V63.5" stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                </g>
             </svg>
        </div>
      );
    case "Mejora continua":
      return (
        <div className="relative w-[127px] h-[127px]">
             <svg className="w-full h-full" viewBox="0 0 127 127" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <path d={svgPathsProcess.p32899600} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p2fb71e11} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
        </div>
      );
    case "Colaboración abierta":
      return (
         <div className="relative w-[127px] h-[127px]">
             <svg className="w-full h-full" viewBox="0 0 127 127" fill="none">
                <MetallicGradient id={gradientId} delay={delay} />
                <path d={svgPathsProcess.p6c78880} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p14d48600} stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p24192100} stroke={strokeUrl} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPathsProcess.p204f1f00} stroke={strokeBlack} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
         </div>
      );
    default:
      return null;
  }
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

// Map principles to icon types
const iconTypeMapping = [
  "Mejora continua",      // Integridad
  "Colaboración abierta", // Respeto y Diversidad
  "Datos y visibilidad",  // Cumplimiento
  "Seguridad y calidad"   // Seguridad y Ambiente
];

export function CodeOfEthics() {
  const { selectedCountry } = useCountry();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-[#e5e5e5] to-white"
        />
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Código de Ética</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Actuamos con integridad en cada eslabón
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Nuestros principios guían cada decisión en toda la cadena de suministro.
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
´              Código de Ética
             </h2>
             <div className="flex flex-col gap-12 items-center">
               <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal text-black">
                 Nuestro Código de Ética y nuestras políticas guían cómo trabajamos con clientes, aliados y comunidades en toda Latinoamérica.
               </p>
               <Button 
                 className="rounded-full px-[14px] py-[8px] h-auto text-[22px] font-medium leading-[24px] bg-transparent text-black border-[1.5px] border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-[12px]"
                 onClick={() => window.open("https://www.resguarda.com/yobel", "_blank")}
               >
                 Abrir Canal de Ética
                 <svg className="w-[17px] h-[16px]" viewBox="0 0 17 16" fill="none">
                   <path d="M0 7.52417H16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                   <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                 </svg>
               </Button>
             </div>
           </div>
        </Container>
      </Section>

      {/* Principles Section (ProcessItem Style) */}
      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col gap-12">
             <div className="flex flex-col gap-2 items-start">
               <span className="text-xl text-gray-400 font-medium">Valores</span>
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Principios que nos guían</h3>
             </div>
             
             <div className="flex flex-col w-full">
                {principles.map((prin, idx) => (
                    <React.Fragment key={prin.id}>
                        <ProcessItem 
                            icon={<ProcessIcon type={iconTypeMapping[idx % iconTypeMapping.length]} index={idx} />}
                            title={prin.title}
                            description={prin.fullDesc}
                        />
                        {idx < principles.length - 1 && (
                            <div className="w-full h-[1px] bg-[#494949]/50" />
                        )}
                    </React.Fragment>
                ))}
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
                           <li className="text-gray-400 text-lg">{selectedCountry}: 0-800-00-000</li>
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
      
      {/* FAQ Section */}
      <FAQ items={faqs} />
    </>
  );
}