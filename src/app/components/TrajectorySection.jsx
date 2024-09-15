import React from 'react';

const TrajectorySection = () => {
  return (
    <div className="bg-[#f5f5f5] text-gray-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Trayectoria del proyecto</h2>
        <div className="space-y-8">
          {/* Premios y Reconocimientos */}
          <div className='w-full max-w-3xl'>
            <h3 className="text-2xl font-semibold mb-4 text-gray-500">Participaciones:</h3>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li className="text-lg">FDC (Fondo para el Desarrollo Cinematográfico)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrajectorySection;
