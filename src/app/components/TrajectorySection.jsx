import React from 'react';

const TrajectorySection = () => {
  return (
    <div className="w-full bg-black text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16">
        {/* Título centrado con color naranja */}
        <h2
          className="text-4xl font-bold text-orange-400 text-center mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          PARTICIPACIONES
        </h2>

        {/* Contenido de la sección */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Premios y Reconocimientos */}
          <div className="w-full max-w-3xl">
            <ul className="mt-2 list-disc list-inside space-y-4 leading-relaxed text-gray-300"
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <li>Actualmente participantes del estímulo para realización de cortometraje documental del Ministerio de Cultura de Colombia.</li>
              <li>Finalistas de la convocatoria &quot;Relatos regionales&quot; del Fondo de Desarrollo Cinematográfico de Colombia (FDC) 2024.</li>
              <li>Participantes de la convocatoria Documentary Fund de Sundance Institute 2024.</li>
              <li>Participantes de la convocatoria IDFA Bertha Fund - categoría Classic 2024.</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrajectorySection;