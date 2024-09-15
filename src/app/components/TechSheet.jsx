import React from 'react';

const TechSheet = () => {
  return (
    <div className="bg-[#f5f5f5] text-gray-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-700">Ficha técnica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Actuación:</h3>
            <p className="mt-2">
              
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Escritura y Guion:</h3>
            <p className="mt-2">Angelica Salas</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Producido por:</h3>
            <p className="mt-2">Maria Camila Hernandez Toro</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Coproducción:</h3>
            <p className="mt-2"></p>
          </div>
             <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Director:</h3>
            <p className="mt-2"> Juan Ruiz </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Dirección de fotografía:</h3>
            <p className="mt-2">Juan Camilo Franco</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Dirección de arte:</h3>
            <p className="mt-2"></p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Sonido:</h3>
            <p className="mt-2"></p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Música original:</h3>
            <p className="mt-2"></p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-400">Montaje:</h3>
            <p className="mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSheet;