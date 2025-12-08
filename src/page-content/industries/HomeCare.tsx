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
    title: "Manufactura y acondicionamiento de productos del hogar",
    description: "Producción, envasado y reacondicionado de artículos de limpieza, ambientadores y utensilios, cumpliendo estándares BPM y de seguridad.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Almacenamiento flexible y seguro",
    description: "Gestión de inventarios por cada línea de producto o canal de venta, con WMS y control por lote o fecha de vencimiento.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Distribución nacional e internacional",
    description: "Entregas B2B, retail y e-commerce con trazabilidad total y cumplimiento OTIF 99.6%",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Valor Agregado (VAS)",
    description: "Kitting, armado de packs promocionales, etiquetado y personalización para temporadas o lanzamientos.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio exterior (COMEX)",
    description: "Coordinación de importaciones y exportaciones de materias primas y productos terminados para abastecer mercados regionales.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Campañas promocionales", fullDesc: "Armado y distribución de packs especiales o combos por temporada." },
  { id: "02", title: "Reposición retail", fullDesc: "Abastecimiento continuo a supermercados, tiendas por departamento y marketplaces." },
  { id: "03", title: "Lanzamientos de línea", fullDesc: "Distribución nacional de nuevos productos o versiones mejoradas." },
  { id: "04", title: "Gestión e-commerce", fullDesc: "Preparación y despacho directo al consumidor." },
  { id: "05", title: "Reacondicionado", fullDesc: "Ajustes de empaque, rotulado o formato según canal." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas B2B y B2C." },
  { highlight: "Lead time reducido", normal: "en abastecimientos estacionales." },
  { highlight: "Visibilidad total del inventario", normal: "en tiempo real." },
  { highlight: "Disminución de mermas y sobrestock", normal: "mediante control WMS." }
];

const benefits = [
  "Reducción de costos logísticos mediante integración total de procesos.",
  "Trazabilidad 24/7 desde el origen hasta el punto de venta.",
  "Flexibilidad operativa ante campañas o temporadas.",
  "Control por lote, SKU o canal de distribución.",
  "Entrega confiable con cumplimiento OTIF 99.6%."
];

export function HomeCare() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para la industria del Hogar"
          description="Hacemos que tus productos lleguen a cada hogar con eficiencia, cuidado y puntualidad."
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
                   En Yobel gestionamos la cadena de suministro de productos para el hogar, decoración, limpieza y cuidado del ambiente doméstico. Integramos manufactura, almacenamiento, transporte y distribución con tecnología avanzada y control total de inventario, optimizando tiempos, costos y la experiencia final del consumidor.
                 </p>
                 <div>
                   <Button className="bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl relative overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-[linear-gradient(150deg,#FFF700_0%,#FFF700_32%,#FFE300_70%,#5dd3c0_100%)] before:opacity-0 before:transition-opacity before:duration-500 before:rounded-full hover:before:opacity-100 hover:border-0">
                     <span className="relative z-10">Contactar asesor</span>
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
            title="Nos enfocamos en agilidad, trazabilidad y optimización"
            image="https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
        imageUrl="https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2FyZSUyMHByb2R1Y3RzJTIwd2FyZWhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NDE1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Cuidado del Hogar"
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
      <Certificates description="Operamos bajo certificaciones internacionales y políticas internas que garantizan calidad, seguridad y sostenibilidad en cada proceso logístico." />
    </>
  );
}