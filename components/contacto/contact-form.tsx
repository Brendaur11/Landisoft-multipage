"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeInView } from "@/components/shared/animated-section";

const SERVICIOS = [
  "Sistema de gestión",
  "Página web (landing)",
  "Página web (multi-page)",
  "Sistema + página web",
  "Otro",
];

export function ContactForm() {
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: SERVICIOS[0],
    mensaje: "",
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Mock de diseño: todavía no envía datos a ningún backend.
  }

  return (
    <FadeInView className="rounded-3xl border border-border bg-white p-8 sm:p-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="nombre">Nombre y apellido</Label>
            <Input
              id="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="+54 9 ..."
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="servicio">Servicio de interés</Label>
            <Select
              value={form.servicio}
              onValueChange={(value) => setForm({ ...form, servicio: value })}
            >
              <SelectTrigger id="servicio">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SERVICIOS.map((servicio) => (
                  <SelectItem key={servicio} value={servicio}>
                    {servicio}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <Label htmlFor="mensaje">Contanos sobre tu proyecto</Label>
          <Textarea
            id="mensaje"
            placeholder="Ej: necesito un sistema para controlar ventas y stock de mi negocio..."
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          />
        </div>

        <Button type="submit" size="block" className="cursor-pointer">
          Enviar mensaje
        </Button>
      </form>
    </FadeInView>
  );
}
