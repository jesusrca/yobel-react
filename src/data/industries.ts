export interface Industry {
  title: string;
  description: string;
  image: string;
  path: string;
}

export const industries: Industry[] = [
  {
    title: "Belleza y Cuidado Personal",
    description: "Cadena de suministro integral para cosméticos, fragancias y productos de cuidado personal, con trazabilidad completa y control sanitario.",
    image: '@/assets/industrias/2_bellesa_cui-personal.jpeg',
    path: "/industrias/belleza-y-cuidado-personal",
  },
  {
    title: "Alimentos y Bebidas",
    description: "Logística de productos alimentarios y bebidas con almacenamiento controlado, cadena de frío y trazabilidad completa.",
    image: '@/assets/industrias/1_alimentos_bebidas.jpeg',
    path: "/industrias/alimentos-y-bebidas",
  },
  {
    title: "Construcción",
    description: "Abastecimiento y transporte de materiales, repuestos y maquinaria con planificación operativa y manipulación segura.",
    image: '@/assets/industrias/4_contruccion.jpeg',
    path: "/industrias/construccion",
  },
  {
    title: "Editorial",
    description: "Soluciones logísticas integrales para gestionar y distribuir libros, revistas y publicaciones con cobertura regional, disponibilidad oportuna y eficiencia.",
    image: '@/assets/industrias/6_editorial.jpeg',
    path: "/industrias/editorial",
  },
  {
    title: "Farmacéutica",
    description: "Flujo logístico de medicamentos, dispositivos y productos de salud con trazabilidad total y conservación controlada.",
    image: '@/assets/industrias/7_farmaceutica.jpeg',
    path: "/industrias/farmaceutica",
  },
  {
    title: "Hogar",
    description: "Cadena de suministro para productos de limpieza, utensilios y artículos domésticos con eficiencia operativa y control de stock.",
    image: '@/assets/industrias/5_cuidado-hogar.jpeg',
    path: "/industrias/cuidado-del-hogar",
  },
  {
    title: "Manufactura Industrial",
    description: "Logística de insumos, componentes y productos terminados con trazabilidad, continuidad productiva y optimización del flujo operativo.",
    image: '@/assets/industrias/8_manu-industrial.jpeg',
    path: "/industrias/manufactura-industrial",
  },
  {
    title: "Calzado y moda",
    description: "Gestión de prendas, calzado y accesorios con control por temporada, trazabilidad por colección y preparación según canal de venta.",
    image: '@/assets/industrias/3_calzado-moda.jpeg',
    path: "/industrias/calzado-y-moda",
  },
  {
    title: "Químicos",
    description: "Operaciones logísticas seguras para sustancias y productos químicos con manipulación especializada y control ambiental para insumos y productos terminados.",
    image: '@/assets/industrias/9_quimicos.jpeg',
    path: "/industrias/quimica",
  },
  {
    title: "Retail",
    description: "Abastecimiento integral de tiendas, centros de distribución y plataformas digitales con visibilidad total y entregas confiables.",
    image: '@/assets/industrias/10_reatil.jpeg',
    path: "/industrias/retail",
  },
  {
    title: "Tecnología y Electrónica",
    description: "Flujo logístico de equipos, componentes y dispositivos tecnológicos con trazabilidad por serie y seguridad en cada etapa.",
    image: '@/assets/industrias/11_tech-electronica.jpeg',
    path: "/industrias/tecnologia-y-electronica",
  }
];