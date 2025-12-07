"use client";
import React, { useState, memo, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Upload, X, ArrowRight, Download } from "lucide-react";
import { useCountry } from "/contexts/CountryContext";
import jsPDF from "jspdf";

interface CheckboxItemProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

const CheckboxItem = memo(function CheckboxItem({ label, checked = false, onChange }: CheckboxItemProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute left-[4px] rounded-[4px] size-[24px] top-[4px]">
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            {checked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                  <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            )}
          </div>
        </div>
        <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
          {label}
        </p>
      </div>
    </div>
  );
});

interface RadioItemProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

const RadioItem = memo(function RadioItem({ label, checked = false, onChange }: RadioItemProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <input
              type="radio"
              checked={checked}
              onChange={onChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="absolute inset-[-2.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <circle cx="10.5" cy="10.5" r="10" stroke="black" fill="none" />
                {checked && <circle cx="10.5" cy="10.5" r="5" fill="black" />}
              </svg>
            </div>
          </div>
        </div>
        <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black">
          {label}
        </p>
      </div>
    </div>
  );
});

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}

const TextInput = memo(function TextInput({ label, placeholder, value, onChange, type = "text", required = false }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
        <span>{label} </span>
        {required && <span className="text-[#59c1e6]">*</span>}
      </p>
      <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
        <div 
          aria-hidden="true" 
          className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
            isFocused ? 'border-[#59c1e6]' : 'border-black'
          }`} 
        />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
        />
      </div>
    </div>
  );
});

interface SelectInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}

const SelectInput = memo(function SelectInput({ label, placeholder, value, onChange, options, required = false }: SelectInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
        <span>{label} </span>
        {required && <span className="text-[#59c1e6]">*</span>}
      </p>
      <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
        <div 
          aria-hidden="true" 
          className={`absolute border-[0px_0px_1.5px] border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 ${
            isFocused ? 'border-[#59c1e6]' : 'border-black'
          }`} 
        />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full appearance-none cursor-pointer pr-8"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
});

export function OptimizedReportForm() {
  const { selectedCountry } = useCountry();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reportCode, setReportCode] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Step 1 State
  const [reportType, setReportType] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [otherCategory, setOtherCategory] = useState<string>("");
  const [reporterName, setReporterName] = useState<string>("");
  const [reporterEmail, setReporterEmail] = useState<string>("");
  const [reporterPhone, setReporterPhone] = useState<string>("");
  const [companyRelation, setCompanyRelation] = useState<string>("");

  // Step 2 State - Información de la Denuncia
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [incidentCountry, setIncidentCountry] = useState<string>("");
  const [incidentCity, setIncidentCity] = useState<string>("");
  const [incidentArea, setIncidentArea] = useState<string>("");
  const [personsInvolved, setPersonsInvolved] = useState<string>("");
  const [detailedDescription, setDetailedDescription] = useState<string>("");

  // Step 3 State - Evidencia y Declaración
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [declarations, setDeclarations] = useState<string[]>([]);

  const reportCategories = [
    "Corrupción",
    "Lavado de Activos",
    "Financiamiento del Terrorismo",
    "Tráfico de Influencias",
    "Prácticas contra la Libre Competencia",
    "Otros (favor de especificar)"
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

  const areas = [
    "Operaciones",
    "Almacén",
    "Transporte",
    "Administración",
    "Recursos Humanos",
    "Ventas",
    "Tecnología",
    "Finanzas",
    "Legal",
    "Otra"
  ];

  const relations = [
    "Colaborador",
    "Proveedor",
    "Cliente",
    "Otro (especifique)"
  ];

  const impacts = [
    "Económico",
    "Reputacional",
    "Personas / HSE",
    "Legal / regulatorio",
    "Ambiental",
    "Datos / privacidad"
  ];

  const confirmationItems = [
    "Confirmo que el reporte se realiza de buena fe",
    "Solicito que mis datos no se compartan fuera del equipo de investigación",
    "Entiendo que si tengo dudas puedo presentar una denuncia anónima. Si es anónima, las obligaciones legales, de compliance y reportes de información seguirán siendo importantes para el cierre del caso."
  ];

  const toggleCategory = useCallback((category: string) => {
    setCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const toggleCountry = useCallback((country: string) => {
    setIncidentCountry(country);
  }, []);

  const toggleDeclaration = useCallback((declaration: string) => {
    setDeclarations(prev => 
      prev.includes(declaration) 
        ? prev.filter(d => d !== declaration)
        : [...prev, declaration]
    );
  }, []);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).filter(file => {
        const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        return validTypes.includes(file.type);
      });
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  }, []);

  const removeFile = useCallback((index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleNextStep = useCallback(() => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const generateReportCode = useCallback(() => {
    const countryCode = selectedCountry || "PE";
    const year = new Date().getFullYear();
    const randomNum = Math.floor(Math.random() * 900000) + 100000;
    return `LR-${countryCode}-${year}-${String(randomNum).padStart(6, '0')}`;
  }, [selectedCountry]);

  const generatePDF = useCallback(() => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let yPosition = margin;
    
    // Helper function to add text with auto line wrap
    const addText = (text: string, fontSize: number, fontStyle: string = 'normal', color: number[] = [0, 0, 0]) => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', fontStyle);
      pdf.setTextColor(color[0], color[1], color[2]);
      
      const lines = pdf.splitTextToSize(text, contentWidth);
      lines.forEach((line: string) => {
        if (yPosition > 270) {
          pdf.addPage();
          yPosition = margin;
        }
        pdf.text(line, margin, yPosition);
        yPosition += fontSize * 0.5;
      });
    };
    
    const addSpace = (space: number = 8) => {
      yPosition += space;
    };
    
    const addDivider = () => {
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      addSpace(12);
    };
    
    // Header
    addText('Reporte de Línea de Ética', 20, 'bold');
    addSpace(6);
    addText(`Código: ${reportCode}`, 12, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(`Fecha: ${new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}`, 10, 'normal', [120, 120, 120]);
    addSpace(14);
    addDivider();
    
    // Section 1: Tipo de Reporte
    addText('Tipo de Reporte', 14, 'bold');
    addSpace(8);
    
    addText('Categorías del reporte', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(categories.length > 0 ? categories.join(", ") : "No especificado", 11, 'normal');
    addSpace(8);
    
    if (otherCategory) {
      addText('Otra categoría', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      addText(otherCategory, 11, 'normal');
      addSpace(8);
    }
    
    addText('Nombre del reportante', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(reporterName || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Correo electrónico del reportante', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(reporterEmail || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Teléfono del reportante', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(reporterPhone || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Relación con la empresa', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(companyRelation || "No especificado", 11, 'normal');
    addSpace(8);
    
    addDivider();
    
    // Section 2: Información de la Denuncia
    addText('Información de la Denuncia', 14, 'bold');
    addSpace(8);
    
    addText('Fecha de los hechos', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(incidentDate || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('País donde ocurrieron los hechos', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(incidentCountry || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Ciudad', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(incidentCity || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Área o Departamento', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(incidentArea || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Personas involucradas', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(personsInvolved || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Descripción detallada de los hechos', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(detailedDescription || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addDivider();
    
    // Section 3: Evidencia y Declaración
    addText('Evidencia y Declaración', 14, 'bold');
    addSpace(8);
    
    if (uploadedFiles.length > 0) {
      addText('Archivos adjuntos', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      uploadedFiles.forEach(file => {
        addText(`• ${file.name}`, 10, 'normal');
        addSpace(4);
      });
      addSpace(4);
    } else {
      addText('Archivos adjuntos', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      addText('No se adjuntaron archivos', 11, 'normal');
      addSpace(8);
    }
    
    addDivider();
    
    // Declarations
    if (declarations.length > 0) {
      addText('Declaraciones', 14, 'bold');
      addSpace(8);
      declarations.forEach(declaration => {
        addText(`✓ ${declaration}`, 10, 'normal');
        addSpace(6);
      });
    }
    
    // Save PDF
    pdf.save(`Reporte_${reportCode}.pdf`);
  }, [reportCode, categories, otherCategory, reporterName, reporterEmail, reporterPhone, companyRelation, incidentDate, incidentCountry, incidentCity, incidentArea, personsInvolved, detailedDescription, uploadedFiles, declarations]);

  const handleSubmit = useCallback(() => {
    const code = generateReportCode();
    setReportCode(code);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [generateReportCode]);

  const handleBackToHome = useCallback(() => {
    window.location.href = '/';
  }, []);

  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "01 / Categoría del ilícito e información del denunciante";
      case 2: return "02 / Información de la denuncia";
      case 3: return "03 / Evidencia y declaración";
      default: return "";
    }
  };

  const getStepDescription = () => {
    switch(currentStep) {
      case 1: return "Este canal es confidencial, permite reportes anónimos y prohíbe cualquier represalia por denuncias hechas de buena fe.";
      case 2: return "Proporciona los detalles de ubicación y tiempo para contextualizar el incidente reportado.";
      case 3: return "Adjunta evidencia relevante y confirma tu conocimiento de las políticas.";
      default: return "";
    }
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center bg-white">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-[20px] md:px-[50px] py-[60px] md:py-[120px] relative w-full max-w-[600px]">
          <h1 className="font-['Neue_Augenblick:Regular',sans-serif] text-[45px] md:text-[55px] leading-[1.1] text-black">
            ¡Reporte recibido!
          </h1>

          <div className="flex flex-col gap-[14px] w-full">
            <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[16px] leading-[18px] text-[rgba(73,73,73,0.5)]">
              Código
            </p>
            <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[24px] leading-[28px] text-black">
              {reportCode}
            </p>
          </div>

          <div className="h-[1px] bg-[rgba(73,73,73,0.2)] w-full" />

          <p className="font-['Neue_Augenblick:Regular',sans-serif] text-[18px] leading-[22px] text-black">
            Te enviamos un correo con tu registro y el detalle de plazos.
          </p>

          <div className="flex flex-col gap-[24px] w-full mt-[20px]">
            <p className="font-['Neue_Augenblick:Medium',sans-serif] text-[18px] leading-[22px] text-[rgba(73,73,73,0.5)]">
              ¿Qué sigue?
            </p>

            <div className="flex gap-[16px] items-start">
              <ArrowRight className="shrink-0 mt-[2px]" size={20} />
              <p className="font-['Neue_Augenblick:Regular',sans-serif] text-[18px] leading-[24px] text-black">
                Revisaremos tu caso y nos comunicaremos según tu preferencia.
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <ArrowRight className="shrink-0 mt-[2px]" size={20} />
              <p className="font-['Neue_Augenblick:Regular',sans-serif] text-[18px] leading-[24px] text-black">
                Puedes consultar el estado con tu código y N° de documento.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] w-full mt-[20px]">
            <button 
              onClick={generatePDF}
              className="flex items-center justify-center gap-2 bg-black text-white font-['Neue_Augenblick:Medium',sans-serif] text-[18px] py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 w-full"
            >
              <Download size={20} />
              Descargar PDF del reporte
            </button>

            <button 
              onClick={handleBackToHome}
              className="font-['Neue_Augenblick:Medium',sans-serif] text-[18px] text-black underline hover:text-gray-600 transition-colors duration-300 py-2"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center px-[20px] md:px-[50px] py-[60px] md:py-[120px] relative w-full">
          
          {/* Header */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[133px] items-start relative shrink-0 w-full max-w-[1340px]">
            <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full lg:w-[547px] order-2 lg:order-1">
              <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-[rgba(73,73,73,0.5)] w-full">
                A continuación, por favor, completa los campos con la información de la denuncia y nuestro equipo de cumplimiento se encargará de la investigación en el mas breve plazo. Si deseas, puedes hacerla de forma anónima, pero proporcionar tus datos nos permitirá contactarte en caso necesitemos más detalles.
              </p>
            </div>
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full lg:w-[547px] order-1 lg:order-2">
              <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[35px] md:text-[45px] text-black w-full">
                {getStepTitle()}
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[133px] items-start relative shrink-0 w-full max-w-[1340px]">
            <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full lg:w-[547px] order-2 lg:order-1">
              {/* Información del canal */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                {/* Removed paragraph */}
              </div>
            </div>

            {/* Forms */}
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[547px] order-1 lg:order-2">
              
              {/* STEP 1 - Tipo de Reporte */}
              {currentStep === 1 && (
                <>
                  {/* Categories */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Categoría del ilícito denunciado </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {reportCategories.map((category) => (
                        <CheckboxItem
                          key={category}
                          label={category}
                          checked={categories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                      ))}
                    </div>
                    {categories.includes("Otros (favor de especificar)") && (
                      <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full mt-2">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 focus-within:border-[#59c1e6]" 
                        />
                        <input
                          type="text"
                          value={otherCategory}
                          onChange={(e) => setOtherCategory(e.target.value)}
                          placeholder="Especificar"
                          className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Reporter Information (Optional) */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      Información del Denunciante (Opcional)
                    </p>
                  </div>

                  {/* Reporter Name */}
                  <TextInput
                    label="Nombre Completo"
                    placeholder=""
                    value={reporterName}
                    onChange={setReporterName}
                  />

                  {/* Reporter Email */}
                  <TextInput
                    label="Correo Electrónico"
                    placeholder=""
                    value={reporterEmail}
                    onChange={setReporterEmail}
                    type="email"
                  />

                  {/* Reporter Phone */}
                  <TextInput
                    label="Teléfono de Contacto"
                    placeholder=""
                    value={reporterPhone}
                    onChange={setReporterPhone}
                  />

                  {/* Company Relation */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      Relación con la Empresa
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <RadioItem 
                        label="Empleado" 
                        checked={companyRelation === "Empleado"}
                        onChange={() => setCompanyRelation("Empleado")}
                      />
                      <RadioItem 
                        label="Ex-empleado" 
                        checked={companyRelation === "Ex-empleado"}
                        onChange={() => setCompanyRelation("Ex-empleado")}
                      />
                      <RadioItem 
                        label="Cliente" 
                        checked={companyRelation === "Cliente"}
                        onChange={() => setCompanyRelation("Cliente")}
                      />
                      <RadioItem 
                        label="Proveedor" 
                        checked={companyRelation === "Proveedor"}
                        onChange={() => setCompanyRelation("Proveedor")}
                      />
                      <RadioItem 
                        label="Tercero" 
                        checked={companyRelation === "Tercero"}
                        onChange={() => setCompanyRelation("Tercero")}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2 - Dónde y cuándo ocurrió */}
              {currentStep === 2 && (
                <>
                  {/* Countries */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Seleccione el país </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {countries.map((country) => (
                        <CheckboxItem
                          key={country}
                          label={country}
                          checked={incidentCountry === country}
                          onChange={() => toggleCountry(country)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* City */}
                  <TextInput
                    label="Ciudad / Sede"
                    placeholder="Ej. CD San Genaro, Lima"
                    value={incidentCity}
                    onChange={setIncidentCity}
                    required
                  />

                  {/* Date */}
                  <TextInput
                    label="Fecha del suceso"
                    placeholder="dd/mm/aaaa"
                    value={incidentDate}
                    onChange={setIncidentDate}
                    type="date"
                    required
                  />

                  {/* Area */}
                  <SelectInput
                    label="Área / Terreno relacionado"
                    placeholder="Seleccione área"
                    value={incidentArea}
                    onChange={setIncidentArea}
                    options={areas}
                    required
                  />

                  {/* Persons Involved */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Personas Involucradas </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
                      <p className="leading-[22px]">(Nombre(s) y cargo(s) de las personas o entidades)</p>
                    </div>
                    <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full">
                      <div 
                        aria-hidden="true" 
                        className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 focus-within:border-[#59c1e6]" 
                      />
                      <input
                        type="text"
                        value={personsInvolved}
                        onChange={(e) => setPersonsInvolved(e.target.value)}
                        placeholder="Ej. Juan Pérez - Gerente de Ventas"
                        className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                      />
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Descripción Detallada de los Hechos </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
                      <p className="leading-[22px]">(Por favor, proporciona la mayor cantidad de información posible. Incluye cómo, cuándo y por qué crees que ocurrió el ilícito.)</p>
                    </div>
                    <div className="h-[233px] relative rounded-[20px] shrink-0 w-full">
                      <div 
                        aria-hidden="true" 
                        className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px] transition-colors duration-300 focus-within:border-[#59c1e6]" 
                      />
                      <div className="size-full">
                        <div className="box-border content-stretch flex gap-[20px] h-[233px] items-start p-[14px] relative w-full">
                          <textarea
                            value={detailedDescription}
                            onChange={(e) => setDetailedDescription(e.target.value)}
                            placeholder="Mensaje"
                            className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full resize-none placeholder:text-[rgba(0,0,0,0.3)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* STEP 3 - Evidencia y Declaración */}
              {currentStep === 3 && (
                <>
                  {/* Evidence Section Header */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      4. Evidencia (Opcional)
                    </p>
                  </div>

                  {/* File Upload */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      Adjuntar Archivos
                    </p>
                    <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
                      <p className="leading-[22px]">(Documentos, fotos, correos electrónicos, etc. Formatos permitidos: PDF, JPG, PNG, DOCX)</p>
                    </div>
                    
                    <label className="flex items-center gap-2 bg-white text-black border-2 border-black font-['Neue_Augenblick:Medium',sans-serif] text-[16px] py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 cursor-pointer mt-4">
                      <Upload size={18} />
                      Adjuntar archivo
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="w-full mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-black rounded-[4px]">
                            <span className="font-['Neue_Augenblick:Medium',sans-serif] text-[14px] text-black truncate">
                              {file.name}
                            </span>
                            <button
                              onClick={() => removeFile(index)}
                              className="ml-2 text-black hover:text-red-600 transition-colors"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Declaration Section Header */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>5. Declaración de Conocimiento </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                  </div>

                  {/* Declarations */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <CheckboxItem
                        label="He leído y acepto la Política de Denuncias y Ética de la empresa."
                        checked={declarations.includes("He leído y acepto la Política de Denuncias y Ética de la empresa.")}
                        onChange={() => toggleDeclaration("He leído y acepto la Política de Denuncias y Ética de la empresa.")}
                      />
                      <CheckboxItem
                        label="Declaro que la información proporcionada es verdadera y de buena fe."
                        checked={declarations.includes("Declaro que la información proporcionada es verdadera y de buena fe.")}
                        onChange={() => toggleDeclaration("Declaro que la información proporcionada es verdadera y de buena fe.")}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 w-full">
                {currentStep > 1 && (
                  <button 
                    onClick={handlePrevStep}
                    className="flex items-center justify-center gap-2 bg-white text-black border-2 border-black font-['Neue_Augenblick:Medium',sans-serif] text-[18px] py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 flex-1"
                  >
                    <ChevronLeft size={20} />
                    Anterior paso
                  </button>
                )}
                {currentStep < 3 ? (
                  <button 
                    onClick={handleNextStep}
                    className="flex items-center justify-center gap-2 bg-black text-white font-['Neue_Augenblick:Medium',sans-serif] text-[18px] py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 flex-1"
                  >
                    Siguiente paso
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    className="bg-black text-white font-['Neue_Augenblick:Medium',sans-serif] text-[18px] py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 flex-1"
                  >
                    Enviar reporte
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}