import React, { useState } from "react";
import { InteractiveList } from "../ui/InteractiveList";
import imgComex from "figma:asset/b94e87eb574754035d4788fe21930672651cb6ac.png";
import imgManufactura from "figma:asset/ecce90734732751a4bc28b6dbd70ffe655c57b16.png";
import imgValorAgregado from "figma:asset/95ebfea3e27fbddd6fe8803e814394cf22a368a9.png";
import imgDistribucion from "figma:asset/4288be58a4ef94beb9d8a69085417550e080ee9b.png";
import imgAlmacenamiento from "figma:asset/bc92ff65ed742074ad9e86d0d196130c5b3c4401.png";
import imgCourier from "figma:asset/80542a74be9bc879ecf905bddf6ee80ddd8d25a7.png";

const services = [
  {
    id: "01",
    title: "Comercio Exterior (COMEX)",
    description: "Soluciones ágiles para importar y exportar. Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.",
    image: imgComex
  },
  {
    id: "02",
    title: "Manufactura",
    description: "Producción flexible de consumo masivo. Fabricamos y acondicionamos productos en nuestras plantas, bajo estándares internacionales (BPM/BPA), listos para lanzamientos y temporadas de alta demanda.",
    image: imgManufactura 
  },
  {
    id: "03",
    title: "Servicio de Valor Agregado",
    description: "Más valor para tus productos. Kitting, etiquetado, empaques promocionales, re-embalaje, termoencogido y reacondicionado con control por lote, para campañas más rápidas y eficientes.",
    image: imgValorAgregado
  },
  {
    id: "04",
    title: "Almacenamiento",
    description: "Inventarios seguros y optimizados. Almacenes con WMS, control de temperatura y trazabilidad 100% garantizada. Seguridad y cross-docking para abastecer todos tus canales.",
    image: imgAlmacenamiento
  },
  {
    id: "05",
    title: "Distribución",
    description: "Entregas confiables en todo el país. B2B moderno y mayorista, e-commerce y última milla. Cumplimos ventanas de entrega con un desempeño OTIF del 99.6% a nivel nacional.",
    image: imgDistribucion
  },
  {
    id: "06",
    title: "Courier Express",
    description: "Recolección y entrega puerta a puerta. Ideal para e-commerce, muestras y envíos urgentes, con trazabilidad 24/7 y control total de tus entregas.",
    image: imgCourier
  }
];

export function Services() {
  return (
    <InteractiveList items={services} defaultImage={imgComex} />
  );
}
