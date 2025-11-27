import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-biijegtt4v";
import { FullScreenMenu } from "./FullScreenMenu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-white/50 backdrop-blur-md border border-white/50 rounded-full px-8 py-2 flex items-center justify-between w-full max-w-[1340px] shadow-sm h-[68px]">
          {/* Logo */}
          <a href="/" className="h-[30px] w-[80px] relative block hover:opacity-70 transition-opacity">
            <svg className="w-full h-full" viewBox="0 0 94 36" fill="none">
                <g>
                  <path d={svgPaths.p39b272b2} fill="black" />
                  <path d={svgPaths.p3696ae00} fill="black" />
                  <path d={svgPaths.p242f0b70} fill="black" />
                  <path d={svgPaths.pe0eb480} fill="black" />
                  <path d={svgPaths.p241a2e00} fill="black" />
                  <path d={svgPaths.p1253cf80} fill="black" />
                  <path d={svgPaths.p1cb69d80} fill="black" />
                </g>
            </svg>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            {/* Lang */}
            <details className="relative group">
                <summary className="flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-lg text-black">PE</span>
                    <svg className="w-3 h-2 group-open:rotate-180 transition-transform" viewBox="0 0 12 7" fill="none">
                      <path d={svgPaths.p129f0940} fill="black" />
                    </svg>
                </summary>
                <div className="absolute top-full right-0 mt-6 w-64 bg-white rounded-[20px] shadow-2xl border border-gray-100 p-5 flex flex-col gap-3 z-50">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 px-2">Selecciona ubicación</div>
                    
                    <button className="text-left px-4 py-3 rounded-xl bg-gray-50 text-black font-medium flex justify-between items-center ring-1 ring-black/5 hover:bg-gray-100 transition-colors">
                        Perú <span className="text-[11px] font-bold bg-black text-white px-2 py-0.5 rounded-full">ES</span>
                    </button>
                    
                    <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 font-medium flex justify-between items-center transition-colors">
                        Global <span className="text-[11px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">EN</span>
                    </button>

                    <button className="text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 font-medium flex justify-between items-center transition-colors">
                        Chile <span className="text-[11px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">ES</span>
                    </button>
                </div>
            </details>

            {/* User Icon */}
            <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                    <path d={svgPaths.p2616da40} stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p112eb780} stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-[23px] text-black hover:opacity-70">Tracking</button>
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="px-4 py-2 rounded-full border-[1.5px] border-black text-[22px] text-black hover:bg-black hover:text-white transition-colors"
                >
                  Menú
                </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && <FullScreenMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
