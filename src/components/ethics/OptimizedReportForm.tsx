import React, { useState, memo, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Upload, X, ArrowRight, Download } from "lucide-react";
import { useCountry } from "../../contexts/CountryContext";
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
  const [hasImmediateRisk, setHasImmediateRisk] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Step 2 State
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [city, setCity] = useState<string>("");
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [incidentTime, setIncidentTime] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [involved, setInvolved] = useState<string>("");

  // Step 3 State
  const [reportTitle, setReportTitle] = useState<string>("");
  const [detailedDescription, setDetailedDescription] = useState<string>("");
  const [personsInvolved, setPersonsInvolved] = useState<string>("");
  const [relationWithYobel, setRelationWithYobel] = useState<string[]>([]);
  const [otherRelation, setOtherRelation] = useState<string>("");
  const [hasReportedBefore, setHasReportedBefore] = useState<string>("");
  const [reportedToWhom, setReportedToWhom] = useState<string>("");
  const [estimatedImpact, setEstimatedImpact] = useState<string[]>([]);

  // Step 4 State
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>("");
  const [hasMoreFiles, setHasMoreFiles] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");

  // Step 5 State
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [confirmations, setConfirmations] = useState<string[]>([]);

  const reportCategories = [
    "Corrupción / soborno",
    "Fraude / malversación",
    "Acoso / discriminación",
    "Seguridad y salud (HSE)",
    "Privacidad y datos personales",
    "Conflicto de interés",
    "Uso indebido de activos",
    "Incumplimiento regulatorio",
    "Medio ambiente",
    "Otra"
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
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  }, []);

  const toggleRelation = useCallback((relation: string) => {
    setRelationWithYobel(prev => 
      prev.includes(relation) 
        ? prev.filter(r => r !== relation)
        : [...prev, relation]
    );
  }, []);

  const toggleImpact = useCallback((impact: string) => {
    setEstimatedImpact(prev => 
      prev.includes(impact) 
        ? prev.filter(i => i !== impact)
        : [...prev, impact]
    );
  }, []);

  const toggleConfirmation = useCallback((confirmation: string) => {
    setConfirmations(prev => 
      prev.includes(confirmation) 
        ? prev.filter(c => c !== confirmation)
        : [...prev, confirmation]
    );
  }, []);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  }, []);

  const removeFile = useCallback((index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleNextStep = useCallback(() => {
    if (currentStep < 5) {
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
    
    addText('¿Deseas reportar de forma anónima o identificada?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(reportType ? (reportType === "anonymous" ? "Anónima" : "Identificada") : "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Categorías del reporte', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(categories.length > 0 ? categories.join(", ") : "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('¿Existe riesgo inmediato para la salud, seguridad o medio ambiente?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(hasImmediateRisk || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Descripción del incidente', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(description || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addDivider();
    
    // Section 2: Ubicación y Tiempo
    addText('Ubicación y Tiempo', 14, 'bold');
    addSpace(8);
    
    addText('¿En qué país(es) ocurrió el incidente?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(selectedCountries.length > 0 ? selectedCountries.join(", ") : "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Ciudad', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(city || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Fecha del incidente', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(incidentDate || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Hora aproximada', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(incidentTime || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('¿Con qué frecuencia ocurre?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(frequency || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Área involucrada', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(area || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('¿Cuántas personas están involucradas?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(involved || "No especificado", 11, 'normal');
    addSpace(8);
    
    addDivider();
    
    // Section 3: Descripción Detallada
    addText('Descripción Detallada', 14, 'bold');
    addSpace(8);
    
    addText('Título del reporte', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(reportTitle || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Correlación detallada', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(detailedDescription || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Personas involucradas', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(personsInvolved || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('Relación con Yobel', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(relationWithYobel.length > 0 ? relationWithYobel.join(", ") : "No especificado", 11, 'normal');
    addSpace(8);
    
    if (otherRelation) {
      addText('Otra relación', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      addText(otherRelation, 11, 'normal');
      addSpace(8);
    }
    
    addText('¿Ha reportado este incidente antes?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(hasReportedBefore || "No especificado", 11, 'normal');
    addSpace(8);
    
    if (reportedToWhom) {
      addText('¿A quién reportó?', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      addText(reportedToWhom, 11, 'normal');
      addSpace(8);
    }
    
    addText('Impacto estimado', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(estimatedImpact.length > 0 ? estimatedImpact.join(", ") : "No especificado", 11, 'normal');
    addSpace(8);
    
    addDivider();
    
    // Section 4: Evidencia
    addText('Evidencia y Archivos', 14, 'bold');
    addSpace(8);
    
    addText('Archivos adjuntos', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    if (uploadedFiles.length > 0) {
      uploadedFiles.forEach(file => {
        addText(`• ${file.name}`, 11, 'normal');
        addSpace(4);
      });
    } else {
      addText('No se adjuntaron archivos', 11, 'normal');
    }
    addSpace(4);
    
    addText('URL de archivos adicionales', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(fileUrl || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addText('¿Tiene más archivos para compartir?', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(hasMoreFiles || "No especificado", 11, 'normal');
    addSpace(8);
    
    addText('Contacto para más información', 10, 'normal', [120, 120, 120]);
    addSpace(4);
    addText(contactName || "No proporcionado", 11, 'normal');
    addSpace(8);
    
    addDivider();
    
    // Section 5: Datos del Reportante
    addText('Datos del Reportante', 14, 'bold');
    addSpace(8);
    
    if (reportType === "identified") {
      addText('Nombre completo', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      addText(userName || "No proporcionado", 11, 'normal');
      addSpace(8);
      
      addText('Correo electrónico', 10, 'normal', [120, 120, 120]);
      addSpace(4);
      addText(userEmail || "No proporcionado", 11, 'normal');
      addSpace(8);
    } else {
      addText('Reporte anónimo', 11, 'italic', [120, 120, 120]);
      addSpace(8);
    }
    
    addDivider();
    
    // Confirmations
    if (confirmations.length > 0) {
      addText('Confirmaciones', 14, 'bold');
      addSpace(8);
      confirmations.forEach(confirmation => {
        addText(`✓ ${confirmation}`, 10, 'normal');
        addSpace(6);
      });
    }
    
    // Footer
    addSpace(12);
    addText('Yobel Supply Chain Management', 10, 'normal', [120, 120, 120]);
    
    // Save PDF
    pdf.save(`Reporte_${reportCode}.pdf`);
  }, [reportCode, reportType, categories, hasImmediateRisk, description, selectedCountries, city, incidentDate, incidentTime, frequency, area, involved, reportTitle, detailedDescription, personsInvolved, relationWithYobel, otherRelation, hasReportedBefore, reportedToWhom, estimatedImpact, fileUrl, uploadedFiles, hasMoreFiles, contactName, userName, userEmail, confirmations]);

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
      case 1: return "01 / Tipo de Reporte";
      case 2: return "02 / Dónde y cuándo ocurrió";
      case 3: return "03 / Describe lo sucedido";
      case 4: return "04 / Evidencia y archivos";
      case 5: return "05 / Tus datos y confidencialidad";
      default: return "";
    }
  };

  const getStepDescription = () => {
    switch(currentStep) {
      case 1: return "Este canal es confidencial, permite reportes anónimos y prohíbe cualquier represalia por denuncias hechas de buena fe.";
      case 2: return "Proporciona los detalles de ubicación y tiempo para contextualizar el incidente reportado.";
      case 3: return "Título del reporte";
      case 4: return "Se aceptan PNG/JPG/JPEG max 20 MB c/u";
      case 5: return "Completa estos datos para crear tu usuario";
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
                Línea de Ética
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
                <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-full">
                  {getStepDescription()}
                </p>
              </div>
            </div>

            {/* Forms */}
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:w-[547px] order-1 lg:order-2">
              
              {/* STEP 1 - Tipo de Reporte */}
              {currentStep === 1 && (
                <>
                  {/* Report Type */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>¿Deseas reportar de forma anónima o identificada? </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <RadioItem 
                        label="Anónima" 
                        checked={reportType === "anonymous"}
                        onChange={() => setReportType("anonymous")}
                      />
                      <RadioItem 
                        label="Identificada" 
                        checked={reportType === "identified"}
                        onChange={() => setReportType("identified")}
                      />
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full mt-2">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                        </svg>
                      </div>
                      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)]">
                        Si respondes "Sí", te mostraremos los canales HSE de contacto inmediato.
                      </p>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Categoría del reporte </span>
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
                  </div>

                  {/* Immediate Risk */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>¿Existe riesgo inmediato para la seguridad o la salud? </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <RadioItem 
                        label="Si" 
                        checked={hasImmediateRisk === "yes"}
                        onChange={() => setHasImmediateRisk("yes")}
                      />
                      <RadioItem 
                        label="No" 
                        checked={hasImmediateRisk === "no"}
                        onChange={() => setHasImmediateRisk("no")}
                      />
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full mt-2">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <path d="M4 10l4 4 8-8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                        </svg>
                      </div>
                      <p className="basis-0 font-['Neue_Augenblick:Medium',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)]">
                        Si respondes "Sí", te mostraremos los canales HSE de contacto inmediato.
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Descripción del incidente </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="h-[233px] relative rounded-[20px] shrink-0 w-full">
                      <div 
                        aria-hidden="true" 
                        className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[20.75px] transition-colors duration-300 focus-within:border-[#59c1e6]" 
                      />
                      <div className="size-full">
                        <div className="box-border content-stretch flex gap-[20px] h-[233px] items-start p-[14px] relative w-full">
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe lo sucedido con el mayor detalle posible..."
                            className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full resize-none placeholder:text-[rgba(0,0,0,0.3)]"
                          />
                        </div>
                      </div>
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
                          checked={selectedCountries.includes(country)}
                          onChange={() => toggleCountry(country)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* City */}
                  <TextInput
                    label="Ciudad / Sede"
                    placeholder="Ej. CD San Genaro, Lima"
                    value={city}
                    onChange={setCity}
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

                  {/* Time */}
                  <TextInput
                    label="Hora"
                    placeholder="00:00 hrs"
                    value={incidentTime}
                    onChange={setIncidentTime}
                    type="time"
                  />

                  {/* Frequency */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Frecuencia </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <RadioItem 
                        label="Ocurrió una sola vez" 
                        checked={frequency === "once"}
                        onChange={() => setFrequency("once")}
                      />
                      <RadioItem 
                        label="Ocurre con frecuencia" 
                        checked={frequency === "frequent"}
                        onChange={() => setFrequency("frequent")}
                      />
                      <RadioItem 
                        label="Anónima" 
                        checked={frequency === "anonymous"}
                        onChange={() => setFrequency("anonymous")}
                      />
                    </div>
                  </div>

                  {/* Area */}
                  <SelectInput
                    label="Área / Terreno relacionado"
                    placeholder="Seleccione área"
                    value={area}
                    onChange={setArea}
                    options={areas}
                    required
                  />

                  {/* Involved */}
                  <TextInput
                    label="Específique involucrado"
                    placeholder="Ej. Oficina"
                    value={involved}
                    onChange={setInvolved}
                    required
                  />
                </>
              )}

              {/* STEP 3 - Describe lo sucedido */}
              {currentStep === 3 && (
                <>
                  {/* Report Title */}
                  <TextInput
                    label="Ej.: Presunto conflicto de interés en procesos de compras."
                    placeholder=""
                    value={reportTitle}
                    onChange={setReportTitle}
                    required
                  />

                  {/* Detailed Description */}
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Correlación detallada </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="flex flex-col font-['Neue_Augenblick:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
                      <p className="leading-[22px]">¿Qué ocurrió? ¿Quiénes estuvieron involucrados? ¿Cuándo y dónde? ¿Cómo lo supiste?</p>
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

                  {/* Persons Involved */}
                  <TextInput
                    label="Personas involucradas"
                    placeholder="Nombre / cargo (si lo conoces)"
                    value={personsInvolved}
                    onChange={setPersonsInvolved}
                  />

                  {/* Relation with Yobel */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Relación con Yobel </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {relations.map((relation) => (
                        <CheckboxItem
                          key={relation}
                          label={relation}
                          checked={relationWithYobel.includes(relation)}
                          onChange={() => toggleRelation(relation)}
                        />
                      ))}
                    </div>
                    {relationWithYobel.includes("Otro (especifique)") && (
                      <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full mt-2">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 focus-within:border-[#59c1e6]" 
                        />
                        <input
                          type="text"
                          value={otherRelation}
                          onChange={(e) => setOtherRelation(e.target.value)}
                          placeholder="Especificar"
                          className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Has Reported Before */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>¿Has denunciado este hecho antes? </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <RadioItem 
                        label="Si" 
                        checked={hasReportedBefore === "yes"}
                        onChange={() => setHasReportedBefore("yes")}
                      />
                      <RadioItem 
                        label="No" 
                        checked={hasReportedBefore === "no"}
                        onChange={() => setHasReportedBefore("no")}
                      />
                    </div>
                    {hasReportedBefore === "yes" && (
                      <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full mt-2">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 focus-within:border-[#59c1e6]" 
                        />
                        <input
                          type="text"
                          value={reportedToWhom}
                          onChange={(e) => setReportedToWhom(e.target.value)}
                          placeholder="¿A quién y cuándo?"
                          className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Estimated Impact */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>Impacto estimado </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {impacts.map((impact) => (
                        <CheckboxItem
                          key={impact}
                          label={impact}
                          checked={estimatedImpact.includes(impact)}
                          onChange={() => toggleImpact(impact)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 4 - Evidencia y archivos */}
              {currentStep === 4 && (
                <>
                  {/* File Upload */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <label className="flex items-center gap-2 bg-white text-black border-2 border-black font-['Neue_Augenblick:Medium',sans-serif] text-[16px] py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                      <Upload size={18} />
                      Adjuntar archivo
                      <input
                        type="file"
                        multiple
                        accept=".png,.jpg,.jpeg"
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

                  <p className="font-['Neue_Augenblick:Regular',sans-serif] leading-[18px] not-italic text-[14px] text-[rgba(73,73,73,0.5)]">
                    Prefieres compartir evidencia de forma privada o anónima
                  </p>

                  {/* URL */}
                  <TextInput
                    label="URL"
                    placeholder="Agregar URL"
                    value={fileUrl}
                    onChange={setFileUrl}
                  />

                  {/* Has More Files */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Neue_Augenblick:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[16px] text-[rgba(73,73,73,0.5)] whitespace-pre-wrap">
                      <span>¿Tienes más archivos para subir? </span>
                      <span className="text-[#59c1e6]">*</span>
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <RadioItem 
                        label="Si" 
                        checked={hasMoreFiles === "yes"}
                        onChange={() => setHasMoreFiles("yes")}
                      />
                      <RadioItem 
                        label="No" 
                        checked={hasMoreFiles === "no"}
                        onChange={() => setHasMoreFiles("no")}
                      />
                    </div>
                    {hasMoreFiles === "yes" && (
                      <div className="box-border content-stretch flex gap-[20px] items-start px-0 py-[8px] relative w-full mt-2">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-[0px_0px_1.5px] border-black border-solid bottom-[-0.75px] left-0 pointer-events-none right-0 top-0 transition-colors duration-300 focus-within:border-[#59c1e6]" 
                        />
                        <input
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Nombre / contacto"
                          className="basis-0 flex flex-col font-['Neue_Augenblick:Medium',sans-serif] grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black bg-transparent border-none outline-none w-full placeholder:text-[rgba(0,0,0,0.3)]"
                        />
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* STEP 5 - Tus datos y confidencialidad */}
              {currentStep === 5 && (
                <>
                  {/* Name */}
                  <TextInput
                    label="Nombre"
                    placeholder=""
                    value={userName}
                    onChange={setUserName}
                    required
                  />

                  {/* Email */}
                  <TextInput
                    label="Correo / correo corporativo"
                    placeholder=""
                    value={userEmail}
                    onChange={setUserEmail}
                    type="email"
                    required
                  />

                  {/* Confirmations */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {confirmationItems.map((item) => (
                        <CheckboxItem
                          key={item}
                          label={item}
                          checked={confirmations.includes(item)}
                          onChange={() => toggleConfirmation(item)}
                        />
                      ))}
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
                {currentStep < 5 ? (
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
