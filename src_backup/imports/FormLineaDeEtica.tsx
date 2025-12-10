import svgPaths from "./svg-g5xrwg20uz";

function Marcador() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full lg:w-[547px]" data-name="Marcador">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full">Línea de Ética</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full lg:w-[547px]" data-name="Title">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[35px] md:text-[45px] text-black w-full">01 / Tipo de Reporte</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[133px] items-start relative shrink-0 w-full max-w-[1340px]" data-name="Text">
      <Marcador />
      <Title />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col font-['Neue_Augenblick:Medium',sans-serif] gap-[8px] items-center justify-center not-italic relative shrink-0 w-full" data-name="Item">
      <p className="leading-[18px] relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-full">Contacto Comercial</p>
      <p className="leading-[24px] relative shrink-0 text-[0px] text-[22px] text-black w-full">+511 997 593 459</p>
    </div>
  );
}

function Secundary() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Facebook</p>
      </div>
    </div>
  );
}

function Secundary1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">LinkedIn</p>
      </div>
    </div>
  );
}

function Secundary2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start px-0 py-[8px] relative shrink-0" data-name="Secundary">
      <div className="flex flex-col font-['Neue_Augenblick:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Instagram</p>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0" data-name="Items">
      <Secundary />
      <Secundary1 />
      <Secundary2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="Item">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] w-[min-content]">Síguenos</p>
      <Items />
    </div>
  );
}

function Informacion() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full lg:w-[547px]" data-name="Informacion">
      <Item />
      <Item1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Icon">
            <circle cx="10.5" cy="10.5" id="Radio" r="10" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Radiobutton() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Radiobutton">
      <Icon />
    </div>
  );
}

function CheckboxAndLabel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Radiobutton />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Con mis datos</p>
    </div>
  );
}

function RadioField() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-[340px]" data-name="Radio Field">
      <CheckboxAndLabel />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Icon">
            <circle cx="10.5" cy="10.5" id="Radio" r="10" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Radiobutton1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Radiobutton">
      <Icon1 />
    </div>
  );
}

function CheckboxAndLabel1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Radiobutton1 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Anónima</p>
    </div>
  );
}

function RadioField1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-[340px]" data-name="Radio Field">
      <CheckboxAndLabel1 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="List">
      <RadioField />
      <RadioField1 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Check">
          <path d={svgPaths.p36924b00} id="Icon" stroke="var(--stroke-0, #59C1E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-black opacity-0 relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-[24px]">
        <Check />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function DescriptionRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Description Row">
      <Checkbox />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)]">Si eliges “Anónima”, no solicitaremos información personal.</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
        <span>{`¿Deseas reportar de forma anónima o identificada? `}</span>
        <span className="text-[#59c1e6]">*</span>
      </p>
      <List />
      <DescriptionRow />
    </div>
  );
}

function CheckboxStyle() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle />
    </div>
  );
}

function CheckboxAndLabel2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox1 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Corrupción / soborno</p>
    </div>
  );
}

function CheckboxField() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel2 />
    </div>
  );
}

function CheckboxStyle1() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle1 />
    </div>
  );
}

function CheckboxAndLabel3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox2 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Fraude / malversación</p>
    </div>
  );
}

function CheckboxField1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel3 />
    </div>
  );
}

function CheckboxStyle2() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle2 />
    </div>
  );
}

function CheckboxAndLabel4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox3 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Acoso / discriminación</p>
    </div>
  );
}

function CheckboxField2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel4 />
    </div>
  );
}

function CheckboxStyle3() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle3 />
    </div>
  );
}

function CheckboxAndLabel5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox4 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Seguridad y salud (HSE)</p>
    </div>
  );
}

function CheckboxField3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel5 />
    </div>
  );
}

function CheckboxStyle4() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle4 />
    </div>
  );
}

function CheckboxAndLabel6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox5 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Privacidad y datos personales</p>
    </div>
  );
}

function CheckboxField4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel6 />
    </div>
  );
}

function CheckboxStyle5() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle5 />
    </div>
  );
}

function CheckboxAndLabel7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox6 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Conflicto de interés</p>
    </div>
  );
}

function CheckboxField5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel7 />
    </div>
  );
}

function CheckboxStyle6() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle6 />
    </div>
  );
}

function CheckboxAndLabel8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox7 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Conducta inapropiada / ética</p>
    </div>
  );
}

function CheckboxField6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel8 />
    </div>
  );
}

function CheckboxStyle7() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle7 />
    </div>
  );
}

function CheckboxAndLabel9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox8 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Medio ambiente / sostenibilidad</p>
    </div>
  );
}

function CheckboxField7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel9 />
    </div>
  );
}

function CheckboxStyle8() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle8 />
    </div>
  );
}

function CheckboxAndLabel10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox9 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Robo / pérdida de activos</p>
    </div>
  );
}

function CheckboxField8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel10 />
    </div>
  );
}

function CheckboxStyle9() {
  return (
    <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]" data-name="Checkbox/Style4">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Checkbox">
      <CheckboxStyle9 />
    </div>
  );
}

function CheckboxAndLabel11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Checkbox10 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Otro (específicar)</p>
    </div>
  );
}

function Secundary3() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Secundary">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0" />
      <div className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
        <p className="leading-[24px]">Especificar</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="relative shrink-0 w-full" data-name="Field">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[50px] py-0 relative w-full">
          <Secundary3 />
        </div>
      </div>
    </div>
  );
}

function CheckboxField9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel11 />
      <Field />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <CheckboxField />
      <CheckboxField1 />
      <CheckboxField2 />
      <CheckboxField3 />
      <CheckboxField4 />
      <CheckboxField5 />
      <CheckboxField6 />
      <CheckboxField7 />
      <CheckboxField8 />
      <CheckboxField9 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
        <span>{`Categoría del reporte `}</span>
        <span className="text-[#59c1e6]">*</span>
      </p>
      <List1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Icon">
            <circle cx="10.5" cy="10.5" id="Radio" r="10" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Radiobutton2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Radiobutton">
      <Icon2 />
    </div>
  );
}

function CheckboxAndLabel12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Radiobutton2 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">Si</p>
    </div>
  );
}

function RadioField2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-[340px]" data-name="Radio Field">
      <CheckboxAndLabel12 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Icon">
            <circle cx="10.5" cy="10.5" id="Radio" r="10" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Radiobutton3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Radiobutton">
      <Icon3 />
    </div>
  );
}

function CheckboxAndLabel13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Checkbox and Label">
      <Radiobutton3 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">No</p>
    </div>
  );
}

function RadioField3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-[340px]" data-name="Radio Field">
      <CheckboxAndLabel13 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="List">
      <RadioField2 />
      <RadioField3 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Check">
          <path d={svgPaths.p36924b00} id="Icon" stroke="var(--stroke-0, #59C1E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="bg-black opacity-0 relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-[24px]">
        <Check1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function DescriptionRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Description Row">
      <Checkbox11 />
      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)]">Si respondes “Sí”, te mostraremos los canales HSE de contacto inmediato.</p>
    </div>
  );
}

function Form2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
        <span>{`¿Existe riesgo inmediato para la seguridad o la salud? `}</span>
        <span className="text-[#59c1e6]">*</span>
      </p>
      <List2 />
      <DescriptionRow1 />
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Fields">
      <Form />
      <Form1 />
      <Form2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute inset-[20.81%_16.06%_20.86%_17.27%]" data-name="icon">
      <div className="absolute bottom-[-3.79%] left-0 right-[-3.78%] top-[-3.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="icon">
            <path d="M0 7.52417H16" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3cf45500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
      <Icon4 />
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-black relative rounded-[40px] shrink-0 w-full" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[40.75px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative w-full">
          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Siguiente paso</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

function Form3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[547px]" data-name="Form">
      <Fields />
      <Primary />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[133px] items-start lg:items-end relative shrink-0 w-full max-w-[1340px]" data-name="Content">
      <Informacion />
      <Form3 />
    </div>
  );
}

export default function FormLineaDeEtica() {
  return (
    <div className="relative w-full" data-name="Form-Línea de ética">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center px-[20px] md:px-[50px] py-[60px] md:py-[120px] relative w-full">
          <Text />
          <Content />
        </div>
      </div>
    </div>
  );
}