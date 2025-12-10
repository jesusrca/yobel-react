import svgPaths from "./svg-vr8jsk0xw0";

function Logo() {
  return (
    <div className="absolute h-[428.172px] left-[3.47%] right-[16.94%] top-[259.83px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1146 429">
        <g id="Logo">
          <path d={svgPaths.p1f03c100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3a953300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p80eae80} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p15cbed00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p19fc3880} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pf09d400} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p2c34d100} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[134px] items-start not-italic relative shrink-0 text-black w-full" data-name="Text">
      <p className="leading-[67px] relative shrink-0 text-[65px] w-[773px]">Con más de 50 años de experiencia en Latinoamérica</p>
      <p className="leading-[24px] relative shrink-0 text-[22px] w-[320px]">En Yobel impulsamos tu negocio con soluciones de logística y manufactura que integran innovación, eficiencia y cercanía, generando valor real en cada etapa de la cadena de suministro.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start justify-end left-[50px] top-[780px] w-[1227px]" data-name="Container">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[351px]">Sobre Nosotros</p>
      <Text />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative size-full" data-name="HERO">
      <div className="absolute bg-[#a7e370] bottom-0 h-[1123px] left-1/2 translate-x-[-50%] w-[1440px]" />
      <Logo />
      <Container />
    </div>
  );
}