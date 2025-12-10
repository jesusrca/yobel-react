function TextSecundary() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Secundary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[45px] text-center text-white">Nos movemos para crear y entregar soluciones que impulsen el crecimiento de nuestros aliados, convencidos de que pensar con visión, transformar con acción y lograr con excelencia es la manera de construir confianza.</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-[112px] py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-[rgba(255,255,255,0.5)] text-center w-full">Propósito</p>
          <TextSecundary />
        </div>
      </div>
    </div>
  );
}

function Phrase() {
  return (
    <div className="relative shrink-0 w-full" data-name="Phrase">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[50px] py-[120px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function TextSecundary1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Secundary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[45px] text-center text-white">Crear y entregar soluciones integrales de logística y manufactura que respondan a necesidades reales, combinando innovación, eficiencia y personalización para generar experiencias memorables que impulsen el propósito de nuestros aliados y el compromiso de nuestro equipo.</p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-[112px] py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-[rgba(255,255,255,0.5)] text-center w-full">Misión</p>
          <TextSecundary1 />
        </div>
      </div>
    </div>
  );
}

function Phrase1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Phrase">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[50px] py-[120px] relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function TextSecundary2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Secundary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[45px] text-center text-white">Ser la empresa más confiable e innovadora de la región en soluciones de logística y manufactura, ampliando nuestra cobertura, integrando nuevas tecnologías y liderando la sostenibilidad en la cadena de suministro.</p>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-[112px] py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-[rgba(255,255,255,0.5)] text-center w-full">Visión</p>
          <TextSecundary2 />
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[12px] relative rounded-[30px] shrink-0" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-0.75px] pointer-events-none rounded-[30.75px]" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Nuestra Historia</p>
    </div>
  );
}

function Phrase2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Phrase">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[50px] py-[120px] relative w-full">
          <Text2 />
          <Primary />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#090909] content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Phrase />
      <Phrase1 />
      <Phrase2 />
    </div>
  );
}