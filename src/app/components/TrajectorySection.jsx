import React from 'react';

const TrajectorySection = () => {
  return (
    <div className="w-full bg-black text-white py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16">
        {/* Título centrado con color naranja */}
        <h2
          className="text-5xl font-bold text-orange-400 text-center mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Trayectoria del Proyecto
          y Participaciones
        </h2>

        {/* Contenido de la sección */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Premios y Reconocimientos */}
          <div className="w-full max-w-3xl">
            
            <h3 className="text-3xl mb-6 text-orange-400 font-semibold"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              
            </h3>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-gray-300"
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <li>semifinalistas FDC (Fondo para el Desarrollo Cinematográfico)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrajectorySection;
