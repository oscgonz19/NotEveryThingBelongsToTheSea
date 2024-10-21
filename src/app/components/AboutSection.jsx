import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full bg-black text-white px-8 py-16 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16"> {/* Espacio incrementado entre los elementos */}
        {/* Título centrado y más grande */}
        <h1
          className="text-5xl font-bold text-blue-400 text-center mb-12" // Agregado un margen inferior al título
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          SINOPSIS
        </h1>

        {/* Contenido del texto centrado */}
        <p
          className="text-xl leading-relaxed text-justify max-w-3xl text-gray-300" // Tamaño del texto más grande y color gris más suave
          style={{
            fontFamily: "'Roboto', sans-serif",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Sombra para darle mayor profundidad
          }}
        >
          Las basuras marinas son un problema global que afecta a todos los océanos del mundo.
          En especial en Buenaventura, donde la basura marina es un problema que afecta a la comunidad
          y a la fauna marina. Este documental busca visibilizar la problemática de las basuras marinas
          en Buenaventura, Colombia, a través de la historia de una mujer que ha dedicado su vida a limpiar
          las playas de la ciudad.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
