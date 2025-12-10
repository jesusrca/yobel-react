export default function HeroVideo() {
  return (
    <div className="relative size-full" data-name="hero-video">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 object-cover" />
        <div className="absolute bg-[rgba(255,240,102,0.4)] inset-0 mix-blend-multiply" />
        <div className="absolute bg-gradient-to-b from-30% from-[rgba(255,255,255,0)] inset-0 to-[#ffffff]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}