import React, { useState, useRef } from "react";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Phrase } from "../../components/company/Phrase";
import { VideoScrollSection } from "../../components/company/VideoScrollSection";
import { ContactModal } from "../../components/company/ContactModal";
import { LatinAmericaMap } from "../../components/company/LatinAmericaMap";
import { ScrollRevealString } from "../../components/ui/scroll-reveal-text";
import { LocationCard } from "../../components/company/LocationCard";
import { CountryTimeHeader } from "../../components/company/CountryTimeHeader";
import { MapPin, ChevronDown } from "lucide-react";

interface Location {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  timezone: string;
}

const locationsData: Record<string, Location[]> = {
  peru: [
    {
      city: "Lima",
      country: "Perú",
      email: "lima@yobel.com.pe",
      phone: "+51 1 618 5400",
      address: "Av. Argentina 2833, San Genaro, Lima 15109, Perú",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    },
    {
      city: "Lima - Lurín",
      country: "Perú",
      email: "lurin@yobel.com.pe",
      phone: "+51 1 618 5400",
      address: "Km. 40 Panamericana Sur, Lurín, Lima, Perú",
      imageUrl: "https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NjY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    },
    {
      city: "Lima - Los Olivos",
      country: "Perú",
      email: "losolivos@yobel.com.pe",
      phone: "+51 1 618 5400",
      address: "Av. San Andrés, Los Olivos, Lima, Perú",
      imageUrl: "https://images.unsplash.com/photo-1717662292789-e97dfb7d3c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjZW50ZXIlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ2NjY3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    }
  ],
  colombia: [
    {
      city: "Bogotá",
      country: "Colombia",
      email: "bogota@yobel.com.co",
      phone: "+57 1 423 7000",
      address: "Calle 100 #19A-91, Bogotá, Colombia",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Bogota"
    },
    {
      city: "Medellín",
      country: "Colombia",
      email: "medellin@yobel.com.co",
      phone: "+57 4 444 3200",
      address: "Carrera 65 #8B-91, Medellín, Colombia",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Bogota"
    }
  ],
  ecuador: [
    {
      city: "Quito",
      country: "Ecuador",
      email: "quito@yobel.com.ec",
      phone: "+593 2 398 3800",
      address: "Av. 6 de Diciembre N36-149, Quito, Ecuador",
      imageUrl: "https://images.unsplash.com/photo-1650392131866-e4e2e06a0c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NjY2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guayaquil"
    },
    {
      city: "Guayaquil",
      country: "Ecuador",
      email: "guayaquil@yobel.com.ec",
      phone: "+593 4 263 4800",
      address: "Av. Francisco de Orellana, Guayaquil, Ecuador",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guayaquil"
    }
  ],
  chile: [
    {
      city: "Santiago",
      country: "Chile",
      email: "santiago@yobel.cl",
      phone: "+56 2 2573 4200",
      address: "Av. Américo Vespucio 1501, Pudahuel, Santiago, Chile",
      imageUrl: "https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NjY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Santiago"
    }
  ],
  argentina: [
    {
      city: "Buenos Aires",
      country: "Argentina",
      email: "buenosaires@yobel.com.ar",
      phone: "+54 11 5236 8800",
      address: "Av. Del Libertador 498, Buenos Aires, Argentina",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Argentina/Buenos_Aires"
    }
  ],
  uruguay: [
    {
      city: "Montevideo",
      country: "Uruguay",
      email: "montevideo@yobel.com.uy",
      phone: "+598 2 628 3200",
      address: "Ruta 8 Km 17.500, Montevideo, Uruguay",
      imageUrl: "https://images.unsplash.com/photo-1650392131866-e4e2e06a0c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NjY2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Montevideo"
    }
  ]
};

const stats = [
  { value: "+250,000 m2", label: "de capacidad logística", sub: "1-5" },
  { value: "+800", label: "vehículos", sub: "2-5" },
  { value: "+70M", label: "de productos terminados", sub: "3-5" },
  { value: "+980,000", label: "pedidos gestionados al año", sub: "4-5" },
  { value: "+440,000", label: "destinos atendidos", sub: "5-5" }
];

const countryOptions = [
  { value: "peru", label: "Perú" },
  { value: "colombia", label: "Colombia" },
  { value: "ecuador", label: "Ecuador" },
  { value: "chile", label: "Chile" },
  { value: "argentina", label: "Argentina" },
  { value: "uruguay", label: "Uruguay" },
  { value: "brasil", label: "Brasil" }
];

export function GlobalPresence() {
  const [selectedCountry, setSelectedCountry] = useState<string>("peru");
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const officesRef = useRef<HTMLDivElement>(null);

  const currentLocations = locationsData[selectedCountry] || locationsData["peru"];
  const countryName = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1).replace("peru", "Perú");

  const scrollToOffices = () => {
    // Solo hacer scroll en móviles (lg breakpoint es 1024px)
    if (window.innerWidth < 1024 && officesRef.current) {
      officesRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  };

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
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[800px] tracking-tight font-[Neue_Augenblick]">
                  Conectamos tu cadena de suministro desde Perú hacia 9 países de Latinoamérica
                </h1>
             </div>
          </div>
        </div>
      </div>

      <Phrase />

      <VideoScrollSection data={stats} />

      <Section className="bg-white pt-24 md:pt-32" data-section="locations">
        <Container>
           {/* Title Block - Above everything */}
           <div className="mb-16">
             <ScrollRevealString 
               text="Encuentra nuestros centros logísticos y oficinas"
               as="h2"
               className="text-4xl md:text-5xl font-augenblick font-normal mb-6 leading-tight text-black max-w-2xl"
             />
             <p className="text-lg text-gray-500 font-light max-w-md mb-6">
               Selecciona un país en el mapa para ver nuestras sedes locales.
             </p>
             
             {/* Country Dropdown - Visible on mobile/tablet */}
             <div className="lg:hidden max-w-md">
               <div className="relative">
                 <select
                   value={selectedCountry}
                   onChange={(e) => {
                     setSelectedCountry(e.target.value);
                     setScrollIndex(0);
                     setTimeout(scrollToOffices, 100);
                   }}
                   className="w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 pr-12 text-lg text-black font-medium focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer hover:border-gray-300"
                 >
                   {countryOptions.map((country) => (
                     <option key={country.value} value={country.value}>
                       {country.label}
                     </option>
                   ))}
                 </select>
                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
               </div>
             </div>
           </div>

           {/* Map and Offices - Aligned side by side */}
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-20">
              {/* Right Column: SVG Map */}
              <div className="lg:w-1/2 min-h-[500px] flex items-center justify-center lg:sticky lg:top-8 lg:self-start">
                 <LatinAmericaMap 
                    onSelect={(country) => {
                      setSelectedCountry(country);
                      setScrollIndex(0);
                      setTimeout(scrollToOffices, 100);
                    }}
                    selected={selectedCountry}
                    className="w-full max-w-[500px] mx-auto"
                 />
              </div>
              
              {/* Left Column: Offices Vertical Carousel */}
              <div className="lg:w-1/2" ref={officesRef}>
                 {/* Country header with time - Fixed */}
                 <CountryTimeHeader 
                   country={countryName === "Peru" ? "Perú" : countryName}
                   timezone={currentLocations[0]?.timezone || "America/Lima"}
                 />
                 
                 {/* Vertical scroll container for offices */}
                 <div 
                   className="max-h-[800px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                 >
                   {/* Office cards with staggered animation */}
                   <div className="space-y-8" key={selectedCountry}>
                     {currentLocations.map((location, idx) => (
                       <div
                         key={idx}
                         className="animate-in fade-in-blur"
                         style={{ 
                           animationDelay: `${idx * 150}ms`
                         }}
                       >
                         <LocationCard 
                           city={location.city}
                           email={location.email}
                           phone={location.phone}
                           address={location.address}
                         />
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
           </div>

           {/* CTA Block - Moved to bottom and full width */}
           <div className="p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-augenblick mb-4 text-black">¿Necesitas más información?</h3>
                <p className="text-black/60 leading-relaxed text-lg md:text-xl">
                  Ponte en contacto con nuestro equipo comercial para diseñar una solución a tu medida.
                </p>
              </div>
              
              <div className="w-full md:w-auto shrink-0">
                <ContactModal 
                  trigger={
                    <Button className="w-full md:w-auto px-8 bg-black text-white py-6 rounded-full transition-all duration-500 text-base relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#5dd3c0] before:to-[#f0e626] before:opacity-0 before:transition-opacity before:duration-500 before:rounded-full hover:before:opacity-100 hover:text-black">
                      <span className="relative z-10">Contactar ahora</span>
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