import React from "react";
import { Section } from "/components/ui/custom-section";
import { Container } from "/components/ui/custom-container";
import { legal } from "/constants/legal";

export default function PoliticaCookies() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[400px] max-h-[500px] w-full overflow-hidden font-augenblick bg-gradient-to-b from-[#fff066] to-white">
        <div className="absolute bottom-10 left-0 right-0 px-[5%] md:px-[50px] z-10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-[30px]">
             <p className="text-lg md:text-[18px] text-black font-[Neue_Augenblick]">{legal.cookies.hero.category}</p>
             <div className="flex flex-col lg:flex-row items-end justify-between gap-[40px] w-full">
                <h1 className="text-5xl md:text-[65px] leading-[1] text-black max-w-[773px] font-[Neue_Augenblick]">
                   {legal.cookies.hero.title}
                 </h1>
                <p className="text-xl md:text-[22px] leading-[24px] text-black max-w-[350px] lg:mr-32 pb-1 font-[Neue_Augenblick]">
                  {legal.cookies.hero.subtitle}
                </p>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-[900px] mx-auto flex flex-col gap-8 text-lg leading-relaxed text-gray-700 font-[Neue_Augenblick]">
            <p>
              {legal.cookies.content.intro}
            </p>
            
            {legal.cookies.content.sections.map((section, index) => (
              <React.Fragment key={index}>
                <h2 className="text-2xl font-bold text-black mt-4">{section.title}</h2>
                {section.list ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i}><strong>{item.label}</strong> {item.text}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.text}</p>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}