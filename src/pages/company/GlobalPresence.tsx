import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1586448911122-f74aa8e3e4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBtYXAlMjBsb2dpc3RpY3MlMjBuZXR3b3JrJTIwY29ubmVjdGlvbnN8ZW58MXx8fHwxNzY0MTkzNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const locations = [
  "Lima – Sede principal San Genaro",
  "Lima – Lurín",
  "Lima – San Andrés, Los Olivos",
  "Lima – Huachipa",
  "Lima – Oficina principal, Surco"
];

const stats = [
  { value: "+250,000 m2", label: "de capacidad logística" },
  { value: "+800", label: "vehículos" },
  { value: "+70M", label: "de productos terminados" },
  { value: "+980,000", label: "pedidos gestionados al año" },
  { value: "+440,000", label: "destinos atendidos" }
];

export function GlobalPresence() {
  return (
    <>
      <PageHero 
        title="Presencia Global" 
        description="Conectamos tu cadena de suministro desde Perú hacia 9 países de Latinoamérica. Operamos con conexión directa a puertos, aeropuertos y redes logísticas nacionales."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-24">
              {stats.map((stat, idx) => (
                 <div key={idx} className="text-center p-8 border border-gray-100 rounded-[30px] shadow-sm hover:shadow-md transition-all bg-gray-50 group hover:bg-black hover:border-black">
                    <div className="text-3xl font-bold text-black mb-3 group-hover:text-[#fff066] transition-colors">{stat.value}</div>
                    <div className="text-gray-600 font-medium leading-tight group-hover:text-white transition-colors">{stat.label}</div>
                 </div>
              ))}
           </div>

           <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl md:text-5xl font-normal mb-10 leading-tight">Encuentra nuestros centros logísticos y oficinas cerca de ti</h2>
                 
                 <div className="bg-white border border-gray-200 p-10 rounded-[30px] mb-12 shadow-sm">
                    <h3 className="text-2xl font-medium mb-8">Nuestras Sedes</h3>
                    <ul className="space-y-6">
                       {locations.map((loc, idx) => (
                          <li key={idx} className="flex items-center gap-4 text-lg text-gray-700 pb-4 border-b border-gray-100 last:border-0">
                             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                               </svg>
                             </div>
                             {loc}
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="bg-black text-white p-10 rounded-[30px]">
                    <h3 className="text-2xl font-medium mb-6">Contáctanos</h3>
                    <form className="flex flex-col gap-6">
                       <input type="text" placeholder="Nombre completo" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#fff066] text-white placeholder-white/50 transition-colors" />
                       <input type="email" placeholder="Correo electrónico" className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#fff066] text-white placeholder-white/50 transition-colors" />
                       <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#fff066] text-white placeholder-white/50 transition-colors resize-none" />
                       <Button className="w-full bg-[#fff066] hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-colors text-lg">Enviar mensaje</Button>
                    </form>
                 </div>
              </div>
              
              <div className="lg:w-1/2 min-h-[600px] bg-gray-200 rounded-[40px] overflow-hidden relative shadow-xl">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.736222823887!2d-77.0317626851866!3d-12.130543391411587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7de2713735f%3A0x35f0c1461e2e00b0!2sYobel%20Supply%20Chain%20Management!5e0!3m2!1sen!2spe!4v1620000000000!5m2!1sen!2spe" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy"
                   className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                 />
              </div>
           </div>
        </Container>
      </Section>
    </>
  );
}
