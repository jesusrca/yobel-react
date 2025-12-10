import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HistoryHero } from "/components/company/HistoryHero";
import { HistoryTimeline } from "/components/company/HistoryTimeline";
import { Section } from "/components/ui/custom-section";
import { Container } from "/components/ui/custom-container";
import { Phrase } from "/components/company/Phrase";
import { LifeAtYobel } from "/components/company/LifeAtYobel";
import { HistoryImageBlock } from "/components/company/HistoryImageBlock";
import { ScrollColorTransition } from "/components/ui/scroll-color-transition";
import { historyTexts } from "/constants/company";

const heroImage = "https://images.unsplash.com/photo-1737301338604-02d40527ac91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYWN0b3J5JTIwMTk2MHMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";

export default function History() {
  return (
    <ScrollColorTransition>
      {(textColor) => (
        <>
          <HistoryHero
            label={historyTexts.hero.label}
            title={historyTexts.hero.title}
            description={historyTexts.hero.description}
          />

          <Phrase textColor={textColor} showButton={false} />

          <HistoryTimeline items={historyTexts.timeline} textColor={textColor} />

          <HistoryImageBlock />

          <LifeAtYobel textColor={textColor} />
        </>
      )}
    </ScrollColorTransition>
  );
}