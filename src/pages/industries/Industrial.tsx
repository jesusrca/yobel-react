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
    title: "Abastecimiento In-House",
    description: "Operamos directamente dentro de tus plantas o centros productivos para garantizar un flujo continuo de materiales y componentes.",
    image: "@/assets/industrias/8_manu-industrial.jpeg"
  },
  {
    id: "02",
    title: "Almacenamiento Industrial",
    description: "Gestión avanzada de inventarios con WMS, control por lote, peso, dimensiones o tipo de material.",
    image: "@/assets/industrias/8_manu-industrial.jpeg"
  },
  {
    id: "03",
    title: "Transporte Especializado",
    description: "Rutas planificadas para abastecimiento B2B, distribución nacional o exportación de productos terminados.",
    image: "@/assets/industrias/8_manu-industrial.jpeg"
  },
  {
    id: "04",
    title: "Valor Agregado (VAS)",
    description: "Kitting, armado de sets industriales, empaques técnicos y reacondicionado de piezas o repuestos.",
    image: "@/assets/industrias/8_manu-industrial.jpeg"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Coordinación integral de importaciones y exportaciones de maquinaria, materias primas y productos industriales.",
    image: "@/assets/industrias/8_manu-industrial.jpeg"
  }
];

const useCases = [
  { id: "01", title: "Abastecimiento de línea", fullDesc: "Flujo continuo de componentes en planta." },
  { id: "02", title: "Gestión de repuestos", fullDesc: "Control y despacho rápido de piezas críticas." },
  { id: "03", title: "Kitting de ensamblaje", fullDesc: "Preparación de kits de componentes por orden de producción." },
  { id: "04", title: "Reacondicionado", fullDesc: "Ajustes de presentación o empaques técnicos." },
  { id: "05", title: "Exportaciones industriales", fullDesc: "Coordinación logística de maquinaria o piezas." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas industriales." },
  { highlight: "Lead time reducido hasta 25%", normal: "en abastecimientos internos." },
  { highlight: "Inventario visible 100%", normal: "en tiempo real vía WMS." },
  { highlight: "Optimización de espacio", normal: "en planta y centros logísticos." }
];

const benefits = [
  "Abastecimiento continuo para evitar interrupciones de línea.",
  "Trazabilidad total de insumos y productos terminados.",
  "Integración con sistemas ERP o MES del cliente.",
  "Reducción de tiempos muertos y sobrecostos logísticos.",
  "Cumplimiento OTIF 99.6% en entregas industriales."
];

export function Industrial() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para la industria manufacturera"
          description="Impulsamos la productividad de tu planta con procesos integrados y suministro continuo."
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
                   En Yobel diseñamos soluciones logísticas integrales para empresas manufactureras e industriales. Conectamos el flujo de materias primas, componentes y productos terminados mediante almacenamiento, transporte, distribución y servicios de valor agregado.
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
            title="Eficiencia, control y seguridad operativa"
            image="@/assets/industrias/8_manu-industrial.jpeg"
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
        imageUrl="@/assets/industrias/8_manu-industrial.jpeg"
        imageAlt="Industria Manufacturera"
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
      <Certificates description="En Yobel, garantizamos calidad, seguridad y eficiencia industrial bajo certificaciones internacionales que respaldan cada proceso de la cadena productiva." />
    </>
  );
}