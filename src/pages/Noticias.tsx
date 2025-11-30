import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../components/ui/custom-section";
import { Container } from "../components/ui/custom-container";
import { newsData } from "../data/news";
import { ArrowUpRight } from "lucide-react";

export function Noticias() {
  return (
    <>
      {/* Hero Section styled like Tarifas but with Celeste color */}
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#59c1e6] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">Centro de Novedades</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                  Noticias
                </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[400px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  Mantente informado sobre las últimas novedades, tendencias y casos de éxito de Yobel.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {newsData.map((news) => (
              <Link to={`/noticias/${news.id}`} key={news.id} className="group flex flex-col gap-6 cursor-pointer">
                <div className="overflow-hidden rounded-[32px] w-full aspect-[4/3] bg-gray-100">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-black text-2xl md:text-3xl font-normal leading-tight max-w-[90%] font-[Neue_Augenblick] group-hover:text-[#59c1e6] transition-colors">
                    {news.title}
                  </h3>
                  <ArrowUpRight className="text-black w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#59c1e6]" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
