import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/custom-section";
import { Container } from "../components/ui/custom-container";
import { newsData } from "../data/news";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export function Noticias() {
  return (
    <>
      <PageHero 
        title="Noticias y Actualidad" 
        description="Mantente informado sobre las últimas novedades, tendencias y casos de éxito de Yobel."
        imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
        className="h-[40vh] min-h-[400px]"
      />

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
                    <h3 className="text-2xl font-medium mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {news.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                    {news.excerpt}
                  </p>
                  
                  <Link 
                    to={`/noticias/${news.id}`}
                    className="inline-flex items-center gap-2 text-black font-medium border-b border-black pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-all w-fit"
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
