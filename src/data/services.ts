export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

import comexImg from '@/assets/servicios/comercio_exterior.jpeg';
import manufacturaImg from '@/assets/servicios/manufactura.jpeg';
import valorAgregadoImg from '@/assets/servicios/valor_agregado.jpeg';
import almacenamientoImg from '@/assets/servicios/almacenamiento.jpeg';
import distribucionImg from '@/assets/servicios/distribucion.jpeg';
import courierImg from '@/assets/servicios/courier_express.jpeg';

export const services: Service[] = [
  {
    id: "01",
    title: "Comercio Exterior (COMEX)",
    description: "Soluciones ágiles para importar y exportar. Gestionamos todo el proceso: aduanas, transporte internacional y nacionalización con visibilidad total en cada etapa.",
    image: comexImg
  },
  {
    id: "02",
    title: "Manufactura",
    description: "Producción flexible de consumo masivo. Fabricamos y acondicionamos productos en nuestras plantas, bajo estándares internacionales (BPM/BPA), listos para lanzamientos y temporadas de alta demanda.",
    image: manufacturaImg
  },
  {
    id: "03",
    title: "Servicio de Valor Agregado",
    description: "Más valor para tus productos. Kitting, etiquetado, empaques promocionales, re-embalaje, termoencogido y reacondicionado con control por lote, para campañas más rápidas y eficientes.",
    image: valorAgregadoImg
  },
  {
    id: "04",
    title: "Almacenamiento",
    description: "Inventarios seguros y optimizados. Almacenes con WMS, control de temperatura y trazabilidad 100% garantizada. Seguridad y cross-docking para abastecer todos tus canales.",
    image: almacenamientoImg
  },
  {
    id: "05",
    title: "Distribución",
    description: "Entregas confiables en todo el país. B2B moderno y mayorista, e-commerce y última milla. Cumplimos ventanas de entrega con un desempeño OTIF del 99.6% a nivel nacional.",
    image: distribucionImg
  },
  {
    id: "06",
    title: "Courier Express",
    description: "Recolección y entrega puerta a puerta. Ideal para e-commerce, muestras y envíos urgentes, con trazabilidad 24/7 y control total de tus entregas.",
    image: courierImg
  }
];