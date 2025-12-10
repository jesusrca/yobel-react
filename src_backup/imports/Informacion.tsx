function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">6 minutos</p>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0" data-name="Items">
      <Secundary />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[min-content]">Tiempo de Lectura</p>
      <Items />
    </div>
  );
}

function Secundary1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Facebook</p>
      </div>
    </div>
  );
}

function Secundary2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">LinkedIn</p>
      </div>
    </div>
  );
}

function Secundary3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Copiar enlace</p>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0" data-name="Items">
      <Secundary1 />
      <Secundary2 />
      <Secundary3 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[min-content]">Síguenos</p>
      <Items1 />
    </div>
  );
}

function Primary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative rounded-[30px] shrink-0" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[30.75px]" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">Contactar un asesor</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Conversemos sobre tu operación</p>
      <Primary />
    </div>
  );
}

export default function Informacion() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative size-full" data-name="Informacion">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-full">Publicado el 12.09.2025</p>
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}