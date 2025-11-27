import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYW5kJTIwYmV2ZXJhZ2UlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzY0MTk1MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Manufactura y reacondicionado alimentario", desc: "Procesamos, envasamos y reacondicionamos productos alimenticios y bebidas bajo control sanitario, cumpliendo normas de inocuidad y trazabilidad por lote." },
  { title: "Almacenamiento con temperatura controlada", desc: "Contamos con zonas de refrigeración, cuarentena sanitaria y WMS avanzado para monitoreo en tiempo real." },
  { title: "Valor Agregado (VAS)", desc: "Servicios de reempaque, etiquetado nutricional, armado de packs y promociones con control por lote y auditoría." },
  { title: "Distribución y transporte especializado", desc: "Rutas optimizadas para productos perecibles, con entregas programadas B2B y B2C en todo el país." },
  { title: "Comercio exterior (COMEX)", desc: "Gestión integral de importación/exportación, trámites aduaneros y nacionalización de materias primas y productos terminados." }
];

const benefits = [
  "Cumplimiento sanitario y BPM/BPA.",
  "Reducción de mermas en transporte y almacenamiento.",
  "Control por lote y trazabilidad total 24/7.",
  "Cobertura nacional con OTIF OTIF 99.6%",
  "Flexibilidad ante picos estacionales o promociones."
];

const useCases = [
  "Lanzamientos estacionales: Kitting y distribución nacional para nuevas líneas o promociones.",
  "Re-etiquetado sanitario: Adaptación de etiquetas según normativa local o por canal.",
  "Promociones y packs: Armado de combos con control por lote y tiempo de vigencia.",
  "Reabastecimiento retail: Entregas programadas a autoservicios, mayoristas y farmacias.",
  "Gestión de devoluciones: Procesos de control y disposición segura de productos fuera de estándar."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas.",
  "Disponibilidad por canal con reposición continua.",
  "Trazabilidad total por lote vía WMS.",
  "Lead time optimizado para mantener frescura y rotación."
];

const certifications = [
  { title: "BPM y BPA", desc: "Buenas Prácticas de Manufactura y Almacenamiento." },
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." }
];

export function FoodAndBeverage() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria de Alimentos y Bebidas"
        description="Movemos tu cadena de suministro con seguridad, trazabilidad y cumplimiento sanitario."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 Garantizamos la calidad, inocuidad y frescura de tus productos desde la materia prima hasta el punto de venta. En Yobel integramos manufactura, almacenamiento, transporte y distribución bajo los más altos estándares BPM/BPA, optimizando tiempos y reduciendo mermas.
               </p>
               <div className="mt-10">
                 <Button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">Contactar asesor</Button>
               </div>
            </div>

            {/* Solutions */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">¿Cómo te ayudamos?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {solutions.map((sol, idx) => (
                     <div key={idx} className="bg-gray-50 p-8 rounded-[30px] hover:shadow-lg transition-all">
                        <h4 className="text-xl font-bold mb-4">{sol.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[40px] p-10 md:p-20 mb-24">
               <div className="lg:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en optimizar tiempos, calidad y trazabilidad</h3>
               </div>
               <div className="lg:w-2/3">
                  <ul className="space-y-6">
                     {benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                           <span className="text-lg md:text-xl text-gray-800 font-light leading-relaxed">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Use Cases */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-10">Casos de uso típicos</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {useCases.map((item, idx) => (
                       <li key={idx} className="flex gap-4 items-start border border-gray-100 p-6 rounded-[20px] hover:border-gray-300 transition-colors">
                           <div className="w-2 h-2 mt-2 bg-black rounded-full shrink-0" />
                           <span className="text-lg text-gray-700 font-light">{item}</span>
                       </li>
                   ))}
               </ul>
            </div>

            {/* Results */}
            <div className="bg-black text-white rounded-[40px] p-10 md:p-20 mb-24">
                <h3 className="text-3xl md:text-4xl font-normal mb-16 text-center">Indicadores que priorizamos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {results.map((res, idx) => (
                        <div key={idx} className="text-center border-r last:border-0 border-gray-800 px-4 flex flex-col items-center">
                           <div className="w-3 h-3 bg-white rounded-full mb-6 opacity-50" />
                           <p className="text-xl font-light leading-relaxed">{res}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="mb-24">
               <h3 className="text-3xl md:text-4xl font-normal mb-6">Nuestros certificados nos respaldan</h3>
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Contamos con certificaciones internacionales y políticas de inocuidad que garantizan excelencia operativa, seguridad alimentaria e integridad en cada proceso.</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {certifications.map((cert, idx) => (
                       <div key={idx} className="border border-gray-200 p-8 rounded-[30px] hover:shadow-md transition-all">
                           <h4 className="text-xl font-bold mb-3">{cert.title}</h4>
                           <p className="text-gray-600">{cert.desc}</p>
                       </div>
                   ))}
               </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gray-50 rounded-[40px] p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-normal mb-8">Conversemos sobre tu operación</h3>
                <Button className="bg-black text-white px-12 py-5 rounded-full text-xl hover:bg-gray-800 transition-colors">Contactar asesor</Button>
            </div>

         </Container>
      </Section>
    </>
  );
}
