import svgPaths from "./svg-8xw2ocjntj";

function Icon() {
  return (
    <div className="absolute inset-[20.81%_16.06%_20.86%_17.27%]" data-name="icon">
      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="icon">
            <path d="M0 7.52417H16" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3cf45500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
      <Icon />
    </div>
  );
}

export default function Primary() {
  return (
    <div className="bg-black relative rounded-[18.582px] size-full" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[19.332px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center px-[13.937px] py-[8px] relative size-full">
          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[22px] text-center text-nowrap text-white whitespace-pre">Label</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}