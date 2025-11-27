import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { Certificates } from "../../components/landing/Certificates";
import { Link } from "react-router-dom";

// Images
const heroImage = "https://images.unsplash.com/photo-1732435527614-8336ebd1e82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjQxOTM2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const diversityImage = "https://images.unsplash.com/photo-1758691737487-29b4fae83e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNpdHklMjB0ZWFtJTIwaGFwcHklMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzY0MTkzNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function About() {
  return (
    <>
      <PageHero 
        title="Sobre Nosotros" 
        description="Con más de 50 años de experiencia en Latinoamérica, en Yobel impulsamos tu negocio con soluciones de logística y manufactura que integran innovación, eficiencia y cercanía, generando valor real en cada etapa de la cadena de suministro."
        imageUrl={heroImage}
      />

      {/* Purpose, Mission, Vision */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Propósito",
                content: "Nos movemos para crear y entregar soluciones que impulsen el crecimiento de nuestros aliados, convencidos de que pensar con visión, transformar con acción y lograr con excelencia es la manera de construir confianza."
              },
              {
                title: "Misión",
                content: "Crear y entregar soluciones integrales de logística y manufactura que respondan a necesidades reales, combinando innovación, eficiencia y personalización para generar experiencias memorables que impulsen el propósito de nuestros aliados y el compromiso de nuestro equipo."
              },
              {
                title: "Visión",
                content: "Ser la empresa más confiable e innovadora de la región en soluciones de logística y manufactura, ampliando nuestra cobertura, integrando nuevas tecnologías y liderando la sostenibilidad en la cadena de suministro."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-[30px] hover:shadow-lg transition-shadow border border-gray-100 group">
                <h3 className="text-2xl font-medium mb-6 text-black group-hover:text-gray-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">{item.content}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <Link to="/empresa/historia">
                <Button className="bg-black text-white text-lg px-10 py-5 rounded-full hover:bg-gray-800 transition-colors">
                  Nuestra historia
                </Button>
             </Link>
          </div>
        </Container>
      </Section>

      {/* Value Proposition */}
      <Section className="bg-gradient-to-b from-[#fff066] to-white">
         <Container>
            <div className="mb-16 max-w-4xl">
               <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">Propuesta de valor</h2>
               <p className="text-xl text-black/70 font-light">Lo que nos hace diferentes en el mercado.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 "Gestión integral logística",
                 "Cobertura regional eficiente",
                 "Flexibilidad operativa total",
                 "Tecnología y trazabilidad avanzada",
                 "Optimización de costos",
                 "Mejora de experiencia cliente"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-5 p-6 bg-white/60 backdrop-blur-sm rounded-[20px] border border-black/5 hover:bg-white transition-colors">
                    <div className="w-3 h-3 bg-black rounded-full shrink-0" />
                    <span className="text-xl font-normal">{item}</span>
                 </div>
               ))}
            </div>
         </Container>
      </Section>

      <Certificates />

      {/* Principles */}
      <Section className="bg-gray-50">
         <Container>
            <h2 className="text-4xl md:text-5xl font-normal mb-16">Principios que nos guían</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
               {[
                 { title: "Simplicidad operativa", desc: "Procesos claros y eficientes que reducen tiempos y costos." },
                 { title: "Seguridad primero", desc: "Protegemos a las personas y cuidamos tu operación." },
                 { title: "Integridad y ética", desc: "Hacemos lo correcto, incluso cuando nadie nos ve." },
                 { title: "Orientación al cliente", desc: "Escuchamos, medimos y mejoramos para cumplir siempre con OTIF (On Time, In Full)." },
                 { title: "Trabajo en equipo", desc: "Sumamos el talento de 9 países para lograr resultados excepcionales." },
                 { title: "Aprendizaje continuo", desc: "Formamos y certificamos a nuestros colaboradores para superar los estándares de la industria" }
               ].map((item, idx) => (
                 <div key={idx} className="border-l-[3px] border-[#fff066] pl-8 py-2 hover:border-black transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </Container>
      </Section>

      {/* Way of Working */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-4xl md:text-5xl font-normal mb-16">Nuestra forma de trabajar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {[
               { title: "Seguridad y calidad", desc: "Cumplimos altos estándares internacionales en gestión, seguridad y control de procesos, garantizando operaciones confiables en toda la cadena de suministro." },
               { title: "Datos y visibilidad", desc: "Monitoreo en tiempo real con sistemas WMS y TMS que ofrecen trazabilidad total y análisis para decisiones ágiles y precisas." },
               { title: "Mejora continua", desc: "Aplicamos metodologías Lean y Kaizen para optimizar procesos, reducir tiempos y elevar la eficiencia operativa cada día." },
               { title: "Colaboración abierta", desc: "Trabajamos junto a nuestros clientes y equipos multidisciplinarios para diseñar soluciones logísticas personalizadas y sostenibles." }
             ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-10 rounded-[40px] hover:bg-gray-100 transition-colors">
                   <h3 className="text-3xl font-medium mb-6">{item.title}</h3>
                   <p className="text-xl text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* Diversity */}
      <Section className="bg-black text-white overflow-hidden">
         <Container className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-4xl md:text-6xl font-normal mb-8 leading-tight">Personas y diversidad que nos mueven</h2>
               <p className="text-xl opacity-80 mb-16 leading-relaxed font-light">
                 En Yobel promovéis inclusión, crecimiento y bienestar. Apostamos por el desarrollo continuo y las oportunidades equitativas, porque cuando nuestra gente crece, las cadenas de suministro funcionan mejor.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 border-t border-white/20 pt-10">
                  <div>
                     <div className="text-4xl font-bold text-[#fff066] mb-2">+4,600</div>
                     <div className="text-base opacity-70 font-light">colaboradores en Latinoamérica</div>
                  </div>
                  <div>
                     <div className="text-4xl font-bold text-[#fff066] mb-2">9</div>
                     <div className="text-base opacity-70 font-light">países conectados</div>
                  </div>
                  <div>
                     <div className="text-4xl font-bold text-[#fff066] mb-2">+30%</div>
                     <div className="text-base opacity-70 font-light">liderazgo femenino en áreas clave</div>
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  {[
                    { title: "Diversidad e inclusión", desc: "Promovemos equipos diversos y oportunidades" },
                    { title: "Bienestar", desc: "Programas de salud, ergonomía y apoyo emocional" },
                    { title: "Seguridad & Salud ocupacional", desc: "Capacitación continua y prevención" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                       <div className="w-2 h-2 rounded-full bg-[#fff066] mt-2.5 shrink-0" />
                       <div>
                          <strong className="block text-xl font-medium mb-1">{item.title}</strong>
                          <span className="text-white/60 font-light">{item.desc}</span>
                       </div>
                    </div>
                  ))}
               </div>
               
               <div className="mt-16">
                 <Link to="/etica/codigo-de-etica">
                   <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors rounded-full px-10 py-6 text-lg h-auto">
                     Revisa nuestra ética
                   </Button>
                 </Link>
               </div>
            </div>
            <div className="lg:w-1/2 h-[600px] w-full rounded-[40px] overflow-hidden relative">
               <img src={diversityImage} alt="Diversity at Yobel" className="w-full h-full object-cover" />
            </div>
         </Container>
      </Section>
    </>
  );
}
