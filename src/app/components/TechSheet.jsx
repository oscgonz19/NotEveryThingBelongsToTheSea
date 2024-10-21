import React from 'react';

const TechSheet = () => {
  return (
    <div className="w-full bg-black text-white py-16 flex items-center justify-center min-h-screen"> {/* min-h-screen agregado */}
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16">
        {/* Título centrado con color azul */}
        <h2
          className="text-5xl font-bold text-blue-400 text-center mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Ficha Técnica
        </h2>

        {/* Contenido de la sección */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Producción e investigación */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Producción e investigación:
            </h3>
            <p className="mt-2 text-gray-300">María Camila Hernández Toro</p>
          </div>

          {/* Guionista */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Guionista:
            </h3>
            <p className="mt-2 text-gray-300">Angelica Salas</p>
          </div>

          {/* Coproducción */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Coproducción:
            </h3>
            <p className="mt-2 text-gray-300">Ylahiah Kaisal</p>
          </div>

          {/* Director */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Director:
            </h3>
            <p className="mt-2 text-gray-300">Juan Andrés Ruiz</p>
          </div>

          {/* Dirección de Fotografía */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Dirección de Fotografía:
            </h3>
            <p className="mt-2 text-gray-300">Juan Camilo Franco</p>
            <p className="mt-2 text-gray-300">Cristian Mauricio López Gomez</p>
          </div>

          {/* Sonidista */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400"
              style={{
                fontFamily: "'Roboto', sans-serif",
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Sonidista:
            </h3>
            <p className="mt-2 text-gray-300">Andri Yulieth Meneses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSheet;
