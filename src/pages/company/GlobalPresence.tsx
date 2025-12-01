import React, { useState } from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Phrase } from "../../components/company/Phrase";
import { VideoScrollSection } from "../../components/company/VideoScrollSection";
import { ContactModal } from "../../components/company/ContactModal";
import { LatinAmericaMap } from "../../components/company/LatinAmericaMap";
import { MapPin } from "lucide-react";

const locationsData: Record<string, string[]> = {
  peru: [
    "Lima – Sede principal San Genaro",
    "Lima – Lurín",
    "Lima – San Andrés, Los Olivos",
    "Lima – Huachipa",
    "Lima – Oficina principal, Surco"
  ],
  colombia: [
    "Bogotá – Oficina Comercial",
    "Bogotá – Centro de Distribución Funza",
    "Medellín – Operaciones Logísticas"
  ],
  ecuador: [
    "Quito – Oficina Principal",
    "Guayaquil – Centro de Distribución"
  ],
  chile: [
    "Santiago – Centro Logístico Pudahuel",
    "Santiago – Oficinas Corporativas"
  ],
  argentina: [
    "Buenos Aires – Oficina Comercial",
    "Buenos Aires – Centro Logístico"
  ],
  uruguay: [
    "Montevideo – Centro de Distribución",
    "Montevideo – Zona Franca"
  ]
};

const stats = [
  { value: "+250,000 m2", label: "de capacidad logística", sub: "1-5" },
  { value: "+800", label: "vehículos", sub: "2-5" },
  { value: "+70M", label: "de productos terminados", sub: "3-5" },
  { value: "+980,000", label: "pedidos gestionados al año", sub: "4-5" },
  { value: "+440,000", label: "destinos atendidos", sub: "5-5" }
];

export function GlobalPresence() {
  const [selectedCountry, setSelectedCountry] = useState<string>("peru");

  const currentLocations = locationsData[selectedCountry] || locationsData["peru"];
  const countryName = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1).replace("peru", "Perú");

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
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-20">
              {/* Left Column: Info & List */}
              <div className="lg:w-1/2 flex flex-col gap-12">
                 <div>
                   <h2 className="text-4xl md:text-5xl font-augenblick font-normal mb-6 leading-tight text-black">
                     Encuentra nuestros centros logísticos y oficinas
                   </h2>
                   <p className="text-lg text-gray-500 font-light max-w-md">
                     Selecciona un país en el mapa para ver nuestras sedes locales.
                   </p>
                 </div>
                 
                 <div className="bg-gray-50 border border-gray-100 p-8 rounded-[30px] min-h-[300px] transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-medium text-black font-augenblick">
                            Sedes en <span className="text-yellow-600 capitalize">{countryName === "Peru" ? "Perú" : countryName}</span>
                        </h3>
                        <span className="text-sm bg-black/5 px-3 py-1 rounded-full text-gray-500">
                            {currentLocations.length} ubicaciones
                        </span>
                    </div>
                    
                    {/* Updated to Grid for 2 columns as requested */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500" key={selectedCountry}>
                       {currentLocations.map((loc, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                             <div className="w-8 h-8 rounded-full bg-[#fff066]/20 flex items-center justify-center shrink-0 text-[#d9cc55] mt-0.5">
                               <MapPin className="w-4 h-4" />
                             </div>
                             <span className="text-gray-800 font-medium text-sm leading-tight">{loc}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
              
              {/* Right Column: SVG Map */}
              <div className="lg:w-1/2 min-h-[500px] flex items-center justify-center bg-gray-50/50 rounded-[40px] border border-gray-100 p-8 md:p-12">
                 <LatinAmericaMap 
                    onSelect={(country) => setSelectedCountry(country)}
                    selected={selectedCountry}
                    className="w-full max-w-[500px] mx-auto"
                 />
              </div>
           </div>

           {/* CTA Block - Moved to bottom and full width */}
           <div className="bg-black text-white p-10 md:p-12 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-augenblick font-medium mb-4">¿Necesitas más información?</h3>
                <p className="text-white/70 font-light leading-relaxed text-lg">
                  Ponte en contacto con nuestro equipo comercial para diseñar una solución a tu medida.
                </p>
              </div>
              
              <div className="relative z-10 w-full md:w-auto shrink-0">
                <ContactModal 
                  trigger={
                    <Button className="w-full md:w-auto px-8 bg-[#fff066] hover:bg-[#ffeebb] text-black font-bold py-6 rounded-xl transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,240,102,0.3)] hover:shadow-[0_0_30px_rgba(255,240,102,0.5)]">
                      Contactar ahora
                    </Button>
                  }
                />
              </div>
           </div>
        </Container>
      </Section>
    </>
  );
}
