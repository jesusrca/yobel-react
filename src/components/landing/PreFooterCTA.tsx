import React from "react";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import svgPaths from "../../imports/svg-biijegtt4v";
import { cn } from "../ui/utils";

interface PreFooterCTAProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

/**
 * Reusable CTA block intended to sit above the footer.
 * Accepts custom copy and link while keeping the visual from the provided Figma.
 */
export function PreFooterCTA({
  eyebrow = "¿Listo para avanzar?",
  title,
  description,
  ctaLabel = "Hablemos",
  ctaHref = "#contacto",
  className
}: PreFooterCTAProps) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden bg-black text-white px-0 py-24 sm:py-28 md:py-32",
        className
      )}
    >
      <Container className="relative w-full text-center flex flex-col items-center gap-12 px-[200px]">
        <div className="w-12 h-12 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <svg className="w-8 h-8" viewBox="0 0 48 46" fill="none" aria-hidden="true">
            <path d={svgPaths.pff39b00} fill="#FFE500" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-[Neue_Augenblick] font-normal leading-tight">
          ¿Necesitas más información?
        </h2>

        <p className="text-lg md:text-xl font-light max-w-3xl text-white/85 leading-relaxed">
          Ponte en contacto con nuestro equipo comercial para diseñar una solución a tu medida.
        </p>

        {ctaLabel && (
          <a
            href={ctaHref}
            className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-lg md:text-xl font-medium border border-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {ctaLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </Container>
    </Section>
  );
}
