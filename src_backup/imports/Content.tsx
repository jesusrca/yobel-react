function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-full">Un especialista evaluará tu caso y, en menos de 48 horas, te presentará un flujo integrado de manufactura, almacenamiento y distribución, con acciones rápidas y un roadmap claro para tu negocio.</p>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full" data-name="Content">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[45px] text-black w-[666px]">Encuentra nuestros centros logisticas y oficinas cerca de ti</p>
      <Text />
    </div>
  );
}