import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div className="relative bg-[#f5f5f5] text-gray-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">Sinopsis</h2>
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Texto descriptivo centrado y justificado */}
          <div className="w-full text-center">
            <p className="text-lg leading-relaxed mb-6 text-justify text-gray-500">
              Las basuras marinas son un problema global que afecta a todos los océanos del mundo. En especial en Buenaventura donde la basura marina es un problema que afecta a la comunidad y a la fauna marina. Este documental busca visibilizar la problemática de las basuras marinas en Buenaventura, Colombia, a través de la historia de una mujer que ha dedicado su vida a limpiar las playas de la ciudad.
            </p>
          </div>
          {/* Enlace al tráiler con efecto cinematográfico */}
          <div className="w-full flex justify-center">
            <Link href="https://www.youtube.com/watch?v=Hphwfq1wLJs" passHref>
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;