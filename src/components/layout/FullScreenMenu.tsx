"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import svgPaths from "../../imports/svg-1hie16nw8a";
import { cn } from "../ui/utils";
import { useCountry } from "/contexts/CountryContext";
import { getCountryCode } from "../../utils/countryUtils";
import { CountryPopup } from "./CountryPopup";

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
      { name: "Alimentos y Bebidas", path: "/industrias/alimentos-y-bebidas" },
      { name: "Belleza y Cuidado Personal", path: "/industrias/belleza-y-cuidado-personal" },
      { name: "Calzado y Moda", path: "/industrias/calzado-y-moda" },
      { name: "Construcción", path: "/industrias/construccion" },
      { name: "Cuidado del Hogar", path: "/industrias/cuidado-del-hogar" },
      { name: "Editorial", path: "/industrias/editorial" },
      { name: "Farmacéutica", path: "/industrias/farmaceutica" },
      { name: "Manufactura Industrial", path: "/industrias/manufactura-industrial" },
      { name: "Química", path: "/industrias/quimica" },
      { name: "Retail", path: "/industrias/retail" },
      { name: "Tecnología y Electrónica", path: "/industrias/tecnologia-y-electronica" },
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
    title: "Ética y Sostenibilidad",
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
      { name: "Oficinas", path: "/contacto#oficinas" },
      { name: "Contactar Asesor", path: "/contacto" },
      { name: "Trabaja con nosotros", path: "/contacto" },
    ]
  }
];

export function FullScreenMenu({ onClose, onSearchClick }: FullScreenMenuProps) {
  const pathname = usePathname();
  
  // Determine the initial active category based on current path
  const determineActiveCategory = () => {
    const path = pathname;
    
    for (const menuItem of menuItems) {
      const matchingItem = menuItem.items.find(item => 
        path === item.path || path.startsWith(item.path + '/')
      );
      if (matchingItem) {
        return menuItem.title;
      }
    }
    
    return "Empresa"; // Default
  };
  
  const [activeCategory, setActiveCategory] = useState<string>(determineActiveCategory());
  const [isCountryPopupOpen, setIsCountryPopupOpen] = useState(false);
  
  // Update active category when menu opens with current page
  useEffect(() => {
    setActiveCategory(determineActiveCategory());
  }, [pathname]);
  
  // Logic for displaying items on desktop
  const activeItemsDesktop = menuItems.find(item => item.title === activeCategory)?.items || [];

  const { selectedCountry } = useCountry();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black text-white font-augenblick flex flex-col h-[100dvh]"
    >
      {/* Header - Fixed height */}
      <div className="flex-none h-[80px] md:h-[100px] w-full flex justify-center px-4 pt-5 z-[70] bg-black relative">
        <div className="w-full max-w-[1340px] h-[56px] px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={onClose} className="h-[30px] w-[80px] relative block hover:opacity-70 transition-opacity">
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
                {/* Portal de Clientes Button - Desktop */}
                <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70">Clientes</button>

                {/* Country (Hidden on small mobile if crowded, but let's keep it) */}
                <div 
                  onClick={() => setIsCountryPopupOpen(true)}
                  className="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg text-white">{getCountryCode(selectedCountry)}</span>
                  <div className="w-3 h-2">
                      <svg className="w-full h-full" viewBox="0 0 12 7" fill="none">
                          <path d={svgPaths.p3478d380} fill="white" />
                      </svg>
                  </div>
                </div>

                {/* Buttons Group */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Search Icon - Desktop */}
                    <div onClick={onSearchClick} className="hidden md:flex w-[30px] h-[30px] items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                      <Search className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Tracking Button - Desktop */}
                    <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70">Tracking</button>

                    {/* Close Button */}
                    <button 
                      onClick={onClose}
                      className="px-[14px] py-[8px] rounded-[19px] border-[1.5px] border-white text-[16px] md:text-[22px] leading-[20px] md:leading-[24px] font-augenblick font-medium text-white hover:bg-white hover:text-black transition-colors"
                    >
                      Cerrar
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Content - Full height without scroll */}
      <div className="flex-1 overflow-hidden">
        <div className="w-full max-w-[1340px] mx-auto px-[20px] md:px-[50px] h-full flex flex-col">
           
           {/* --- Desktop Layout (lg:flex) --- */}
           <div className="hidden lg:flex flex-col h-full justify-between py-8">
              {/* Main Content Area */}
              <div className="flex flex-1 min-h-0">
                {/* Left Col: Categories */}
                <div className="w-[400px] xl:w-[547px] flex flex-col gap-8">
                  {menuItems.map((item) => (
                      <div 
                          key={item.id} 
                          className="group flex items-center gap-2 cursor-pointer font-[Neue_Augenblick]"
                          onClick={() => setActiveCategory(item.title)}
                      >
                          <span className="text-[24px] font-medium text-white transition-colors duration-300">
                              {item.id} /
                          </span>
                          <span className={cn(
                              "text-[24px] font-medium text-white transition-all duration-300 border-b-[1.5px] border-transparent group-hover:border-white",
                              activeCategory === item.title && "border-white"
                          )}>
                              {item.title}
                          </span>
                      </div>
                  ))}
                </div>

                {/* Right Col: Subitems */}
                <div className="flex-1 pl-20 border-l border-white/10 ml-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <AnimatePresence mode="wait">
                      <motion.div
                          key={activeCategory}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col gap-4"
                      >
                          {activeItemsDesktop.map((link, idx) => {
                              const isServicesCategory = activeCategory === "Servicios";
                              const isManufacturingOrValueAddedOrVAS = 
                                  link.name === "Manufactura" || 
                                  link.name === "Valor Agregado" ||
                                  link.name === "Servicio Valor Agregado";
                              const hoverColor = (isServicesCategory && isManufacturingOrValueAddedOrVAS) 
                                  ? "hover:text-[#00BEEB]" 
                                  : "hover:text-[#fff066]";
                              
                              // Determinar si necesita parámetro de categoría
                              const isNewsCategory = activeCategory === "Noticias" && link.name !== "Todas las noticias";
                              const linkPath = isNewsCategory ? `${link.path}?categoria=${encodeURIComponent(link.name)}` : link.path;
                              
                              return (
                                  <Link
                                      key={idx}
                                      href={linkPath}
                                      onClick={onClose}
                                      className={`text-[22px] font-medium text-white ${hoverColor} transition-colors w-fit`}
                                  >
                                      {link.name}
                                  </Link>
                              );
                          })}
                      </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Footer Desktop Links */}
              <div className="flex justify-between items-end gap-8 pt-8 text-white/40 text-sm border-t border-white/10 mt-8">
                  {/* Language Selector */}
                  <div className="flex gap-4 items-center">
                      <p className="text-[18px] text-white/50">Selecciona tu idioma:</p>
                      <div className="flex gap-5 items-end">
                          <button className="box-border px-0 py-1 border-b-[0.5px] border-solid border-white text-[16px] text-white hover:opacity-70 transition-opacity">
                              Español
                          </button>
                          <button className="px-0 py-1 text-[16px] text-white/50 hover:text-white transition-colors font-[Neue_Augenblick]">
                              Inglés
                          </button>
                      </div>
                  </div>

                  {/* Legal Links */}
                  <div className="flex gap-4">
                      <Link href="/terminos-y-condiciones" onClick={onClose} className="px-0 py-2 hover:text-white transition-colors">Términos y Condiciones</Link>
                      <Link href="/libro-reclamaciones" onClick={onClose} className="px-0 py-2 hover:text-white transition-colors">Libro de Reclamaciones</Link>
                      <Link href="/politicas-de-privacidad" onClick={onClose} className="px-0 py-2 hover:text-white transition-colors">Privacidad</Link>
                      <Link href="/politicas-de-cookies" onClick={onClose} className="px-0 py-2 hover:text-white transition-colors">Políticas de Cookies</Link>
                  </div>
              </div>
           </div>
           
           {/* --- Mobile Layout (lg:hidden) --- */}
           <div className="flex lg:hidden flex-col h-full pt-4 overflow-y-auto">
              {/* Mobile Search */}
              <button
                onClick={onSearchClick}
                className="flex items-center gap-4 text-xl text-white/80 border-b border-white/20 pb-4 mb-4 hover:text-white transition-colors"
              >
                  <Search className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span>Buscar en el sitio...</span>
              </button>

              {/* Menu Items */}
              <div className="flex flex-col gap-6">
                 {menuItems.map(item => {
                    const isOpen = activeCategory === item.title;
                    return (
                    <div key={item.id} className="flex flex-col border-b border-white/10 pb-2">
                       <button
                          onClick={() => setActiveCategory(isOpen ? "" : item.title)}
                          className="flex items-center justify-between text-xl md:text-2xl font-medium py-3"
                       >
                          <div className="flex gap-3">
                             <span className="text-white/40 text-lg">{item.id}</span>
                             <span className={isOpen ? "text-[#fff066]" : "text-white"}>{item.title}</span>
                          </div>
                          <div className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}>
                             <ChevronDown className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                       </button>

                       <AnimatePresence>
                          {isOpen && (
                             <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                             >
                                <div className="flex flex-col gap-4 pl-10 py-4">
                                   {item.items.map((sub, idx) => (
                                      <Link
                                         key={idx}
                                         href={sub.path}
                                         onClick={onClose}
                                         className="text-lg text-gray-300 hover:text-white py-1 block"
                                      >
                                         {sub.name}
                                      </Link>
                                   ))}
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 )})}
              </div>

              {/* Mobile Buttons */}
              <div className="mt-8">
                 {/* Mobile Tracking Button */}
                 <button className="w-full py-4 border border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors mb-4">
                     Tracking de Envíos
                 </button>

                 {/* Mobile Portal de Clientes Button */}
                 <button className="w-full py-4 border border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors mb-8">
                     Portal de Clientes
                 </button>

                 {/* Legal Links Mobile */}
                 <div className="flex flex-col gap-4 text-sm text-white/40 px-2">
                     <Link href="/terminos-y-condiciones" onClick={onClose}>Términos y Condiciones</Link>
                     <Link href="/libro-reclamaciones" onClick={onClose}>Libro de Reclamaciones</Link>
                     <Link href="/politicas-de-privacidad" onClick={onClose}>Privacidad</Link>
                     <Link href="/politicas-de-cookies" onClick={onClose}>Políticas de Cookies</Link>
                 </div>
              </div>
           </div>

        </div>
      </div>

      <AnimatePresence>
        {isCountryPopupOpen && (
          <CountryPopup 
            isOpen={isCountryPopupOpen} 
            onClose={() => setIsCountryPopupOpen(false)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}