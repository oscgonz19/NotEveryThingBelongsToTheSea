import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div className="text-black flex flex-col justify-center items-center p-8 h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-x-16"> {/* Añadimos separación horizontal */}
        {/* Contenedor del teaser a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Link href="https://www.youtube.com/watch?v=1LLYMEVD0tw&ab_channel=CamilaHern%C3%A9ndez-Toro" passHref>
            <div className="relative w-full max-w-3xl cursor-pointer overflow-hidden" style={{ aspectRatio: '16/9' }}>
              {/* Bandas negras para efecto cinematográfico */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-black"></div>
              {/* Imagen del tráiler */}
              <Image
                src="/wallpaper_v7.png"
                alt="Ver Tráiler"
                width={800}
                height={450}
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-roboto">
                VER TEASER
              </div>
            </div>
          </Link>
        </div>

        {/* Contenedor de la sinopsis a la derecha */}
        <div className="w-full md:w-1/2 text-center md:text-left flex items-center">
          <p className="text-2 xl leading-relaxed text-justify text-white"
           style={{
          fontFamily: "'Roboto', serif",
        }}>{/* Aumentamos el tamaño de la letra */}
            Las basuras marinas son un problema global que afecta a todos los océanos del mundo.
            En especial en Buenaventura, donde la basura marina es un problema que afecta a la comunidad
            y a la fauna marina. Este documental busca visibilizar la problemática de las basuras marinas
            en Buenaventura, Colombia, a través de la historia de una mujer que ha dedicado su vida a limpiar
            las playas de la ciudad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

