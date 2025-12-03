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
    title: "Almacenamiento en Obra",
    description: "Administramos inventarios directamente en obra o en nuestras instalaciones, con tecnología WMS y control de materiales por lote o proyecto.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Distribución Programada",
    description: "Planificamos rutas y entregas según cronograma de obra, evitando demoras y sobrecostos logísticos innecesarios.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Courier Técnico",
    description: "Entregas urgentes de muestras, planos o piezas críticas con trazabilidad en tiempo real para no detener la operación.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Valor Agregado (VAS)",
    description: "Kitting y armado de kits de instalación o mantenimiento listos para uso inmediato en el punto de montaje.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Coordinamos importación y despacho de maquinaria, insumos y materiales especializados desde cualquier parte del mundo.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Abastecimiento por fases", fullDesc: "Entregas programadas de materiales estrictamente según el avance de la obra." },
  { id: "02", title: "Repuestos críticos", fullDesc: "Servicio de courier urgente con trazabilidad total para maquinaria detenida." },
  { id: "03", title: "Control de herramientas", fullDesc: "Registro, monitoreo y rotación eficiente de activos en campo." },
  { id: "04", title: "Kits de instalación", fullDesc: "Armado y envío de componentes agrupados por lote o punto de montaje." },
  { id: "05", title: "Gestión de importaciones", fullDesc: "Coordinación logística integral de maquinaria o insumos especializados." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas a obra." },
  { highlight: "Trazabilidad total", normal: "del inventario y activos." },
  { highlight: "Lead time reducido hasta 30%", normal: "por proyecto." },
  { highlight: "Disponibilidad asegurada", normal: "por fase o requerimiento." }
];

const benefits = [
  "Reducción de tiempos muertos por falta de materiales.",
  "Control y visibilidad del inventario por proyecto o etapa.",
  "Rutas optimizadas para entregas programadas.",
  "Cumplimiento OTIF 99.6% en despachos.",
  "Integración con sistemas ERP o plataformas del cliente."
];

export function Construction() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Construcción e Infraestructura"
          description="Movemos materiales y equipos con precisión, puntualidad y control por proyecto."
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
                   En Yobel SCM coordinamos la logística de proyectos constructivos con entregas programadas, courier técnico y control en tiempo real. Garantizamos disponibilidad de materiales, herramientas y equipos según el cronograma de obra.
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
            title="Disponibilidad, control y eficiencia"
            image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
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
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjB3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTczMnww&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Construcción e Infraestructura"
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
