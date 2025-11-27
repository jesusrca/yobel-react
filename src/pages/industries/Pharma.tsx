import React from "react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYiUyMG1lZGljaW5lJTIwbWFudWZhY3R1cmluZyUyMGNsZWFuJTIwcm9vbXxlbnwxfHx8fDE3NjQxOTUyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { title: "Manufactura y acondicionamiento farmacéutico", desc: "Producimos, envasamos y reacondicionamos medicamentos y productos sanitarios cumpliendo estándares regulatorios nacionales e internacionales." },
  { title: "Almacenamiento regulado y controlado", desc: "Operamos con temperatura controlada, áreas segregadas y cuarentena sanitaria para garantizar inocuidad y cumplimiento." },
  { title: "Distribución farmacéutica nacional", desc: "Entregas a droguerías, hospitales, clínicas y puntos de venta con visibilidad en tiempo real y control por lote." },
  { title: "Valor Agregado (VAS)", desc: "Etiquetado sanitario, codificación, armado de kits hospitalarios y empaques promocionales con validación regulatoria." },
  { title: "Comercio exterior (COMEX)", desc: "Gestión aduanera y transporte internacional de materias primas, insumos activos y productos terminados bajo normativa sanitaria." }
];

const benefits = [
  "Cumplimiento estricto de BPM/BPA y DIGEMID.",
  "Cadena de frío certificada para productos sensibles.",
  "Trazabilidad total por lote en tiempo real.",
  "Segregación por tipo de producto y área sanitaria.",
  "Cobertura nacional con OTIF 99.6%"
];

const useCases = [
  "Lanzamientos farmacéuticos: Distribución nacional y regional de nuevas líneas.",
  "Acondicionamiento secundario: Etiquetado, codificado o empaquetado final según país de destino.",
  "Re-etiquetado sanitario: Adaptación regulatoria por canal o mercado.",
  "Distribución hospitalaria: Entrega directa a clínicas, farmacias y hospitales.",
  "Logística inversa: Retiro, control y disposición segura de productos fuera de estándar."
];

const results = [
  "Cumplimiento OTIF 99.6% en entregas farmacéuticas.",
  "Temperatura monitoreada en tiempo real.",
  "Trazabilidad 100% validada por lote y cliente.",
  "Lead time reducido en lanzamientos y reabastecimientos."
];

const certifications = [
  { title: "BPM/BPA", desc: "Buenas Prácticas de Manufactura y Almacenamiento." },
  { title: "ISO 9001", desc: "Calidad y mejora continua." },
  { title: "BASC", desc: "Seguridad en la cadena de suministro." },
  { title: "Habilitaciones", desc: "Habilitaciones DIGEMID y sanitarias internacionales." }
];

export function Pharma() {
  return (
    <>
      <PageHero 
        title="Soluciones logísticas para la industria farmacéutica"
        description="Garantizamos la integridad de tus productos con control sanitario y trazabilidad total."
        imageUrl={heroImage}
      />

      <Section className="bg-white">
         <Container>
            <div className="max-w-4xl mb-24">
               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                 En Yobel SCM diseñamos soluciones integradas para laboratorios, distribuidoras y empresas de salud. Gestionamos medicamentos, insumos y dispositivos médicos bajo normas BPM y BPA, con cadena de frío certificada y procesos trazables en cada etapa del flujo logístico.
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
                  <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">Nos enfocamos en cumplimiento, trazabilidad y eficiencia</h3>
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
               <p className="text-lg text-gray-500 mb-12 max-w-3xl">Respaldamos cada operación con certificaciones internacionales y habilitaciones regulatorias que aseguran cumplimiento y excelencia operativa en el sector salud.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
