export default function Primary() {
  return (
    <div className="relative rounded-[30px] size-full" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[30.75px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">Label</p>
        </div>
      </div>
    </div>
  );
}