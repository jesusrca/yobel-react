import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1559134199-bad2930093e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXBvcnRpbmclMjBob3RsaW5lJTIwZXRoaWNzJTIwY2FsbCUyMGNlbnRlcnxlbnwxfHx8fDE3NjQxOTUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function EthicsLine() {
  return (
    <>
      <PageHero 
        title="Línea de Ética"
        description="Reporta una preocupación con confianza."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mx-auto text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-normal mb-8">Canal confidencial</h2>
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light">
                 Este canal es confidencial, permite reportes anónimos y prohíbe cualquier represalia por denuncias hechas de buena fe. 
               </p>
               <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-[20px] mb-16 inline-block text-left max-w-2xl">
                  <p className="text-yellow-800 font-bold text-lg mb-2">⚠️ Importante</p>
                  <p className="text-yellow-700 text-base">No uses este formulario para emergencias (accidentes o riesgos inmediatos): comunícate con los canales HSE.</p>
               </div>
               
               <div>
                  <Button className="bg-red-600 text-white px-16 py-6 rounded-full text-2xl font-bold hover:bg-red-700 shadow-xl transform transition hover:scale-105">
                    Crear reporte
                  </Button>
               </div>
            </div>
         </Container>
      </Section>
    </>
  );
}
