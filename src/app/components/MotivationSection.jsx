import React from 'react';

const MotivationSection = () => {
  return (
    <div className="w-full bg-black text-white px-8 py-16 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16">
        {/* Título */}
        <h1
          className="text-4xl font-bold text-green-400 text-center mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          MOTIVACIÓN
        </h1>

        {/* Párrafo */}
        <p
          className="text-2xl leading-relaxed text-justify max-w-3xl text-gray-300"
          style={{
            fontFamily: "'Roboto', sans-serif",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}
        >
          Buenaventura (Colombia) es considerada una de las ciudades más importantes para el desarrollo económico del país. Es el único municipio del Valle del Cauca que cuenta con costas en el océano Pacífico; su puerto marítimo se encuentra dentro de los diez más importantes de América Latina y se estima que este moviliza el 53% del comercio internacional del país. Por otro lado, es un territorio rico en biodiversidad; sus playas hacen parte del grupo de Parques Nacional Natural de Colombia, además los turistas son atraídos a estas orillas, ya que la temperatura de su agua permite que entre los meses de julio y octubre las ballenas se desplacen hacia allí para dar a luz a sus ballenatos. Aun así, a pesar de sus puntos a favor, el primer visitante que reciben sus playas son los residuos sólidos dispersos en el mar.
        </p>

        <p
          className="text-2xl leading-relaxed text-justify max-w-3xl text-gray-300"
          style={{
            fontFamily: "'Roboto', sans-serif",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}
        >
          El documental “NO todo le pertenece al mar” nace de la necesidad de resaltar y conducir hacia otras miradas los proyectos de sostenibilidad ambiental que se están llevando a cabo en la zona rural de Buenaventura desde y por la comunidad. Este pretende narrar la historia detrás de Plástico Precioso Urambá, quienes transforman el plástico recolectado y traído por la marea en muebles escolares. Así mismo, resaltar la pedagogía realizada por Ecopazifico y Huaitoto Fundation, labores que se ven condensadas en actividades como: la Juanchatienda. Lugar donde el plástico cobra valor y en el que los residentes, por medio del trueque, pueden canjearlo por útiles escolares, víveres, productos de aseo, juguetes, etc.
        </p>

        <p
          className="text-2xl leading-relaxed text-justify max-w-3xl text-gray-300"
          style={{
            fontFamily: "'Roboto', sans-serif",
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
          }}
        >
          Por otro lado, dar mérito a las personas detrás de estas ideas, relatar su origen, la realidad que los despierta cada día y las inquietudes que los acompañan en el presente. Las visitas que ha realizado el equipo de trabajo han sido de suma importancia para conectar con la comunidad y asegurar el interés por parte de ellos en la grabación del presente producto audiovisual. “NO todo le pertenece al mar” es un espacio para reconocer lo que habita en la inmensidad de ese gran pliegue azul: explorar las problemáticas ambientales que cada día tienen más impacto a nivel mundial y resaltar las ideas que se están llevando a cabo en este territorio para mitigar el daño ambiental y contribuir al tejido social.
        </p>
      </div>
    </div>
  );
};

export default MotivationSection;
