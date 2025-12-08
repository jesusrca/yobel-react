import svgPaths from "./svg-7hvj6be3xy";

function Iso() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Iso">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Iso">
          <path d={svgPaths.p1ef94800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextSecundary() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Secundary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative w-full">
          <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[45px] text-black text-center">Nuestra historia refleja que la excelencia y la innovación forman parte de nuestro ADN.</p>
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
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-[rgba(73,73,73,0.5)] text-center w-full">{`Cada década hemos escrito un nuevo capítulo: de la manufactura de productos de cuidado personal a la gestión integral de cadenas de suministro en Latinoamérica. `}</p>
          <TextSecundary />
        </div>
      </div>
    </div>
  );
}

export default function Phrase() {
  return (
    <div className="relative size-full" data-name="Phrase">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[50px] py-[120px] relative size-full">
          <Iso />
          <Text />
        </div>
      </div>
    </div>
  );
}
