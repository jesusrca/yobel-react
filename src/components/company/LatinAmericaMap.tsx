import React from "react";
import { cn } from "../ui/utils";
import svgPaths from "../../imports/svg-6briph23qk";

interface LatinAmericaMapProps {
  className?: string;
  selected?: string;
  onSelect?: (country: string) => void;
}

const countries = [
  { 
    id: 'brasil', 
    path: svgPaths.p3f0f0, 
    viewBox: "0 0 261 263", 
    inset: "bottom-[32.63%] left-[27.26%] right-0 top-[12.57%]" 
  },
  { 
    id: 'ecuador', 
    path: svgPaths.p73a9400, 
    viewBox: "0 0 40 46", 
    inset: "inset-[20.31%_76.32%_70.31%_12.73%]" 
  },
  { 
    id: 'venezuela', 
    path: svgPaths.p1640d9f0, 
    viewBox: "0 0 103 85", 
    inset: "inset-[2.29%_46.38%_80.28%_25.19%]" 
  },
  { 
    id: 'chile', 
    path: svgPaths.p19e5d900, 
    viewBox: "0 0 46 262", 
    inset: "bottom-0 left-[32.13%] right-[55.42%] top-[45.57%]" 
  },
  { 
    id: 'argentina', 
    path: svgPaths.p12638db0, 
    viewBox: "0 0 101 228", 
    inset: "inset-[51.16%_36.44%_1.36%_35.46%]" 
  },
  { 
    id: 'peru', 
    path: svgPaths.p36a62b00, 
    viewBox: "0 0 89 121", 
    inset: "inset-[21.73%_62.3%_53.28%_12.96%]" 
  },
  { 
    id: 'uruguay', 
    path: svgPaths.p2f5e05c0, 
    viewBox: "0 0 30 33", 
    inset: "inset-[62.27%_36.27%_30.95%_55.61%]" 
  },
  { 
    id: 'paraguay', 
    path: svgPaths.p35665100, 
    viewBox: "0 0 51 55", 
    inset: "inset-[47.56%_37.34%_41.17%_48.81%]" 
  },
  { 
    id: 'bolivia', 
    path: svgPaths.p39567680, 
    viewBox: "0 0 78 88", 
    inset: "inset-[34.54%_42.54%_47.24%_35.88%]" 
  },
  { 
    id: 'guyana', 
    path: svgPaths.pd68fb71, 
    viewBox: "0 0 31 32", 
    inset: "inset-[11.51%_34.59%_82.1%_57.15%]" 
  },
  { 
    id: 'suriname', 
    path: svgPaths.pdb51b00, 
    viewBox: "0 0 37 55", 
    inset: "inset-[7.49%_39.71%_81.26%_50.43%]" 
  },
  { 
    id: 'french_guiana', 
    path: svgPaths.p294793f0, 
    viewBox: "0 0 17 9", 
    inset: "inset-[92.54%_43.83%_5.87%_51.83%]" 
  },
  { 
    id: 'colombia', 
    path: svgPaths.p38c32400, 
    viewBox: "0 0 87 122", 
    inset: "inset-[1.98%_60.31%_72.82%_15.7%]" 
  },
  { 
    id: 'panama', 
    path: svgPaths.p845a180, 
    viewBox: "0 0 21 27", 
    inset: "inset-[12.13%_29.97%_82.54%_64.57%]" 
  }
];

export function LatinAmericaMap({ className, selected, onSelect }: LatinAmericaMapProps) {
  // Map of office availability to style differently if needed, 
  // but for now we'll treat all selectable.
  
  return (
    <div className={cn("relative w-full h-full aspect-[0.8] select-none", className)}>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F0DE32', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Shapes */}
      {countries.map((country) => {
        const isSelected = selected === country.id;
        
        return (
          <div 
            key={country.id}
            className={cn(
              "absolute transition-all duration-300 cursor-pointer group",
              country.inset
            )}
            onClick={() => onSelect?.(country.id)}
          >
            <div className="absolute inset-[-1%] w-[102%] h-[102%]">
              <svg 
                className={cn(
                  "block w-full h-full transition-all duration-300",
                  "fill-gray-200 stroke-white stroke-[0.5]",
                  "hover:fill-sky-200 hover:scale-[1.02]",
                  isSelected && "z-10 scale-[1.02] drop-shadow-lg stroke-yellow-600/30"
                )}
                style={isSelected ? { fill: 'url(#yellowGradient)' } : undefined}
                preserveAspectRatio="none" 
                viewBox={country.viewBox}
              >
                <path d={country.path} vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
        );
      })}

      {/* Labels */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <p className="absolute font-['Tahoma',sans-serif] inset-[36.46%_23.11%_59.15%_65.42%] leading-[normal] text-[clamp(10px,2vw,17px)] text-black/80">Brasil</p>
        <p className="absolute bottom-[74.43%] left-0 right-[86.85%] top-[22.23%] font-['Tahoma',sans-serif] leading-[normal] text-[clamp(8px,1.5vw,13px)] text-black/80">Ecuador</p>
        <p className="absolute font-['Tahoma',sans-serif] inset-[5.74%_51.18%_90.71%_31.19%] leading-[normal] text-[clamp(8px,1.5vw,14px)] text-black/80">Venezuela</p>
        <div className="absolute flex inset-[67.49%_66.1%_24.99%_27.08%] items-center justify-center">
          <div className="flex-none h-[18px] rotate-[281.818deg] w-[33px]">
            <p className="font-['Tahoma',sans-serif] leading-[normal] relative text-[clamp(8px,1.6vw,15px)] text-black/80">Chile</p>
          </div>
        </div>
        <p className="absolute font-['Tahoma',sans-serif] inset-[68.38%_43.52%_28.07%_39.69%] leading-[normal] text-[clamp(8px,1.5vw,14px)] text-black/80">Argentina</p>
        <p className="absolute font-['Tahoma',sans-serif] inset-[36.15%_66.8%_60.29%_25.36%] leading-[normal] text-[clamp(8px,1.5vw,14px)] text-black/80">Peru</p>
        <div className="absolute flex inset-[68.46%_25.51%_21.65%_62.04%] items-center justify-center">
          <div className="flex-none h-[16px] rotate-[48.47deg] w-[48.999px]">
            <p className="font-['Tahoma',sans-serif] leading-[normal] relative text-[clamp(8px,1.4vw,13px)] text-black/80">Uruguay</p>
          </div>
        </div>
        <div className="absolute flex inset-[47.11%_37.2%_42.46%_49.48%] items-center justify-center">
          <div className="flex-none h-[16px] rotate-[47.492deg] w-[53.001px]">
            <p className="font-['Tahoma',sans-serif] leading-[normal] relative text-[clamp(8px,1.4vw,13px)] text-black/80">Paraguay</p>
          </div>
        </div>
        <p className="absolute font-['Tahoma',sans-serif] inset-[43.83%_48.67%_52.62%_40.14%] leading-[normal] text-[clamp(8px,1.5vw,14px)] text-black/80">Bolivia</p>
        <div className="absolute flex inset-[1.53%_25.15%_88.05%_61.11%] items-center justify-center">
          <div className="flex-none h-[15.999px] rotate-[314.165deg] w-[53.998px]">
            <p className="font-['Tahoma',sans-serif] leading-[normal] relative text-[clamp(8px,1.4vw,13px)] text-black/80">Suriname</p>
          </div>
        </div>
        <div className="absolute bottom-[90.92%] flex items-center justify-center left-[54.76%] right-[33.69%] top-0">
          <div className="flex-none h-[16px] rotate-[311.875deg] w-[44px]">
            <p className="font-['Tahoma',sans-serif] leading-[normal] relative text-[clamp(8px,1.4vw,13px)] text-black/80">Guyana</p>
          </div>
        </div>
        <p className="absolute font-['Tahoma',sans-serif] inset-[14.16%_63.74%_82.29%_20.31%] leading-[normal] text-[clamp(8px,1.5vw,14px)] text-black/80">Colombia</p>
        <div className="absolute flex inset-[3.32%_18.62%_86.26%_67.64%] items-center justify-center">
          <div className="flex-none h-[15.999px] rotate-[314.165deg] w-[53.998px]">
            <p className="font-['Tahoma',sans-serif] leading-[normal] relative text-[clamp(8px,1.4vw,13px)] text-black/80">Fr.Guiana</p>
          </div>
        </div>
      </div>
    </div>
  );
}