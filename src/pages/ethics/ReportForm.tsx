import React from "react";
import { HeroGradient } from "../../components/ui/hero-gradient";
import { OptimizedReportForm } from "../../components/ethics/OptimizedReportForm";

export function ReportForm() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroGradient 
        category="Línea de Ética"
        title="Reporta una preocupación con confianza"
        variant="gray"
      />

      <div className="bg-white w-full overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto">
          <OptimizedReportForm />
        </div>
      </div>
    </div>
  );
}