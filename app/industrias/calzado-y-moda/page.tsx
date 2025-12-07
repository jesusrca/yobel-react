"use client";
import React, { useState, useRef } from "react";
import { Section } from "/components/ui/custom-section";
import { Container } from "/components/ui/custom-container";
import { Button } from "/components/ui/button";
import { Certificates } from "/components/landing/Certificates";
import { ResultsGrid } from "/components/ui/ResultsGrid";
import { SolutionsShowcase } from "/components/ui/SolutionsShowcase";
import { InteractiveList } from "/components/ui/InteractiveList";
import { HeroGradientTall } from "/components/ui/hero-gradient-tall";
import { ScrollGradientTransition } from "/components/ui/scroll-gradient-transition";
import { BenefitsSection } from "/components/landing/BenefitsSection";
import { MaskedFullWidthImage } from "/components/ui/MaskedFullWidthImage";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Almacenamiento Textil",
    description: "Manejo cuidadoso de prendas, calzado y accesorios con clasificación por talla, color, temporada y canal, asegurando la integridad de cada pieza.",
    image: "assets/industrias/3_calzado-moda.jpeg"
  },
  {
    id: "02",
    title: "Distribución Omnicanal",
    description: "Entregas a tiendas, marketplaces y consumidores finales con trazabilidad total y cumplimiento OTIF 99.6%.",
    image: "assets/industrias/3_calzado-moda.jpeg"
  },
  {
    id: "03",
    title: "Valor Agregado (VAS)",
    description: "Planchado, etiquetado, armado de combos, empaques promocionales y personalización por punto de venta.",
    image: "assets/industrias/3_calzado-moda.jpeg"
  },
  {
    id: "04",
    title: "Logística Inversa",
    description: "Gestión de devoluciones, control de calidad, reacondicionado y reempaque para reventa o liquidación eficiente.",
    image: "assets/industrias/3_calzado-moda.jpeg"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Coordinación de importación y exportación de textiles y accesorios, cumpliendo regulaciones y tiempos de temporada.",
    image: "assets/industrias/3_calzado-moda.jpeg"
  }
];

const useCases = [
  { id: "01", title: "Lanzamientos de temporada", fullDesc: "Distribución sincronizada a tiendas y canales online para asegurar disponibilidad inmediata." },
  { id: "02", title: "Reposición automática", fullDesc: "Integración con ERP o plataformas retail para mantener el stock óptimo." },
  { id: "03", title: "Empaques promocionales", fullDesc: "Armado de sets o cajas especiales por colección para campañas específicas." },
  { id: "04", title: "Gestión de devoluciones", fullDesc: "Logística inversa con reacondicionado y control de calidad riguroso." },
  { id: "05", title: "Exportación textil", fullDesc: "Coordinación logística integral para llegar a mercados regionales." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas retail y online." },
  { highlight: "Lead time reducido hasta 25%", normal: "en lanzamientos." },
  { highlight: "Inventario 100% trazable", normal: "por SKU y canal." },
  { highlight: "Optimización de almacenamiento", normal: "y rotación de stock." }
];

const benefits = [
  "Reducción de lead time en lanzamientos y reposiciones.",
  "Control por SKU, talla y color en tiempo real.",
  "Flexibilidad operativa ante cambios de temporada.",
  "Integración con plataformas retail y e-commerce.",
  "Cumplimiento OTIF 99.6% en entregas nacionales."
];

export default function Fashion() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Moda y Textil"
          description="Movemos tu colección desde el diseño hasta el punto de venta con precisión y trazabilidad."
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
                   En Yobel gestionamos la logística de marcas de moda y textiles con tecnología avanzada. Desde el almacenamiento clasificado por SKU hasta la distribución omnicanal, aseguramos la integridad de cada prenda en toda la cadena.
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
            title="Agilidad, trazabilidad y flexibilidad"
            image="assets/industrias/3_calzado-moda.jpeg"
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
        imageUrl="assets/industrias/3_calzado-moda.jpeg"
        imageAlt="Moda y Textil"
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