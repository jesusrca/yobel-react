import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../components/ui/custom-section";
import { Container } from "../components/ui/custom-container";
import { newsData } from "../data/news";
import { ArrowRight, Calendar } from "lucide-react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <article key={news.id} className="group flex flex-col h-full bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <Link to={`/noticias/${news.id}`} className="block overflow-hidden h-[240px] relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                    {news.category}
                  </div>
                </Link>
                
                <div className="flex flex-col flex-grow p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{news.date}</span>
                  </div>
                  
                  <Link to={`/noticias/${news.id}`}>
                    <h3 className="text-2xl font-medium mb-4 group-hover:text-[#59c1e6] transition-colors leading-tight font-[Neue_Augenblick]">
                      {news.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                    {news.excerpt}
                  </p>
                  
                  <Link 
                    to={`/noticias/${news.id}`}
                    className="inline-flex items-center gap-2 text-black font-medium border-b border-black pb-0.5 hover:text-[#59c1e6] hover:border-[#59c1e6] transition-all w-fit"
                  >
                    Leer nota completa <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
