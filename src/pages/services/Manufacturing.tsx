import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCountry } from "../../contexts/CountryContext";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Plus, Minus, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "../../components/ui/utils";
import { Industries } from "../../components/landing/Industries";
import { FAQ } from "../../components/landing/FAQ";
import { ScrollRevealText } from "../../components/ui/motion-text";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";

// Images from Figma
import imgImage2 from "figma:asset/188b5403cfad247086e7d5b3ee2d0d391e5be8a2.png";
import imgFrame121 from "figma:asset/8d7a4724799b00cfc793a888434790a0b52b0f5b.png";
import imgRectangle58 from "figma:asset/466ece8a48260cf4c3e2e8bed7fe9dca99380d2a.png";

// Industry Images
import img2BellesaCuiPersonal1 from "figma:asset/74d74235ea9965c374f56a39a88e5d60fa00a261.png";
import img2BellesaCuiPersonal2 from "figma:asset/8d6587b0f5d20c39c0c2a3377eaed76a697e775b.png";
import img2BellesaCuiPersonal3 from "figma:asset/00f4c04763789a702a0c759b1d26c9e78688e7bd.png";
import img2BellesaCuiPersonal4 from "figma:asset/c776cd39e2b19b9e68bc49e1b38c01e7e2a70979.png";
import img2BellesaCuiPersonal5 from "figma:asset/d299e598b38834a762fcd6d4699cd6993bbdba13.png";
import img2BellesaCuiPersonal6 from "figma:asset/c050a26717101af0d8f0cb39354656274be02136.png";
import img2BellesaCuiPersonal7 from "figma:asset/30d5083ce4cb03138e91fda44cc7e14e1cc38bb1.png";
import img2BellesaCuiPersonal8 from "figma:asset/0827d84664f6cc53daceeb71b0a0ab0a05aca8a2.png";
import img2BellesaCuiPersonal9 from "figma:asset/701693f610ecfa23c1025f6e2f898012635bf153.png";
import img2BellesaCuiPersonal10 from "figma:asset/97eceda1bec1a50a9bc361d6f3d438625aa57e22.png";

// Certificates
import imgLogoInvimaYobelScmPeruLogistica from "figma:asset/b19c5503ac9f4c4786776ea901fb83713199048b.png";
import imgLogoBpmYobelScmPeruLogistica from "figma:asset/86ca0a2fb7650f7e15d38a40b56539b3851e5fa3.png";
import imgLogoIsoYobelScmPeruLogistica from "figma:asset/67340db8be0f901aac12f6261cc5984d311cf87b.png";
import imgLogoBpaYobelScmPeruLogistica from "figma:asset/9c117b6f027ea4bc446b349b644c8c2e87a56c17.png";
import imgLogoOliverYobelScmPeruLogistica from "figma:asset/e8cbc1b372f893a7c041916680e9c782e39fed62.png";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Análisis de Laboratorio",
    shortDesc: "Estudios fisicoquímicos y microbiológicos para garantizar calidad y seguridad.",
    fullDesc: "Estudios fisicoquímicos y microbiológicos para garantizar calidad y seguridad. Soluciones ágiles para importar y exportar. Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa."
  },
  {
    id: "02",
    title: "Desarrollo de Productos",
    shortDesc: "Formulación, pruebas piloto y apoyo en lanzamientos.",
    fullDesc: "Desde la idea hasta el producto final. Nuestro equipo de I+D desarrolla fórmulas innovadoras y realiza pruebas piloto para asegurar el éxito de tu lanzamiento."
  },
  {
    id: "03",
    title: "Producto Terminado",
    shortDesc: "Gestión integral hasta la entrega final.",
    fullDesc: "Nos encargamos de todo el ciclo de producción, desde la recepción de materias primas hasta el producto terminado listo para su distribución."
  }
];

const benefits = [
  "Alta flexibilidad de producción, adaptada a tu sector.",
  "Reducción de inventarios y costos operativos.",
  "Optimización de recursos y tiempos de desarrollo.",
  "Calidad garantizada en cada etapa de manufactura."
];

const processSteps = [
  { number: "01", title: "Evaluación", desc: "Análisis de requerimientos y planificación de la producción." },
  { number: "02", title: "Desarrollo y Pruebas", desc: "Formulación piloto y validación de calidad (si aplica)." },
  { number: "03", title: "Producción", desc: "Fabricación con control de calidad en cada fase." },
  { number: "04", title: "Entrega Confirmada", desc: "Validación digital y auditoría final del pedido antes del despacho." },
  { number: "05", title: "Postventa", desc: "Soporte y retroalimentación para mejorar continuamente tu operación." },
  { number: "06", title: "Envasado y Acondicionado", desc: "Acondicionamos según tus especificaciones: blíster, termoempacado, embalaje, etiquetado y packs personalizados." },
  { number: "07", title: "Entrega final", desc: "Despacho y recepción en destino con trazabilidad completa y registro digital de la entrega." }
];

const industries = [
  { title: "Alimentos y Bebidas", desc: "Gestionamos operaciones internacionales bajo control sanitario y de temperatura, asegurando inocuidad y entregas en tiempos óptimos.", img: img2BellesaCuiPersonal1 },
  { title: "Belleza y Cuidado Personal", desc: "Facilitamos la importación de insumos y la exportación de productos terminados, cumpliendo normativas sanitarias y garantizando trazabilidad por lote.", img: img2BellesaCuiPersonal2 },
  { title: "Calzado y moda", desc: "Movemos textiles, prendas y accesorios entre mercados con cumplimiento regulatorio y tiempos de entrega ajustados a temporada.", img: img2BellesaCuiPersonal3 },
  { title: "Construcción", desc: "Coordinamos el transporte internacional de materiales, maquinaria y repuestos, optimizando tiempos y reduciendo costos logísticos.", img: img2BellesaCuiPersonal4 },
  { title: "Cuidado del Hogar", desc: "Gestionamos la importación de materias primas y productos terminados con visibilidad total desde origen hasta destino.", img: img2BellesaCuiPersonal5 }, // Using image 5 (reused in original code)
  { title: "Editorial", desc: "Administramos la importación de papel, tintas y materiales gráficos, y exportamos publicaciones con procesos aduaneros eficientes y seguros.", img: img2BellesaCuiPersonal5 },
  { title: "Farmacéutica", desc: "Movilizamos medicamentos e insumos bajo estándares BPM/BPA y cumplimiento DIGEMID, asegurando integridad y control documental.", img: img2BellesaCuiPersonal6 },
  { title: "Manufactura Industrial", desc: "Logística de insumos, componentes y productos terminados con trazabilidad, continuidad productiva y optimización del flujo operativo.", img: img2BellesaCuiPersonal7 },
  { title: "Químicos", desc: "Administramos importaciones y exportaciones de sustancias controladas, cumpliendo normas internacionales de seguridad y medio ambiente.", img: img2BellesaCuiPersonal8 },
  { title: "Retail", desc: "Aceleramos la importación de mercancías y equipamiento, garantizando disponibilidad continua y reducción de lead time en tienda.", img: img2BellesaCuiPersonal9 },
  { title: "Tecnología y Electrónica", desc: "Gestionamos el traslado internacional de dispositivos, componentes y equipos de alto valor con seguridad, seguimiento y control aduanero.", img: img2BellesaCuiPersonal10 }
];

const faqs = [
  { question: "¿Puedo tercerizar solo una parte del proceso de producción?", answer: "Sí, nos encargamos desde la llegada de la mercancía al puerto hasta su entrega final, incluyendo trámites aduaneros, transporte y nacionalización." },
  { question: "¿Qué tipos de productos pueden fabricar o acondicionar?", answer: "Trabajamos con categorías de consumo masivo, cuidado personal, hogar, alimentos no perecibles y más." },
  { question: "¿Cuentan con control de calidad durante la producción?", answer: "Sí, cada lote se revisa bajo protocolos de calidad y trazabilidad, garantizando uniformidad y cumplimiento técnico." },
  { question: "¿Puedo usar mis propios materiales o envases?", answer: "Sí, adaptamos el proceso a tus insumos y especificaciones, garantizando eficiencia y compatibilidad con tu línea de productos." }
];

export function Manufacturing() {
  const { selectedCountry } = useCountry();
  const sliderRef = useRef<Slider>(null);
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.2 } }
    ]
  };

  return (
    <>
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
             <p className="text-lg md:text-[18px] text-black">Manufactura</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px]">
                  Manufactura en {selectedCountry} para empresas
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[316px] pt-2">
                  Producción, envasado y desarrollo de productos con altos estándares internacionales.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col gap-8 max-w-[1000px] mx-auto items-center text-center">
             <div className="w-12 h-12 relative mb-2">
               <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                 <path d={svgPaths.pff39b00} fill="black" />
               </svg>
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-light text-gray-400">
               Servicio de manufactura a tu medida
             </h2>
             <div className="flex flex-col gap-12 items-center">
               <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal text-black">
                 Gestionamos tus procesos productivos en nuestras plantas o directamente en tus instalaciones, aplicando tecnología avanzada y asegurando el cumplimiento de todas las normativas vigentes.
               </p>
               <div>
                 <Button className="bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-all duration-300">
                   Solicitar Servicio de Manufactura
                 </Button>
               </div>
             </div>
           </div>
        </Container>
      </Section>

      {/* Solutions / Soluciones */}
      <SolutionsShowcase 
        label="Soluciones"
        title=""
        solutions={solutions}
        imageUrl={imgImage2}
        imageAlt="Manufactura"
      />

      {/* Benefits Section */}
      <Section className="bg-white py-20">
         <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                     <span className="text-xl text-gray-400 font-medium block mb-4">Beneficios</span>
                     <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal">
                        Maximizamos la eficiencia de tu producción
                     </h2>
                  </div>
                  <div className="mt-12 relative h-[400px] rounded-[20px] overflow-hidden hidden lg:block">
                     <img src={imgRectangle58} alt="Benefits" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
               </div>
               <div className="w-full lg:w-1/2 flex flex-col gap-10">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-6">
                       <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                          <Check size={32} strokeWidth={1.5} />
                       </div>
                       <p className="text-2xl md:text-[22px] font-light leading-relaxed">{benefit}</p>
                    </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      {/* Process / Traceability Section */}
      <Section className="bg-white py-20 overflow-hidden relative">
         <Container className="relative z-10" ref={containerRef}>
            <div className="flex flex-col gap-12 mb-20">
               <div className="w-12 h-12 relative">
                 <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                   <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
               </div>
               <div className="max-w-4xl">
                  <h2 className="text-4xl md:text-5xl lg:text-[45px] leading-tight font-normal mb-8">
                    Procesos de manufactura con trazabilidad completa
                  </h2>
                  <p className="text-2xl md:text-[45px] leading-tight font-light text-gray-500">
                    Gestionamos todo el ciclo productivo, desde la evaluación inicial hasta la postventa, asegurando eficiencia y cumplimiento normativo
                  </p>
               </div>
            </div>

            <div className="flex flex-col w-full">
               <span className="text-xl text-gray-400 font-medium block mb-12">Procesos</span>
               {processSteps.map((step, idx) => (
                 <div key={idx} className="py-20 border-b border-gray-200 last:border-none">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
                        <div className="w-full lg:w-1/2 text-left">
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
                             {step.number}
                           </motion.span>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                           <h3 className="text-2xl md:text-[26px] text-black font-augenblick">{step.title}</h3>
                           <div className="pl-8 md:pl-12 lg:pl-20">
                              <ScrollRevealText 
                                 text={step.desc}
                                 className="text-xl md:text-[22px] text-black mb-8 max-w-lg leading-relaxed"
                              />
                           </div>
                        </div>
                    </div>
                 </div>
               ))}
            </div>
         </Container>
      </Section>

      {/* Industries Section (Carousel) */}
      <Industries className="bg-gradient-to-b from-white to-[#59c1e6]" />

      {/* Certificates Section */}
      <Section className="bg-white py-20">
         <Container>
            <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
               <div className="w-full md:w-[300px] shrink-0">
                  <span className="text-xl text-black font-medium">Certificados</span>
               </div>
               <div className="flex flex-col gap-8 max-w-3xl">
                  <h2 className="text-4xl md:text-[45px] leading-tight font-normal">
                     Nuestros certificados<br/>nos respaldan
                  </h2>
                  <p className="text-xl md:text-[25px] font-light leading-relaxed text-gray-800">
                     En Yobel contamos con certificaciones internacionales y políticas internas que avalan nuestro compromiso con la excelencia operativa, la sostenibilidad ambiental y la integridad en la gestión logística y de manufactura.
                  </p>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-16 items-center grayscale hover:grayscale-0 transition-all duration-500">
               <img src={imgLogoInvimaYobelScmPeruLogistica} alt="Invima" className="h-[120px] object-contain" />
               <img src={imgLogoBpmYobelScmPeruLogistica} alt="BPM" className="h-[120px] object-contain" />
               <img src={imgLogoIsoYobelScmPeruLogistica} alt="ISO" className="h-[120px] object-contain" />
               <img src={imgLogoBpaYobelScmPeruLogistica} alt="BPA" className="h-[120px] object-contain" />
               <img src={imgLogoOliverYobelScmPeruLogistica} alt="Oliver" className="h-[120px] object-contain" />
            </div>
         </Container>
      </Section>

      {/* FAQ Section */}
      <FAQ items={faqs} />
    </>
  );
}