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
    title: "Almacenamiento Seguro",
    description: "Infraestructura con sistemas de acceso restringido, monitoreo 24/7 y control estricto de humedad y temperatura para componentes sensibles.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Distribución Tecnológica",
    description: "Abastecimiento a retail, canales corporativos y clientes finales con trazabilidad total y medidas de seguridad reforzadas.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Valor Agregado (VAS)",
    description: "Etiquetado, armado de kits tecnológicos, carga de software, reacondicionado y empaques promocionales personalizados.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Transporte Especializado",
    description: "Unidades equipadas con suspensión neumática y GPS dedicadas al traslado seguro de equipos delicados o de alto valor.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Coordinación integral de importaciones, exportaciones y nacionalización de dispositivos electrónicos para lanzamientos sincronizados.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Lanzamientos tecnológicos", fullDesc: "Distribución nacional sincronizada para asegurar disponibilidad en la fecha clave." },
  { id: "02", title: "Reposición de retail", fullDesc: "Abastecimiento continuo de tiendas y mayoristas según rotación." },
  { id: "03", title: "E-commerce electrónico", fullDesc: "Preparación y despacho de pedidos online con empaque seguro." },
  { id: "04", title: "Kitting corporativo", fullDesc: "Armado de paquetes tecnológicos (laptop + accesorios) para empresas." },
  { id: "05", title: "Transporte de valor", fullDesc: "Traslado seguro con escolta y monitoreo para equipos de alto costo." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas." },
  { highlight: "Cero incidentes", normal: "en transporte de equipos de alto valor." },
  { highlight: "Trazabilidad completa", normal: "por serial, lote o SKU." },
  { highlight: "Lead time optimizado", normal: "para lanzamientos y reposiciones." }
];

const benefits = [
  "Protección integral de equipos y componentes electrónicos.",
  "Trazabilidad en tiempo real en toda la cadena.",
  "Reducción de mermas y riesgos operativos.",
  "Cumplimiento OTIF 99.6% en entregas nacionales.",
  "Gestión flexible ante lanzamientos o picos de demanda."
];

export function Tech() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Tecnología y Electrónica"
          description="Protegemos tus equipos con seguridad, trazabilidad y cumplimiento en cada entrega."
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
                   En Yobel SCM diseñamos cadenas logísticas especializadas para productos tecnológicos y electrónicos. Garantizamos seguridad, condiciones controladas y trazabilidad completa desde el fabricante hasta el usuario final.
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
            title="Seguridad, trazabilidad y eficiencia"
            image="https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
        imageUrl="https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd2FyZWhvdXNlJTIwZGlzdHJpYnV0aW9uJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzY0NDE1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Tecnología y Electrónica"
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
