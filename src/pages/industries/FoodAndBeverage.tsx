import React, { useState, useRef } from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { ChevronRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { ScrollRevealText } from "../../components/ui/motion-text";
import { Certificates } from "../../components/landing/Certificates";
import { ResultsGrid } from "../../components/ui/ResultsGrid";
import { SolutionsShowcase } from "../../components/ui/SolutionsShowcase";
import { InteractiveList } from "../../components/ui/InteractiveList";
import { HeroGradientTall } from "../../components/ui/hero-gradient-tall";
import { ScrollGradientTransition } from "../../components/ui/scroll-gradient-transition";
import { BenefitsSection } from "../../components/landing/BenefitsSection";
import { MaskedFullWidthImage } from "../../components/ui/MaskedFullWidthImage";

// SVG Paths (Reused)
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

const solutions = [
  {
    id: "01",
    title: "Manufactura",
    description: "Procesamos, envasamos y reacondicionamos productos alimenticios y bebidas bajo control sanitario, cumpliendo normas de inocuidad y trazabilidad por lote.",
    image: "https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjBwcm9kdWN0aW9uJTIwbGluZSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjQ0MTI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    title: "Almacenamiento Frío",
    description: "Contamos con zonas de refrigeración, cuarentena sanitaria y WMS avanzado para monitoreo en tiempo real de la cadena de frío.",
    image: "https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjBwcm9kdWN0aW9uJTIwbGluZSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjQ0MTI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "03",
    title: "Valor Agregado (VAS)",
    description: "Servicios de reempaque, etiquetado nutricional, armado de packs y promociones con control por lote y auditoría.",
    image: "https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjBwcm9kdWN0aW9uJTIwbGluZSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjQ0MTI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "04",
    title: "Distribución",
    description: "Rutas optimizadas para productos perecibles, con entregas programadas B2B y B2C en todo el país, asegurando la integridad del producto.",
    image: "https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjBwcm9kdWN0aW9uJTIwbGluZSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjQ0MTI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "05",
    title: "Comercio Exterior",
    description: "Gestión integral de importación/exportación, trámites aduaneros y nacionalización de materias primas y productos terminados.",
    image: "https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjBwcm9kdWN0aW9uJTIwbGluZSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjQ0MTI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const useCases = [
  { id: "01", title: "Lanzamientos estacionales", fullDesc: "Kitting y distribución nacional para nuevas líneas o promociones." },
  { id: "02", title: "Re-etiquetado sanitario", fullDesc: "Adaptación de etiquetas según normativa local o por canal." },
  { id: "03", title: "Promociones y packs", fullDesc: "Armado de combos con control por lote y tiempo de vigencia." },
  { id: "04", title: "Reabastecimiento retail", fullDesc: "Entregas programadas a autoservicios, mayoristas y farmacias." },
  { id: "05", title: "Gestión de devoluciones", fullDesc: "Procesos de control y disposición segura de productos fuera de estándar." }
];

const results = [
  { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas." },
  { highlight: "Disponibilidad por canal", normal: "con reposición continua." },
  { highlight: "Trazabilidad total", normal: "por lote vía WMS." },
  { highlight: "Lead time optimizado", normal: "para mantener frescura y rotación." }
];

const certifications = [
  { title: "BPM y BPA", desc: "Buenas Prácticas de Manufactura y Almacenamiento." },
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." }
];

const benefits = [
  "Cumplimiento sanitario y BPM/BPA.",
  "Reducción de mermas en transporte y almacenamiento.",
  "Control por lote y trazabilidad total 24/7.",
  "Cobertura nacional con OTIF 99.6%.",
  "Flexibilidad ante picos estacionales o promociones."
];

export function FoodAndBeverage() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall 
          category="Industrias"
          title="Soluciones logísticas para Alimentos y Bebidas"
          description="Movemos tu cadena de suministro con seguridad, trazabilidad y cumplimiento sanitario."
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
                   Garantizamos la calidad, inocuidad y frescura de tus productos desde la materia prima hasta el punto de venta. En Yobel integramos manufactura, almacenamiento, transporte y distribución bajo los más altos estándares BPM/BPA.
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
            title="Nos enfocamos en optimizar tiempos y trazabilidad"
            image="https://images.unsplash.com/photo-1578351709091-33ee78a1565d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwc3RvcmFnZSUyMHdhcmVob3VzZSUyMGZvb2QlMjBzYWZldHl8ZW58MXx8fHwxNzY0NDEyNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            imageAlt="Benefits"
            benefits={benefits}
          />
        </Container>
      </Section>

      {/* Full Width Image with Mask */}
      <MaskedFullWidthImage />

      {/* Process / Use Cases Section */}
      <SolutionsShowcase 
        label="Aplicaciones"
        title="Casos de uso típicos"
        solutions={useCases}
        imageUrl="https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjB3YXJlaG91c2UlMjBkaXN0cmlidXRpb258ZW58MXx8fHwxNzY0Nzc2NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Distribución de alimentos y bebidas"
      />

      {/* Results Section */}
      <ResultsGrid 
        label="Resultados"
        title="Indicadores que priorizamos"
        items={results}
      />

      {/* Certifications Section */}
      <Certificates description="Contamos con certificaciones internacionales que garantizan excelencia operativa y seguridad alimentaria." />
    </>
  );
}