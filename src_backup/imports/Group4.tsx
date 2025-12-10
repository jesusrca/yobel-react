export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white border border-[#b8b8b8] border-solid h-[106px] left-0 rounded-[15px] top-0 w-[660px]" />
      <p className="absolute font-['Neue_Augenblick:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[22px] text-[rgba(73,73,73,0.5)] top-[23px] w-[620px]">
        <span className="text-[#7e7b7b]">Integridad y ética:</span>
        <span className="text-black">{` Hacemos lo correcto, incluso cuando nadie nos ve.`}</span>
      </p>
    </div>
  );
}