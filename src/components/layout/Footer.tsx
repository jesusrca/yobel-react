import React from "react";
import { Link } from "react-router-dom";
import svgPaths from "../../imports/svg-wm177np9sn";
import Circulos from "../../imports/Circulos-25-2001";

function LogoGroup() {
  return (
    <div className="h-[196.678px] relative shrink-0 w-full max-w-[510px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 510 197">
        <g id="Group 15">
          <g id="Group">
            <path d={svgPaths.p11c62a00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p3eb73a80} fill="var(--fill-0, white)" id="Vector_2" />
            <g id="Group_2">
              <path d={svgPaths.p35aa3680} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p1f0be600} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p1a4e0200} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
          </g>
          <path d={svgPaths.p2b3d6e00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p278d200} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-white w-full">
      <p className="font-sans font-medium leading-[18px] relative shrink-0 text-[16px] w-full">CONTACTO COMERCIAL</p>
      <p className="font-sans font-normal leading-[22px] relative shrink-0 text-[18px] w-full">
        +<span className="not-italic">511 997 593 459</span>
      </p>
    </div>
  );
}

function Slogan() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[547px]">
      <LogoGroup />
      <div className="font-sans font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="mb-0">{`EN MOVIMIENTO `}</p>
        <p className="mb-0">CONCRETAMOS</p>
        <p>TUS SUEÑOS</p>
      </div>
      <ContactInfo />
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="relative shrink-0 w-full cursor-pointer hover:text-white transition-colors text-[22px] text-[rgba(255,255,255,0.5)] font-normal leading-[24px]">
      {children}
    </Link>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="font-sans font-medium leading-[18px] not-italic relative shrink-0 text-[16px] text-white w-full uppercase">{title}</p>
      <div className="content-stretch flex flex-col font-sans gap-[14px] items-start justify-center w-full">
        {children}
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[663px]">
      {/* Row 1: Empresa & Servicios */}
      <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-start relative shrink-0 w-full">
         <div className="w-full md:w-1/2">
            <FooterColumn title="Empresa">
              <FooterLink to="/empresa/sobre-nosotros">Sobre Nosotros</FooterLink>
              <FooterLink to="/empresa/presencia-global">Presencia Global</FooterLink>
              <FooterLink to="/empresa/historia">Historia</FooterLink>
            </FooterColumn>
         </div>
         <div className="w-full md:w-1/2">
            <FooterColumn title="Servicios">
              <FooterLink to="/servicios/comercio-exterior">Comercio Exterior</FooterLink>
              <FooterLink to="/servicios/manufactura">Manufactura</FooterLink>
              <FooterLink to="/servicios/valor-agregado">Servicio Valor Agregado</FooterLink>
              <FooterLink to="/servicios/almacenamiento">Almacenamiento</FooterLink>
              <FooterLink to="/servicios/distribucion">Distribución</FooterLink>
              <FooterLink to="/servicios/courier-express">Courier Express</FooterLink>
            </FooterColumn>
         </div>
      </div>

      {/* Row 2: Noticias & Ética */}
      <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-start relative shrink-0 w-full">
         <div className="w-full md:w-1/2">
            <FooterColumn title="Noticias">
              <FooterLink to="#">Ver todas las noticias</FooterLink>
              <FooterLink to="#">Insights y Tendencias</FooterLink>
              <FooterLink to="#">Innovación y Tecnología</FooterLink>
              <FooterLink to="#">Casos de Éxito y Guías Prácticas</FooterLink>
            </FooterColumn>
         </div>
         <div className="w-full md:w-1/2">
            <FooterColumn title="Ética y Sostenibilidad">
              <FooterLink to="/etica/codigo-de-etica">Código de Ética</FooterLink>
              <FooterLink to="/etica/linea-de-etica">Línea de Ética</FooterLink>
              <FooterLink to="/etica/rse-sostenibilidad">RSE y Sostenibilidad</FooterLink>
            </FooterColumn>
         </div>
      </div>

      {/* Row 3: Contacto & Legal */}
      <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-start relative shrink-0 w-full">
         <div className="w-full md:w-1/2">
            <FooterColumn title="Contacto">
              <FooterLink to="/contacto">Oficinas</FooterLink>
              <FooterLink to="/contacto">Contactar Asesor</FooterLink>
              <FooterLink to="/contacto">Trabaja con nosotros</FooterLink>
            </FooterColumn>
         </div>
         <div className="w-full md:w-1/2">
            <FooterColumn title="Legal">
              <FooterLink to="#">Términos y Condiciones</FooterLink>
              <FooterLink to="#">Libro de Reclamaciones</FooterLink>
              <FooterLink to="#">Políticas de Privacidad</FooterLink>
              <FooterLink to="#">Políticas de Cookies</FooterLink>
            </FooterColumn>
         </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] relative w-full to-[#000000] to-[40.645%] overflow-hidden">
       <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[2198px] h-[879px] pointer-events-none z-0">
        <Circulos />
      </div>
      <div className="w-full h-full relative z-10">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-4 md:px-[50px] py-0 relative w-full h-full">
          <div className="box-border content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto px-0 py-[40px] relative shrink-0 w-full max-w-[1340px] mx-auto">
             <div className="content-stretch flex flex-col lg:flex-row gap-[60px] lg:gap-[133px] items-start relative shrink-0 w-full py-20">
                <Slogan />
                <FooterLinks />
             </div>
             <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
               <p className="font-sans font-normal leading-[22px] not-italic relative shrink-0 text-[18px] text-white w-full">© Yobel SCM Perú</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
