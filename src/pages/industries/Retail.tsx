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
    title: "Almacenamiento Omnicanal",
    description: "Gestión centralizada de inventario por tienda, canal o marketplace con tecnología WMS para asegurar disponibilidad en tiempo real.",
    image: "https://images.unsplash.com/photo-1671427478482-2968e71a6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2NDQxNTM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Distribución Nacional",
    description: "Abastecimiento de tiendas, supermercados y entregas directas al cliente final con trazabilidad 24/7 y cumplimiento estricto de ventanas horarias.",
    image: "https://images.unsplash.com/photo-1671427478482-2968e71a6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2NDQxNTM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Valor Agregado (VAS)",
    description: "Etiquetado, armado de combos, empaques promocionales y preparación personalizada según los requerimientos de cada canal de venta.",
    image: "https://images.unsplash.com/photo-1671427478482-2968e71a6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2NDQxNTM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Fulfillment E-commerce",
    description: "Preparación, empaque y despacho ágil de pedidos online con integración directa a tu plataforma digital (Shopify, VTEX, Magento, etc.).",
    image: "https://images.unsplash.com/photo-1671427478482-2968e71a6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2NDQxNTM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Gestión de importaciones, despacho aduanero y transporte internacional de mercancías retail para asegurar el stock de temporada.",
    image: "https://images.unsplash.com/photo-1671427478482-2968e71a6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2NDQxNTM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Reposición de tiendas", fullDesc: "Entregas programadas y optimizadas según la demanda de cada punto de venta." },
  { id: "02", title: "Fulfillment e-commerce", fullDesc: "Procesamiento y despacho rápido de pedidos en línea para mejorar la experiencia del cliente." },
  { id: "03", title: "Campañas y promociones", fullDesc: "Kitting, empaques promocionales y distribución nacional para fechas clave (Cyber, Black Friday)." },
  { id: "04", title: "Gestión de devoluciones", fullDesc: "Logística inversa eficiente con control de calidad y reacondicionado para reventa." },
  { id: "05", title: "Integración de canales", fullDesc: "Flujo unificado entre retail físico y digital para una visión única del inventario." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas retail." },
  { highlight: "Trazabilidad 100%", normal: "en tiempo real." },
  { highlight: "Lead time reducido hasta 30%", normal: "en reposición." },
  { highlight: "Integración total omnicanal", normal: "con sistemas del cliente." }
];

const benefits = [
  "Trazabilidad total desde el centro de distribución hasta el punto de venta.",
  "Lead time reducido en reposición y entregas online.",
  "Optimización del espacio y flujo logístico.",
  "Integración omnicanal con sistemas ERP y e-commerce.",
  "Cumplimiento OTIF 99.6%."
];

export function Retail() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Retail"
          description="Conectamos tu inventario con cada punto de venta, canal y consumidor final."
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
                   En Yobel SCM diseñamos y operamos cadenas logísticas integradas para retail. Aseguramos disponibilidad, trazabilidad y cumplimiento, optimizando el abastecimiento de tiendas físicas, marketplaces y clientes finales.
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
            title="Disponibilidad, eficiencia y experiencia"
            image="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkZWxpdmVyeSUyMHBhY2thZ2VzJTIwb25saW5lJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzY0NDE1Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
        imageUrl="https://images.unsplash.com/photo-1671427478482-2968e71a6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHxvZ2lzdGljcyUyMHdhcmVob3VzZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2NDQxNTM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Retail"
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
