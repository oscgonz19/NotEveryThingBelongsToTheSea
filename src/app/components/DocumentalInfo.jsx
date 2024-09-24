import React from 'react';
import { useState, useEffect } from 'react';
const DocumentalInfo = () => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Espera un momento y luego muestra el contenido
    setTimeout(() => {
      setIsVisible(true);
    }, 0.5); // 0.5 segundos de retardo
  }, []);
  return (
    <div className={`absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8 md:px-16 lg:px-24 transition-opacity duration-10000 ease-out transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
      <h1
        className="text-6xl font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        NO TODO LE PERTENECE
      </h1>
      <h1
        className="text-6xl font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        AL MAR.
      </h1>
      <h2
        className="text-2xl font-semibold mt-2"
        style={{
          fontFamily: "'Lora', serif",
        }}
      >
        María Camila Hernández Toro
      </h2>
      <p
        className="text-lg font-normal mt-4"
        style={{
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        2024 / 35’ / Cortometraje / Documental / Colombia
      </p>

    </div>
  );
};

export default DocumentalInfo;

