import React, { useState, useRef } from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Certificates } from "../../components/landing/Certificates";
import { ResultsGrid } from "../../components/ui/ResultsGrid";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";
import { InteractiveList } from "../../components/ui/InteractiveList";
import { HeroGradientTall } from "../../components/ui/hero-gradient-tall";
import { ScrollGradientTransition } from "../../components/ui/scroll-gradient-transition";
import { BenefitsSection } from "../../components/landing/BenefitsSection";
import { MaskedFullWidthImage } from "../../components/ui/MaskedFullWidthImage";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Almacenamiento Editorial",
    description: "Resguardamos libros, revistas y material impreso bajo condiciones adecuadas de humedad, temperatura y seguridad para preservar su calidad.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Distribución Omnicanal",
    description: "Entregas a puntos de venta, ferias, librerías y compradores online con visibilidad total del envío y cumplimiento de fechas de lanzamiento.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Valor Agregado (VAS)",
    description: "Ofrecemos servicios de armado de sets, empaquetado promocional, etiquetado por punto de venta y preparación para exportación.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Courier Express",
    description: "Envíos urgentes de ejemplares, muestras o materiales de prensa con trazabilidad en tiempo real.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Gestión de Eventos",
    description: "Logística especializada para ferias del libro y eventos corporativos, asegurando disponibilidad de stock en el momento preciso.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Lanzamientos editoriales", fullDesc: "Distribución sincronizada con fechas de presentación o preventa." },
  { id: "02", title: "Reposición a librerías", fullDesc: "Entregas periódicas y reposición automatizada según demanda." },
  { id: "03", title: "E-commerce editorial", fullDesc: "Preparación y despacho de pedidos individuales al lector final." },
  { id: "04", title: "Kitting promocional", fullDesc: "Armado de cajas de colección o paquetes educativos especiales." },
  { id: "05", title: "Eventos y ferias", fullDesc: "Distribución, montaje y retiro logístico de material impreso." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas B2B y e-commerce." },
  { highlight: "Trazabilidad total", normal: "desde la impresión hasta el punto de venta." },
  { highlight: "Lead time optimizado", normal: "para lanzamientos y reposiciones." },
  { highlight: "Inventario 100% visible", normal: "en tiempo real." }
];

const benefits = [
  "Entregas a tiempo en todo el territorio nacional.",
  "Control de inventario por título, lote o punto de venta.",
  "Reducción de costos logísticos y tiempos de distribución.",
  "Integración con plataformas e-commerce y ERP del cliente.",
  "Cobertura nacional con cumplimiento OTIF 99.6%."
];

export function Editorial() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Editoriales y Librerías"
          description="Distribuimos contenido impreso con precisión, cuidado y trazabilidad total."
          variant="yellow"
        />

        {/* Intro Section */}
        <Section className="py-32 md:py-40">
          <Container>
             <div className="flex flex-col gap-8 max-w-[1000px] mx-auto items-center text-center">
               <div className="w-12 h-12 relative mb-2">
                 <svg className="w-full h-full" viewBox="0 0 48 46" fill="none">
                   <path d={svgPaths.pff39b00} fill="black" />
                 </svg>
               </div>
               <div className="flex flex-col gap-12 items-center">
                 <p className="text-2xl md:text-4xl lg:text-[40px] leading-tight font-normal text-black">
                   En Yobel diseñamos soluciones especializadas para editoriales, distribuidoras y librerías. Garantizamos el manejo cuidadoso de libros, revistas y material impreso desde el almacenamiento hasta la entrega final.
                 </p>
                 <div>
                   <Button className="bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl relative overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-[linear-gradient(150deg,#FFF700_0%,#FFF700_32%,#FFE300_70%,#5dd3c0_100%)] before:opacity-0 before:transition-opacity before:duration-500 before:rounded-full hover:before:opacity-100 hover:border-0">
                     <span className="relative z-10">Contactar Asesor</span>
                   </Button>
                 </div>
               </div>
             </div>
          </Container>
        </Section>
      </ScrollGradientTransition>

      {/* Solutions Section */}
      <InteractiveList items={solutions} title="¿Cómo te ayudamos?" />

      {/* Benefits Section */}
      <Section className="bg-white py-20">
        <Container>
          <BenefitsSection 
            title="Precisión, cuidado y puntualidad"
            image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            imageAlt="Benefits"
            benefits={benefits}
          />
        </Container>
      </Section>

      {/* Process / Use Cases Section */}
      <SolutionsShowcase 
        label="Aplicaciones"
        title="Casos de uso típicos"
        solutions={useCases}
        imageUrl="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHdhcmVob3VzZSUyMHB1Ymxpc2hpbmclMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Editoriales y Librerías"
      />

      {/* Full Width Image with Mask */}
      <MaskedFullWidthImage />

      {/* Results Section */}
      <ResultsGrid 
        label="Resultados"
        title="Indicadores que priorizamos"
        items={results}
      />

      {/* Certifications Section */}
      <Certificates description="Operamos con certificaciones internacionales que garantizan calidad, seguridad y sostenibilidad en cada etapa." />
    </>
  );
}