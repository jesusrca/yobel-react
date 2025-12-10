import React from "react";
import { CleanInput, CleanSelect, CleanTextArea } from "./form-elements";

export function ClaimDetail() {
  return (
    <div className="bg-white p-0 md:p-8 rounded-none mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-10">
        <h3 className="text-3xl font-medium text-black font-augenblick">Detalle de la Reclamación</h3>
        <span className="text-gray-400 text-sm font-medium mt-2 md:mt-0">* Datos requeridos</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
        {/* Row 1 */}
        <CleanSelect 
            label="Tipo de consumo" 
            placeholder="Seleccionar tipo"
            options={["Producto", "Servicio"]} 
            required 
            defaultValue=""
        />
        <CleanInput label="N° de pedido" placeholder="Ej: PED-123456" required />
        <CleanInput 
            label="Fecha de reclamación / queja" 
            defaultValue={new Date().toLocaleDateString('es-PE')} 
            readOnly 
            className="text-gray-500"
        />

        {/* Row 2 */}
        <CleanInput label="Proveedor" placeholder="Nombre del proveedor" />
        <CleanInput label="Monto reclamado (S/.)" placeholder="0.00" type="number" />
        <div className="hidden md:block"></div>

        {/* Row 3 */}
        <div className="md:col-span-3">
          <CleanTextArea 
            label="Descripción del producto o servicio" 
            placeholder="Describe brevemente el producto o servicio contratado..." 
            required 
            rows={3}
          />
        </div>

        {/* Row 4 */}
        <CleanInput label="Fecha de compra" type="date" className="text-gray-600" />
        <CleanInput label="Fecha de consumo" type="date" className="text-gray-600" />
        <CleanInput label="Fecha de caducidad" type="date" className="text-gray-600" />

        {/* Row 5 */}
        <div className="md:col-span-3">
          <CleanTextArea 
             label="Detalle de la Reclamación / Queja" 
             placeholder="Explica detalladamente los hechos..."
             required
             rows={5}
          />
        </div>

        {/* Row 6 - Pedido de cliente */}
        <div className="md:col-span-3">
           <CleanTextArea 
             label="Pedido del cliente" 
             placeholder="¿Qué solución esperas recibir?"
             rows={5}
          />
        </div>
      </div>
    </div>
  );
}
