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
    title: "Manufactura Cosmética",
    description: "Producción, envasado y reacondicionado de cosméticos, fragancias y artículos de higiene bajo estándares BPM y normativas sanitarias internacionales.",
    image: "assets/industrias/2_bellesa_cui-personal.jpeg"
  },
  {
    id: "02",
    title: "Almacenamiento Regulado",
    description: "Conservación de productos sensibles en entornos con temperatura y humedad controlada, garantizando trazabilidad por lote y fecha de vencimiento.",
    image: "assets/industrias/2_bellesa_cui-personal.jpeg"
  },
  {
    id: "03",
    title: "Distribución Omnicanal",
    description: "Entregas B2B, retail y e-commerce con visibilidad total, seguridad y cumplimiento OTIF 99.6%.",
    image: "assets/industrias/2_bellesa_cui-personal.jpeg"
  },
  {
    id: "04",
    title: "Valor Agregado (VAS)",
    description: "Armado de kits promocionales, etiquetado, codificado y empaques personalizados para lanzamientos o temporadas.",
    image: "assets/industrias/2_bellesa_cui-personal.jpeg"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Coordinación de importaciones de materias primas y exportaciones de productos terminados, asegurando cumplimiento sanitario y aduanero.",
    image: "assets/industrias/2_bellesa_cui-personal.jpeg"
  }
];

const useCases = [
  { id: "01", title: "Lanzamientos de líneas", fullDesc: "Producción, armado y distribución integral de nuevas colecciones." },
  { id: "02", title: "Campañas promocionales", fullDesc: "Kitting y empaques personalizados por temporada (Navidad, Día de la Madre, etc.)." },
  { id: "03", title: "Reposición retail", fullDesc: "Abastecimiento continuo a tiendas, perfumerías y marketplaces." },
  { id: "04", title: "Gestión e-commerce", fullDesc: "Preparación y despacho directo al consumidor final." },
  { id: "05", title: "Reacondicionado sanitario", fullDesc: "Actualización de empaques o etiquetas por regulación o canal." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas B2B y retail." },
  { highlight: "Trazabilidad completa", normal: "desde planta hasta punto de venta." },
  { highlight: "Lead time reducido", normal: "en lanzamientos y reposiciones." },
  { highlight: "Control sanitario continuo", normal: "en todos los procesos BPM." }
];

const benefits = [
  "Cumplimiento de normas BPM y regulaciones sanitarias.",
  "Reducción de tiempos de entrega mediante procesos integrados.",
  "Control total de inventario y trazabilidad por lote o SKU.",
  "Flexibilidad para campañas, temporadas o lanzamientos.",
  "Entrega garantizada con OTIF 99.6%."
];

export function Beauty() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Cosmética y Cuidado Personal"
          description="Impulsamos marcas de belleza con manufactura, logística y distribución seguras, eficientes y 100% trazables."
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
                   En Yobel gestionamos la cadena de suministro de cosméticos, fragancias y cuidado personal. Integramos manufactura, almacenamiento y distribución con tecnología avanzada y cumplimiento de normas BPM.
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
            title="Calidad, trazabilidad y eficiencia operativa"
            image="assets/industrias/2_bellesa_cui-personal.jpeg"
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
        imageUrl="assets/industrias/2_bellesa_cui-personal.jpeg"
        imageAlt="Cosmética y Cuidado Personal"
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
      <Certificates description="Operamos bajo certificaciones internacionales que aseguran la calidad, seguridad y sostenibilidad en toda la cadena de suministro." />
    </>
  );
}
