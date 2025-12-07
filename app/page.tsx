import React from "react";
import { Hero } from "../src/components/landing/Hero";
import { ValueProp } from "../src/components/landing/ValueProp";
import { Services } from "../src/components/landing/Services";
import { BigImage } from "../src/components/landing/BigImage";
import { Industries } from "../src/components/landing/Industries";
import { Statistics } from "../src/components/landing/Statistics";
import { Certificates } from "../src/components/landing/Certificates";
import { FAQ } from "../src/components/landing/FAQ";

export default function Home() {
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