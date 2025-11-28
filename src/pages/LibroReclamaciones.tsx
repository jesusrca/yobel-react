import React from "react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/custom-section";
import { Container } from "../components/ui/custom-container";
import { Button } from "../components/ui/button";

export function LibroReclamaciones() {
  return (
    <>
      <PageHero 
        title="Libro de Reclamaciones"
        description="Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a tu disposición este canal para que puedas registrar tus quejas o reclamos."
        imageUrl="https://images.unsplash.com/photo-1726831662518-c48d983f9b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwb24lMjBwYXBlciUyMG9mZmljZSUyMGxlZ2FsJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzY0Mjg4MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <Section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-medium mb-4">Hoja de Reclamación</h2>
              <p className="text-gray-500">
                Fecha: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <form className="space-y-12">
              {/* 1. Identificación del Consumidor */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">1. Identificación del Consumidor Reclamante</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors" placeholder="Ingresa tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Documento</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-white">
                      <option>DNI</option>
                      <option>Carnet de Extranjería</option>
                      <option>Pasaporte</option>
                      <option>RUC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Número de Documento</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors" placeholder="N° de documento" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Domicilio</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors" placeholder="Dirección completa" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono / Celular</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors" placeholder="Ingresa tu teléfono" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors" placeholder="correo@ejemplo.com" />
                  </div>
                </div>
              </div>

              {/* 2. Identificación del Bien Contratado */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">2. Identificación del Bien Contratado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tipo_bien" className="w-4 h-4 text-black focus:ring-black" />
                        <span>Producto</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tipo_bien" className="w-4 h-4 text-black focus:ring-black" />
                        <span>Servicio</span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Bien Contratado</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors resize-none" placeholder="Describe el producto o servicio contratado" />
                  </div>
                </div>
              </div>

              {/* 3. Detalle de la Reclamación */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">3. Detalle de la Reclamación y Pedido del Consumidor</h3>
                <div className="space-y-6">
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Reclamación</label>
                    <div className="flex flex-col md:flex-row gap-6">
                      <label className="flex items-start gap-3 cursor-pointer p-4 border border-gray-200 rounded-xl bg-white hover:border-gray-300">
                        <input type="radio" name="tipo_reclamacion" className="mt-1 w-4 h-4 text-black focus:ring-black shrink-0" />
                        <div>
                          <span className="font-bold block mb-1">Reclamo</span>
                          <span className="text-sm text-gray-500">Disconformidad relacionada a los productos o servicios.</span>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer p-4 border border-gray-200 rounded-xl bg-white hover:border-gray-300">
                        <input type="radio" name="tipo_reclamacion" className="mt-1 w-4 h-4 text-black focus:ring-black shrink-0" />
                        <div>
                          <span className="font-bold block mb-1">Queja</span>
                          <span className="text-sm text-gray-500">Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detalle de la Reclamación</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors resize-none" placeholder="Detalla aquí los hechos de tu reclamo o queja..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pedido del Consumidor</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors resize-none" placeholder="¿Qué solución esperas?" />
                  </div>
                </div>
              </div>

              {/* Legal & Submit */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black" />
                  <p className="text-sm text-gray-600">
                    Declaro que la información consignada en el presente documento es veraz.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-black rounded border-gray-300 focus:ring-black" />
                  <p className="text-sm text-gray-600">
                    He leído y acepto las <a href="#" className="underline text-black">Políticas de Privacidad</a> y el tratamiento de mis datos personales.
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-auto">
                    Enviar Reclamación
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
