import React from "react";
import Link from "next/link";
import { Section } from "../ui/custom-section";
import { Container } from "../ui/custom-container";

interface Industry {
  title: string;
  description: string;
  link?: string;
}

interface ServiceIndustriesProps {
  title: string;
  description: string;
  industries: Industry[];
}

export function ServiceIndustries({ title, description, industries }: ServiceIndustriesProps) {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <Container>
        <div className="mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-normal mb-6 leading-tight">{title}</h2>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const CardContent = (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-blue-600">{ind.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{ind.description}</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity">
                   VER MÁS <span className="ml-2">→</span>
                </div>
              </div>
            );

            const containerClasses = "group bg-white p-8 rounded-[30px] border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 block h-full";

            if (ind.link) {
              return (
                <Link key={idx} href={ind.link} className={containerClasses}>
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={idx} className={containerClasses}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
