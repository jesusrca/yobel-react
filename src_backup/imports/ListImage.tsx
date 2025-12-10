import imgImage2 from "figma:asset/188b5403cfad247086e7d5b3ee2d0d391e5be8a2.png";

function Marcador() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[431px]" data-name="Marcador">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full">Iniciativas destacadas</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Medium',sans-serif] gap-[11px] items-start leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap w-[433px] whitespace-pre" data-name="Title">
      <p className="relative shrink-0">01 /</p>
      <p className="relative shrink-0">Ruteo inteligente en Lima/Callao</p>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black">Menos kilómetros en vacío y menor consumo energético por entrega</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Title />
      <Text />
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-0 py-[40px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Content />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Medium',sans-serif] gap-[11px] items-start leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap w-[433px] whitespace-pre" data-name="Title">
      <p className="relative shrink-0">02 /</p>
      <p className="relative shrink-0">Embalajes retornables</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black">Ciclo de uso prolongado y menor desperdicio en VAS y distribución.</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Title1 />
      <Text1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-0 py-[40px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Content1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Medium',sans-serif] gap-[11px] items-start leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap w-[433px] whitespace-pre" data-name="Title">
      <p className="relative shrink-0">03 /</p>
      <p className="relative shrink-0">Valorización en CD</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black">Segregación en origen y convenios de reciclaje por categoría.</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Title2 />
      <Text2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-0 py-[40px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Content2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Medium',sans-serif] gap-[11px] items-start leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap w-[433px] whitespace-pre" data-name="Title">
      <p className="relative shrink-0">04 /</p>
      <p className="relative shrink-0">Voluntariado logístico</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black">Donaciones y reparto coordinado en campañas y emergencias.</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Title3 />
      <Text3 />
    </div>
  );
}

function Item3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-0 py-[40px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(73,73,73,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Content3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[660px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function ListImage() {
  return (
    <div className="content-stretch flex gap-[133px] items-center overflow-clip relative shrink-0 w-full" data-name="List + image">
      <List />
      <div className="h-[606px] relative rounded-[30px] shrink-0 w-[527px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

export default function ListImage1() {
  return (
    <div className="relative size-full" data-name="List + image">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start px-[50px] py-[120px] relative size-full">
          <Marcador />
          <ListImage />
        </div>
      </div>
    </div>
  );
}