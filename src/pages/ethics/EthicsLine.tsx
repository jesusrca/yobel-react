import React from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { HeroGradient } from "../../components/ui/hero-gradient";
import svgPaths from "../../imports/svg-8fprg45iht";
import imgRectangle29 from "figma:asset/0e8ef5b66e816058eb0c8d43e027124cb6461e57.png";

export function EthicsLine() {
  return (
    <>
      <HeroGradient 
        category="Línea de Ética"
        title="Reporta una preocupación con confianza"
        description="Este canal es confidencial, permite reportes anónimos y prohíbe cualquier represalia por denuncias hechas de buena fe. No uses este formulario para emergencias (accidentes o riesgos inmediatos): comunícate con los canales HSE."
        variant="yellow"
      />

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-center">
            <div className="box-border content-stretch flex flex-col gap-[60px] items-center px-[20px] md:px-[50px] py-[60px] md:py-[120px] relative w-full">
              
              {/* Text Section */}
              <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-start relative shrink-0 w-full max-w-[1340px] mx-auto">
                <div className="content-stretch flex flex-col gap-[9px] items-start relative w-full lg:w-1/2">
                  <p className="leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full font-['Neue_Augenblick:Regular',sans-serif]">
                    Nuestro Compromiso con la Integridad
                  </p>
                </div>
                <div className="content-stretch flex gap-[20px] items-start relative w-full lg:w-1/2">
                  <p className="basis-0 grow leading-[38px] lg:leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[28px] md:text-[35px] lg:text-[45px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                    En Yobel, la ética y la transparencia son pilares fundamentales de nuestra cultura.
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-start relative shrink-0 w-full max-w-[1340px] mx-auto">
                {/* Image */}
                <div className="h-[300px] lg:h-[400px] lg:sticky lg:top-24 self-start shrink-0 w-full lg:w-1/2 rounded-[20px] overflow-hidden">
                  <img alt="Camión Yobel" className="block max-w-none size-full object-cover" src={imgRectangle29} />
                </div>

                {/* Items Container */}
                <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full lg:w-1/2">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    
                    {/* First Item - Description */}
                    <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <p className="leading-[24px] not-italic relative shrink-0 text-[18px] lg:text-[22px] text-[rgba(73,73,73,0.5)] w-full font-['Neue_Augenblick:Regular',sans-serif]">
                        En tal sentido, ponemos a disposición de nuestros colaboradores, clientes, proveedores y público en general, nuestro canal de denuncias para reportar en buena fe y de forma segura y confidencial, cualquier conducta que consideren nos ayude a prevenir y combatir:
                      </p>
                    </div>

                    {/* Check Items */}
                    <div className="box-border content-stretch flex gap-[15px] lg:gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <div className="relative shrink-0 size-[32px] lg:size-[40px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <path d={svgPaths.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] lg:text-[22px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                        La corrupción de funcionarios
                      </p>
                    </div>

                    <div className="box-border content-stretch flex gap-[15px] lg:gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <div className="relative shrink-0 size-[32px] lg:size-[40px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <path d={svgPaths.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] lg:text-[22px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                        El lavado de activos
                      </p>
                    </div>

                    <div className="box-border content-stretch flex gap-[15px] lg:gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <div className="relative shrink-0 size-[32px] lg:size-[40px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <path d={svgPaths.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] lg:text-[22px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                        El financiamiento del terrorismo
                      </p>
                    </div>

                    <div className="box-border content-stretch flex gap-[15px] lg:gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <div className="relative shrink-0 size-[32px] lg:size-[40px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <path d={svgPaths.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] lg:text-[22px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                        El tráfico de influencias
                      </p>
                    </div>

                    <div className="box-border content-stretch flex gap-[15px] lg:gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <div className="relative shrink-0 size-[32px] lg:size-[40px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <path d={svgPaths.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] lg:text-[22px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                        Las prácticas que atenten contra la libre competencia
                      </p>
                    </div>

                    <div className="box-border content-stretch flex gap-[15px] lg:gap-[20px] items-start px-0 py-[30px] lg:py-[40px] relative shrink-0 w-full border-b border-[rgba(73,73,73,0.2)]">
                      <div className="relative shrink-0 size-[32px] lg:size-[40px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                          <path d={svgPaths.p148cd180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] lg:text-[22px] text-black font-['Neue_Augenblick:Regular',sans-serif]">
                        Cualquier otra conducta que vulnere nuestro código de ética o políticas de prevención
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <a href="/ethics/report" className="w-full flex justify-center lg:justify-start">
                    <div className="box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[14px] lg:p-[16px] relative rounded-[30px] shrink-0 border-[1.5px] border-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
                      <p className="leading-[24px] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-center text-nowrap whitespace-pre font-['Neue_Augenblick:Regular',sans-serif]">
                        Crear Reporte
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}