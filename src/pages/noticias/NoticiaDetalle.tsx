import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { newsData } from "../../data/news";
import { ArrowLeft, Calendar, Share2, Tag } from "lucide-react";

export function NoticiaDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const newsItem = newsData.find(item => item.id === slug);

  if (!newsItem) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <>
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        <Container className="relative h-full flex flex-col justify-end pb-16 z-10">
          <div className="max-w-4xl">
             <div className="flex items-center gap-4 mb-6 text-white/80">
               <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-white/30">
                 {newsItem.category}
               </span>
               <div className="flex items-center gap-2 text-sm">
                 <Calendar size={14} />
                 <span>{newsItem.date}</span>
               </div>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight drop-shadow-lg">
               {newsItem.title}
             </h1>
          </div>
        </Container>
      </div>

      <Section className="bg-white py-20">
        <Container>
           <div className="flex flex-col lg:flex-row gap-16">
              <div className="w-full lg:w-[70%]">
                 <Link to="/noticias" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8">
                    <ArrowLeft size={16} /> Volver a noticias
                 </Link>
                 
                 <div 
                   className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:text-black prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-strong:font-medium"
                   dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
                 />

                 <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex gap-4">
                       <span className="font-medium text-black">Compartir:</span>
                       {/* Social Share Placeholders */}
                       <button className="text-gray-400 hover:text-blue-600 transition-colors"><Share2 size={20} /></button>
                    </div>
                 </div>
              </div>
              
              <div className="w-full lg:w-[30%]">
                 <div className="bg-gray-50 p-8 rounded-[30px] sticky top-32">
                    <h3 className="text-xl font-medium mb-6">Más noticias recientes</h3>
                    <div className="flex flex-col gap-6">
                       {newsData.filter(n => n.id !== newsItem.id).slice(0, 3).map(related => (
                          <Link key={related.id} to={`/noticias/${related.id}`} className="group flex flex-col gap-2">
                             <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">{related.category}</span>
                             <h4 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors">
                               {related.title}
                             </h4>
                             <span className="text-sm text-gray-500 font-light">{related.date}</span>
                          </Link>
                       ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                       <Link to="/noticias" className="text-black font-medium hover:text-blue-600 transition-colors text-sm">
                          Ver todas las noticias &rarr;
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </Container>
      </Section>
    </>
  );
}
