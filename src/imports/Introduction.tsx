import svgPaths from "./svg-lteuacjx2u";

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center not-italic pb-[160px] pt-[260px] px-[50px] relative text-center w-full">
          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[351px]">Insights y Tendencias</p>
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[67px] relative shrink-0 text-[65px] text-black w-[773px]">¿Cómo elegir un operador logístico que se adapte a tu industria?</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-full" data-name="icon">
      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="icon">
            <path d="M0 7.52417H16" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3cf45500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Left">
      <div className="absolute flex inset-[20.81%_16.06%_20.86%_17.27%] items-center justify-center">
        <div className="flex-none h-[14px] rotate-[180deg] w-[16px]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center justify-center left-[51px] p-[16px] rounded-[40px] top-[147px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[40.75px]" />
      <Left />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">Regresar a Noticias</p>
    </div>
  );
}

export default function Introduction() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full" data-name="Introduction">
      <Title />
      <Primary />
    </div>
  );
}