import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OlasText from './OlasText';

export default function Preloader({ isLoaded }) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((oldPercentage) => {
        if (oldPercentage < 100) {
          return oldPercentage + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 40); // Ajusta el tiempo para incrementar más lento o rápido

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }} // Desliza hacia abajo al salir
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h1 className="text-2xl mb-4">
            Not everything belongs to the sea / No Todo Le Pertenece Al Mar.
          </h1>
          <OlasText>Not everything belongs to the sea</OlasText>
          <div className="text-center text-xl">{loadingPercentage}%</div>
          <div className="mt-4 text-sm">Cargando...</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
