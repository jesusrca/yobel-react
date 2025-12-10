function Secundary() {
  return (
    <div className="h-[233px] relative rounded-[20px] shrink-0 w-full" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] h-[233px] items-start p-[14px] relative w-full">
          <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
            <p className="leading-[24px]">Mensaje</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative size-full" data-name="Form">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">
        <span>{`Descripción detallada `}</span>
        <span className="text-[#59c1e6]">*</span>
      </p>
      <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
        <p className="leading-[22px]">¿Qué ocurrió? ¿Quiénes estuvieron involucrados? ¿Cuándo y dónde? ¿Cómo lo supiste?</p>
      </div>
      <Secundary />
    </div>
  );
}