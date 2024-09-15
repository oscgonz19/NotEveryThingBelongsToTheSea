import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className="bg-[#f5f5f5] text-gray-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Próximos Eventos</h2>
        <p className="text-lg mb-6">¡No te pierdas las próximas proyecciones y eventos especiales!</p>
        <div className="space-y-6">
          <div className="bg-[#f5f5f5] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Estreno Mundial</h3>
            <p className="text-gray-400 mt-2">14 de Noviembre, 2024</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg">Registrarse</button>
          </div>
          {/* Repite para otros eventos */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;