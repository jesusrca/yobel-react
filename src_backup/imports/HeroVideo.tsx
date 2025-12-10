function Frame() {
  return (
    <div className="content-stretch flex font-['Neue_Augenblick:Regular',sans-serif] gap-[40px] items-start not-italic relative shrink-0 text-black w-full">
      <p className="leading-[65px] relative shrink-0 text-[65px] w-[773px]">Importación, exportación y gestión aduanera</p>
      <p className="leading-[24px] relative shrink-0 text-[22px] w-[316px]">Soluciones de importación y exportación rápidas, seguras y a tu medida..</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[50px] top-[696px] w-[1227px]">
      <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[18px] text-black w-[351px]">Comercio Exterior</p>
      <Frame />
    </div>
  );
}

export default function HeroVideo() {
  return (
    <div className="relative size-full" data-name="hero-video">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 object-cover" />
        <div className="absolute bg-[rgba(255,240,102,0.4)] inset-0 mix-blend-multiply" />
        <div className="absolute bg-gradient-to-b from-30% from-[rgba(255,255,255,0)] inset-0 to-[#ffffff]" />
      </div>
      <Frame1 />
    </div>
  );
}