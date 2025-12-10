import React from "react";
import { Button } from "../ui/button";

export function LegalDisclaimers() {
  return (
    <>
      {/* Informational Text */}
      <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5">
              <li>La formulación del reclamo no excluye el recurso a otros medios de resolución de controversias ni es un requisito previo para presentar una denuncia ante el Indecopi.</li>
              <li>El proveedor debe responder a la reclamación en un plazo no superior a quince (15) días naturales, pudiendo ampliar el plazo hasta quince días.</li>
              <li>Con la firma de este documento, el cliente autoriza a ser contactado después de la tramitación de la reclamación para evaluar la calidad y satisfacción del proceso de atención de reclamaciones.</li>
          </ul>
      </div>

      {/* Legal & Submit */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black" />
          <p className="text-sm text-gray-600">
            Declaro que soy el dueño del servicio y acepto el contenido de este formulario al declarar bajo Declaración Jurada la veracidad de los hechos descritos.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black" />
          <p className="text-sm text-gray-600">
            He leído y acepto las <a href="#" className="underline text-black">Políticas de Privacidad</a> y el tratamiento de mis datos personales.
          </p>
        </div>

        <div className="pt-4">
          <Button className="bg-black text-white h-auto px-[14px] py-[8px] rounded-[19px] text-[22px] font-medium font-augenblick leading-[24px] hover:bg-gray-800 transition-colors w-full md:w-auto flex items-center justify-center gap-[12px]">
            <span className="whitespace-nowrap relative top-[-1px]">Enviar Reclamación</span>
            <div className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center overflow-hidden">
               <svg className="w-[17px] h-[16px]" fill="none" viewBox="0 0 17 16">
                  <path d="M0 7.52417H16" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M8.85449 0.53033L15.8545 7.53033L8.85449 14.5303" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
               </svg>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
