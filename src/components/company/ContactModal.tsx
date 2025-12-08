import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface ContactModalProps {
  trigger?: React.ReactNode;
}

export function ContactModal({ trigger }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button>Contáctanos</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-black p-8 rounded-[20px]">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl font-augenblick font-normal">Contáctanos</DialogTitle>
          <DialogDescription className="text-gray-500 text-lg">
            Déjanos tus datos y nos pondremos en contacto contigo a la brevedad.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium ml-1">Nombre completo</label>
            <Input id="name" placeholder="Ej. Juan Pérez" className="h-12 rounded-xl bg-gray-50 border-gray-200" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium ml-1">Correo electrónico</label>
            <Input id="email" type="email" placeholder="nombre@empresa.com" className="h-12 rounded-xl bg-gray-50 border-gray-200" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium ml-1">Mensaje</label>
            <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={4} className="resize-none rounded-xl bg-gray-50 border-gray-200" />
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-black/80 text-white font-bold h-14 rounded-xl text-lg mt-2">
            Enviar mensaje
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
