import svgPaths from "./svg-wm177np9sn";

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

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-white w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] relative shrink-0 text-[16px] w-full">CONTACTO COMERCIAL</p>
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] relative shrink-0 text-[0px] text-[18px] w-full">
        +<span className="not-italic">511 997 593 459</span>
      </p>
    </div>
  );
}

function Informacion() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[468px] items-start relative shrink-0 w-[547px]" data-name="Informacion">
      <Group />
      <div className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="mb-0">{`EN MOVIMIENTO `}</p>
        <p className="mb-0">CONCRETAMOS</p>
        <p>TUS SUEÑOS</p>
      </div>
      <Item />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Sobre Nosotros</p>
      <p className="relative shrink-0 w-full">Presencia Global</p>
      <p className="relative shrink-0 w-full">Nuestra Cultura</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">EMPRESA</p>
      <Item1 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[321px]" data-name="Items">
      <Item2 />
    </div>
  );
}

function Up() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Up">
      <Items />
    </div>
  );
}

function Item3() {
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

function Item4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">SERVICIOS</p>
      <Item3 />
    </div>
  );
}

function Items1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Up />
      <Items1 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Ver todas las noticias</p>
      <p className="relative shrink-0 w-full">Insights y Tendencias</p>
      <p className="relative shrink-0 w-full">Innovación y Tecnología</p>
      <p className="relative shrink-0 w-full">Casos de Éxito y Guías Prácticas</p>
    </div>
  );
}

function Item6() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px px-0 py-[16px] relative self-stretch shrink-0" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">NOTICIAS</p>
      <Item5 />
    </div>
  );
}

function Items2() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item6 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Código de Ética</p>
      <p className="relative shrink-0 w-full">Línea de Ética</p>
      <p className="relative shrink-0 w-full">RSE y Sostenibilidad</p>
    </div>
  );
}

function Item8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">ÉTICA Y SOSTENIBILIDAD</p>
      <Item7 />
    </div>
  );
}

function Items3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Items2 />
      <Items3 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Oficinas</p>
      <p className="relative shrink-0 w-full">Contactar Asesor</p>
      <p className="relative shrink-0 w-full">Trabaja con nosotros</p>
    </div>
  );
}

function Item10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">CONTACTO</p>
      <Item9 />
    </div>
  );
}

function Items4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item10 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Regular',sans-serif] gap-[14px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.5)] w-full" data-name="Item">
      <p className="relative shrink-0 w-full">Términos y Condiciones</p>
      <p className="relative shrink-0 w-full">Libro de Reclamaciones</p>
      <p className="relative shrink-0 w-full">Políticas de Privacidad</p>
      <p className="relative shrink-0 w-full">Políticas de Cookies</p>
    </div>
  );
}

function Item12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full">LEGAL</p>
      <Item11 />
    </div>
  );
}

function Items5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items">
      <Item12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Items4 />
      <Items5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[784px] items-start relative shrink-0 w-[663px]" data-name="Content">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Contenido() {
  return (
    <div className="content-stretch flex gap-[133px] items-start relative shrink-0 w-full" data-name="Contenido">
      <Informacion />
      <Content />
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full" data-name="Copyright">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-white w-full">© Yobel SCM Perú</p>
    </div>
  );
}

function Cuerpo() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[40px] relative shrink-0 w-[1340px]" data-name="Cuerpo">
      <Contenido />
      <Copyright />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] relative size-full to-[#000000] to-[40.645%]" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[50px] py-0 relative size-full">
          <Cuerpo />
        </div>
      </div>
    </div>
  );
}