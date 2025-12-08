import React from "react";
import { Hero } from "../components/landing/Hero";
import { ValueProp } from "../components/landing/ValueProp";
import { Services } from "../components/landing/Services";
import { BigImage } from "../components/landing/BigImage";
import { Industries } from "../components/landing/Industries";
import { Statistics } from "../components/landing/Statistics";
import { Certificates } from "../components/landing/Certificates";
import { FAQ } from "../components/landing/FAQ";
import { PreFooterCTA } from "../components/landing/PreFooterCTA";

export function Home() {
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
      <PreFooterCTA
        title="Construyamos juntos la logística que tu negocio necesita"
        description="En Yobel diseñamos soluciones flexibles y de punta a punta para que tu cadena de suministro opere con eficiencia y visibilidad."
        ctaLabel="Contáctanos"
        ctaHref="#contacto"
      />
    </>
  );
}
