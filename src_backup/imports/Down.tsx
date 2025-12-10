function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-solid border-white bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Español</p>
      </div>
    </div>
  );
}

function Secundary1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ingles</p>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Items">
      <Secundary />
      <Secundary1 />
    </div>
  );
}

function Idiomas() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[556px]" data-name="Idiomas">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">Selecciona tu idioma:</p>
      <Items />
    </div>
  );
}

function Secundary2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Términos y Condiciones</p>
      </div>
    </div>
  );
}

function Secundary3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Libro de Reclamaciones</p>
      </div>
    </div>
  );
}

function Secundary4() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Privacidad</p>
      </div>
    </div>
  );
}

function Secundary5() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Políticas de Cookies</p>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Items">
      <Secundary2 />
      <Secundary3 />
      <Secundary4 />
      <Secundary5 />
    </div>
  );
}

export default function Down() {
  return (
    <div className="relative size-full" data-name="Down">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[133px] items-end pb-[20px] pt-0 px-[50px] relative size-full">
          <Idiomas />
          <Items1 />
        </div>
      </div>
    </div>
  );
}