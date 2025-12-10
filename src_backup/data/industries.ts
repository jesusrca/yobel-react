export interface Industry {
  title: string;
  description: string;
  image: string;
  path: string;
}
import bellezaImage from '@/assets/industrias/2_bellesa_cui-personal.jpeg';
import alimentosImage from '@/assets/industrias/1_alimentos_bebidas.jpeg';
import construccionImage from '@/assets/industrias/4_contruccion.jpeg';
import editorialImage from '@/assets/industrias/6_editorial.jpeg';
import farmaceuticaImage from '@/assets/industrias/7_farmaceutica.jpeg';
import hogarImage from '@/assets/industrias/5_cuidado-hogar.jpeg';
import manufacturaImage from '@/assets/industrias/8_manu-industrial.jpeg';
import calzadoImage from '@/assets/industrias/3_calzado-moda.jpeg';
import quimicosImage from '@/assets/industrias/9_quimicos.jpeg';
import retailImage from '@/assets/industrias/10_reatil.jpeg';
import techImage from '@/assets/industrias/11_tech-electronica.jpeg';

export const industries: Industry[] = [
  {
    title: "Belleza y Cuidado Personal",
    description: "Cadena de suministro integral para cosméticos, fragancias y productos de cuidado personal, con trazabilidad completa y control sanitario.",
    image: bellezaImage,
    path: "/industrias/belleza-y-cuidado-personal",
  },
  {
    title: "Alimentos y Bebidas",
    description: "Logística de productos alimentarios y bebidas con almacenamiento controlado, cadena de frío y trazabilidad completa.",
    image: alimentosImage,
    path: "/industrias/alimentos-y-bebidas",
  },
  {
    title: "Construcción",
    description: "Abastecimiento y transporte de materiales, repuestos y maquinaria con planificación operativa y manipulación segura.",
    image: construccionImage,
    path: "/industrias/construccion",
  },
  {
    title: "Editorial",
    description: "Soluciones logísticas integrales para gestionar y distribuir libros, revistas y publicaciones con cobertura regional, disponibilidad oportuna y eficiencia.",
    image: editorialImage,
    path: "/industrias/editorial",
  },
  {
    title: "Farmacéutica",
    description: "Flujo logístico de medicamentos, dispositivos y productos de salud con trazabilidad total y conservación controlada.",
    image: farmaceuticaImage,
    path: "/industrias/farmaceutica",
  },
  {
    title: "Hogar",
    description: "Cadena de suministro para productos de limpieza, utensilios y artículos domésticos con eficiencia operativa y control de stock.",
    image: hogarImage,
    path: "/industrias/cuidado-del-hogar",
  },
  {
    title: "Manufactura Industrial",
    description: "Logística de insumos, componentes y productos terminados con trazabilidad, continuidad productiva y optimización del flujo operativo.",
    image: manufacturaImage,
    path: "/industrias/manufactura-industrial",
  },
  {
    title: "Calzado y moda",
    description: "Gestión de prendas, calzado y accesorios con control por temporada, trazabilidad por colección y preparación según canal de venta.",
    image: calzadoImage,
    path: "/industrias/calzado-y-moda",
  },
  {
    title: "Químicos",
    description: "Operaciones logísticas seguras para sustancias y productos químicos con manipulación especializada y control ambiental para insumos y productos terminados.",
    image: quimicosImage,
    path: "/industrias/quimica",
  },
  {
    title: "Retail",
    description: "Abastecimiento integral de tiendas, centros de distribución y plataformas digitales con visibilidad total y entregas confiables.",
    image: retailImage,
    path: "/industrias/retail",
  },
  {
    title: "Tecnología y Electrónica",
    description: "Flujo logístico de equipos, componentes y dispositivos tecnológicos con trazabilidad por serie y seguridad en cada etapa.",
    image: techImage,
    path: "/industrias/tecnologia-y-electronica",
  }
];