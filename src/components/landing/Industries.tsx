import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import imgWarehouse from "figma:asset/d507ec513ebf701c67ceec058a95047f4353b881.png";
import imgProduction from "figma:asset/1d572db1870691a1a016c8d5eca9b8435b8b8918.png";
import imgScanning from "figma:asset/d56ded74011b0f21c7600fc7891c848944165ffe.png";
import imgPharma from "figma:asset/c90f14dfdbaa2aa55fb1d7c09e10dc950d57ddd7.png";
import imgChemicals from "figma:asset/93e8fecf0b866b17f193287487427a7f4706db04.png";
import imgBeauty from "figma:asset/103d8d197de9e955ee51566da3442fee34ea9897.png";
import imgCalzado from "figma:asset/d2c9f3240507d2ef782b76eeeddd5ceefb0e5a3f.png";
import imgRetail from "figma:asset/3018caa8c33f0bce1611ac9d4b39efd1e291cae3.png";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { SectionHeading } from "../ui/typography";
import { cn } from "../ui/utils";

const industries = [
  {
    title: "Belleza y Cuidado Personal",
    description: "Cadena de suministro integral para cosméticos, fragancias y productos de cuidado personal, con trazabilidad completa y control sanitario.",
    image: imgBeauty,
    path: "/industrias/belleza-y-cuidado-personal",
  },
  {
    title: "Alimentos y Bebidas",
    description: "Logística de productos alimentarios y bebidas con almacenamiento controlado, cadena de frío y trazabilidad completa.",
    image: imgProduction,
    path: "/industrias/alimentos-y-bebidas",
  },
  {
    title: "Construcción",
    description: "Abastecimiento y transporte de materiales, repuestos y maquinaria con planificación operativa y manipulación segura.",
    image: imgWarehouse,
    path: "/industrias/construccion",
  },
  {
    title: "Editorial",
    description: "Soluciones logísticas integrales para gestionar y distribuir libros, revistas y publicaciones con cobertura regional, disponibilidad oportuna y eficiencia.",
    image: imgScanning,
    path: "/industrias/editorial",
  },
  {
    title: "Farmacéutica",
    description: "Flujo logístico de medicamentos, dispositivos y productos de salud con trazabilidad total y conservación controlada.",
    image: imgPharma,
    path: "/industrias/farmaceutica",
  },
  {
    title: "Hogar",
    description: "Cadena de suministro para productos de limpieza, utensilios y artículos domésticos con eficiencia operativa y control de stock.",
    image: imgBeauty,
    path: "/industrias/cuidado-del-hogar",
  },
  {
    title: "Manufactura Industrial",
    description: "Logística de insumos, componentes y productos terminados con trazabilidad, continuidad productiva y optimización del flujo operativo.",
    image: imgWarehouse,
    path: "/industrias/manufactura-industrial",
  },
  {
    title: "Calzado y moda",
    description: "Gestión de prendas, calzado y accesorios con control por temporada, trazabilidad por colección y preparación según canal de venta.",
    image: imgCalzado,
    path: "/industrias/calzado-y-moda",
  },
  {
    title: "Químicos",
    description: "Operaciones logísticas seguras para sustancias y productos químicos con manipulación especializada y control ambiental para insumos y productos terminados.",
    image: imgChemicals,
    path: "/industrias/quimica",
  },
  {
    title: "Retail",
    description: "Abastecimiento integral de tiendas, centros de distribución y plataformas digitales con visibilidad total y entregas confiables.",
    image: imgRetail,
    path: "/industrias/retail",
  },
  {
    title: "Tecnología y Electrónica",
    description: "Flujo logístico de equipos, componentes y dispositivos tecnológicos con trazabilidad por serie y seguridad en cada etapa.",
    image: imgScanning,
    path: "/industrias/tecnologia-y-electronica",
  }
];

export function Industries({ className }: { className?: string }) {
  const sliderRef = useRef<Slider>(null);
  const lastScrollTime = useRef(0);
  
  const [isHovering, setIsHovering] = React.useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    // Throttle to prevent rapid scrolling
    if (now - lastScrollTime.current < 500) return;

    // Check if horizontal scroll dominates and has enough magnitude
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (e.deltaX > 0) {
        sliderRef.current?.slickNext();
      } else {
        sliderRef.current?.slickPrev();
      }
      lastScrollTime.current = now;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.15,
        }
      }
    ]
  };

  return (
    <Section className={cn("relative bg-gradient-to-b from-[#fff066] to-white overflow-hidden", className)} onMouseMove={handleMouseMove}>
      <div 
         ref={cursorRef}
         className={cn(
             "fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out",
             "bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3",
             "text-white font-augenblick text-lg whitespace-nowrap",
             isHovering ? "opacity-100" : "opacity-0"
         )}
         style={{ left: 0, top: 0 }}
      >
         Leer más
      </div>

      {/* Inline Styles for Slick Carousel to avoid build errors with font files */}
      <style>{`
        .slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
        .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
        .slick-list:focus{outline:0}
        .slick-list.dragging{cursor:pointer;cursor:hand}
        .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
        .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
        .slick-track:before,.slick-track:after{display:table;content:''}
        .slick-track:after{clear:both}
        .slick-loading .slick-track{visibility:hidden}
        .slick-slide{display:none;float:left;height:100%;min-height:1px}
        [dir='rtl'] .slick-slide{float:right}
        .slick-slide img{display:block}
        .slick-slide.slick-loading img{display:none}
        .slick-slide.slick-dragging img{pointer-events:none}
        .slick-initialized .slick-slide{display:block}
        .slick-loading .slick-slide{visibility:hidden}
        .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
        .slick-arrow.slick-hidden{display:none}
        
        /* Dots - Removed as per request */
        .slick-list {
            padding-bottom: 10px !important;
            overflow: visible !important;
        }
      `}</style>

       <Container className="max-w-[1440px] flex flex-col gap-20">
         <div className="flex flex-col md:flex-row gap-8 items-start py-12 md:py-0">
            <p className="text-lg text-black w-32 shrink-0 mt-2 font-augenblick">Industrias</p>
            <div className="flex-grow">
               <SectionHeading 
                 description="Conocemos las exigencias de cada sector. Por eso, en Yobel diseñamos soluciones integradas y adaptables, alineadas a los retos y necesidades de tu industria." className="font-augenblick font-[Neue_Augenblick]"
               >
                 <div className="text-4xl md:text-5xl leading-tight text-black max-w-md mb-6">
                   <p>Industrias en movimiento</p>
                 </div>
               </SectionHeading>
            </div>
         </div>

         <div className="w-full -mr-20 md:-mr-40 relative" onWheel={handleWheel}>
            {/* Left Blur Overlay - Targeted to Image Height */}
            <div className="absolute left-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />
            
            {/* Right Blur Overlay - Targeted to Image Height */}
            <div className="absolute right-0 top-0 h-[60vw] md:h-[25vw] max-h-[450px] w-16 md:w-32 z-10 pointer-events-none backdrop-blur-[1px]" style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }} />

            <Slider 
              ref={sliderRef} 
              {...settings} 
              arrows={false}
              dots={false}
              autoplay={true} 
              autoplaySpeed={3000} 
              pauseOnHover={true}
            >
                {industries.map((ind, idx) => (
                    <div key={idx} className="px-4 h-full">
                        <div 
                           className="group relative flex flex-col h-full"
                           onMouseEnter={() => setIsHovering(true)}
                           onMouseLeave={() => setIsHovering(false)}
                        >
                            <Link to={ind.path} className="flex flex-col gap-5 w-full cursor-pointer block">
                                <div className="aspect-square w-full rounded-[20px] overflow-hidden relative shrink-0">
                                    <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-3 text-black px-2">
                                    <h3 className="text-2xl font-medium font-[Neue_Augenblick]">{ind.title}</h3>
                                    <p className="text-lg font-light leading-snug opacity-80 font-augenblick">{ind.description}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
         </div>
       </Container>
    </Section>
  );
}
