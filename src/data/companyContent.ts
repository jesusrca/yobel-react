export interface PurposeItem {
  title: string;
  content: string;
}

export interface ValueProp {
  text: string;
  description: string;
  image: string;
}

export interface Principle {
  title: string;
  desc: string;
}

export interface CompanyStats {
  collaborators: string;
  countries: number;
  leadership: string;
}

const valueImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&q=80&w=1080&auto=format&fit=crop";

export interface CompanyContent {
  hero: {
    label: string;
    title: string;
    description: string;
  };
  purposeItems: PurposeItem[];
  valueProps: ValueProp[];
  principles: Principle[];
  stats: CompanyStats;
  diversity: {
    title: string;
    description: string;
  };
  wellbeing: {
    title: string;
    description: string;
  };
  safety: {
    title: string;
    description: string;
  };
  peopleText: string;
  peopleSubtitle: string;
}

export const companyContent: CompanyContent = {
  hero: {
    label: "Sobre Nosotros",
    title: "Con más de 50 años de experiencia en Latinoamérica",
    description: "En Yobel impulsamos tu negocio con soluciones de logística y manufactura que integran innovación, eficiencia y cercanía, generando valor real en cada etapa de la cadena de suministro."
  },
  purposeItems: [
    {
      title: "Propósito",
      content: "Nos movemos para crear y entregar soluciones que impulsen el crecimiento de nuestros aliados, convencidos de que pensar con visión, transformar con acción y lograr con excelencia es la manera de construir confianza."
    },
    {
      title: "Misión",
      content: "Crear y entregar soluciones integrales de logística y manufactura que respondan a necesidades reales, combinando innovación, eficiencia y personalización para generar experiencias memorables."
    },
    {
      title: "Visión",
      content: "Ser la empresa más confiable e innovadora de la región en soluciones de logística y manufactura, ampliando nuestra cobertura, integrando nuevas tecnologías y liderando la sostenibilidad."
    }
  ],
  valueProps: [
    {
      text: "Gestión integral logística",
      description: "Soluciones completas de logística que cubren desde el almacenamiento hasta la distribución final.",
      image: valueImage
    },
    {
      text: "Cobertura regional eficiente",
      description: "Red de cobertura amplia en Latinoamérica para entregas rápidas y confiables.",
      image: valueImage
    },
    {
      text: "Flexibilidad operativa total",
      description: "Adaptamos nuestros procesos a tus necesidades específicas para máxima eficiencia.",
      image: valueImage
    },
    {
      text: "Tecnología y trazabilidad avanzada",
      description: "Sistemas tecnológicos modernos con trazabilidad completa en tiempo real.",
      image: valueImage
    },
    {
      text: "Optimización de costos",
      description: "Estrategias para reducir costos sin comprometer la calidad del servicio.",
      image: valueImage
    },
    {
      text: "Mejora de experiencia cliente",
      description: "Enfoque centrado en el cliente para experiencias excepcionales y lealtad.",
      image: valueImage
    }
  ],
  principles: [
    { title: "Simplicidad operativa", desc: "Procesos claros y eficientes que reducen tiempos y costos." },
    { title: "Seguridad primero", desc: "Protegemos a las personas y cuidamos tu operación." },
    { title: "Integridad y ética", desc: "Hacemos lo correcto, incluso cuando nadie nos ve." },
    { title: "Orientación al cliente", desc: "Escuchamos, medimos y mejoramos para cumplir siempre con OTIF." },
    { title: "Trabajo en equipo", desc: "Sumamos el talento de 9 países para lograr resultados excepcionales." },
    { title: "Aprendizaje continuo", desc: "Formamos a nuestros colaboradores para superar los estándares." }
  ],
  stats: {
    collaborators: "+4,600",
    countries: 9,
    leadership: "+30%"
  },
  diversity: {
    title: "Diversidad e inclusión",
    description: "Promovemos equipos diversos y oportunidades equitativas."
  },
  wellbeing: {
    title: "Bienestar",
    description: "Programas de salud, ergonomía y apoyo emocional"
  },
  safety: {
    title: "Seguridad & Salud ocupacional",
    description: "Capacitación continua y prevención"
  },
  peopleText: "Personas y diversidad que nos mueven",
  peopleSubtitle: "En Yobel promovemos inclusión, crecimiento y bienestar. Apostamos por el desarrollo continuo y las oportunidades equitativas, porque cuando nuestra gente crece, las cadenas de suministro funcionan mejor."
};