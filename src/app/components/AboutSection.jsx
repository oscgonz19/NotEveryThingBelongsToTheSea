import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full bg-black text-white px-8 py-16 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16"> {/* Espacio incrementado entre los elementos */}
        {/* Título centrado y más grande */}
        <h1
          className="text-4xl font-bold text-blue-400 text-center mb-12" // Agregado un margen inferior al título
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          SINOPSIS
        </h1>

        {/* Contenido del texto centrado */}
        <p
          className="text-2xl leading-relaxed text-justify max-w-3xl text-gray-300" // Tamaño del texto más grande y color gris más suave
          style={{
            fontFamily: "'Roboto', sans-serif",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Sombra para darle mayor profundidad
          }}
        >
          En el corregimiento de Juanchaco en Bahía Málaga, Colombia, la comunidad todos los días se despierta 
          contemplando su inmenso mar y la basura de diferentes lugares del planeta que amanece en sus orillas, 
          cada mañana sus habitantes queman o entierran los residuos sólidos que las olas traen al frente de sus propiedades. 
          A partir de este panorama desolador diferentes integrantes de la comunidad, han desarrollado propuestas ecológicas que han contribuido poco a poco a mitigar el daño ambiental, no obstante, estas iniciativas se enfrentan 
          a diferentes obstáculos que limitan la acción de retirar todo aquello que no le pertenece al mar.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
