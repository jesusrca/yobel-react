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
import { industrialContent } from "/data/industryContent";

// SVG Paths
const svgPaths = {
  pff39b00: "M0 45.9994V30.6785C0 30.6785 36.2411 15.2325 36.2411 8.71527C36.2411 4.64101 0 15.0514 0 15.0514V0H35.0771C49.2263 0 47.9715 7.45669 47.9715 14.9269V46H24.4355C24.4355 46 40.1752 20.8884 36.2411 20.8884C30.4859 20.8884 0 45.9994 0 45.9994Z",
};

export default function Industrial() {
  const [activeSolution, setActiveSolution] = useState<string | null>("01");
  const containerRef = useRef(null);

  return (
    <>
      <ScrollGradientTransition>
        {/* Hero Section */}
        <HeroGradientTall
          category={industrialContent.category}
          title={industrialContent.title}
          description={industrialContent.description}
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
                    {industrialContent.introText}
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
      <InteractiveList items={industrialContent.solutions} title={industrialContent.solutionsTitle} />

      {/* Benefits Section */}
      <Section className="bg-white py-20">
        <Container>
          <BenefitsSection
            title={industrialContent.benefitsTitle}
            image={industrialContent.benefitsImage}
            imageAlt={industrialContent.benefitsImageAlt}
            benefits={industrialContent.benefits.map(b => b.text)}
          />
        </Container>
      </Section>

      {/* Process / Use Cases Section */}
      <SolutionsShowcase
        label={industrialContent.useCasesLabel}
        title={industrialContent.useCasesTitle}
        solutions={industrialContent.useCases}
        imageUrl={industrialContent.benefitsImage}
        imageAlt="Industria Manufacturera"
      />

      {/* Full Width Image with Mask */}
      <MaskedFullWidthImage />

      {/* Results Section */}
      <ResultsGrid
        label={industrialContent.resultsLabel}
        title={industrialContent.resultsTitle}
        items={industrialContent.results}
      />

      {/* Certifications Section */}
      <Certificates description="En Yobel, garantizamos calidad, seguridad y eficiencia industrial bajo certificaciones internacionales que respaldan cada proceso de la cadena productiva." />
    </>
  );
}