import React, { useRef } from "react";
import Slider from "react-slick";
import imgWarehouse from "figma:asset/d507ec513ebf701c67ceec058a95047f4353b881.png";
import imgProduction from "figma:asset/1d572db1870691a1a016c8d5eca9b8435b8b8918.png";
import imgScanning from "figma:asset/d56ded74011b0f21c7600fc7891c848944165ffe.png";
import imgPharma from "figma:asset/c90f14dfdbaa2aa55fb1d7c09e10dc950d57ddd7.png";
import imgPersonalCare from "figma:asset/6fdd41c396ee366bba682ec526eac7b2d20bece7.png";
import imgChemicals from "figma:asset/93e8fecf0b866b17f193287487427a7f4706db04.png";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";
import { SectionHeading } from "../ui/typography";

const industries = [
  {
    title: "Belleza y Cuidado Personal",
    description: "Cadena de suministro integral para cosméticos, fragancias y productos de cuidado personal, con trazabilidad completa y control sanitario.",
    image: imgPersonalCare,
  },
  {
    title: "Alimentos y Bebidas",
    description: "Logística de productos alimentarios y bebidas con almacenamiento controlado, cadena de frío y trazabilidad completa.",
    image: imgProduction,
  },
  {
    title: "Construcción",
    description: "Abastecimiento y transporte de materiales, repuestos y maquinaria con planificación operativa y manipulación segura.",
    image: imgWarehouse,
  },
  {
    title: "Editorial",
    description: "Soluciones logísticas integrales para gestionar y distribuir libros, revistas y publicaciones con cobertura regional, disponibilidad oportuna y eficiencia.",
    image: imgScanning,
  },
  {
    title: "Farmacéutica",
    description: "Flujo logístico de medicamentos, dispositivos y productos de salud con trazabilidad total y conservación controlada.",
    image: imgPharma,
  },
  {
    title: "Hogar",
    description: "Cadena de suministro para productos de limpieza, utensilios y artículos domésticos con eficiencia operativa y control de stock.",
    image: imgPersonalCare,
  },
  {
    title: "Manufactura Industrial",
    description: "Logística de insumos, componentes y productos terminados con trazabilidad, continuidad productiva y optimización del flujo operativo.",
    image: imgWarehouse,
  },
  {
    title: "Calzado y moda",
    description: "Gestión de prendas, calzado y accesorios con control por temporada, trazabilidad por colección y preparación según canal de venta.",
    image: imgScanning,
  },
  {
    title: "Químicos",
    description: "Operaciones logísticas seguras para sustancias y productos químicos con manipulación especializada y control ambiental para insumos y productos terminados.",
    image: imgChemicals,
  },
  {
    title: "Retail",
    description: "Abastecimiento integral de tiendas, centros de distribución y plataformas digitales con visibilidad total y entregas confiables.",
    image: imgScanning,
  },
  {
    title: "Tecnología y Electrónica",
    description: "Flujo logístico de equipos, componentes y dispositivos tecnológicos con trazabilidad por serie y seguridad en cada etapa.",
    image: imgScanning,
  }
];

export function Industries() {
  const sliderRef = useRef<Slider>(null);
  const lastScrollTime = useRef(0);

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
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Section className="relative bg-gradient-to-b from-[#fff066] to-white overflow-hidden">
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
        
        /* Dots */
        .slick-dots {
            position: absolute;
            bottom: -45px;
            display: block;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
        }
        /* Make sure slides have enough space and aren't cut off */
        .slick-list {
            padding-bottom: 10px !important;
            overflow: visible !important;
        }
        .slick-dots li {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
        }
        .slick-dots li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 20px;
            height: 20px;
            padding: 5px;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
        }
        .slick-dots li button:before {
            font-family: 'slick';
            font-size: 40px;
            line-height: 20px;
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            content: '•';
            text-align: center;
            opacity: .25;
            color: black;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .slick-dots li.slick-active button:before {
            opacity: 1; 
            color: black;
        }
      `}</style>

       <Container className="max-w-[1440px] flex flex-col gap-12">
         <div className="flex flex-col md:flex-row gap-8 items-start">
            <p className="text-lg text-black w-32 shrink-0 mt-2">Industrias</p>
            <div className="flex-grow">
               <SectionHeading 
                 description="Conocemos las exigencias de cada sector. Por eso, en Yobel diseñamos soluciones integradas y adaptables, alineadas a los retos y necesidades de tu industria."
               >
                 <div className="text-4xl md:text-5xl leading-tight text-black max-w-md mb-6">
                   <p>Industrias en movimiento</p>
                 </div>
               </SectionHeading>
            </div>
         </div>

         <div className="w-full -mr-20 md:-mr-40" onWheel={(e) => {
            const now = Date.now();
            if (now - lastScrollTime.current < 500) return;
            
            // Check if horizontal scroll dominates and has enough magnitude
            // Lowered threshold to 10 for better sensitivity on trackpads
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
                if (e.deltaX > 0) {
                    sliderRef.current?.slickNext();
                } else {
                    sliderRef.current?.slickPrev();
                }
                lastScrollTime.current = now;
            }
         }}>
            <Slider ref={sliderRef} {...settings} arrows={false} autoplay={true} autoplaySpeed={3000} pauseOnHover={true}>
                {industries.map((ind, idx) => (
                    <div key={idx} className="px-2 h-full">
                        <div className="group relative flex flex-col gap-4 p-5 rounded-[40px] bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 transition-all h-[550px] shadow-sm">
                            <div className="h-[329px] w-full rounded-[30px] overflow-hidden relative shrink-0">
                                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-2 text-black">
                                <h3 className="text-xl font-medium">{ind.title}</h3>
                                <p className="text-lg font-light leading-snug opacity-80">{ind.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
         </div>
       </Container>
    </Section>
  );
}
