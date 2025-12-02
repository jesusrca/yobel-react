import React, { useState } from "react";

interface CheckboxItemProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

function CheckboxItem({ label, checked = false, onChange }: CheckboxItemProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]">
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            {checked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            )}
          </div>
        </div>
        <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
          {label}
        </p>
      </div>
    </div>
  );
}

interface RadioItemProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

function RadioItem({ label, checked = false, onChange }: RadioItemProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <input
              type="radio"
              checked={checked}
              onChange={onChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="absolute inset-[-2.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <circle cx="10.5" cy="10.5" r="10" stroke="black" fill="none" />
                {checked && <circle cx="10.5" cy="10.5" r="5" fill="black" />}
              </svg>
            </div>
          </div>
        </div>
        <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function OptimizedReportForm() {
  const [reportType, setReportType] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [hasImmediateRisk, setHasImmediateRisk] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const reportCategories = [
    "Corrupción / soborno",
    "Fraude / malversación",
    "Acoso / discriminación",
    "Seguridad y salud (HSE)",
    "Privacidad y datos personales",
    "Conflicto de interés",
    "Uso indebido de activos",
    "Incumplimiento regulatorio",
    "Medio ambiente",
    "Otra"
  ];

  const toggleCategory = (category: string) => {
    setCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center px-[20px] md:px-[50px] py-[60px] md:py-[120px] relative w-full">
          
          {/* Header */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[133px] items-start relative shrink-0 w-full max-w-[1340px]">
            <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full lg:w-[547px]">
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full">
                Línea de Ética
              </p>
            </div>
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full lg:w-[547px]">
              <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[35px] md:text-[45px] text-black w-full">
                01 / Tipo de Reporte
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[133px] items-start relative shrink-0 w-full max-w-[1340px]">
            <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full lg:w-[547px]">
              {/* Información del canal */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-full">
                  Este canal es confidencial, permite reportes anónimos y prohíbe cualquier represalia por denuncias hechas de buena fe.
                </p>
              </div>
            </div>

            {/* Forms */}
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[547px]">
              
              {/* Report Type */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                  <span>¿Deseas reportar de forma anónima o identificada? </span>
                  <span className="text-[#59c1e6]">*</span>
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <RadioItem 
                    label="Anónima" 
                    checked={reportType === "anonymous"}
                    onChange={() => setReportType("anonymous")}
                  />
                  <RadioItem 
                    label="Identificada" 
                    checked={reportType === "identified"}
                    onChange={() => setReportType("identified")}
                  />
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full mt-2">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)]">
                    Si respondes "Sí", te mostraremos los canales HSE de contacto inmediato.
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                  <span>Categoría del reporte </span>
                  <span className="text-[#59c1e6]">*</span>
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {reportCategories.map((category) => (
                    <CheckboxItem
                      key={category}
                      label={category}
                      checked={categories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                  ))}
                </div>
              </div>

              {/* Immediate Risk */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                  <span>¿Existe riesgo inmediato para la seguridad o la salud? </span>
                  <span className="text-[#59c1e6]">*</span>
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <RadioItem 
                    label="Si" 
                    checked={hasImmediateRisk === "yes"}
                    onChange={() => setHasImmediateRisk("yes")}
                  />
                  <RadioItem 
                    label="No" 
                    checked={hasImmediateRisk === "no"}
                    onChange={() => setHasImmediateRisk("no")}
                  />
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full mt-2">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)]">
                    Si respondes "Sí", te mostraremos los canales HSE de contacto inmediato.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                  <span>Descripción del incidente </span>
                  <span className="text-[#59c1e6]">*</span>
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe lo sucedido con el mayor detalle posible..."
                  className="w-full min-h-[200px] p-4 border border-black rounded-[4px] font-['Neue_Augenblick:Medium',sans-serif] text-[16px] text-black resize-vertical focus:outline-none focus:ring-2 focus:ring-[#59c1e6]"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button className="w-full bg-black text-white font-['Neue_Augenblick:Medium',sans-serif] text-[18px] py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Enviar Reporte
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}