import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { newsData } from "../../data/news";
import { Facebook, Linkedin, Share2 } from "lucide-react";

export function NoticiaDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const newsItem = newsData.find(item => item.id === slug);

  if (!newsItem) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <div className="bg-white min-h-screen font-[Neue_Augenblick]">
      {/* Header Section */}
      <Section className="pt-32 pb-0 md:pt-40 md:pb-6">
        <Container>
          <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#59c1e6] text-sm font-bold uppercase tracking-widest">
                  {newsItem.category}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-black font-normal max-w-5xl">
                {newsItem.title}
              </h1>

              <div className="bg-gray-100 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mt-4">
                5 MINS
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-sm mt-8">
              <img 
                src={newsItem.image} 
                alt={newsItem.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="pt-12 pb-32">
        <Container>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              
              {/* Sidebar / Meta Column */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32 flex flex-col gap-8 pb-8 lg:pb-0 border-b lg:border-b-0 border-gray-100">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      PUBLISHED
                    </span>
                    <span className="text-[#59c1e6] font-bold font-mono tracking-widest">
                      {newsItem.date}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      CATEGORY
                    </span>
                    <span className="text-[#59c1e6] font-bold uppercase tracking-widest">
                      {newsItem.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                      SHARE
                    </span>
                    <div className="flex gap-4 text-black">
                      <a href="#" className="hover:text-[#59c1e6] transition-colors"><Facebook size={20} /></a>
                      <a href="#" className="hover:text-[#59c1e6] transition-colors"><Linkedin size={20} /></a>
                      <button className="hover:text-[#59c1e6] transition-colors"><Share2 size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Column */}
              <div className="lg:col-span-8 lg:col-start-5 flex flex-col gap-12 w-full">
                {/* Lead Paragraph */}
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-black">
                  {newsItem.excerpt}
                </p>

                {/* Body Content */}
                <div className="text-lg md:text-xl font-light leading-relaxed text-gray-800 flex flex-col gap-8">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:text-black prose-headings:text-2xl prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-strong:font-medium prose-strong:text-black"
                      dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
                    />
                    
                    {/* Pull Quote - Standardized */}
                    <div className="my-12 pl-6 border-l-4 border-[#59c1e6]"> 
                       <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-normal text-black tracking-tight">
                         "La innovación no es solo tecnología, es la capacidad de adaptarse y evolucionar constantemente para servir mejor al mundo."
                       </h3>
                    </div>
                    
                    <p>
                      Continuamos nuestro viaje hacia la excelencia operativa, siempre poniendo a nuestros clientes y al planeta en primer lugar. En Yobel, creemos que el futuro se construye hoy.
                    </p>
                </div>

                {/* Bottom Image */}
                <div className="w-full h-[400px] overflow-hidden rounded-sm mt-8">
                   <img 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                     alt="Details" 
                     className="w-full h-full object-cover"
                   />
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}