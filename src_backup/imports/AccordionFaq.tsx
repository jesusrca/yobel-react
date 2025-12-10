import svgPaths from "./svg-kxy5rya4t4";

function Minus() {
  return (
    <div className="absolute inset-[49.57%_15%_50.43%_10%]" data-name="Minus">
      <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 2">
          <g id="Minus">
            <path d="M0 0.75H24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
      <Minus />
    </div>
  );
}

function AccordionTitle() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">¿Puedo rastrear mi envío con Yobel?</p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[12.5%_9.83%_14.05%_12.5%]" data-name="icon">
      <div className="absolute bottom-[-3.21%] left-[-2.64%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <g id="icon">
            <path d={svgPaths.p96ac400} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p538ee00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
      <Icon1 />
    </div>
  );
}

function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Rastrear envío</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function AccordionContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[50px] py-0 relative shrink-0 w-[547px]" data-name="Accordion Content">
      <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[22px] text-black w-[min-content]">
        <p className="leading-[24px]">{`Sí. Ingresa tu número de guía y obtén el estado 24/7 con notificaciones en tiempo real. `}</p>
      </div>
      <Secundary />
    </div>
  );
}

export default function AccordionFaq() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[14px] items-start px-0 py-[40px] relative size-full" data-name="Accordion FAQ">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle />
      <AccordionContent />
    </div>
  );
}