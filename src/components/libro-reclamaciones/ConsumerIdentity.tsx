import React from "react";
import { CleanInput, CleanSelect } from "./form-elements";

export function ConsumerIdentity() {
  return (
    <div className="bg-white p-0 md:p-8 rounded-none mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-10">
        <h3 className="text-3xl font-medium text-black font-augenblick">Identificación del consumidor</h3>
        <span className="text-gray-400 text-sm font-medium mt-2 md:mt-0">* Datos requeridos</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
        {/* Row 1 */}
        <CleanInput label="Nombre" placeholder="Ingresa tu nombre" required />
        <CleanInput label="Primer apellido" placeholder="Ingresa tu primer apellido" required />
        <CleanInput label="Segundo apellido" placeholder="Ingresa tu segundo apellido" required />

        {/* Row 2 */}
        <CleanSelect 
            label="Tipo de documentación" 
            placeholder="Selección de documentación"
            options={["DNI", "Carnet de Extranjería", "Pasaporte", "RUC"]} 
            required 
            defaultValue=""
        />
        <CleanInput label="Número de documentación" placeholder="00000000" required />
        <CleanInput label="Celular" placeholder="999 999 999" type="tel" required />

        {/* Row 3 */}
        <CleanSelect 
            label="Departamento" 
            placeholder="Seleccionar departamento"
            options={["Lima", "Arequipa", "Cusco", "Otros"]} 
            required 
            defaultValue=""
        />
        <CleanSelect 
            label="Provincia" 
            placeholder="Seleccionar provincia"
            options={["Lima", "Callao", "Otros"]} 
            required 
            defaultValue=""
        />
        <CleanSelect 
            label="Distrito" 
            placeholder="Seleccionar distrito"
            options={["Miraflores", "San Isidro", "Otros"]} 
            required 
            defaultValue=""
        />

        {/* Row 4 */}
        <CleanInput label="Dirección" placeholder="Av. Principal 123" required className="md:col-span-2" />
        <CleanInput label="Referencia" placeholder="Frente al parque..." />
        
        <div className="md:col-span-3">
            <CleanInput label="Correo electrónico" placeholder="nombre@ejemplo.com" type="email" required />
        </div>
      </div>

      {/* Minor check */}
      <div className="mt-16 border-t border-gray-100 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
         <label className="block text-lg font-medium text-black">¿Eres menor de edad?</label>
         <div className="col-span-2 flex justify-start gap-16">
            <label className="group flex items-center gap-3 cursor-pointer">
               <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 group-hover:border-black transition-colors">
                   <input type="radio" name="is_minor" className="peer appearance-none w-full h-full opacity-0 absolute" />
                   <div className="w-3 h-3 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
               </div>
               <span className="text-gray-600 group-hover:text-black transition-colors">Si</span>
            </label>
            <label className="group flex items-center gap-3 cursor-pointer">
               <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 group-hover:border-black transition-colors">
                   <input type="radio" name="is_minor" className="peer appearance-none w-full h-full opacity-0 absolute" defaultChecked />
                   <div className="w-3 h-3 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
               </div>
               <span className="text-gray-600 group-hover:text-black transition-colors">No</span>
            </label>
         </div>
      </div>
    </div>
  );
}
