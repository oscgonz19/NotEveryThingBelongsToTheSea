import React from 'react';

const BackgroundVideoChanger = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video trapezoidal */}
      <div className="relative w-[100vw] h-[100vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <source
            src="https://storage.googleapis.com/noteverythingbelongtothesea/TeaserDocV1_AltaCalidad.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay más oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
      </div>
    </div>
  );
};

export default BackgroundVideoChanger;
