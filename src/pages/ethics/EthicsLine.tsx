import React from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { HeroGradient } from "../../components/ui/hero-gradient";

export function EthicsLine() {
  return (
    <>
      <HeroGradient 
        category="Integridad"
        title="Línea de Ética"
        description="Un canal seguro, confidencial y anónimo para reportar preocupaciones éticas."
        variant="yellow"
      />

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-8 items-start">
            <div className="w-full flex justify-between items-center flex-wrap gap-4">
              
              <a href="/ethics/report">
                <Button className="font-augenblick bg-transparent border-[1.5px] border-black text-black px-8 py-6 rounded-full text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out gap-3 font-[Neue_Augenblick]">
                  <ArrowUpRight className="w-5 h-5" />
                  Ir al Canal de Denuncias
                </Button>
              </a>
            </div>

            <div className="w-full p-8 md:p-12 font-[Neue_Augenblick]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                 <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 mb-2">
                       <ShieldAlert className="w-8 h-8 text-black" />
                       <h3 className="text-3xl font-normal text-black">¿Qué reportar?</h3>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                       Este canal está diseñado para recibir reportes sobre conductas que violen nuestro Código de Ética, incluyendo pero no limitado a:
                    </p>
                    <ul className="space-y-3">
                       {[
                         "Fraude, soborno o corrupción",
                         "Conflictos de interés no declarados",
                         "Acoso laboral o sexual",
                         "Discriminación de cualquier tipo",
                         "Mal uso de activos o información confidencial",
                         "Incumplimiento de normas de seguridad y medio ambiente"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-lg text-gray-800">
                            <div className="w-1.5 h-1.5 bg-black rounded-full" />
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>

                 <div className="flex flex-col gap-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-2xl font-normal text-black">Nuestras Garantías</h3>
                    <div className="flex flex-col gap-4">
                       <div className="pb-4 border-b border-gray-100">
                          <h4 className="font-bold text-lg mb-1">Confidencialidad</h4>
                          <p className="text-gray-600">Toda la información es tratada con estricta reserva.</p>
                       </div>
                       <div className="pb-4 border-b border-gray-100">
                          <h4 className="font-bold text-lg mb-1">Anonimato</h4>
                          <p className="text-gray-600">Puedes elegir no revelar tu identidad si así lo deseas.</p>
                       </div>
                       <div className="pb-4 border-b border-gray-100">
                          <h4 className="font-bold text-lg mb-1">No Represalias</h4>
                          <p className="text-gray-600">Garantizamos protección contra cualquier tipo de represalia por reportar de buena fe.</p>
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Gestión Independiente</h4>
                          <p className="text-gray-600">La plataforma es administrada por Resguarda, un tercero independiente.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-12 p-6 bg-[#fff066]/20 border border-[#fff066] rounded-xl">
                 <p className="text-black/80 text-lg">
                    <span className="font-bold">Importante:</span> Este canal no sustituye a los servicios de emergencia. Si enfrentas una situación de riesgo inminente para la vida o la seguridad, contacta a los servicios de emergencia locales o al área de HSE de inmediato.
                 </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
                 <h4 className="font-bold text-xl mb-4 text-black">Contacto de Emergencia</h4>
                 <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                       <p className="text-sm text-gray-600 mb-1">Teléfono de Emergencia</p>
                       <a href="tel:+51987654321" className="text-2xl font-medium text-black hover:text-[#59c1e6] transition-colors">
                          +51 987 654 321
                       </a>
                    </div>
                    <div className="flex-1">
                       <p className="text-sm text-gray-600 mb-1">Correo Electrónico</p>
                       <a href="mailto:etica@yobel.com.pe" className="text-2xl font-medium text-black hover:text-[#59c1e6] transition-colors break-all">
                          etica@yobel.com.pe
                       </a>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}