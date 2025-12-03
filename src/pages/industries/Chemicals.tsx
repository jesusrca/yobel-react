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
    title: "Almacenamiento Especializado",
    description: "Instalaciones con áreas segregadas, ventilación controlada y cumplimiento de normativas nacionales e internacionales para sustancias químicas.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Transporte Seguro",
    description: "Rutas planificadas y vehículos habilitados para transporte de sustancias controladas y materiales peligrosos con monitoreo GPS.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Valor Agregado (VAS)",
    description: "Reenvasado, etiquetado regulatorio, kitting industrial y reacondicionado de productos con control estricto por lote.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Gestión Documental",
    description: "Control exhaustivo de permisos, fichas de seguridad (MSDS) y documentación de transporte para evitar contingencias.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Coordinación integral de importaciones y exportaciones bajo normativas químicas, ambientales y aduaneras específicas.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Distribución de químicos", fullDesc: "Transporte seguro y monitoreado de insumos a plantas industriales." },
  { id: "02", title: "Almacenamiento segregado", fullDesc: "Áreas diferenciadas por tipo de sustancia y compatibilidad química." },
  { id: "03", title: "Re-etiquetado regulatorio", fullDesc: "Adaptación de etiquetas según país de destino o cliente final." },
  { id: "04", title: "Kitting técnico", fullDesc: "Preparación de productos químicos para laboratorios o procesos industriales." },
  { id: "05", title: "Gestión de importaciones", fullDesc: "Coordinación de sustancias controladas y materias primas químicas." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas." },
  { highlight: "Trazabilidad total", normal: "por lote y producto." },
  { highlight: "Lead time optimizado", normal: "para importación y distribución." },
  { highlight: "Cero incidentes operativos", normal: "bajo gestión HSE." }
];

const benefits = [
  "Cumplimiento normativo en toda la cadena de suministro.",
  "Trazabilidad total por lote, producto y ubicación.",
  "Gestión de riesgos bajo estándares HSE.",
  "Optimización de costos logísticos y tiempos de entrega.",
  "Cumplimiento OTIF 99.6% en entregas industriales."
];

export function Chemicals() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Industria Química"
          description="Operamos con seguridad, control normativo y trazabilidad total en cada proceso."
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
                   En Yobel SCM gestionamos la logística de productos químicos bajo normativas HSE rigurosas. Contamos con infraestructura especializada, transporte habilitado y controles que aseguran la seguridad en cada etapa de la cadena.
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
            title="Seguridad, cumplimiento y control"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
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
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWwlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDQxNTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Industria Química"
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
