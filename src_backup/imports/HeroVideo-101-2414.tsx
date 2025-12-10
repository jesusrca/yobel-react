export default function HeroVideo() {
  return (
    <div className="relative size-full" data-name="hero-video">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/694c290cd591acbc7cd45553de123e1fdfccf2f6" />
      </video>
      <div className="flex flex-col justify-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}