import React from "react";

export function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[600px] max-h-[920px] w-full overflow-hidden bg-gray-900 font-sans">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          src="https://circular.ws/yobel/fondo-horizontal.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="absolute bottom-28 left-[5%] right-[5%] z-10 max-w-[1340px] mx-auto">
        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-20 text-white">
          <h1 className="font-[Neue_Augenblick] text-4xl md:text-6xl lg:text-[65px] leading-none font-normal max-w-[900px] drop-shadow-md tracking-tight">
            Yobel, el movimiento que impulsa tu negocio
          </h1>
          <p className="text-lg md:text-xl lg:text-[22px] leading-normal max-w-[600px] drop-shadow-md mb-2 opacity-90 font-[Neue_Augenblick]">
            Tecnología, talento y experiencia para que tu cadena de suministro avance sin límites
          </p>
        </div>
      </div>
    </div>
  );
}
