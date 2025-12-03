import svgPaths from "./svg-uiulag2vlv";
import img2BellesaCuiPersonal1 from "figma:asset/9c0d9760c07ea0839629b15d82a01182a11d78ea.png";
import img2BellesaCuiPersonal2 from "figma:asset/97eceda1bec1a50a9bc361d6f3d438625aa57e22.png";
import img2BellesaCuiPersonal3 from "figma:asset/d299e598b38834a762fcd6d4699cd6993bbdba13.png";
import img2BellesaCuiPersonal4 from "figma:asset/2251e28d99c2444657eaaaa76969ff500dbb73d7.png";
import img2BellesaCuiPersonal5 from "figma:asset/701693f610ecfa23c1025f6e2f898012635bf153.png";
import img2BellesaCuiPersonal6 from "figma:asset/8d6587b0f5d20c39c0c2a3377eaed76a697e775b.png";
import img2BellesaCuiPersonal7 from "figma:asset/e610a1ad60154b0dd8442f1f9641e96fa0ad5f29.png";
import img2BellesaCuiPersonal8 from "figma:asset/c050a26717101af0d8f0cb39354656274be02136.png";
import img2BellesaCuiPersonal9 from "figma:asset/74d74235ea9965c374f56a39a88e5d60fa00a261.png";

function Icon() {
  return (
    <div className="relative size-full" data-name="icon">
      <div className="absolute inset-[-2.84%_-8.04%_-2.84%_-5.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
          <g id="icon">
            <path d={svgPaths.p2d159f80} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="arrow-right">
      <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
        <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
      <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
        <p className="leading-[24px]">Todas las categorías</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[547px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Categorías</p>
      <Secundary />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-full" data-name="icon">
      <div className="absolute inset-[-2.84%_-8.04%_-2.84%_-5.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
          <g id="icon">
            <path d={svgPaths.p2d159f80} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="arrow-right">
      <div className="absolute flex inset-[36.67%_21.67%_34.17%_20%] items-center justify-center">
        <div className="flex-none h-[18.667px] rotate-[90deg] w-[9.333px]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Secundary1() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
      <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
        <p className="leading-[24px]">Diciembre 2025</p>
      </div>
      <ArrowRight1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[547px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Fecha</p>
      <Secundary1 />
    </div>
  );
}

function Filtro() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Filtro">
      <Form />
      <Form1 />
    </div>
  );
}

function Textos() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">¿Cómo elegir un operador logístico que se adapte a tu industria?</p>
        </div>
      </div>
    </div>
  );
}

function Textos1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">¿Cuándo tercerizar procesos de manufactura y por qué?</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal1} />
      </div>
      <Textos1 />
    </div>
  );
}

function Textos2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">¿Qué tecnologías están transformando la gestión logística en LATAM?</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia1() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal2} />
      </div>
      <Textos2 />
    </div>
  );
}

function Textos3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">Creación de packs promocionales para marca líder en cuidado personal, reduciendo el tiempo de llegada al mercado en un 40%.</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia2() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal3} />
      </div>
      <Textos3 />
    </div>
  );
}

function Textos4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">Exportación ágil de productos de consumo hacia LATAM y EE.UU.</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia3() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-full left-[-43.66%] max-w-none top-0 w-[164.23%]" src={img2BellesaCuiPersonal4} />
        </div>
      </div>
      <Textos4 />
    </div>
  );
}

function Textos5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">Implementación de última milla para retail en provincias.</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia4() {
  return (
    <div className="[grid-area:2_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal5} />
      </div>
      <Textos5 />
    </div>
  );
}

function Textos6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">Última milla para belleza en Lima: qué KPI seguir para vender más y devolver menos</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal6} />
      </div>
      <Textos6 />
    </div>
  );
}

function Component() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Component">
      <CardNoticia5 />
    </div>
  );
}

function Textos7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">Reacondicionamiento y reempaque para exportación de productos de higiene industrial.</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal7} />
      </div>
      <Textos7 />
    </div>
  );
}

function Component1() {
  return (
    <div className="[grid-area:3_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Component">
      <CardNoticia6 />
    </div>
  );
}

function Textos8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textos">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[16px] items-start not-italic px-[20px] py-0 relative w-full">
          <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] text-nowrap whitespace-pre">Publicado el 12.09.2025</p>
          <p className="leading-[24px] min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">DIGEMID en 2025: checklist para importar y etiquetar cosméticos en Perú</p>
        </div>
      </div>
    </div>
  );
}

function CardNoticia7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card Noticia">
      <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal8} />
      </div>
      <Textos8 />
    </div>
  );
}

function Component2() {
  return (
    <div className="[grid-area:3_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Component">
      <CardNoticia7 />
    </div>
  );
}

function Row() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[1702px] relative shrink-0 w-[1339px]" data-name="Row">
      <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card Noticia">
        <div className="h-[400px] relative rounded-[20px] shrink-0 w-[433px]" data-name="2_bellesa_cui-personal 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img2BellesaCuiPersonal9} />
        </div>
        <Textos />
      </div>
      <CardNoticia />
      <CardNoticia1 />
      <CardNoticia2 />
      <CardNoticia3 />
      <CardNoticia4 />
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-center min-h-px min-w-px opacity-60 px-0 py-px relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">{`Página 1 de  9 (101 noticias)`}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-full" data-name="icon">
      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="icon">
            <path d="M0 7.52417H16" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3cf45500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-left">
      <div className="absolute flex inset-[20.81%_16.06%_20.86%_17.27%] items-center justify-center">
        <div className="flex-none h-[14px] rotate-[180deg] w-[16px]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[8px] relative rounded-[20px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px]" />
      <ArrowLeft />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[20.81%_16.06%_20.86%_17.27%]" data-name="icon">
      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="icon">
            <path d="M0 7.52417H16" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3cf45500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
      <Icon3 />
    </div>
  );
}

function Primary1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center px-[14px] py-[8px] relative rounded-[20px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px]" />
      <ArrowRight2 />
    </div>
  );
}

function Slider() {
  return (
    <div className="content-stretch flex gap-[20px] h-[40px] items-center justify-end relative w-[430px]" data-name="Slider">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Primary />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Primary1 />
        </div>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full" data-name="Filter">
      <Text />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-start pb-[160px] pt-[60px] px-[50px] relative size-full">
          <Filtro />
          <Row />
          <Filter />
        </div>
      </div>
    </div>
  );
}