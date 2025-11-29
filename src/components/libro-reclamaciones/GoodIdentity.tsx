import React, { useState } from "react";
import { cn } from "../ui/utils";

export function GoodIdentity() {
  const [selectedType, setSelectedType] = useState<"reclamacion" | "queja" | null>(null);

  return (
    <div className="bg-white p-0 md:p-8 rounded-none mb-8">
      <div className="border-b border-gray-100 pb-6 mb-10">
        <h3 className="text-3xl font-medium text-black font-augenblick">Identificación del Bien Contratado</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div>
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">Tipo de Reclamo</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Reclamación Card */}
            <label 
                className={cn(
                    "cursor-pointer group p-6 border rounded-xl transition-all duration-300",
                    selectedType === "reclamacion" 
                        ? "border-black bg-gray-50" 
                        : "border-gray-200 hover:border-gray-400 bg-white"
                )}
                onClick={() => setSelectedType("reclamacion")}
            >
              <div className="flex items-start gap-4">
                <div className="relative flex items-center justify-center w-5 h-5 mt-1 rounded-full border border-gray-300 group-hover:border-black transition-colors shrink-0">
                   <input 
                        type="radio" 
                        name="tipo_reclamo" 
                        className="peer appearance-none w-full h-full opacity-0 absolute" 
                        checked={selectedType === "reclamacion"}
                        onChange={() => setSelectedType("reclamacion")}
                   />
                   <div className="w-2.5 h-2.5 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-xl font-medium block mb-2 text-black">Reclamación</span>
                  <span className="text-sm text-gray-500 leading-relaxed">Desacuerdo relacionado con productos y/o servicios.</span>
                </div>
              </div>
            </label>

            {/* Queja Card */}
            <label 
                className={cn(
                    "cursor-pointer group p-6 border rounded-xl transition-all duration-300",
                    selectedType === "queja" 
                        ? "border-black bg-gray-50" 
                        : "border-gray-200 hover:border-gray-400 bg-white"
                )}
                onClick={() => setSelectedType("queja")}
            >
              <div className="flex items-start gap-4">
                <div className="relative flex items-center justify-center w-5 h-5 mt-1 rounded-full border border-gray-300 group-hover:border-black transition-colors shrink-0">
                   <input 
                        type="radio" 
                        name="tipo_reclamo" 
                        className="peer appearance-none w-full h-full opacity-0 absolute" 
                        checked={selectedType === "queja"}
                        onChange={() => setSelectedType("queja")}
                   />
                   <div className="w-2.5 h-2.5 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-xl font-medium block mb-2 text-black">Queja</span>
                  <span className="text-sm text-gray-500 leading-relaxed">Desacuerdo no relacionado con productos y/o servicios; o, malestar o insatisfacción con la atención al público.</span>
                </div>
              </div>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
}
