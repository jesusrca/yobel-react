import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import svgPaths from "../../imports/svg-1hie16nw8a";
import { cn } from "../ui/utils";

interface FullScreenMenuProps {
  onClose: () => void;
  onSearchClick: () => void;
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

export function FullScreenMenu({ onClose, onSearchClick }: FullScreenMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Empresa");
  const activeItems = menuItems.find(item => item.title === activeCategory)?.items || [];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black text-white overflow-hidden font-augenblick"
    >
      {/* Header */}
      <div className="fixed top-5 left-0 right-0 z-[61] flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-[1340px] h-[56px] px-6 flex items-center justify-between pointer-events-auto">
            {/* Logo */}
            <Link to="/" onClick={onClose} className="h-[30px] w-[80px] relative block hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 94 36" fill="none">
                  <g>
                    <path d={svgPaths.p39b272b2} fill="white" />
                    <path d={svgPaths.p3696ae00} fill="white" />
                    <path d={svgPaths.p242f0b70} fill="white" />
                    <path d={svgPaths.pe0eb480} fill="white" />
                    <path d={svgPaths.p241a2e00} fill="white" />
                    <path d={svgPaths.p1253cf80} fill="white" />
                    <path d={svgPaths.p1cb69d80} fill="white" />
                  </g>
              </svg>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-6">
                {/* Country */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <span className="text-lg text-white">PE</span>
                  <div className="w-3 h-2">
                      <svg className="w-full h-full" viewBox="0 0 12 7" fill="none">
                          <path d={svgPaths.p3478d380} fill="white" />
                      </svg>
                  </div>
                </div>

                {/* User */}
                <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                  <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                      <path d={svgPaths.p2616da40} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p112eb780} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Buttons Group */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Search Icon */}
                    <div onClick={onSearchClick} className="hidden md:flex w-[30px] h-[30px] items-center justify-center cursor-pointer">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                          <path d={svgPaths.p1621a072} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M24.75 24.75L18.95 18.95" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Tracking Button */}
                    <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70">Tracking</button>

                    {/* Close Button */}
                    <button 
                      onClick={onClose}
                      className="px-[14px] py-[8px] rounded-[19px] border-[1.5px] border-white text-[22px] leading-[24px] font-augenblick font-medium text-white hover:bg-white hover:text-black transition-colors"
                    >
                      Cerrar
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1340px] mx-auto h-screen pt-[140px] px-[50px] pb-[50px] flex flex-col justify-between">
         
         <div className="flex w-full h-full">
            {/* Left Column */}
            <div className="w-full lg:w-[547px] flex flex-col gap-16 pt-8">
               


               {/* Menu Categories */}
               <div className="flex flex-col gap-8">
                    {menuItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="group flex items-center gap-2 cursor-pointer"
                            onClick={() => setActiveCategory(item.title)}
                        >
                            <span className={cn(
                                "text-[24px] font-medium transition-colors duration-300",
                                activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                            )}>
                                {item.id} /
                            </span>
                            <span className={cn(
                                "text-[24px] font-medium transition-colors duration-300 border-b-[1.5px] border-transparent group-hover:border-current",
                                activeCategory === item.title ? "text-[#fff066]" : "text-white group-hover:text-white/80"
                            )}>
                                {item.title}
                            </span>
                        </div>
                    ))}
               </div>
            </div>

            {/* Right Column (Submenu) */}
            <div className="hidden lg:flex lg:ml-[133px] flex-col pt-8 w-full relative">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col gap-4"
                    >
                        {activeItems.map((link, idx) => (
                            <Link 
                                key={idx} 
                                to={link.path}
                                onClick={onClose}
                                className="text-[22px] font-medium text-white hover:text-[#fff066] transition-colors border-b border-transparent hover:border-b hover:border-[#fff066] w-fit pb-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                 </AnimatePresence>
            </div>
         </div>

         {/* Footer / Legal */}
         <div className="flex flex-col md:flex-row items-end justify-end w-full gap-8 pb-4">
             <div className="flex gap-6">
                 <Link to="#" onClick={onClose} className="text-[16px] text-white/50 hover:text-white transition-colors">Términos y Condiciones</Link>
                 <Link to="/libro-reclamaciones" onClick={onClose} className="text-[16px] text-white/50 hover:text-white transition-colors">Libro de Reclamaciones</Link>
                 <Link to="#" onClick={onClose} className="text-[16px] text-white/50 hover:text-white transition-colors">Privacidad</Link>
                 <Link to="/politicas-de-cookies" onClick={onClose} className="text-[16px] text-white/50 hover:text-white transition-colors">Políticas de Cookies</Link>
             </div>
         </div>

      </div>
    </motion.div>
  );
}
