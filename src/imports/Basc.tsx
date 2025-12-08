const imgImage4 = "https://images.unsplash.com/photo-1529429617124-aee1f1650a5c?auto=format&fit=crop&w=800&q=80";

export default function Basc() {
  return (
    <div className="relative size-full" data-name="basc">
      <div className="absolute h-[280px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[316px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.93%] left-[-25.08%] max-w-none top-[-31.43%] w-[146.58%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}
