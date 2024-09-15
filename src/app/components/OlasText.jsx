import React from 'react';
import Head from 'next/head';

const OlasText = ({ text }) => {
  return (
    <div className="relative">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" />
      </Head>

      {/* Texto sin fondo de olas y con brillo blanco */}
      <div className="relative text-5xl font-bold text-white" style={{
        fontFamily: "'sans', cursive",
        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
      }}>
        {text}
      </div>
    </div>
  );
};

export default OlasText;