import React from "react";
import { HeroGradient } from "/components/ui/hero-gradient";
import { OptimizedReportForm } from "/components/ethics/OptimizedReportForm";

export default function ReportForm() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroGradient
        category="Línea de Ética"
        title="Reporta una preocupación con confianza"
        description="Este canal es confidencial, permite reportes anónimos y prohíbe cualquier represalia por denuncias hechas de buena fe."
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