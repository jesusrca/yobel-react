import svgPaths from "./svg-v6eyen4vn1";

function Icon() {
  return (
    <div className="relative size-full" data-name="icon">
      <div className="absolute inset-[-2.84%_-8.04%_-2.84%_-5.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
          <g id="icon">
            <path d={svgPaths.p2d159f80} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="opacity-0 overflow-clip relative shrink-0 size-[32px]" data-name="arrow-right">
      <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
        <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative size-full" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
      <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
        <p className="leading-[24px]">Nombre / cargo (si lo conoces)</p>
      </div>
      <ArrowRight />
    </div>
  );
}