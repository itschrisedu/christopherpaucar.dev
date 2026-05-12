"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./Modal";
import { TestimonialForm, type TestimonialData } from "./TestimonialForm";

interface TestimonialModalProps {
  onSubmit: (data: TestimonialData) => Promise<void>;
}

export function TestimonialModal({ onSubmit }: TestimonialModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: TestimonialData) => {
    setIsLoading(true);
    setError("");

    // Validate
    if (!data.quote.trim() || !data.name.trim() || !data.email.trim()) {
      setError("Por favor completa todos los campos requeridos");
      setIsLoading(false);
      return;
    }

    if (!data.email.includes("@")) {
      setError("Por favor ingresa un correo válido");
      setIsLoading(false);
      return;
    }

    try {
      await onSubmit(data);
      setSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
        setError("");
      }, 2000);
    } catch (err) {
      setError("Error al enviar el testimonio. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center mb-8"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 rounded-xl bg-accent text-[#0b0b0b] font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
        >
          ✨ Dejar un testimonio
        </button>
      </motion.div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Comparte tu experiencia"
      >
        <TestimonialForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          onClose={() => setIsOpen(false)}
          error={error}
          success={success}
        />
      </Modal>
    </>
  );
}
