import React from "react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/custom-section";
import { Container } from "../components/ui/custom-container";
import { Button } from "../components/ui/button";
import { FAQ } from "../components/landing/FAQ";

const heroImage = "https://images.unsplash.com/photo-1576511558996-e2d3fa0c960f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjb250YWN0JTIwc3VwcG9ydCUyMGNlbnRlciUyMG9mZmljZXxlbnwxfHx8fDE3NjQxOTUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const faqs = [
  { question: "¿En cuánto tiempo obtengo una propuesta?", answer: "En un máximo de 48 horas coordinamos un diagnóstico y te presentamos una propuesta adaptada a tus necesidades logísticas." },
  { question: "¿Puedo iniciar con un piloto?", answer: "Sí. Diseñamos pilotos personalizados para validar procesos, medir resultados y ajustar el modelo antes de su implementación completa." },
  { question: "¿Integran mi ERP o plataforma e-commerce?", answer: "Sí. Nuestros sistemas se integran fácilmente con ERP, CRM y plataformas de venta online para sincronizar inventarios, pedidos y reportes." },
  { question: "¿Tienen cobertura internacional?", answer: "Sí. Contamos con presencia en más de 8 países de Latinoamérica, lo que nos permite ofrecer soluciones regionales con operación local." }
];

export function Contact() {
  return (
    <>
      <PageHero 
        title="Conversemos sobre tu negocio"
        description="Un especialista evaluará tu caso y, en menos de 48 horas, te presentará un flujo integrado de manufactura, almacenamiento y distribución, con acciones rápidas y un roadmap claro para tu negocio."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            {/* Offices */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Encuentra nuestros centros logísticos y oficinas cerca de ti</h3>
               <div className="bg-gray-100 h-[500px] rounded-[40px] flex items-center justify-center border border-gray-200 overflow-hidden relative">
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

            {/* Contact Form */}
            <div className="mb-24 max-w-5xl mx-auto">
               <div className="bg-black text-white p-10 md:p-16 rounded-[40px] shadow-xl">
                   <h3 className="text-3xl md:text-4xl font-normal mb-10 text-center">Contacta a un asesor</h3>
                   <form className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div>
                               <label className="block text-base font-medium text-white/80 mb-3">Nombre</label>
                               <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-[#fff066] outline-none text-lg text-white placeholder-white/30 transition-colors" placeholder="Tu nombre" />
                           </div>
                           <div>
                               <label className="block text-base font-medium text-white/80 mb-3">Apellido</label>
                               <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-[#fff066] outline-none text-lg text-white placeholder-white/30 transition-colors" placeholder="Tu apellido" />
                           </div>
                       </div>
                       <div>
                           <label className="block text-base font-medium text-white/80 mb-3">Correo electrónico</label>
                           <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-[#fff066] outline-none text-lg text-white placeholder-white/30 transition-colors" placeholder="nombre@empresa.com" />
                       </div>
                       <div>
                           <label className="block text-base font-medium text-white/80 mb-3">Mensaje</label>
                           <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-[#fff066] outline-none text-lg text-white placeholder-white/30 transition-colors resize-none" placeholder="¿Cómo podemos ayudarte?" />
                       </div>
                       <Button className="w-full bg-[#fff066] text-black py-5 rounded-full text-xl font-bold hover:bg-yellow-400 transition-colors">Enviar mensaje</Button>
                   </form>
               </div>
            </div>

            {/* Jobs */}
            <div className="mb-24 bg-gradient-to-r from-[#fff066] to-[#fff59d] rounded-[40px] p-16 text-center border border-yellow-300/50">
                <h3 className="text-3xl md:text-4xl font-normal mb-6 text-black">¿Te gustaría trabajar como aliado?</h3>
                <p className="text-xl text-black/70 mb-10 max-w-3xl mx-auto font-light leading-relaxed">Impulsa tu carrera en logística integral. Filtra por país, área y modalidad.</p>
                <Button className="bg-black text-white px-12 py-5 rounded-full text-xl hover:bg-gray-800 transition-colors">Ver ofertas laborales</Button>
            </div>

         </Container>
      </Section>

      <FAQ items={faqs} />
    </>
  );
}
