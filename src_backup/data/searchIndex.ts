export interface SearchItem {
    title: string;
    path: string;
    category: string;
    keywords?: string;
}

export const searchIndex: SearchItem[] = [
    // Empresa
    { title: "Sobre Nosotros", path: "/empresa/sobre-nosotros", category: "Empresa", keywords: "yobel misión visión propósito valores" },
    { title: "Presencia Global", path: "/empresa/presencia-global", category: "Empresa", keywords: "países sedes internacional oficinas" },
    { title: "Historia", path: "/empresa/historia", category: "Empresa", keywords: "trayectoria años experiencia" },
    
    // Servicios
    { title: "Comercio Exterior", path: "/servicios/comercio-exterior", category: "Servicios", keywords: "aduanas importación exportación comex" },
    { title: "Manufactura", path: "/servicios/manufactura", category: "Servicios", keywords: "producción fabricación planta" },
    { title: "Servicio Valor Agregado", path: "/servicios/valor-agregado", category: "Servicios", keywords: "packaging etiquetado maquila" },
    { title: "Almacenamiento", path: "/servicios/almacenamiento", category: "Servicios", keywords: "bodega stock inventario warehouse" },
    { title: "Distribución", path: "/servicios/distribucion", category: "Servicios", keywords: "transporte entrega flota última milla" },
    { title: "Courier Express", path: "/servicios/courier-express", category: "Servicios", keywords: "paquetería envíos rápidos ecommerce" },
    { title: "Tarifas", path: "/tarifas", category: "Servicios", keywords: "precios costos cotización" },

    // Industrias
    { title: "Alimentos y Bebidas", path: "/industrias/alimentos-y-bebidas", category: "Industrias", keywords: "consumo masivo perecibles" },
    { title: "Belleza y Cuidado Personal", path: "/industrias/belleza-y-cuidado-personal", category: "Industrias", keywords: "cosméticos higiene" },
    { title: "Calzado y Moda", path: "/industrias/calzado-y-moda", category: "Industrias", keywords: "ropa textil fashion" },
    { title: "Construcción", path: "/industrias/construccion", category: "Industrias", keywords: "materiales obras" },
    { title: "Cuidado del Hogar", path: "/industrias/cuidado-del-hogar", category: "Industrias", keywords: "limpieza detergentes" },
    { title: "Editorial", path: "/industrias/editorial", category: "Industrias", keywords: "libros revistas papel" },
    { title: "Farmacéutica", path: "/industrias/farmaceutica", category: "Industrias", keywords: "medicamentos salud pharma" },
    { title: "Manufactura Industrial", path: "/industrias/manufactura-industrial", category: "Industrias", keywords: "industria pesada maquinaria" },
    { title: "Química", path: "/industrias/quimica", category: "Industrias", keywords: "insumos químicos peligrosos" },
    { title: "Retail", path: "/industrias/retail", category: "Industrias", keywords: "tiendas supermercados consumo" },
    { title: "Tecnología y Electrónica", path: "/industrias/tecnologia-y-electronica", category: "Industrias", keywords: "tech gadgets computo" },

    // Ética
    { title: "Código de Ética", path: "/etica/codigo-de-etica", category: "Ética", keywords: "conducta valores normas" },
    { title: "Línea de Ética", path: "/etica/linea-de-etica", category: "Ética", keywords: "denuncias reporte anonimo" },
    { title: "RSE y Sostenibilidad", path: "/etica/rse-sostenibilidad", category: "Ética", keywords: "medio ambiente responsabilidad social" },

    // Contacto
    { title: "Contacto", path: "/contacto", category: "Contacto", keywords: "oficinas teléfono email dirección" },
    { title: "Trabaja con nosotros", path: "/contacto", category: "Contacto", keywords: "empleo cv selección" },

    // Legal
    { title: "Libro de Reclamaciones", path: "/libro-reclamaciones", category: "Legal", keywords: "quejas reclamos indecopi" },
    { title: "Términos y Condiciones", path: "/terminos-y-condiciones", category: "Legal", keywords: "legal uso" },
    { title: "Políticas de Privacidad", path: "/politicas-de-privacidad", category: "Legal", keywords: "datos personales protección" },
    { title: "Políticas de Cookies", path: "/politicas-de-cookies", category: "Legal", keywords: "rastreo navegación" },

    // Noticias
    { title: "Noticias", path: "/noticias", category: "Noticias", keywords: "blog novedades prensa" },
];
