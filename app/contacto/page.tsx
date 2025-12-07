"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCountry } from "/contexts/CountryContext";
import { Section } from "/components/ui/custom-section";
import { Container } from "/components/ui/custom-container";
import { Button } from "/components/ui/button";
import { FAQ } from "/components/landing/FAQ";
import { AmericasMap } from "/components/company/AmericasMap";
import { LocationCard } from "/components/company/LocationCard";
import { CountryTimeHeader } from "/components/company/CountryTimeHeader";
import { ScrollRevealString } from "/components/ui/scroll-reveal-text";
import { ChevronDown, Mail, Phone, Linkedin, Instagram, Facebook, CheckCircle } from "lucide-react";
import { contact } from "/constants/root";

interface Location {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  timezone: string;
}

const locationsData: Record<string, Location[]> = {
  peru: [
    {
      city: "Los Olivos",
      country: "Perú",
      email: "comercial.peYobel.biz",
      phone: "+51 1 618 5400",
      address: "Av. San Genaro 150, Urb. Molitalia, Los Olivos",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    },
    {
      city: "Los Olivos",
      country: "Perú",
      email: "comercial.peYobel.biz",
      phone: "+51 1 618 5400",
      address: "Calle San Andrés 6100, Urb. Molitalia, Los Olivos",
      imageUrl: "https://images.unsplash.com/photo-1717662292789-e97dfb7d3c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjZW50ZXIlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ2NjY3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    },
    {
      city: "Lurín",
      country: "Perú",
      email: "comercial.peYobel.biz",
      phone: "+51 1 618 5400",
      address: "Parcela 3-4, Los Eucaliptos, s/n Santa Genoveva, Lurín",
      imageUrl: "https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NjY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Lima"
    }
  ],
  ecuador: [
    {
      city: "Guayaquil",
      country: "Ecuador",
      email: "comercial.ecYobel.biz",
      phone: "+593 4 263 4800",
      address: "Km 9.5 vía a Daule, Guayaquil",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guayaquil"
    },
    {
      city: "Quito",
      country: "Ecuador",
      email: "comercial.ecYobel.biz",
      phone: "+593 2 398 3800",
      address: "Av. García Moreno Km 15.5, sector Llano Chico – Quito",
      imageUrl: "https://images.unsplash.com/photo-1650392131866-e4e2e06a0c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NjY2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guayaquil"
    }
  ],
  colombia: [
    {
      city: "Guarne, Antioquia",
      country: "Colombia",
      email: "comercial.colYobel.biz",
      phone: "+57 4 444 3200",
      address: "Vereda Garrido, A 1.5 km del, Batallón Juan del Corral, Guarne, Antioquia",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6bdea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Bogota"
    },
    {
      city: "Guarne, Antioquia",
      country: "Colombia",
      email: "comercial.colYobel.biz",
      phone: "+57 4 444 3200",
      address: "Vereda Berracal Retorno 9 Autopista Medellín Bogotá, Guarne, Antioquia",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Bogota"
    }
  ],
  panama: [
    {
      city: "Ciudad de Panamá",
      country: "Panamá",
      email: "comercial.paYobel.biz",
      phone: "+507 200 0000",
      address: "Av. José Domingo Díaz, Parque Industrial Corporativo Sur - Panamá",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6bdea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Panama"
    },
    {
      city: "Ciudad de Panamá",
      country: "Panamá",
      email: "comercial.paYobel.biz",
      phone: "+507 200 0000",
      address: "24 de diciembre, Parque Logistico Panamá",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Panama"
    }
  ],
  costa_rica: [
    {
      city: "Alajuela",
      country: "Costa Rica",
      email: "comercial.crYobel.biz",
      phone: "+506 2000 0000",
      address: "Radial Coyol, parque logístico LATAM, bodega 100, Alajuela, Provincia de San José",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Costa_Rica"
    }
  ],
  rep_dominicana: [
    {
      city: "Santo Domingo",
      country: "República Dominicana",
      email: "comercial.rdYobel.biz",
      phone: "+1 809 500 0000",
      address: "Av. Prolongación 27 de Febrero casi esq. Autopista Duarte, Sector Alameda",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6bdea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Santo_Domingo"
    }
  ],
  el_salvador: [
    {
      city: "San Juan Opico",
      country: "El Salvador",
      email: "comercial.svYobel.biz",
      phone: "+503 2500 0000",
      address: "Carretera Panamericana Km 26.10 San Juan Opico – San Salvador",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/El_Salvador"
    },
    {
      city: "Santa Tecla",
      country: "El Salvador",
      email: "comercial.svYobel.biz",
      phone: "+503 2500 0000",
      address: "Carretera al Puerto de La Libertad, km 11, Block E Santa Tecla, La Libertad",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/El_Salvador"
    },
    {
      city: "Ciudad Arce",
      country: "El Salvador",
      email: "comercial.svYobel.biz",
      phone: "+503 2500 0000",
      address: "Km 36 1/2 Carretera A Santa Ana. Zona Franca American Park. Ciudad Arce La Libertad",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6bdea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/El_Salvador"
    }
  ],
  guatemala: [
    {
      city: "CEDI Villa Lobos",
      country: "Guatemala",
      email: "comercial.gtYobel.biz",
      phone: "+502 2300 0000",
      address: "Calzada Aguilar Batres 57-61 zona 12",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6bdea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI ALGESA",
      country: "Guatemala",
      email: "comercial.gtYobel.biz",
      phone: "+502 2300 0000",
      address: "27 Avenida 33 – 85, Bodega #3, zona 12",
      imageUrl: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0NjUwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI CLEF",
      country: "Guatemala",
      email: "comercial.gtYobel.biz",
      phone: "+502 2300 0000",
      address: "23 calle 11-41 interior zona 5 Finca El Frutal, Villa Nueva",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI El Frutal",
      country: "Guatemala",
      email: "comercial.gtYobel.biz",
      phone: "+502 2300 0000",
      address: "1ra. Av. 20-77 zona 7, El Frutal, San Miguel Petapa",
      imageUrl: "https://images.unsplash.com/photo-1650392131866-e4e2e06a0c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NjY2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI Los Álamos",
      country: "Guatemala",
      email: "comercial.gtYobel.biz",
      phone: "+502 2300 0000",
      address: "0 Avenida 7-83´Col. Los Álamos zona 6, San Miguel Petapa",
      imageUrl: "https://images.unsplash.com/photo-1717662292789-e97dfb7d3c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBjZW50ZXIlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ2NjY3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    },
    {
      city: "CEDI Distripark",
      country: "Guatemala",
      email: "comercial.gtYobel.biz",
      phone: "+502 2300 0000",
      address: "Parque logístico Distripark, Bodega D-4, Km.28.5 Carretera al Pacífico, Amatitlán",
      imageUrl: "https://images.unsplash.com/photo-1761815139982-0876947bf09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NjY3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Guatemala"
    }
  ],
  mexico: [
    {
      city: "Estado de México",
      country: "México",
      email: "comercial.mxYobel.biz",
      phone: "+52 55 5000 0000",
      address: "Av. Tejocotes Lote 9 Interior Encino 1 Colonia San Martín Obispo, Estado de México",
      imageUrl: "https://images.unsplash.com/photo-1704423846283-f92ff6bdea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2NDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timezone: "America/Mexico_City"
    }
  ]
};

const countryOptions = [
  { value: "peru", label: "Perú" },
  { value: "ecuador", label: "Ecuador" },
  { value: "colombia", label: "Colombia" },
  { value: "panama", label: "Panamá" },
  { value: "costa_rica", label: "Costa Rica" },
  { value: "rep_dominicana", label: "Rep. Dominicana" },
  { value: "el_salvador", label: "El Salvador" },
  { value: "guatemala", label: "Guatemala" },
  { value: "mexico", label: "México" }
];

const countries = [
  "Perú",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "México",
  "Panamá",
  "República Dominicana"
];

const services = [
  "Comercio Exterior",
  "Manufactura",
  "Servicio de Valor Agregado",
  "Almacenamiento",
  "Distribución",
  "Courier",
  "Otro"
];

const faqs = [
  { question: "¿En cuánto tiempo obtengo una propuesta?", answer: "En un máximo de 48 horas coordinamos un diagnóstico y te presentamos una propuesta adaptada a tus necesidades." },
  { question: "¿Puedo iniciar con un piloto?", answer: "Sí. Diseñamos pilotos personalizados para validar procesos, medir resultados y ajustar el modelo antes de su implementación completa." },
  { question: "¿Integran mi ERP o plataforma e-commerce?", answer: "Sí. Nuestros sistemas se integran fácilmente con ERP, CRM y plataformas de venta online para sincronizar inventarios, pedidos y reportes." },
  { question: "¿Tienen cobertura internacional?", answer: "Sí. Contamos con presencia en más de 8 países de Latinoamérica, lo que nos permite ofrecer soluciones regionales con operación local." }
];

export default function Contacto() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}