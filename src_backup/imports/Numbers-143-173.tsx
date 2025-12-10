import svgPaths from "./svg-eofntd37v5";
import imgRectangle29 from "figma:asset/0e8ef5b66e816058eb0c8d43e027124cb6461e57.png";

function Title() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[547px]" data-name="Title">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-black w-[434px]">Indicadores que priorizamos</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[133px] items-center relative shrink-0 w-full" data-name="Title">
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
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[40px] relative shrink-0 w-[547px]" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check />
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)]">
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
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[40px] relative shrink-0 w-[547px]" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check1 />
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)]">
        <span>{`Disponibilidad por canal `}</span>
        <span className="text-black">con reposición continua.</span>
      </p>
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
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[40px] relative shrink-0 w-[547px]" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check2 />
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)]">
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
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[40px] relative shrink-0 w-[547px]" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Check3 />
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)]">
        <span>{`Lead time optimizado `}</span>
        <span className="text-black">para mantener frescura y rotación.</span>
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[133px] items-end relative shrink-0 w-[1340px]" data-name="Content">
      <div className="h-[347px] relative shrink-0 w-[547px]">
        <img alt="" className="block max-w-none size-full" height="347" src={imgRectangle29} width="547" />
      </div>
      <List />
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