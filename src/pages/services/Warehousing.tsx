import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Check } from "lucide-react";
import { Industries } from "../../components/landing/Industries";
import { FAQ } from "../../components/landing/FAQ";
import { ScrollRevealText } from "../../components/ui/motion-text";
import { ParallaxImage } from "../../components/landing/ParallaxImage";
import { FullWidthImage } from "../../components/ui/FullWidthImage";
import { Phrase } from "../../components/landing/Phrase";

const heroImage = "https://images.unsplash.com/photo-1556743769-8d7477994b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBzdG9yYWdlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NjQxOTUyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

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
  { title: "Acondicionado", desc: "Etiquetado, inkjet, exportación, rotulado y más." }, // Shortened title for layout
  { title: "Preparación de pedidos", desc: "Selección y recolección precisa por canal de venta (Picking)." },
  { title: "Despacho", desc: "Validación, carga y documentación para envíos ágiles." },
  { title: "Logística inversa", desc: "Recepción, control y clasificación de devoluciones para optimizar inventario." }
];

const faqs = [
  { question: "¿Puedo integrar mi sistema de inventario con el de Yobel?", answer: "Sí, nuestro sistema WMS se conecta fácilmente con plataformas de inventario, ERP u otros sistemas corporativos, sincronizando datos en tiempo real y asegurando visibilidad total de tus operaciones." },
  { question: "¿Tienen cámaras de temperatura controlada?", answer: "Sí, contamos con espacios acondicionados para productos que requieren cadena de frío o condiciones especiales." },
  { question: "¿Ofrecen inventarios en tiempo real?", answer: "Sí, nuestro WMS permite monitorear inventarios 24/7 desde cualquier dispositivo, con información siempre actualizada." },
  { question: "¿Se pueden gestionar diferentes tipos de productos en un mismo almacén?", answer: "Sí, segmentamos por tipo, lote o canal para garantizar orden, seguridad y cumplimiento regulatorio." }
];

export function Warehousing() {
  const { selectedCountry } = useCountry();

  return (
    <>
      <PageHero
        title="Soluciones de Almacenamiento"
        subtitle="Protege tu inventario con almacenes seguros y trazabilidad total."
        videoSrc="https://circular.ws/yobel/amarillo-desktop.mp4"
        videoGradient="bg-gradient-to-t from-[#fff066] via-[#fff066]/60 to-transparent"
        heroImage={heroImage}
        heroText={`Brindamos almacenamiento logístico en ${selectedCountry} diseñado para proteger tu inventario y optimizar la cadena de suministro con flexibilidad y eficiencia.`}
        heroButton={
          <Link to="/contacto">
            <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
              Contactar asesor
            </Button>
          </Link>
        }
        heroLink={
          <Link to="/tarifas">
            <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out w-fit">
              Ver tarifas
            </Button>
          </Link>
        }
      />

      <Section className="bg-white">
         <Container>
            {/* Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
               <div className="flex flex-col">
                  <span className="text-gray-400 text-lg mb-12 block">Beneficios</span>
                  <ParallaxImage 
                     src={heroImage} 
                     alt="Almacenamiento Yobel" 
                     yValues={[-200, 0]}
                  />
               </div>

               <div className="flex flex-col pt-8">
                  <h3 className="text-[32px] md:text-[42px] leading-[1.1] font-normal mb-12 text-black tracking-tight max-w-xl">
                     Elegir Yobel para tus necesidades de almacenamiento
                  </h3>
                  
                  <ul className="flex flex-col w-full">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0">
                           <div className="mt-1.5 shrink-0">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                           </div>
                           <span className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                             {item}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Container>
      </Section>

      <div className="w-full h-[400px] lg:h-[600px] mb-20 relative overflow-hidden">
         <motion.img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzaGVsdmVzfGVufDF8fHx8MTc2NDM3Mjg0OXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Warehouse Logistics" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
         />
      </div>

      <Section className="bg-white">
         <Container>
            {/* Processes */}
            <div>
               <div className="flex flex-col items-center text-center my-20">
                  <div className="mb-8">
                     <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={svgPaths.pff39b00} fill="black" />
                     </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-400 font-normal mb-8">Procesos integrados</h3>
                  <p className="text-3xl md:text-[42px] text-black leading-[1.1] max-w-5xl mx-auto">
                    Integramos todos los procesos logísticos de tu cadena de suministro, optimizando cada etapa para que tu negocio crezca con fluidez y control.
                  </p>
               </div>
               
               <div className="flex flex-col w-full">
                  <span className="text-xl text-gray-400 font-medium block mb-12 text-center lg:text-left">Etapas</span>
                  {processes.map((proc, idx) => (
                     <div key={idx} className="py-20 border-b border-gray-200 last:border-none">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                           <div className="w-full lg:w-1/2 text-left flex justify-center lg:justify-start">
                              <motion.span 
                                 className="text-[100px] md:text-[165px] font-normal leading-none block bg-clip-text text-transparent bg-gradient-to-b from-[#090909] via-[#59c1e6] to-[#090909]"
                                 style={{ backgroundSize: "100% 200%" }}
                                 initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                                 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                 viewport={{ once: true, margin: "-100px" }}
                                 animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                                 transition={{ 
                                   opacity: { duration: 0.8, ease: "easeOut" },
                                   y: { duration: 0.8, ease: "easeOut" },
                                   filter: { duration: 0.8, ease: "easeOut" },
                                   backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }
                                 }}
                              >
                                 {(idx + 1).toString().padStart(2, '0')}
                              </motion.span>
                           </div>
                           <div className="w-full lg:w-1/2 flex flex-col gap-6">
                              <h3 className="text-2xl md:text-[26px] text-black font-augenblick text-center lg:text-left">{proc.title}</h3>
                              <div className="pl-0 md:pl-12 lg:pl-20">
                                 <p className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed text-center lg:text-left">
                                    {proc.desc}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      <Phrase />

      <FullWidthImage 
         src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQzNzM1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
         alt="Interior Almacén"
         height="h-[50vh] md:h-[70vh]"
      />

      <Industries />

      <FAQ items={faqs} />
    </>
  );
}