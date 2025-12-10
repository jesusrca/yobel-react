import svgPaths from "./svg-ooh15vn6z1";
import imgRectangle29 from "figma:asset/245a7d0f66b2a4c07c6f65541bd8759f79b07f71.png";

function Title() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[547px]" data-name="Title">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-black w-[434px]">Indicadores que priorizamos</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[133px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-[547px]">Resultados</p>
      <Title />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="check">
          <path d={svgPaths.p148cd180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px px-0 py-[40px] relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check />
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)] w-[min-content]">
        <span>{`Cumplimiento OTIF 99.6% `}</span>
        <span className="text-black">en entregas.</span>
      </p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="check">
          <path d={svgPaths.p148cd180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px px-0 py-[40px] relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check1 />
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)] w-[min-content]">
        <span>{`Disponibilidad por canal `}</span>
        <span className="text-black">con reposición continua.</span>
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Item />
      <div className="h-[214px] relative shrink-0 w-0" data-name="Separator">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 214">
            <path d="M0.5 0V214" id="Separator" stroke="var(--stroke-0, #494949)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Item1 />
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="check">
          <path d={svgPaths.p148cd180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px px-0 py-[40px] relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check2 />
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)] w-[min-content]">
        <span>{`Trazabilidad total `}</span>
        <span className="text-black">por lote vía WMS.</span>
      </p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="check">
          <path d={svgPaths.p148cd180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px px-0 py-[40px] relative shrink-0" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check3 />
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)] w-[min-content]">
        <span>{`Lead time optimizado `}</span>
        <span className="text-black">para mantener frescura y rotación.</span>
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[660px]" data-name="Row">
      <Item2 />
      <div className="h-[214px] relative shrink-0 w-0" data-name="Separator">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 214">
            <path d="M0.5 0V214" id="Separator" stroke="var(--stroke-0, #494949)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Item3 />
    </div>
  );
}

function GridCards() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[660px]" data-name="Grid cards">
      <Row />
      <Row1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[133px] items-end relative shrink-0 w-[1340px]" data-name="Content">
      <div className="h-[347px] opacity-0 relative shrink-0 w-[547px]">
        <img alt="" className="block max-w-none size-full" height="347" src={imgRectangle29} width="547" />
      </div>
      <GridCards />
    </div>
  );
}

export default function Numbers() {
  return (
    <div className="bg-white relative size-full" data-name="Numbers">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-center px-[50px] py-[120px] relative size-full">
          <Title1 />
          <Content />
        </div>
      </div>
    </div>
  );
}