import svgPaths from "./svg-biijegtt4v";
import imgImage2 from "figma:asset/4c6b3fc2460841a75d34a2639563e0e77451369b.png";
import imgImagen from "figma:asset/2c11ed7a58cb3ef0325d512aa4bd2c853a1335bd.png";
import imgImage6 from "figma:asset/6842ebed972522a9bb42bf40aff6a415553bdaf9.png";
import imgLogoInvimaYobelScmPeruLogistica from "figma:asset/b19c5503ac9f4c4786776ea901fb83713199048b.png";
import imgLogoBpmYobelScmPeruLogistica from "figma:asset/86ca0a2fb7650f7e15d38a40b56539b3851e5fa3.png";
import imgLogoIsoYobelScmPeruLogistica from "figma:asset/67340db8be0f901aac12f6261cc5984d311cf87b.png";
import imgLogoBpaYobelScmPeruLogistica from "figma:asset/9c117b6f027ea4bc446b349b644c8c2e87a56c17.png";
import imgLogoOliverYobelScmPeruLogistica from "figma:asset/e8cbc1b372f893a7c041916680e9c782e39fed62.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[20px] items-end left-[3.47%] not-italic right-[11.32%] text-black top-[calc(50%+348px)] translate-y-[-50%]">
      <p className="leading-[65px] relative shrink-0 text-[65px] w-[773px]">Operador logístico integral en Perú y Latinoamérica</p>
      <p className="leading-[24px] relative shrink-0 text-[22px] w-[407px]">Soluciones de manufactura, almacenamiento, distribución y comercio exterior con cobertura en 9 países de la región.</p>
    </div>
  );
}

function HeroVideo() {
  return (
    <div className="h-[920px] overflow-clip relative shrink-0 w-full" data-name="hero-video">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/694c290cd591acbc7cd45553de123e1fdfccf2f6" />
      </video>
      <Frame1 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[1340px]">
      <div className="h-[46px] relative shrink-0 w-[48px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 46">
            <path d={svgPaths.pff39b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="font-['Neue_Augenblick:Regular',sans-serif] leading-[45px] min-w-full not-italic relative shrink-0 text-[45px] text-black w-[min-content]">
        <p className="mb-0">Impulsamos tu negocio</p>
        <p>Desde emprendedores hasta grandes corporaciones, en Yobel diseñamos servicios flexibles y a medida que eliminan la complejidad del comercio y la logística.</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="search">
          <path d={svgPaths.pd82c980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67278" />
          <path d="M28.0001 28L22.2001 22.2" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67278" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-start justify-between px-0 py-[11px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] h-[26.341px] justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-black w-[238.025px]">
        <p className="leading-[30px]">N°de guía</p>
      </div>
      <Search />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16.728px] items-start relative shrink-0 w-[547px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">¿Dónde está mi envío?</p>
      <Group1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1340px]" data-name="Content">
      <Frame2 />
      <div className="bg-[#d9d9d9] h-[347px] rounded-[20px] shrink-0 w-[660px]" />
    </div>
  );
}

function SurfacePro() {
  return (
    <div className="bg-gradient-to-b from-[#f0de32] from-[25.962%] relative shrink-0 to-[#ffffff] w-full" data-name="Surface Pro 8 - 2">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[100px] items-start justify-end px-[50px] py-[120px] relative w-full">
          <Frame48 />
          <Content />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex gap-[11px] grow items-start leading-[29.116px] min-h-px min-w-px relative shrink-0 text-[36px] text-nowrap whitespace-pre">
      <p className="relative shrink-0">01 /</p>
      <p className="relative shrink-0">Comercio Exterior</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[20px] items-center not-italic relative shrink-0 text-black w-full">
      <Frame12 />
      <div className="basis-0 grow leading-[22px] min-h-px min-w-px opacity-0 relative shrink-0 text-[18px]">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
      <div className="basis-0 grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[18px]">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Item">
      <Frame9 />
      <div className="h-0 relative shrink-0 w-[1340px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
            <path d="M0 0.25H1340" id="Vector 4" stroke="var(--stroke-0, black)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[29.116px] not-italic relative shrink-0 text-[36px] text-[rgba(73,73,73,0.5)] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">02 /</p>
      <p className="relative shrink-0">Manufactura</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[35px] items-start justify-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[29.116px] not-italic relative shrink-0 text-[36px] text-[rgba(73,73,73,0.5)] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">03 /</p>
      <p className="relative shrink-0">Almacenamiento</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[35px] items-start justify-center relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[29.116px] not-italic relative shrink-0 text-[36px] text-[rgba(73,73,73,0.5)] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">04 /</p>
      <p className="relative shrink-0">Distribución</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[35px] items-start justify-center relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[29.116px] not-italic relative shrink-0 text-[36px] text-[rgba(73,73,73,0.5)] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">05 /</p>
      <p className="relative shrink-0">Courier Express</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[35px] items-start justify-center relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[29.116px] not-italic relative shrink-0 text-[36px] text-[rgba(73,73,73,0.5)] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">06 /</p>
      <p className="relative shrink-0">Valor Agregado</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[35px] items-start justify-center relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
      <Item />
      <Frame16 />
      <div className="h-0 relative shrink-0 w-[1340px]">
        <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
            <path d="M0 0.25H1340" id="Vector 3" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
      <div className="h-0 relative shrink-0 w-[1340px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
            <path d="M0 0.5H1340" id="Vector 5" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Frame18 />
      <div className="h-0 relative shrink-0 w-[1340px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
            <path d="M0 0.5H1340" id="Vector 5" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Frame19 />
      <div className="h-0 relative shrink-0 w-[1340px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
            <path d="M0 0.5H1340" id="Vector 5" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <Frame20 />
      <div className="absolute h-[240px] left-[469px] rounded-[30px] top-[-65px] w-[402px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[42px] items-end px-[50px] py-[70px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end px-0 py-[60px] relative shrink-0 w-[1440px]" data-name="Component 7">
      <Component />
    </div>
  );
}

function Imagen() {
  return (
    <div className="content-stretch flex flex-col gap-[850px] items-start relative shrink-0 w-full" data-name="Imagen">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagen} />
      <div className="h-[64.628px] relative shrink-0 w-[1440px]" data-name="Subtract">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 65">
            <path d={svgPaths.p2642d780} fill="var(--fill-0, white)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[64.628px] relative w-[1440px]" data-name="Subtract">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 65">
              <path d={svgPaths.p2642d780} fill="var(--fill-0, #FFF066)" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[61px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Conocemos las exigencias de cada industria. Por eso, diseñamos soluciones integradas y adaptables para sector.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[135px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="font-['Neue_Augenblick:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[45px] text-black w-[432px]">
        <p className="mb-0">En movimiento</p>
        <p className="mb-0">{`concretamos `}</p>
        <p>tus sueños.</p>
      </div>
      <Frame47 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[50px] py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-[320px]">Industrias</p>
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] relative shrink-0 w-full">Belleza y Cuidado Personal</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] relative shrink-0 w-full">Logística de productos alimentarios y bebidas con almacenamiento controlado, cadena de frío y trazabilidad completa.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <Frame25 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Construcción</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Abastecimiento y transporte de materiales, repuestos y maquinaria con planificación operativa y manipulación segura.</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Editorial</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Soluciones logísticas integrales para gestionar y distribuir libros, revistas y publicaciones con cobertura regional, disponibilidad oportuna y eficiencia.</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Farmacéutica</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Flujo logístico de medicamentos, dispositivos y productos de salud con trazabilidad total y conservación controlada.</p>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Hogar</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Cadena de suministro para productos de limpieza, utensilios y artículos domésticos con eficiencia operativa y control de stock.</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Manufactura Industrial</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Logística de insumos, componentes y productos terminados con trazabilidad, continuidad productiva y optimización del flujo operativo.</p>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Calzado y moda</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Gestión de prendas, calzado y accesorios con control por temporada, trazabilidad por colección y preparación según canal de venta.</p>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Químicos</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Operaciones logísticas seguras para sustancias y productos químicos con manipulación especializada y control ambiental para insumos y productos terminados.</p>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Retail</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Abastecimiento integral de tiendas, centros de distribución y plataformas digitales con visibilidad total y entregas confiables.</p>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-col gap-[14px] items-start p-[20px] relative rounded-[40px] shrink-0 w-[320px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[329px] relative rounded-[30px] shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Tecnología y Electrónica</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Flujo logístico de equipos, componentes y dispositivos tecnológicos con trazabilidad por serie y seguridad en cada etapa.</p>
    </div>
  );
}

function Carrousel() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Carrousel">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[6.372px] relative w-[1368px]" data-name="Slider">
      <div className="absolute bottom-0 left-0 right-0 top-[-31.39%]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1368 9">
          <g id="Slider">
            <path d="M0 2V3.5H1368V2V0.5H0V2Z" fill="var(--stroke-0, #494949)" fillOpacity="0.2" />
            <path d="M331 2H633" id="Vector 10" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-center px-[50px] py-0 relative w-full">
          <Carrousel />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#fff066] gap-[60px] items-start px-0 py-[120px] relative shrink-0 to-[#ffffff] w-full">
      <Frame24 />
      <Content1 />
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[22px] text-black text-nowrap whitespace-pre">Conoce más</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pl-[50px] pr-0 py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-black w-[min-content]">Creciendo con nuestros socios y evolucionando cada cadena de suministros.</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16.5px] h-[208px] items-start relative shrink-0 w-[546px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">Años de experiencia real</p>
      <Frame26 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-b font-['Neue_Augenblick:Regular',sans-serif] from-[#090909] from-[55.769%] leading-[126.085px] not-italic relative shrink-0 text-[165px] to-[#59c1e6] w-[660px]" style={{ WebkitTextFillColor: "transparent" }}>
        +50
      </p>
      <Frame27 />
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[22px] text-black text-nowrap whitespace-pre">Conoce más</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pl-[50px] pr-0 py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-black w-[min-content]">Conectamos la región para que tu negocio crezca con una red logística integrada y eficiente.</p>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16.5px] h-[182px] items-start relative shrink-0 w-[546px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">Países en Latinoamérica</p>
      <Frame29 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-b font-['Neue_Augenblick:Regular',sans-serif] from-[#090909] from-[55.769%] leading-[126.085px] not-italic relative shrink-0 text-[165px] to-[#59c1e6] w-[660px]" style={{ WebkitTextFillColor: "transparent" }}>
        +8
      </p>
      <Frame30 />
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[22px] text-black text-nowrap whitespace-pre">Conoce más</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pl-[84px] pr-0 py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-black w-[min-content]">Especializados en logística y unidos para hacer que cada operación funcione con excelencia.</p>
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16.5px] items-start relative shrink-0 w-[544px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">Profesionales</p>
      <Frame31 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-b font-['Neue_Augenblick:Regular',sans-serif] from-[#090909] from-[55.769%] leading-[126.085px] not-italic relative shrink-0 text-[0px] to-[#59c1e6] w-[660px]" style={{ WebkitTextFillColor: "transparent" }}>
        <span className="bg-clip-text bg-gradient-to-b from-[#090909] from-[55.769%] text-[165px] to-[#59c1e6]" style={{ WebkitTextFillColor: "transparent" }}>
          +300
        </span>
        <span className="bg-clip-text bg-gradient-to-b from-[#090909] from-[55.769%] text-[150px] to-[#59c1e6]" style={{ WebkitTextFillColor: "transparent" }}>
          k
        </span>
      </p>
      <Frame32 />
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[22px] text-black text-nowrap whitespace-pre">Conoce más</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pl-[84px] pr-0 py-0 relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[22px] text-black w-[min-content]">Guiando nuestras operaciones para generar un impacto positivo en las comunidades y el planeta.</p>
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16.5px] h-[180px] items-start relative shrink-0 w-[546px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[26px] text-black text-nowrap whitespace-pre">Principios de sostenibilidad</p>
      <Frame33 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-b font-['Neue_Augenblick:Regular',sans-serif] from-[#090909] from-[55.769%] leading-[126.085px] not-italic relative shrink-0 text-[165px] to-[#59c1e6] w-[660px]" style={{ WebkitTextFillColor: "transparent" }}>
        +4
      </p>
      <Frame34 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-[50px] py-[120px] relative w-full">
          <Frame41 />
          <div className="h-0 relative shrink-0 w-[1340px]">
            <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
                <path d="M0 0.25H1340" id="Vector 3" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <Frame42 />
          <div className="h-0 relative shrink-0 w-[1340px]">
            <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
                <path d="M0 0.25H1340" id="Vector 3" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <Frame28 />
          <div className="h-0 relative shrink-0 w-[1340px]">
            <div className="absolute bottom-[-0.25px] left-0 right-0 top-[-0.25px]" style={{ "--stroke-0": "rgba(73, 73, 73, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1340 1">
                <path d="M0 0.25H1340" id="Vector 3" stroke="var(--stroke-0, #494949)" strokeOpacity="0.5" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Marcador() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[320px]" data-name="Marcador">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Certificados</p>
    </div>
  );
}

function Textos() {
  return (
    <div className="basis-0 content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[135px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-black" data-name="Textos">
      <div className="basis-0 grow leading-[45px] min-h-px min-w-px relative shrink-0 text-[45px]">
        <p className="mb-0">Nuestros certificados</p>
        <p>nos respaldan</p>
      </div>
      <p className="leading-[22px] relative shrink-0 text-[18px] w-[433px]">En Yobel contamos con certificaciones internacionales y políticas internas que avalan nuestro compromiso con la excelencia operativa, la sostenibilidad ambiental y la integridad en la gestión logística y de manufactura.</p>
    </div>
  );
}

function Informacion() {
  return (
    <div className="relative shrink-0 w-full" data-name="Información">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[18px] items-start px-[50px] py-0 relative w-full">
          <Marcador />
          <Textos />
        </div>
      </div>
    </div>
  );
}

function Imagenes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Imagenes">
      <div className="flex flex-row justify-center overflow-x-auto overflow-y-clip size-full">
        <div className="box-border content-stretch flex gap-[53px] items-start justify-center px-[24px] py-0 relative w-full">
          <div className="h-[207px] relative shrink-0 w-[208px]" data-name="Logo_Invima_Yobel_SCM_Peru_Logistica">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoInvimaYobelScmPeruLogistica} />
          </div>
          <div className="h-[207px] relative shrink-0 w-[208px]" data-name="Logo_BPM_Yobel_SCM_Peru_Logistica">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoBpmYobelScmPeruLogistica} />
          </div>
          <div className="relative shrink-0 size-[207px]" data-name="Logo_ISO_Yobel_SCM_Peru_Logistica">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoIsoYobelScmPeruLogistica} />
          </div>
          <div className="h-[207px] relative shrink-0 w-[208px]" data-name="Logo_BPA_Yobel_SCM_Peru_Logistica">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoBpaYobelScmPeruLogistica} />
          </div>
          <div className="h-[196px] relative shrink-0 w-[197px]" data-name="Logo_Oliver_Yobel_SCM_Peru_Logistica">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoOliverYobelScmPeruLogistica} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-start overflow-clip px-0 py-[120px] relative shrink-0 w-full">
      <Informacion />
      <Imagenes />
    </div>
  );
}

function Frame35() {
  return <div className="absolute h-[871px] left-0 top-[522px] w-[375px]" />;
}

function Frame10() {
  return (
    <div className="absolute h-[879px] left-[-379px] top-[958px] w-[2198px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2198 879">
        <g id="Frame 50">
          <ellipse cx="1099" cy="346.5" fill="url(#paint0_linear_1_789)" id="Ellipse 9" rx="1099" ry="346.5" />
          <ellipse cx="1099" cy="439.5" fill="url(#paint1_linear_1_789)" id="Ellipse 7" rx="1099" ry="346.5" />
          <ellipse cx="1099" cy="532.5" fill="url(#paint2_linear_1_789)" id="Ellipse 8" rx="1099" ry="346.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_789" x1="1099" x2="1099" y1="0" y2="693">
            <stop stopColor="#31CDFF" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_789" x1="1099" x2="1099" y1="93" y2="786">
            <stop stopColor="#43CEFF" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_789" x1="1099" x2="1099" y1="186" y2="879">
            <stop stopColor="#4DD0FF" />
            <stop offset="0.605769" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Circulos() {
  return (
    <div className="absolute contents left-[-379px] top-[958px]" data-name="Círculos">
      <Frame10 />
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Titulo">
      <div className="font-['Neue_Augenblick:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[45px] text-black w-full">
        <p className="mb-0">¿Tienes algunas preguntas? Encuentra</p>
        <p>tu respuesta</p>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[15px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Up">
      <Titulo />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[9.57%_10%_10.43%_10%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 0V24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          <path d="M0 12H24" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Plus">
      <Icon />
    </div>
  );
}

function AccordionTitle() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-black">¿Puedo rastrear mi envío con Yobel?</p>
      <Plus />
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[50px] py-0 relative shrink-0 w-[547px]" data-name="Text">
      <div className="basis-0 flex flex-col font-['Neue_Augenblick:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(73,73,73,0.5)]">
        <p className="leading-[24px]">{`Sí. Ingresa tu número de guía y obtén el estado 24/7 con notificaciones en tiempo real. `}</p>
      </div>
    </div>
  );
}

function AccordionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Accordion Content">
      <Text />
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16.5px] items-start px-0 py-[36px] relative shrink-0 w-full" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle />
      <AccordionContent />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[49.57%_10%_50.43%_10%]" data-name="Icon">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
          <g id="Icon">
            <path d="M0 0.5H24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Minus() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Minus">
      <Icon1 />
    </div>
  );
}

function AccordionTitle1() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-black">¿Qué sectores atendemos?</p>
      <Minus />
    </div>
  );
}

function AccordionItem1() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[36px] relative shrink-0 w-full" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[49.57%_10%_50.43%_10%]" data-name="Icon">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
          <g id="Icon">
            <path d="M0 0.5H24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Minus1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Minus">
      <Icon2 />
    </div>
  );
}

function AccordionTitle2() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-black">¿Cuál es nuestra cobertura?</p>
      <Minus1 />
    </div>
  );
}

function AccordionItem2() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[36px] relative shrink-0 w-full" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[49.57%_10%_50.43%_10%]" data-name="Icon">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
          <g id="Icon">
            <path d="M0 0.5H24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Minus2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Minus">
      <Icon3 />
    </div>
  );
}

function AccordionTitle3() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-black">¿Hacen entregas same day/next day?</p>
      <Minus2 />
    </div>
  );
}

function AccordionItem3() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[36px] relative shrink-0 w-full" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute inset-[49.57%_10%_50.43%_10%]" data-name="Icon">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
          <g id="Icon">
            <path d="M0 0.5H24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Minus3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Minus">
      <Icon4 />
    </div>
  );
}

function AccordionTitle4() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-black">¿Necesito un volumen mínimo para empezar?</p>
      <Minus3 />
    </div>
  );
}

function AccordionItem4() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[36px] relative shrink-0 w-full" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute inset-[49.57%_10%_50.43%_10%]" data-name="Icon">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
          <g id="Icon">
            <path d="M0 0.5H24" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Minus4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Minus">
      <Icon5 />
    </div>
  );
}

function AccordionTitle5() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
      <p className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-black">¿Qué certificaciones tienen?</p>
      <Minus4 />
    </div>
  );
}

function AccordionItem5() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[36px] relative shrink-0 w-full" data-name="Accordion Item">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <AccordionTitle5 />
    </div>
  );
}

function Preguntas() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[660px]" data-name="Preguntas">
      <AccordionItem />
      <AccordionItem1 />
      <AccordionItem2 />
      <AccordionItem3 />
      <AccordionItem4 />
      <AccordionItem5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[106px] items-start left-[48px] top-[197px] w-[1342px]">
      <Up />
      <Preguntas />
    </div>
  );
}

function Home() {
  return (
    <div className="h-[1273px] relative shrink-0 w-full" data-name="Home">
      <Frame35 />
      <Circulos />
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[196.678px] relative shrink-0 w-[510px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 510 197">
        <g id="Group 15">
          <g id="Group">
            <path d={svgPaths.p11c62a00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3eb73a80} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="Group_2">
              <path d={svgPaths.p35aa3680} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p1f0be600} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p1a4e0200} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
          </g>
          <path d={svgPaths.p2b3d6e00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p278d200} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-white w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] relative shrink-0 text-[16px] w-full">CONTACTO COMERCIAL</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] relative shrink-0 text-[0px] text-[18px] w-full">
        +<span className="not-italic">511 997 593 459</span>
      </p>
    </div>
  );
}

function Informacion1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[468px] items-start relative shrink-0 w-[547px]" data-name="Informacion">
      <Group />
      <div className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="mb-0">{`EN MOVIMIENTO `}</p>
        <p className="mb-0">CONCRETAMOS</p>
        <p>TUS SUEÑOS</p>
      </div>
      <Item1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Sobre Nosotros</p>
      <p className="relative shrink-0 w-full">Presencia Global</p>
      <p className="relative shrink-0 w-full">Nuestra Cultura</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">EMPRESA</p>
      <Item2 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[321px]" data-name="Items">
      <Item3 />
    </div>
  );
}

function Up1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Up">
      <Items />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Comercio Exterior</p>
      <p className="relative shrink-0 w-full">Manufactura</p>
      <p className="relative shrink-0 w-full">Servicio Valor Agregado</p>
      <p className="relative shrink-0 w-full">Almacenamiento</p>
      <p className="relative shrink-0 w-full">Distribución</p>
      <p className="relative shrink-0 w-full">Courier Express</p>
    </div>
  );
}

function Item5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">SERVICIOS</p>
      <Item4 />
    </div>
  );
}

function Items1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item5 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Up1 />
      <Items1 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Ver todas las noticias</p>
      <p className="relative shrink-0 w-full">Insights y Tendencias</p>
      <p className="relative shrink-0 w-full">Innovación y Tecnología</p>
      <p className="relative shrink-0 w-full">Casos de Éxito y Guías Prácticas</p>
    </div>
  );
}

function Item7() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px px-0 py-[16px] relative self-stretch shrink-0" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">NOTICIAS</p>
      <Item6 />
    </div>
  );
}

function Items2() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item7 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Código de Ética</p>
      <p className="relative shrink-0 w-full">Línea de Ética</p>
      <p className="relative shrink-0 w-full">RSE y Sostenibilidad</p>
    </div>
  );
}

function Item9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">ÉTICA Y SOSTENIBILIDAD</p>
      <Item8 />
    </div>
  );
}

function Items3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item9 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Items2 />
      <Items3 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Oficinas</p>
      <p className="relative shrink-0 w-full">Contactar Asesor</p>
      <p className="relative shrink-0 w-full">Trabaja con nosotros</p>
    </div>
  );
}

function Item11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">CONTACTO</p>
      <Item10 />
    </div>
  );
}

function Items4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item11 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Términos y Condiciones</p>
      <p className="relative shrink-0 w-full">Libro de Reclamaciones</p>
      <p className="relative shrink-0 w-full">Políticas de Privacidad</p>
      <p className="relative shrink-0 w-full">Políticas de Cookies</p>
    </div>
  );
}

function Item13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">LEGAL</p>
      <Item12 />
    </div>
  );
}

function Items5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item13 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Items4 />
      <Items5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[784px] items-start relative shrink-0 w-[663px]" data-name="Content">
      <Frame44 />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Contenido() {
  return (
    <div className="content-stretch flex gap-[133px] items-start relative shrink-0 w-full" data-name="Contenido">
      <Informacion1 />
      <Content2 />
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full" data-name="Copyright">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-white w-full">© Yobel Perú</p>
    </div>
  );
}

function Cuerpo() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start overflow-x-clip overflow-y-auto px-0 py-[40px] relative shrink-0 w-[1340px]" data-name="Cuerpo">
      <Contenido />
      <Copyright />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] relative shrink-0 to-[#000000] to-[40.645%] w-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[50px] py-0 relative w-full">
          <Cuerpo />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[35.121px] relative shrink-0 w-[94px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 36">
        <g id="Group 41">
          <path d={svgPaths.p39b272b2} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3696ae00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p242f0b70} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pe0eb480} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p241a2e00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1253cf80} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p1cb69d80} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Localizacion() {
  return (
    <div className="box-border content-stretch flex gap-[12.775px] items-center justify-center px-0 py-[8px] relative shrink-0" data-name="Localización">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[27.874px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">PE</p>
      <div className="h-[6.983px] relative shrink-0 w-[11.324px]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
            <path d={svgPaths.p129f0940} fill="var(--fill-0, black)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute inset-[9.17%_12.25%_10.83%_13.33%]" data-name="icon">
      <div className="absolute inset-[-3.12%_-3.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 26">
          <g id="icon">
            <path d={svgPaths.p2616da40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p112eb780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="user">
      <Icon6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[11.614px] items-center justify-center px-[13.937px] py-[8px] relative rounded-[18.582px] shrink-0">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[25px] not-italic relative shrink-0 text-[23px] text-black text-center text-nowrap whitespace-pre">Tracking</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[11.614px] items-center justify-center px-[13.937px] py-[8px] relative rounded-[18.582px] shrink-0 w-[100px]">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[18.582px]" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[22px] text-black text-center text-nowrap whitespace-pre">Menú</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24.389px] items-center relative shrink-0">
      <Localizacion />
      <User />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] box-border content-stretch flex items-center justify-between left-[50px] px-[30px] py-[10px] rounded-[100px] top-0 w-[1340px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Group2 />
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[82px] relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[111px] items-start left-0 px-0 py-[20px] top-0 w-[1440px]">
      <Frame6 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-[15px] items-center justify-center px-[27px] py-[13.5px] relative rounded-[24px] shrink-0">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[31.5px] text-black text-center text-nowrap whitespace-pre">Chatbot</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[27px] py-[13.5px] relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[31.5px] text-black text-center text-nowrap whitespace-pre">Tracking</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[15px] items-center justify-center px-[27px] py-[13.5px] relative w-full">
          <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[31.5px] text-black text-center text-nowrap whitespace-pre">Contacto</p>
        </div>
      </div>
    </div>
  );
}

function Open() {
  return (
    <div className="content-stretch flex flex-col gap-[16.5px] items-end justify-center opacity-0 relative shrink-0 w-[165px]" data-name="Open">
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Circle() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[68px]" data-name="Circle">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
          <g id="Circle">
            <rect fill="var(--fill-0, white)" fillOpacity="0.4" height="67.5" rx="33.75" width="67.5" x="0.25" y="0.25" />
            <rect height="67.5" rx="33.75" stroke="var(--stroke-0, white)" strokeWidth="0.5" width="67.5" x="0.25" y="0.25" />
            <g id="Ellipse 1"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[6px] items-start ml-[19px] mt-[25px] relative w-[30px]" data-name="Dots">
      <div className="bg-black h-[2px] shrink-0 w-[30px]" />
      <div className="bg-black h-[2px] shrink-0 w-[30px]" />
      <div className="bg-black h-[2px] shrink-0 w-[30px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <Circle />
      <Dots />
    </div>
  );
}

function FabMenu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-end justify-end left-[calc(83.33%+25px)] top-[654px]" data-name="FAB menu">
      <Open />
      <Icon7 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] size-full" data-name="Desktop">
      <FabMenu />
      <HeroVideo />
      <SurfacePro />
      <Component1 />
      <Imagen />
      <Frame40 />
      <Frame49 />
      <Frame36 />
      <Home />
      <Footer />
      <Frame8 />
    </div>
  );
}