import React from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Phrase } from "../../components/company/Phrase";
import { VideoScrollSection } from "../../components/company/VideoScrollSection";
import { ContactModal } from "../../components/company/ContactModal";

const locations = [
  "Lima – Sede principal San Genaro",
  "Lima – Lurín",
  "Lima – San Andrés, Los Olivos",
  "Lima – Huachipa",
  "Lima – Oficina principal, Surco"
];

const stats = [
  { value: "+250,000 m2", label: "de capacidad logística", sub: "1-5" },
  { value: "+800", label: "vehículos", sub: "2-5" },
  { value: "+70M", label: "de productos terminados", sub: "3-5" },
  { value: "+980,000", label: "pedidos gestionados al año", sub: "4-5" },
  { value: "+440,000", label: "destinos atendidos", sub: "5-5" }
];

export function GlobalPresence() {
  return (
    <>
      {/* HERO SECTION WITH VIDEO */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden font-augenblick">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://circular.ws/yobel/gris-desktop.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white via-gray-200/40 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-medium">Presencia Global</p>
             <div className="flex flex-col lg:flex-row items-start gap-[40px]">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[800px] tracking-tight">
                  Conectamos tu cadena de suministro desde Perú hacia 9 países de Latinoamérica
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black/80 max-w-[400px] pt-2 font-light">
                   Operamos con conexión directa a puertos, aeropuertos y redes logísticas nacionales.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Phrase />

      <VideoScrollSection data={stats} />

      <Section className="bg-white">
        <Container>
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
              <div className="lg:w-1/2 flex flex-col gap-12">
                 <div>
                   <h2 className="text-4xl md:text-5xl font-augenblick font-normal mb-6 leading-tight text-black">
                     Encuentra nuestros centros logísticos y oficinas
                   </h2>
                   <p className="text-lg text-gray-500 font-light max-w-md">
                     Estamos estratégicamente ubicados para optimizar tu cadena de suministro.
                   </p>
                 </div>
                 
                 <div className="bg-gray-50 border border-gray-100 p-8 rounded-[30px]">
                    <h3 className="text-xl font-medium mb-6 text-black font-augenblick">Nuestras Sedes</h3>
                    <ul className="grid gap-4">
                       {locations.map((loc, idx) => (
                          <li key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                             <div className="w-10 h-10 rounded-full bg-[#fff066]/20 flex items-center justify-center shrink-0 text-[#d9cc55]">
                               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                               </svg>
                             </div>
                             <span className="text-gray-800 font-medium">{loc}</span>
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="bg-black text-white p-10 rounded-[30px] flex flex-col items-start justify-between gap-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-augenblick font-medium mb-3">¿Necesitas más información?</h3>
                      <p className="text-white/70 font-light leading-relaxed max-w-sm">
                        Ponte en contacto con nuestro equipo comercial para diseñar una solución a tu medida.
                      </p>
                    </div>
                    
                    <div className="relative z-10 w-full">
                      <ContactModal 
                        trigger={
                          <Button className="w-full bg-[#fff066] hover:bg-[#ffeebb] text-black font-bold py-6 rounded-xl transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,240,102,0.3)] hover:shadow-[0_0_30px_rgba(255,240,102,0.5)]">
                            Contactar ahora
                          </Button>
                        }
                      />
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-1/2 min-h-[500px] lg:min-h-auto bg-gray-100 rounded-[40px] overflow-hidden relative shadow-2xl border border-gray-200">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.736222823887!2d-77.0317626851866!3d-12.130543391411587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7de2713735f%3A0x35f0c1461e2e00b0!2sYobel%20Supply%20Chain%20Management!5e0!3m2!1sen!2spe!4v1620000000000!5m2!1sen!2spe" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy"
                   className="absolute inset-0 w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                 />
              </div>
           </div>
        </Container>
      </Section>
    </>
  );
}
