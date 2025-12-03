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
    title: "Manufactura Farmacéutica",
    description: "Producimos, envasamos y reacondicionamos medicamentos y productos sanitarios cumpliendo estrictos estándares regulatorios nacionales e internacionales.",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5JTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0NDE1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Almacenamiento Regulado",
    description: "Operamos con temperatura controlada, áreas segregadas y cuarentena sanitaria para garantizar la inocuidad y el cumplimiento normativo.",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5JTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0NDE1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Distribución Sanitaria",
    description: "Entregas a droguerías, hospitales, clínicas y puntos de venta con visibilidad en tiempo real y control estricto por lote.",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5JTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0NDE1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Valor Agregado (VAS)",
    description: "Etiquetado sanitario, codificación, armado de kits hospitalarios y empaques promocionales con validación regulatoria.",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5JTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0NDE1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Gestión aduanera y transporte internacional de materias primas, insumos activos y productos terminados bajo normativa sanitaria.",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5JTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0NDE1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Lanzamientos farmacéuticos", fullDesc: "Distribución nacional y regional de nuevas líneas con control de fecha de vigencia." },
  { id: "02", title: "Acondicionamiento secundario", fullDesc: "Etiquetado, codificado o empaquetado final según requerimientos del país de destino." },
  { id: "03", title: "Re-etiquetado sanitario", fullDesc: "Adaptación regulatoria ágil por canal o mercado específico." },
  { id: "04", title: "Distribución hospitalaria", fullDesc: "Entrega directa y prioritaria a clínicas, farmacias y hospitales." },
  { id: "05", title: "Logística inversa", fullDesc: "Retiro, control y disposición segura de productos fuera de estándar o vencidos." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas farmacéuticas." },
  { highlight: "Temperatura monitoreada", normal: "en tiempo real." },
  { highlight: "Trazabilidad 100% validada", normal: "por lote y cliente." },
  { highlight: "Lead time reducido", normal: "en lanzamientos y reabastecimientos." }
];

const benefits = [
  "Cumplimiento estricto de BPM/BPA y DIGEMID.",
  "Cadena de frío certificada para productos sensibles.",
  "Trazabilidad total por lote en tiempo real.",
  "Segregación por tipo de producto y área sanitaria.",
  "Cobertura nacional con OTIF 99.6%."
];

export function Pharma() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para la industria Farmacéutica"
          description="Garantizamos la integridad de tus productos con control sanitario y trazabilidad total."
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
                   En Yobel SCM diseñamos soluciones integradas para laboratorios y distribuidoras de salud. Gestionamos medicamentos e insumos bajo normas BPM y BPA, con cadena de frío certificada y procesos trazables.
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
            title="Cumplimiento, trazabilidad y eficiencia"
            image="https://images.unsplash.com/photo-1608243499710-5ebece89a37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwY2hhaW4lMjBsb2dpc3RpY3MlMjB2YWNjaW5lfGVufDF8fHx8MTc2NDQxNTI1NHww&ixlib=rb-4.1.0&q=80&w=1080"
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
        imageUrl="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5JTIwbWVkaWNpbmV8ZW58MXx8fHwxNzY0NDE1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Industria Farmacéutica"
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
      <Certificates description="Respaldamos cada operación con certificaciones internacionales y habilitaciones regulatorias." />
    </>
  );
}
