import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import svgPaths from "../../imports/svg-1hie16nw8a";
import { cn } from "../ui/utils";
import { useCountry } from "../../contexts/CountryContext";
import { getCountryCode } from "../../utils/countryUtils";

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
  const location = useLocation();
  
  // Determine the initial active category based on current path
  const determineActiveCategory = () => {
    const path = location.pathname;
    
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
  
  // Update active category when menu opens with current page
  useEffect(() => {
    setActiveCategory(determineActiveCategory());
  }, [location.pathname]);
  
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
                {/* Portal de Clientes Button - Desktop */}
                <button className="hidden md:block px-4 py-2 text-[23px] text-white hover:opacity-70">Portal de Clientes</button>

                {/* Country (Hidden on small mobile if crowded, but let's keep it) */}
                <div className="hidden sm:flex items-center gap-2 cursor-pointer">
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

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-[1340px] mx-auto px-[20px] md:px-[50px] pb-[100px] pt-4">
           
           {/* --- Desktop Layout (lg:flex) --- */}
           <div className="hidden lg:flex w-full h-full min-h-[600px]">
              {/* Left Col: Categories */}
              <div className="w-[400px] xl:w-[547px] flex flex-col gap-8 pt-8">
                 {menuItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="group flex items-center gap-2 cursor-pointer"
                        onClick={() => setActiveCategory(item.title)}
                    >
                        <span className={cn(
                            "text-[24px] font-medium transition-colors duration-300",
                            activeCategory === item.title 
                                ? "bg-gradient-to-r from-[#fff066] to-white bg-clip-text text-transparent" 
                                : "text-white"
                        )}>
                            {item.id} /
                        </span>
                        <span className={cn(
                            "text-[24px] font-medium transition-colors duration-300 border-b-[1.5px] border-transparent group-hover:border-white",
                            activeCategory === item.title 
                                ? "bg-gradient-to-r from-[#fff066] to-white bg-clip-text text-transparent" 
                                : "text-white"
                        )}>
                            {item.title}
                        </span>
                    </div>
                 ))}
              </div>

              {/* Right Col: Subitems */}
              <div className="flex-1 pl-20 pt-10 border-l border-white/10 ml-12">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {activeItemsDesktop.map((link, idx) => (
                            <Link 
                                key={idx} 
                                to={link.path}
                                onClick={onClose}
                                className="text-[32px] font-light text-white hover:text-[#fff066] transition-colors w-fit"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
           
           {/* Footer Desktop Links */}
           <div className="hidden lg:flex justify-end gap-8 mt-20 text-white/40 text-sm">
                <Link to="/terminos-y-condiciones" onClick={onClose} className="hover:text-white transition-colors">Términos y Condiciones</Link>
                <Link to="/libro-reclamaciones" onClick={onClose} className="hover:text-white transition-colors">Libro de Reclamaciones</Link>
                <Link to="/politicas-de-privacidad" onClick={onClose} className="hover:text-white transition-colors">Privacidad</Link>
                <Link to="/politicas-de-cookies" onClick={onClose} className="hover:text-white transition-colors">Políticas de Cookies</Link>
           </div>


           {/* --- Mobile Layout (lg:hidden) --- */}
           <div className="flex lg:hidden flex-col gap-6 pt-4">
              {/* Mobile Search */}
              <button 
                onClick={onSearchClick} 
                className="flex items-center gap-4 text-xl text-white/80 border-b border-white/20 pb-4 mb-4 hover:text-white transition-colors"
              >
                  <Search className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span>Buscar en el sitio...</span>
              </button>

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
                                      to={sub.path} 
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

              {/* Mobile Tracking Button */}
              <button className="mt-8 w-full py-4 border border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors">
                  Tracking de Envíos
              </button>

              {/* Mobile Portal de Clientes Button */}
              <button className="w-full py-4 border border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-colors">
                  Portal de Clientes
              </button>
              
              {/* Legal Links Mobile */}
              <div className="flex flex-col gap-4 mt-12 text-sm text-white/40 px-2">
                  <Link to="/terminos-y-condiciones" onClick={onClose}>Términos y Condiciones</Link>
                  <Link to="/libro-reclamaciones" onClick={onClose}>Libro de Reclamaciones</Link>
                  <Link to="/politicas-de-privacidad" onClick={onClose}>Privacidad</Link>
                  <Link to="/politicas-de-cookies" onClick={onClose}>Políticas de Cookies</Link>
              </div>
           </div>

        </div>
      </div>
    </motion.div>
  );
}