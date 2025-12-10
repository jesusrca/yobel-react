export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface UseCase {
  id: string;
  title: string;
  fullDesc: string;
}

export interface Result {
  highlight: string;
  normal: string;
}

export interface Benefit {
  text: string;
}

export interface IndustryPageContent {
  category: string;
  title: string;
  description: string;
  introText: string;
  solutions: Solution[];
  useCases: UseCase[];
  results: Result[];
  benefits: Benefit[];
  benefitsTitle: string;
  benefitsImage: string;
  benefitsImageAlt: string;
  resultsLabel: string;
  resultsTitle: string;
  solutionsTitle: string;
  useCasesLabel: string;
  useCasesTitle: string;
}

// Industrial content
export const industrialContent: IndustryPageContent = {
  category: "Industrias",
  title: "Soluciones logísticas para la industria manufacturera",
  description: "Impulsamos la productividad de tu planta con procesos integrados y suministro continuo.",
  introText: "En Yobel diseñamos soluciones logísticas integrales para empresas manufactureras e industriales. Conectamos el flujo de materias primas, componentes y productos terminados mediante almacenamiento, transporte, distribución y servicios de valor agregado.",
  solutionsTitle: "¿Cómo te ayudamos?",
  solutions: [
    {
      id: "01",
      title: "Abastecimiento In-House",
      description: "Operamos directamente dentro de tus plantas o centros productivos para garantizar un flujo continuo de materiales y componentes.",
      image: "@/assets/industrias/8_manu-industrial.jpeg"
    },
    {
      id: "02",
      title: "Almacenamiento Industrial",
      description: "Gestión avanzada de inventarios con WMS, control por lote, peso, dimensiones o tipo de material.",
      image: "@/assets/industrias/8_manu-industrial.jpeg"
    },
    {
      id: "03",
      title: "Transporte Especializado",
      description: "Rutas planificadas para abastecimiento B2B, distribución nacional o exportación de productos terminados.",
      image: "@/assets/industrias/8_manu-industrial.jpeg"
    },
    {
      id: "04",
      title: "Valor Agregado (VAS)",
      description: "Kitting, armado de sets industriales, empaques técnicos y reacondicionado de piezas o repuestos.",
      image: "@/assets/industrias/8_manu-industrial.jpeg"
    },
    {
      id: "05",
      title: "Comercio Exterior",
      description: "Coordinación integral de importaciones y exportaciones de maquinaria, materias primas y productos industriales.",
      image: "@/assets/industrias/8_manu-industrial.jpeg"
    }
  ],
  useCasesLabel: "Aplicaciones",
  useCasesTitle: "Casos de uso típicos",
  useCases: [
    { id: "01", title: "Abastecimiento de línea", fullDesc: "Flujo continuo de componentes en planta." },
    { id: "02", title: "Gestión de repuestos", fullDesc: "Control y despacho rápido de piezas críticas." },
    { id: "03", title: "Kitting de ensamblaje", fullDesc: "Preparación de kits de componentes por orden de producción." },
    { id: "04", title: "Reacondicionado", fullDesc: "Ajustes de presentación o empaques técnicos." },
    { id: "05", title: "Exportaciones industriales", fullDesc: "Coordinación logística de maquinaria o piezas." }
  ],
  resultsLabel: "Resultados",
  resultsTitle: "Indicadores que priorizamos",
  results: [
    { highlight: "Cumplimiento OTIF 99.6%", normal: "en entregas industriales." },
    { highlight: "Lead time reducido hasta 25%", normal: "en abastecimientos internos." },
    { highlight: "Inventario visible 100%", normal: "en tiempo real vía WMS." },
    { highlight: "Optimización de espacio", normal: "en planta y centros logísticos." }
  ],
  benefitsTitle: "Eficiencia, control y seguridad operativa",
  benefitsImage: "@/assets/industrias/8_manu-industrial.jpeg",
  benefitsImageAlt: "Benefits",
  benefits: [
    { text: "Abastecimiento continuo para evitar interrupciones de línea." },
    { text: "Trazabilidad total de insumos y productos terminados." },
    { text: "Integración con sistemas ERP o MES del cliente." },
    { text: "Reducción de tiempos muertos y sobrecostos logísticos." },
    { text: "Cumplimiento OTIF 99.6% en entregas industriales." }
  ]
};

// Function to get industry content by slug
export const getIndustryContent = (slug: string): IndustryPageContent | null => {
  const contentMap: Record<string, IndustryPageContent> = {
    'manufactura-industrial': industrialContent,
    // Add other industries here as needed
  };

  return contentMap[slug] || null;
};