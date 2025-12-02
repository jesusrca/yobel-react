import imgImage2 from "figma:asset/b13a6b3c9e147aad3212494794e1b3c1626e08f6.png";
import imgImage3 from "figma:asset/6af8bafa9e50a9e6692c1a0aace026106868e714.png";
import imgImage4 from "figma:asset/f37459c126bde0309163b689f2ceb43bc081bd60.png";
import imgImage5 from "figma:asset/4c6b3fc2460841a75d34a2639563e0e77451369b.png";
import imgImage6 from "figma:asset/ef749d8cdc32d6b2e190c007c039bf534bdfe8e7.png";

function Marcador() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[320px]" data-name="Marcador">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full">¿Cómo te ayudamos?</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[32px] not-italic relative shrink-0 text-[36px] text-black w-[433px]" data-name="Title">
      <p className="relative shrink-0 text-nowrap whitespace-pre">01 /</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Manufactura y reacondicionado alimentario</p>
    </div>
  );
}

function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ver Servicio</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px opacity-0 relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Procesamos, envasamos y reacondicionamos productos alimenticios y bebidas bajo control sanitario, cumpliendo normas de inocuidad y trazabilidad por lote.</p>
      <Secundary />
    </div>
  );
}

function ItemList() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Item_List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Title />
      <div className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic opacity-0 relative shrink-0 text-[18px] text-black">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
      <Text />
      <div className="absolute h-[240px] left-[433px] opacity-0 rounded-[30px] top-[-69px] w-[402px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[32px] not-italic relative shrink-0 text-[36px] text-black w-[433px]" data-name="Title">
      <p className="relative shrink-0 text-nowrap whitespace-pre">02 /</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Almacenamiento con temperatura controlada</p>
    </div>
  );
}

function Secundary1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ver Servicio</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px opacity-0 relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Contamos con zonas de refrigeración, cuarentena sanitaria y WMS avanzado para monitoreo en tiempo real.</p>
      <Secundary1 />
    </div>
  );
}

function ItemList1() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Item_List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Title1 />
      <div className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic opacity-0 relative shrink-0 text-[18px] text-black">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
      <Text1 />
      <div className="absolute h-[240px] left-[433px] opacity-0 rounded-[30px] top-[-69px] w-[402px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[32px] not-italic relative shrink-0 text-[36px] text-black w-[433px]" data-name="Title">
      <p className="relative shrink-0 text-nowrap whitespace-pre">03 /</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Valor Agregado (VAS)</p>
    </div>
  );
}

function Secundary2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ver Servicio</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px opacity-0 relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Servicios de reempaque, etiquetado nutricional, armado de packs y promociones con control por lote y auditoría.</p>
      <Secundary2 />
    </div>
  );
}

function ItemList2() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Item_List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Title2 />
      <div className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic opacity-0 relative shrink-0 text-[18px] text-black">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
      <Text2 />
      <div className="absolute h-[240px] left-[433px] opacity-0 rounded-[30px] top-[-69px] w-[402px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[32px] not-italic relative shrink-0 text-[36px] text-black w-[433px]" data-name="Title">
      <p className="relative shrink-0 text-nowrap whitespace-pre">04 /</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Distribución y transporte especializado</p>
    </div>
  );
}

function Secundary3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ver Servicio</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px opacity-0 relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Rutas optimizadas para productos perecibles, con entregas programadas B2B y B2C en todo el país.</p>
      <Secundary3 />
    </div>
  );
}

function ItemList3() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Item_List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Title3 />
      <div className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic opacity-0 relative shrink-0 text-[18px] text-black">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
      <Text3 />
      <div className="absolute h-[240px] left-[433px] opacity-0 rounded-[30px] top-[-69px] w-[402px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[11px] items-start leading-[32px] not-italic relative shrink-0 text-[36px] text-black w-[433px]" data-name="Title">
      <p className="relative shrink-0 text-nowrap whitespace-pre">05 /</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Comercio exterior (COMEX)</p>
    </div>
  );
}

function Secundary4() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[4px] relative shrink-0" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid bottom-[-0.25px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Ver Servicio</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px opacity-0 relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Gestión integral de importación/exportación, trámites aduaneros y nacionalización de materias primas y productos terminados.</p>
      <Secundary4 />
    </div>
  );
}

function ItemList4() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center px-0 py-[40px] relative shrink-0 w-full" data-name="Item_List">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Title4 />
      <div className="basis-0 font-['Neue_Augenblick:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic opacity-0 relative shrink-0 text-[18px] text-black">
        <p className="mb-0">Soluciones ágiles para importar y exportar.</p>
        <p>Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.</p>
      </div>
      <Text4 />
      <div className="absolute h-[240px] left-[433px] opacity-0 rounded-[30px] top-[-69px] w-[402px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <ItemList />
      <ItemList1 />
      <ItemList2 />
      <ItemList3 />
      <ItemList4 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Marcador />
      <List />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[42px] items-end px-[50px] py-[60px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function List1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start px-0 py-[60px] relative size-full" data-name="List">
      <Body />
    </div>
  );
}