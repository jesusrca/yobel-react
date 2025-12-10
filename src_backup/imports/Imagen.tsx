import svgPaths from "./svg-1euews6kv9";
import imgImagen from "figma:asset/adc72d5df3d80c8fdccbc8cfbcf1e923861a2634.png";

export default function Imagen() {
  return (
    <div className="content-stretch flex flex-col gap-[850px] items-start relative size-full" data-name="Imagen">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagen} />
      <div className="h-[64.628px] relative shrink-0 w-[1440px]" data-name="Subtract">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 65">
            <path d={svgPaths.p2642d780} fill="var(--fill-0, white)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[64.628px] relative w-[1440px]" data-name="Subtract">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 65">
              <path d={svgPaths.p2642d780} fill="var(--fill-0, #FFF066)" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}