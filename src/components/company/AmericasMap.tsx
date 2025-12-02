import React from "react";
import { cn } from "../ui/utils";
import svgPaths from "../../imports/svg-4zeb0yuxp4";

interface AmericasMapProps {
  className?: string;
  selected?: string;
  onSelect?: (country: string) => void;
}

// Mapeo de países con sus paths del SVG (basado en el orden en el archivo de Figma)
const countries = [
  { id: 'belize', pathKey: 'pae2bd00', name: 'Belice' },
  { id: 'mexico', pathKey: 'p36651c00', name: 'México' },
  { id: 'guatemala', pathKey: 'p79bf7b0', name: 'Guatemala' },
  { id: 'honduras', pathKey: 'p212dbd80', name: 'Honduras' },
  { id: 'el_salvador', pathKey: 'p36f13b80', name: 'El Salvador' },
  { id: 'nicaragua', pathKey: 'p3f26b080', name: 'Nicaragua' },
  { id: 'costa_rica', pathKey: 'p392a8d80', name: 'Costa Rica' },
  { id: 'panama', pathKey: 'pd67a600', name: 'Panamá' },
  { id: 'venezuela', pathKey: 'p5e46f80', name: 'Venezuela' },
  { id: 'colombia', pathKey: 'p2c10a000', name: 'Colombia' },
  { id: 'ecuador', pathKey: 'p50c0500', name: 'Ecuador' },
  { id: 'peru', pathKey: 'p33ee4700', name: 'Perú' },
  { id: 'brasil', pathKey: 'p10fd1180', name: 'Brasil' },
  { id: 'bolivia', pathKey: 'p144e8a00', name: 'Bolivia' },
  { id: 'paraguay', pathKey: 'p1b096480', name: 'Paraguay' },
  { id: 'chile', pathKey: 'p387de080', name: 'Chile' },
  { id: 'argentina', pathKey: 'p2e1a3080', name: 'Argentina' },
  { id: 'uruguay', pathKey: 'p15642400', name: 'Uruguay' },
  { id: 'guyana', pathKey: 'p228f6100', name: 'Guyana' },
  { id: 'suriname', pathKey: 'p9247300', name: 'Suriname' },
  { id: 'french_guiana', pathKey: 'p3a63c672', name: 'Fr. Guiana' },
];

export function AmericasMap({ className, selected, onSelect }: AmericasMapProps) {
  return (
    <div className={cn("relative w-full h-full select-none", className)}>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F0DE32', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Map Container */}
      <div className="relative w-full h-full aspect-[0.89]">
        {/* Countries Layer */}
        <div className="absolute inset-[0.02%]">
          <div className="absolute inset-[-0.02%]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1393 1562">
              <g>
                {countries.map((country) => {
                  const isSelected = selected === country.id;
                  const pathData = svgPaths[country.pathKey];
                  
                  return (
                    <path
                      key={country.id}
                      d={pathData}
                      className={cn(
                        "transition-all duration-300 cursor-pointer",
                        "stroke-[#444444] stroke-[0.5]",
                        isSelected ? "drop-shadow-lg" : "hover:drop-shadow-md"
                      )}
                      style={
                        isSelected
                          ? { fill: 'url(#yellowGradient)', opacity: 0.64 }
                          : undefined
                      }
                      fill={isSelected ? undefined : "#D1D5DB"}
                      opacity={isSelected ? undefined : "0.64"}
                      strokeMiterlimit="11"
                      onClick={() => onSelect?.(country.id)}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.fill = "#BAE6FD";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.fill = "#D1D5DB";
                        }
                      }}
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        {/* Labels Layer */}
        <div className="absolute inset-[14.02%_17.34%_19.55%_18.07%] pointer-events-none">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 900 1038">
            <g>
              <g id="Group">
                <path d={svgPaths.p3c174f00} fill="black" />
                <path d={svgPaths.p3df5f700} fill="black" />
                <path d={svgPaths.pfd1b200} fill="black" />
                <path d={svgPaths.p6ef4d00} fill="black" />
                <path d={svgPaths.p22e23200} fill="black" />
                <path d={svgPaths.p34de9780} fill="black" />
              </g>
              <g id="Group_2">
                <path d={svgPaths.p17af0800} fill="black" />
                <path d={svgPaths.peb1b4a0} fill="black" />
                <path d={svgPaths.p105c2700} fill="black" />
                <path d={svgPaths.p1ba5a6f0} fill="black" />
                <path d={svgPaths.p2d261c00} fill="black" />
                <path d={svgPaths.pcfa4300} fill="black" />
                <path d={svgPaths.p3c495880} fill="black" />
                <path d={svgPaths.p26b5d000} fill="black" />
                <path d={svgPaths.p406b300} fill="black" />
              </g>
              <g id="Group_3">
                <path d={svgPaths.p3551cb00} fill="black" />
                <path d={svgPaths.p2e3f8900} fill="black" />
                <path d={svgPaths.pfe7980} fill="black" />
                <path d={svgPaths.p289cac00} fill="black" />
                <path d={svgPaths.p245c5200} fill="black" />
                <path d={svgPaths.p38b55400} fill="black" />
              </g>
              <g id="Group_4">
                <path d={svgPaths.p9b6b000} fill="black" />
                <path d={svgPaths.pb9b6480} fill="black" />
                <path d={svgPaths.p7219800} fill="black" />
                <path d={svgPaths.p39f73500} fill="black" />
              </g>
              <g id="Group_5">
                <path d={svgPaths.p20b63cc0} fill="black" />
                <path d={svgPaths.p2b5f1f80} fill="black" />
                <path d={svgPaths.p1070100} fill="black" />
                <path d={svgPaths.p3c828c00} fill="black" />
                <path d={svgPaths.pecc0cb0} fill="black" />
                <path d={svgPaths.p6eb6d80} fill="black" />
                <path d={svgPaths.p2cc2d300} fill="black" />
              </g>
              <g id="Group_6">
                <path d={svgPaths.p3036d400} fill="black" />
                <path d={svgPaths.p3e05c600} fill="black" />
                <path d={svgPaths.p29ef3500} fill="black" />
                <path d={svgPaths.p893ba00} fill="black" />
                <path d={svgPaths.p14513380} fill="black" />
              </g>
              <g id="Group_7">
                <path d={svgPaths.p19658e00} fill="black" />
                <path d={svgPaths.p4e03840} fill="black" />
                <path d={svgPaths.p146106f0} fill="black" />
                <path d={svgPaths.p14ddd000} fill="black" />
                <path d={svgPaths.p1c3d4600} fill="black" />
                <path d={svgPaths.p3a69700} fill="black" />
                <path d={svgPaths.p179e3d00} fill="black" />
                <path d={svgPaths.p22d29400} fill="black" />
                <path d={svgPaths.p227f85f0} fill="black" />
                <path d={svgPaths.p3af7a680} fill="black" />
                <path d={svgPaths.pbe74300} fill="black" />
                <path d={svgPaths.p228f0e00} fill="black" />
                <path d={svgPaths.p1f193e80} fill="black" />
                <path d={svgPaths.pf27aec0} fill="black" />
                <path d={svgPaths.p3bb53380} fill="black" />
                <path d={svgPaths.p34448c00} fill="black" />
                <path d={svgPaths.p1e459500} fill="black" />
                <path d={svgPaths.p2fdb5f80} fill="black" />
              </g>
              <g id="Group_8">
                <path d={svgPaths.p1915fd00} fill="black" />
                <path d={svgPaths.p2512fe80} fill="black" />
                <path d={svgPaths.p36cc1500} fill="black" />
                <path d={svgPaths.p1a9c2df0} fill="black" />
                <path d={svgPaths.p12728400} fill="black" />
                <path d={svgPaths.pe747780} fill="black" />
                <path d={svgPaths.p1ee24f00} fill="black" />
                <path d={svgPaths.pff8b80} fill="black" />
                <path d={svgPaths.p33749600} fill="black" />
                <path d={svgPaths.p4306a00} fill="black" />
              </g>
              <g id="Group_9">
                <path d={svgPaths.p1d72a000} fill="black" />
                <path d={svgPaths.p21b8d400} fill="black" />
                <path d={svgPaths.p7ee7380} fill="black" />
                <path d={svgPaths.p2bc6b00} fill="black" />
                <path d={svgPaths.p1ae7a340} fill="black" />
                <path d={svgPaths.p2bc41300} fill="black" />
                <path d={svgPaths.p2ae42b00} fill="black" />
                <path d={svgPaths.p131ccc00} fill="black" />
              </g>
              <g id="Group_10">
                <path d={svgPaths.p351a4b20} fill="black" />
                <path d={svgPaths.p34c26200} fill="black" />
                <path d={svgPaths.p10b47a00} fill="black" />
                <path d={svgPaths.p7cf1900} fill="black" />
                <path d={svgPaths.p197ae900} fill="black" />
                <path d={svgPaths.p28880cc0} fill="black" />
                <path d={svgPaths.p24d49180} fill="black" />
                <path d={svgPaths.p27f180} fill="black" />
                <path d={svgPaths.p25fe3a00} fill="black" />
                <path d={svgPaths.p179e9f00} fill="black" />
              </g>
              <g id="Group_11">
                <path d={svgPaths.p35f0a640} fill="black" />
                <path d={svgPaths.p1b653700} fill="black" />
                <path d={svgPaths.p81ac600} fill="black" />
                <path d={svgPaths.p37735b80} fill="black" />
                <path d={svgPaths.pefda600} fill="black" />
                <path d={svgPaths.p263f8c00} fill="black" />
                <path d={svgPaths.p92d0ef0} fill="black" />
                <path d={svgPaths.p2de23d00} fill="black" />
                <path d={svgPaths.p19b11ec0} fill="black" />
              </g>
              <g id="Group_12">
                <path d={svgPaths.p22b8b800} fill="black" />
                <path d={svgPaths.p260cab00} fill="black" />
                <path d={svgPaths.p369b7100} fill="black" />
                <path d={svgPaths.p19d31900} fill="black" />
                <path d={svgPaths.p32751340} fill="black" />
                <path d={svgPaths.p20986200} fill="black" />
                <path d={svgPaths.p1b849680} fill="black" />
                <path d={svgPaths.p3bb59c00} fill="black" />
                <path d={svgPaths.p97d5000} fill="black" />
              </g>
              <g id="Group_13">
                <path d={svgPaths.p2b2bfa80} fill="black" />
                <path d={svgPaths.p2b3e2480} fill="black" />
                <path d={svgPaths.pfa11b00} fill="black" />
                <path d={svgPaths.p33318480} fill="black" />
                <path d={svgPaths.p3a7f3f00} fill="black" />
                <path d={svgPaths.p318dcf00} fill="black" />
              </g>
              <path d={svgPaths.p3f33d680} fill="black" opacity="0.64" />
              <path d={svgPaths.p1071af80} fill="black" opacity="0.64" />
              <path d={svgPaths.pac14580} fill="black" opacity="0.64" />
              <path d={svgPaths.p15033600} fill="black" opacity="0.64" />
              <path d={svgPaths.p3fd0be00} fill="black" opacity="0.64" />
              <path d={svgPaths.p125cc080} fill="black" opacity="0.64" />
              <path d={svgPaths.p37897900} fill="black" opacity="0.64" />
              <path d={svgPaths.p36d8ac0} fill="black" opacity="0.64" />
              <path d={svgPaths.p291f1080} fill="black" opacity="0.64" />
              <path d={svgPaths.p1c1a9870} fill="black" opacity="0.64" />
              <path d={svgPaths.p14651d80} fill="black" opacity="0.64" />
              <path d={svgPaths.p1d0bff00} fill="black" opacity="0.64" />
              <path d={svgPaths.p1fc29680} fill="black" opacity="0.64" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
