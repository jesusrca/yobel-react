import { Page, Service, Post } from '../types';

export const pages: Page[] = [
  {
    id: '1',
    title: 'Home',
    slug: 'home',
    content: 'Welcome to Yobel SCM. We provide comprehensive supply chain management solutions across Latin America.',
    seo: {
      title: 'Home - Yobel SCM',
      description: 'Leading supply chain management company in Latin America',
      keywords: ['supply chain', 'logistics', 'Latin America']
    }
  },
  {
    id: '2',
    title: 'About Us',
    slug: 'about',
    content: 'Yobel SCM is a leading provider of logistics and supply chain services with over 20 years of experience.',
    seo: {
      title: 'About Us - Yobel SCM',
      description: 'Learn about our company history and expertise',
      keywords: ['about', 'company', 'history']
    }
  },
  {
    id: '3',
    title: 'Contact',
    slug: 'contact',
    content: 'Get in touch with us for all your supply chain needs. Our team is ready to assist you.',
    seo: {
      title: 'Contact - Yobel SCM',
      description: 'Contact information and locations',
      keywords: ['contact', 'locations', 'support']
    }
  },
  {
    id: '4',
    title: 'Historia',
    slug: 'empresa/historia',
    content: 'Nuestra historia en la industria.',
    seo: {
      title: 'Historia - Yobel SCM',
      description: 'Nuestra trayectoria',
      keywords: ['historia', 'empresa']
    }
  },
  {
    id: '5',
    title: 'Ética',
    slug: 'empresa/etica',
    content: '<h2>Nuestro Código de Ética</h2><p>Compromiso con la integridad y la responsabilidad.</p>',
    seo: {
      title: 'Ética - Yobel SCM',
      description: 'Nuestro código de ética',
      keywords: ['etica', 'codigo', 'integridad']
    }
  },
  {
    id: '6',
    title: 'Alimentos y Bebidas',
    slug: 'industrias/alimentos',
    content: '<h2>Soluciones para Alimentos y Bebidas</h2><p>Especializados en la cadena de suministro para la industria alimentaria.</p>',
    seo: {
      title: 'Alimentos y Bebidas - Yobel SCM',
      description: 'Soluciones logísticas para alimentos',
      keywords: ['alimentos', 'bebidas', 'logistica']
    }
  },
  {
    id: '7',
    title: 'Moda y Calzado',
    slug: 'industrias/moda',
    content: '<h2>Soluciones para Moda y Calzado</h2><p>Distribución eficiente para la industria de la moda.</p>',
    seo: {
      title: 'Moda y Calzado - Yobel SCM',
      description: 'Logística para moda',
      keywords: ['moda', 'calzado', 'distribucion']
    }
  },
  {
    id: '8',
    title: 'Sobre Nosotros',
    slug: 'empresa/sobre-nosotros',
    content: 'Conoce más sobre Yobel SCM y nuestra trayectoria en Latinoamérica.',
    seo: {
      title: 'Sobre Nosotros - Yobel SCM',
      description: 'Conoce más sobre Yobel SCM y nuestra trayectoria en Latinoamérica.',
      keywords: ['sobre nosotros', 'empresa', 'Yobel']
    }
  },
  {
    id: '9',
    title: 'Presencia Global',
    slug: 'empresa/presencia-global',
    content: '<h1>Presencia Global</h1><p>Contenido sobre presencia global...</p>',
    seo: {
      title: 'Presencia Global - Yobel SCM',
      description: 'Descubre nuestra presencia global en Latinoamérica y el mundo',
      keywords: ['presencia', 'global', 'latinoamerica', 'expansion']
    }
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Logistics Solutions',
    slug: 'logistics-solutions',
    content: 'Comprehensive logistics services including transportation, warehousing, and distribution across multiple countries.',
    seo: {
      title: 'Logistics Solutions - Yobel SCM',
      description: 'End-to-end logistics solutions for your business',
      keywords: ['logistics', 'transportation', 'warehousing']
    }
  },
  {
    id: '2',
    title: 'Supply Chain Management',
    slug: 'supply-chain-management',
    content: 'Strategic supply chain management to optimize your operations and reduce costs.',
    seo: {
      title: 'Supply Chain Management - Yobel SCM',
      description: 'Optimize your supply chain with our expertise',
      keywords: ['supply chain', 'management', 'optimization']
    }
  },
  {
    id: '3',
    title: 'Customs Clearance',
    slug: 'customs-clearance',
    content: 'Expert customs clearance services to ensure smooth international trade operations.',
    seo: {
      title: 'Customs Clearance - Yobel SCM',
      description: 'Professional customs clearance services',
      keywords: ['customs', 'clearance', 'international trade']
    }
  }
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Supply Chain in Latin America',
    slug: 'future-supply-chain-latin-america',
    content: 'Exploring emerging trends and technologies shaping the supply chain industry in Latin America.',
    seo: {
      title: 'The Future of Supply Chain in Latin America',
      description: 'Insights into supply chain trends in Latin America',
      keywords: ['supply chain', 'Latin America', 'trends']
    },
    date: '2024-01-15',
    author: 'Maria Gonzalez'
  },
  {
    id: '2',
    title: 'Sustainable Logistics Practices',
    slug: 'sustainable-logistics-practices',
    content: 'How Yobel SCM is implementing sustainable practices to reduce environmental impact.',
    seo: {
      title: 'Sustainable Logistics Practices',
      description: 'Our commitment to sustainable logistics',
      keywords: ['sustainability', 'logistics', 'environment']
    },
    date: '2024-02-20',
    author: 'Carlos Rodriguez'
  },
  {
    id: '3',
    title: 'Digital Transformation in SCM',
    slug: 'digital-transformation-scm',
    content: 'The role of digital technologies in modern supply chain management.',
    seo: {
      title: 'Digital Transformation in SCM',
      description: 'Digital solutions for supply chain management',
      keywords: ['digital', 'transformation', 'SCM']
    },
    date: '2024-03-10',
    author: 'Ana Silva'
  }
];