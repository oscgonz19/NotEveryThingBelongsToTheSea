import { useState, useEffect } from 'react';
import OlasText from './OlasText';

export default function Preloader() {
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
    }, 70); // Ajusta el tiempo para incrementar más lento o rápido

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-2xl mb-4">Not everything belongs to the sea / No Todo Le Pertenece Al Mar. </h1>
      <OlasText>Not everything belongs to the sea</OlasText>
      <div className="text-center text-xl">
        {loadingPercentage}%
      </div>
      <div className="mt-4 text-sm">Cargando...</div>
    </div>
  );
}
