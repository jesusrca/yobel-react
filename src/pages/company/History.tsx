import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HistoryHero } from "../../components/company/HistoryHero";
import { HistoryTimeline } from "../../components/company/HistoryTimeline";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Phrase } from "../../components/company/Phrase";
import { LifeAtYobel } from "../../components/company/LifeAtYobel";
import { HistoryImageBlock } from "../../components/company/HistoryImageBlock";
import { ScrollColorTransition } from "../../components/ui/scroll-color-transition";

const heroImage = "https://images.unsplash.com/photo-1737301338604-02d40527ac91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYWN0b3J5JTIwMTk2MHMlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NDE5MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080";

const timeline = [
  {
    year: "1967",
    title: "Favel",
    desc: "Iniciamos operaciones como Favel, con la fabricación de cosméticos y cuidado personal."
  },
  {
    year: "1989",
    title: "Larissa",
    desc: "Empezamos nuestra operación logística, lo que marcó nuestra internacionalización en Chile y EE.UU."
  },
  {
    year: "1995",
    title: "Glacesa",
    desc: "Se abre una nueva línea de operación logística especializada en joyería de fantasía."
  },
  {
    year: "2003",
    title: "Grupo Yobel",
    desc: "Nuestras marcas y operaciones se unifican bajo el nombre de Grupo Yobel."
  },
  {
    year: "HOY",
    title: "Yobel",
    desc: "Nos constituimos como una corporación experta en toda la gestión de manejo de suministros y operaciones logísticas"
  }
];

export function History() {
  return (
    <ScrollColorTransition>
      {(textColor) => (
        <>
          <HistoryHero 
            label="Historia"
            title="Una trayectoria de innovación"
            description="Nuestra historia refleja que la excelencia y la innovación forman parte de nuestro ADN."
          />

          <Phrase textColor={textColor} showButton={false} />

          <HistoryTimeline items={timeline} textColor={textColor} />

          <HistoryImageBlock />

          <LifeAtYobel textColor={textColor} />
        </>
      )}
    </ScrollColorTransition>
  );
}
