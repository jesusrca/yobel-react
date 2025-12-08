"use client";

import { Page } from '../lib/cms/types';
import { Hero } from '../src/components/landing/Hero';
import { ValueProp } from '../src/components/landing/ValueProp';
import { Services } from '../src/components/landing/Services';
import { BigImage } from '../src/components/landing/BigImage';
import { Industries } from '../src/components/landing/Industries';
import { Statistics } from '../src/components/landing/Statistics';
import { Certificates } from '../src/components/landing/Certificates';
import { FAQ } from '../src/components/landing/FAQ';
import { HistoryHero } from '../src/components/company/HistoryHero';
import { HistoryTimeline } from '../src/components/company/HistoryTimeline';
import { About } from '../src/page-content/company/About';
import { Contact } from '../src/page-content/Contact';

interface PageRendererProps {
  page: Page;
}

export default function PageRenderer({ page }: PageRendererProps) {
  if (page.slug === 'home') {
    return (
      <>
        <Hero />
        <ValueProp />
        <Services />
        <BigImage />
        <Industries />
        <Statistics />
        <Certificates />
        <FAQ />
      </>
    );
  }

  if (page.slug === 'empresa/historia') {
    return (
      <HistoryHero
        label="Historia"
        title="Nuestra trayectoria"
        description="Más de 50 años de experiencia en logística y manufactura en Latinoamérica."
      />
    );
  }

  if (page.slug === 'empresa/sobre-nosotros') {
    return <About />;
  }

  if (page.slug === 'empresa/presencia-global') {
    return <Contact showForm={false} />;
  }

  return (
    <main>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}
