import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-djl5v4gr4k";
import { cn } from "../ui/utils";

function Logo() {
  return (
    <div className="h-[120px] md:h-[210px] relative shrink-0 w-[300px] md:w-[547px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 547 211">
        <g id="Logo">
          <g id="Group">
            <path d={svgPaths.p1ad63400} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1a51da00} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="Group_2">
              <path d={svgPaths.p1ef94800} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p3a7a4500} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p24864270} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
          </g>
          <path d={svgPaths.pb315f00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p74300} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

const menuItems = [
  {
    id: "01",
    title: "Empresa",
    items: [
      { name: "Sobre Nosotros", path: "/empresa/sobre-nosotros" },
      { name: "Presencia Global", path: "/empresa/presencia-global" },
      { name: "Historia", path: "/empresa/historia" },
      { name: "Tarifas", path: "/tarifas" },
    ]
  },
  {
    id: "02",
    title: "Servicios",
    items: [
      { name: "Comercio Exterior", path: "/servicios/comercio-exterior" },
      { name: "Manufactura", path: "/servicios/manufactura" },
      { name: "Servicio Valor Agregado", path: "/servicios/valor-agregado" },
      { name: "Almacenamiento", path: "/servicios/almacenamiento" },
      { name: "Distribución", path: "/servicios/distribucion" },
      { name: "Courier Express", path: "/servicios/courier-express" },
    ]
  },
  {
    id: "03",
    title: "Industrias",
    items: [
      { name: "Alimentos y Bebidas", path: "/#industrias" },
      { name: "Belleza y Cuidado Personal", path: "/#industrias" },
      { name: "Farmacéutica", path: "/#industrias" },
      { name: "Retail", path: "/#industrias" },
    ]
  },
  {
    id: "04",
    title: "Noticias",
    items: [
       { name: "Todas las noticias", path: "/noticias" },
       { name: "Insights y Tendencias", path: "/noticias" },
       { name: "Innovación y Tecnología", path: "/noticias" },
    ]
  },
  {
    id: "05",
    title: "Ética",
    items: [
      { name: "Código de Ética", path: "/etica/codigo-de-etica" },
      { name: "Línea de Ética", path: "/etica/linea-de-etica" },
      { name: "RSE y Sostenibilidad", path: "/etica/rse-sostenibilidad" },
    ]
  },
  {
    id: "06",
    title: "Contacto",
    items: [
      { name: "Oficinas", path: "/contacto" },
      { name: "Contactar Asesor", path: "/contacto" },
      { name: "Trabaja con nosotros", path: "/contacto" },
    ]
  }
];

export function Footer() {
  const [activeCategory, setActiveCategory] = useState<string>("Empresa");

  const activeItems = menuItems.find(item => item.title === activeCategory)?.items || [];

  return (
    <footer className="bg-black text-white w-full overflow-hidden py-12 md:py-20 font-augenblick">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Top Section: Logo & Slogan */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16">
                <Logo />
                <div className="text-[18px] md:text-[22px] leading-tight md:leading-[24px] text-center md:text-left">
                    <p className="mb-0">EN MOVIMIENTO</p>
                    <p className="mb-0">CONCRETAMOS</p>
                    <p>TUS SUEÑOS</p>
                </div>
            </div>
        </div>

        {/* Middle Section: Contact & Navigation */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col gap-12 w-full lg:w-1/3">
                <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-white/50 font-medium">CONTACTO COMERCIAL</p>
                    <p className="text-[22px] md:text-[24px]">+511 997 593 459</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[16px] text-white/50 font-medium">SÍGUENOS</p>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="text-[22px] hover:text-[#fff066] transition-colors">Facebook</a>
                        <a href="#" className="text-[22px] hover:text-[#fff066] transition-colors">LinkedIn</a>
                        <a href="#" className="text-[22px] hover:text-[#fff066] transition-colors">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Right Side: Navigation (Split Column) */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 w-full lg:w-2/3">
                {/* Categories */}
                <div className="flex flex-col gap-6 md:w-1/2">
                    <p className="text-[16px] text-white/50 font-medium mb-2">PÁGINAS</p>
                    {menuItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="group flex items-center gap-4 cursor-pointer"
                            onClick={() => setActiveCategory(item.title)}
                        >
                            <span className={cn(
                                "text-[22px] transition-colors duration-300",
                                activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                            )}>
                                {item.id} /
                            </span>
                            <span className={cn(
                                "text-[22px] transition-colors duration-300",
                                activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                            )}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Submenu Links (Animated) */}
                <div className="flex flex-col gap-6 md:w-1/2 relative">
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col gap-6"
                        >
                            {/* Spacer to align with the list on the left (approximate visual alignment) */}
                             <p className="text-[16px] text-white/50 font-medium mb-2 opacity-0 select-none">SUBMENU</p> 
                            
                            {activeItems.map((link, idx) => (
                                <Link 
                                    key={idx} 
                                    to={link.path}
                                    className="text-[22px] text-white hover:text-[#fff066] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                     </AnimatePresence>
                </div>
            </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-white/10">
             <p className="text-[18px] text-white">© Yobel SCM Perú</p>
             <div className="flex flex-wrap gap-6 md:gap-8">
                 <Link to="#" className="text-[16px] text-white/50 hover:text-white transition-colors">Términos y Condiciones</Link>
                 <Link to="/libro-reclamaciones" className="text-[16px] text-white/50 hover:text-white transition-colors">Libro de Reclamaciones</Link>
                 <Link to="#" className="text-[16px] text-white/50 hover:text-white transition-colors">Privacidad</Link>
                 <Link to="/politicas-de-cookies" className="text-[16px] text-white/50 hover:text-white transition-colors">Políticas de Cookies</Link>
             </div>
        </div>

      </div>
    </footer>
  );
}
