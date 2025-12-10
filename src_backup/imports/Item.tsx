import svgPaths from "./svg-btto8t5kja";

function Icon() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
      <div className="absolute inset-[-2.13%_-2.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 111">
          <g id="Icon">
            <path d={svgPaths.p1471ab00} id="Vector" stroke="url(#paint0_linear_101_1058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5" />
            <path d={svgPaths.p3dea9000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_101_1058" x1="49.875" x2="49.875" y1="49.875" y2="108.083">
              <stop />
              <stop offset="1" stopColor="#59C1E6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="overflow-clip relative size-[127px]" data-name="lock">
      <Icon />
    </div>
  );
}

function Box() {
  return (
    <div className="h-[127px] relative shrink-0 w-[660px]" data-name="Box">
      <div className="absolute flex items-center justify-center left-0 size-[127px] top-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Lock />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pl-[50px] pr-0 py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-black w-[min-content]">Cumplimos altos estándares internacionales en gestión, seguridad y control de procesos, garantizando operaciones confiables en toda la cadena de suministro.</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[546px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[36px] text-black text-nowrap whitespace-pre">Seguridad y calidad</p>
      <Content />
    </div>
  );
}

export default function Item() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full" data-name="Item">
      <Box />
      <Frame />
    </div>
  );
}