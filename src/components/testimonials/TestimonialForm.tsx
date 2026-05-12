"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface TestimonialFormProps {
  onSubmit: (data: TestimonialData) => Promise<void>;
  isLoading?: boolean;
  onClose: () => void;
  error?: string;
  success?: boolean;
}

export interface TestimonialData {
  quote: string;
  name: string;
  designation: string;
  email: string;
  rating: number;
}

export function TestimonialForm({
  onSubmit,
  isLoading = false,
  onClose,
  error = "",
  success = false,
}: TestimonialFormProps) {
  const [formData, setFormData] = useState<TestimonialData>({
    quote: "",
    name: "",
    designation: "",
    email: "",
    rating: 5,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="p-3 rounded-lg bg-success/10 border border-success text-success text-sm">
          ¡Gracias por tu testimonio! 🎉
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500 text-red-500 text-sm">
          {error}
        </div>
      )}

      {/* Quote */}
      <div>
        <label className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">
          Tu testimonio *
        </label>
        <textarea
          value={formData.quote}
          onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
          placeholder="¿Qué te pareció el servicio?"
          rows={3}
          className="w-full px-4 py-2 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0d0d0d] text-primary dark:text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Name and Email */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">
            Nombre *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Tu nombre"
            className="w-full px-4 py-2 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0d0d0d] text-primary dark:text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">
            Correo *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="tu@correo.com"
            className="w-full px-4 py-2 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0d0d0d] text-primary dark:text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {/* Designation */}
      <div>
        <label className="block text-sm font-medium text-secondary dark:text-gray-400 mb-2">
          Rol / Empresa
        </label>
        <input
          type="text"
          value={formData.designation}
          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
          placeholder="ej: Product Manager en TechCorp"
          className="w-full px-4 py-2 rounded-xl border border-border dark:border-white/10 bg-white dark:bg-[#0d0d0d] text-primary dark:text-white placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-secondary dark:text-gray-400 mb-3">
          Calificación *
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              className="transition-all duration-200 hover:scale-110"
            >
              <Star
                size={28}
                className={`${
                  star <= formData.rating
                    ? "fill-accent text-accent"
                    : "text-border dark:text-white/20"
                } transition-all`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 px-4 py-2 rounded-xl bg-accent text-[#0b0b0b] font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Enviar testimonio"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2 rounded-xl border border-border dark:border-white/10 text-secondary dark:text-gray-400 hover:bg-surface dark:hover:bg-white/5 transition-all"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
