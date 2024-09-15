'use client'
import React from 'react';

const BackgroundVideoChanger = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Teaser Doc V1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento <code>video</code>.
      </video>
      {/* Overlay más oscuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
    </div>
  );
};

export default BackgroundVideoChanger;

