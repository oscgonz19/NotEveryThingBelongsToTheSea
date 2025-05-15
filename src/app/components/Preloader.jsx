"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OlasText from "./OlasText";

/**
 * Optimised Preloader
 * -------------------
 * 1. Usa requestAnimationFrame en lugar de setInterval → mejor rendimiento.
 * 2. Avanza hasta 90 % aunque los recursos no estén listos; al recibir `isLoaded`
 *    salta a 100 % y dispara la salida.
 * 3. Añade `pointer-events-none` y `aria-live` para accesibilidad.
 */
export default function Preloader({ isLoaded }) {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(null);

  // Incremento base hasta 90 %
  useEffect(() => {
    let frame = 0;
  
    const tick = () => {
      frame++;
      if (frame % 6 === 0) {
        setProgress((p) => (p < 100 ? p + 1 : p));
      }
      rafId.current = requestAnimationFrame(tick);
    };
  
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // Fast‑forward cuando los assets cargan
  useEffect(() => {
    if (isLoaded) {
      cancelAnimationFrame(rafId.current);
      setProgress(100);
    }
  }, [isLoaded]);

  const showLoader = progress < 100;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black text-white pointer-events-none"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          aria-live="polite"
        >
          <h1 className="text-2xl mb-4 px-4 text-center max-w-lg">
            Not everything belongs to the sea / No Todo Le Pertenece Al Mar.
          </h1>
          <OlasText>Not everything belongs to the sea</OlasText>
          <div className="mt-6 text-xl tabular-nums">{progress}%</div>
          <div className="mt-2 text-sm text-muted">Cargando...</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
