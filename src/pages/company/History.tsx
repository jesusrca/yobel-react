import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";

const heroImage = "https://images.unsplash.com/photo-1737301338604-02d40527ac91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYWN0b3J5JTIwMTk2MHMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";

const timeline = [
  {
    year: "1967",
    title: "Favel",
    desc: "Iniciamos operaciones como Favel, con la fabricación de cosméticos y cuidado personal."
  },
  {
    year: "1989",
    title: "Larissa",
    desc: "Empezamos nuestra operación logística, lo que marcó nuestra internacionalización en Chile y EE.UU."
  },
  {
    year: "1995",
    title: "Glacesa",
    desc: "Se abre una nueva línea de operación logística especializada en joyería de fantasía."
  },
  {
    year: "2003",
    title: "Grupo Yobel",
    desc: "Nuestras marcas y operaciones se unifican bajo el nombre de Grupo Yobel."
  },
  {
    year: "Actualidad",
    title: "Yobel SCM",
    desc: "Nos constituimos como una corporación experta en toda la gestión de manejo de suministros y operaciones logísticas"
  }
];

const lifeImages = [
  { title: "Capacitaciones", src: "https://images.unsplash.com/photo-1732435527614-8336ebd1e82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjQxOTM2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Campañas de seguridad", src: "https://images.unsplash.com/photo-1735494033834-d303e729aa09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvbWF0ZWQlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzY0MTkzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Voluntariado", src: "https://images.unsplash.com/photo-1758691737487-29b4fae83e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNpdHklMjB0ZWFtJTIwaGFwcHklMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzY0MTkzNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Celebraciones", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.1.0&q=80&w=1080&auto=format&fit=crop" },
];

export function History() {
  return (
    <>
      <PageHero 
        title="Una trayectoria de innovación"
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-3xl leading-relaxed text-black font-light">
                 Cada década hemos escrito un nuevo capítulo: de la manufactura de productos de cuidado personal a la gestión integral de cadenas de suministro en Latinoamérica. Nuestra historia refleja que la excelencia y la innovación forman parte de nuestro ADN.
               </p>
            </div>

            <div className="relative border-l-[3px] border-gray-100 ml-4 md:ml-12 space-y-20 pb-10">
               {timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-16 md:pl-24 group">
                     <div className="absolute -left-[11px] top-2 w-6 h-6 rounded-full bg-white border-[6px] border-black group-hover:border-[#fff066] transition-colors shadow-sm" />
                     <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                        <span className="text-5xl md:text-7xl font-bold text-black/10 group-hover:text-black/80 transition-colors duration-500">{item.year}</span>
                        <div>
                           <h3 className="text-3xl font-bold text-black mb-4">{item.title}</h3>
                           <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </Section>

      <Section className="bg-black text-white">
         <Container>
            <h2 className="text-4xl md:text-5xl font-normal mb-16">Vida en Yobel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {lifeImages.map((img, idx) => (
                  <div key={idx} className="group relative aspect-[4/5] rounded-[30px] overflow-hidden cursor-pointer border border-white/10">
                     <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8">
                        <span className="text-[#fff066] text-2xl font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </Section>
    </>
  );
}
