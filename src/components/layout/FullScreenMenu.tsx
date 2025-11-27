import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import svgPaths from "../../imports/svg-rnhxen6aun";

interface FullScreenMenuProps {
  onClose: () => void;
}

export function FullScreenMenu({ onClose }: FullScreenMenuProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black text-white overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-center px-4 pt-8 pb-4">
        <div className="w-full max-w-[1340px] flex items-center justify-between">
            {/* Logo */}
            <div className="h-[35px] w-[94px] relative">
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
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 md:gap-8">
                {/* Country */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <span className="text-[22px]">PE</span>
                  <svg className="w-[11px] h-[7px]" viewBox="0 0 11 7" fill="none">
                      <path d={svgPaths.p3478d380} fill="white" />
                  </svg>
                </div>

                {/* User */}
                <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                  <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                      <path d={svgPaths.p2616da40} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p112eb780} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Search Icon */}
                <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d={svgPaths.p1621a072} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24.75 24.75L18.95 18.95" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 px-4 py-2 border-[1.5px] border-white rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  <span className="text-[22px] font-medium leading-none">Cerrar</span>
                </button>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center px-4 mt-8 md:mt-16 pb-20">
         <div className="w-full max-w-[1340px] flex flex-col">
            
            {/* Search Input */}
            <div className="max-w-[547px] mb-16 md:mb-24">
               <h2 className="text-lg text-white/50 mb-4">¿Dónde está mi envío?</h2>
               <div className="relative border-b border-white/20 pb-2">
                  <div className="flex justify-between items-center">
                     <input 
                       type="text" 
                       placeholder="N° de guía" 
                       className="bg-transparent border-none text-[26px] text-white placeholder-white focus:outline-none w-full"
                     />
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="cursor-pointer">
                        <path d={svgPaths.pd82c980} stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.0001 28L22.2001 22.2" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
                
                {/* Column 1: Servicios + Ética */}
                <div className="flex flex-col gap-12">
                    {/* Servicios */}
                    <div>
                       <h3 className="text-lg text-white/50 mb-6">SERVICIOS</h3>
                       <ul className="flex flex-col gap-3">
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                            <Link to="/servicios/comercio-exterior" onClick={onClose}>Comercio Exterior</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                            <Link to="/servicios/manufactura" onClick={onClose}>Manufactura</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                            <Link to="/servicios/valor-agregado" onClick={onClose}>Servicio Valor Agregado</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                            <Link to="/servicios/almacenamiento" onClick={onClose}>Almacenamiento</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/servicios/distribucion" onClick={onClose}>Distribución</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/servicios/courier-express" onClick={onClose}>Courier Express</Link>
                          </li>
                       </ul>
                    </div>

                    {/* Ética */}
                    <div>
                       <h3 className="text-lg text-white/50 mb-6">ÉTICA Y SOSTENIBILIDAD</h3>
                       <ul className="flex flex-col gap-3">
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/etica/codigo-de-etica" onClick={onClose}>Código de Ética</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/etica/linea-de-etica" onClick={onClose}>Línea de Ética</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/etica/rse-sostenibilidad" onClick={onClose}>RSE y Sostenibilidad</Link>
                          </li>
                       </ul>
                    </div>
                </div>

                {/* Column 2: Empresa + Noticias */}
                <div className="flex flex-col gap-12">
                    {/* Empresa */}
                    <div>
                       <h3 className="text-lg text-white/50 mb-6">EMPRESA</h3>
                       <ul className="flex flex-col gap-3">
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/empresa/sobre-nosotros" onClick={onClose}>Sobre Nosotros</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/empresa/presencia-global" onClick={onClose}>Presencia Global</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/empresa/historia" onClick={onClose}>Historia</Link>
                          </li>
                       </ul>
                    </div>

                    {/* Noticias */}
                    <div>
                       <h3 className="text-lg text-white/50 mb-6">NOTICIAS</h3>
                       <ul className="flex flex-col gap-3">
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Ver todas las noticias</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Insights y Tendencias</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Innovación y Tecnología</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Casos de Éxito y Guías Prácticas</Link>
                          </li>
                       </ul>
                    </div>
                </div>

                {/* Column 3: Contacto + Legal */}
                <div className="flex flex-col gap-12">
                    {/* Contacto */}
                    <div>
                       <h3 className="text-lg text-white/50 mb-6">CONTACTO</h3>
                       <ul className="flex flex-col gap-3">
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/contacto" onClick={onClose}>Oficinas</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/contacto" onClick={onClose}>Contactar Asesor</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="/contacto" onClick={onClose}>Trabaja con nosotros</Link>
                          </li>
                       </ul>
                    </div>

                    {/* Legal */}
                    <div>
                       <h3 className="text-lg text-white/50 mb-6">LEGAL</h3>
                       <ul className="flex flex-col gap-3">
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Términos y Condiciones</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Libro de Reclamaciones</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Políticas de Privacidad</Link>
                          </li>
                          <li className="text-[22px] hover:text-blue-400 transition-colors">
                             <Link to="#" onClick={onClose}>Políticas de Cookies</Link>
                          </li>
                       </ul>
                    </div>
                </div>

            </div>
         </div>
      </div>
    </motion.div>
  );
}
