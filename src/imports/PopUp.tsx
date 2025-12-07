import svgPaths from "./svg-mb78q7u1ko";

function Plus() {
  return (
    <div className="relative size-full" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Plus">
          <path d="M11.9998 0V24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M0 11.9998H24" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute flex inset-[-3.03%] items-center justify-center">
        <div className="flex-none rotate-[315deg] size-[24px]">
          <Plus />
        </div>
      </div>
    </div>
  );
}

function PeruFlag() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="Peru Flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 48">
        <g clipPath="url(#clip0_261_975)" id="Peru Flag">
          <path d="M0 0H72V48H0V0Z" fill="var(--fill-0, #D91023)" id="Vector" />
          <path d="M24 0H48V48H24V0Z" fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_261_975">
            <rect fill="white" height="48" width="72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Up() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Up">
      <PeruFlag />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">Estas en PERÚ</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Mostramos la información de servicios y contacto de Yobel en tu país.</p>
    </div>
  );
}

function Primary() {
  return (
    <div className="relative rounded-[30px] shrink-0 w-full" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[30.75px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative w-full">
          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">Continuar en Yobel Perú</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
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
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="arrow-right">
      <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
        <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
      <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
        <p className="leading-[24px]">Perú</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Selecciona un país diferente</p>
      <Secundary />
    </div>
  );
}

function AccordionTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Accordion Title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-augenblick leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap underline whitespace-pre">Español</p>
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[8px] relative shrink-0" data-name="Accordion Item">
      <AccordionTitle />
    </div>
  );
}

function AccordionTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Accordion Title">
      <p className="font-augenblick leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Inglés</p>
    </div>
  );
}

function AccordionItem1() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[8px] relative shrink-0" data-name="Accordion Item">
      <AccordionTitle1 />
    </div>
  );
}

function Idiomas() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Idiomas">
      <AccordionItem />
      <AccordionItem1 />
    </div>
  );
}

function Idioma() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Idioma">
      <p className="basis-0 font-['Neue_Augenblick:Medium_Italic',sans-serif] grow italic leading-[18px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(73,73,73,0.5)]">Selecciona el idioma</p>
      <Idiomas />
    </div>
  );
}

function Contenido() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Contenido">
      <Up />
      <Primary />
      <p className="font-augenblick leading-[16px] not-italic relative shrink-0 text-[14px] text-black text-center w-full">O</p>
      <Form />
      <Idioma />
    </div>
  );
}

export default function PopUp() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.5)] relative rounded-[15px] size-full" data-name="Pop up">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-end p-[40px] relative size-full">
          <Icon />
          <Contenido />
        </div>
      </div>
    </div>
  );
}