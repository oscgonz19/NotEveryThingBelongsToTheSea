import React from 'react';

export default function DonationInfoSection() {
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-800 text-white">
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url('/wallpaper_v7.png')` }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg text-center max-w-3xl">
          <h2 className="text-5xl font-bold mb-8">Apoya Nuestras Iniciativas</h2>
          <p className="text-lg mb-6">
            Nuestro documental busca crear conciencia sobre importantes temas sociales y ambientales. Con tu ayuda, podemos seguir llevando estos mensajes a una audiencia más amplia y generar un impacto positivo en la comunidad.
          </p>
          <h3 className="text-4xl font-semibold mb-4">Cómo Puedes Ayudar</h3>
          <p className="text-lg mb-6">
            Tus donaciones se destinarán a cubrir los costos de producción, distribución y promoción del documental. Además, una parte de los fondos se destinará a apoyar a las organizaciones sin fines de lucro que aparecen en nuestro trabajo.
          </p>
          <h3 className="text-4xl font-semibold mb-4">Haz una Donación</h3>
          <p className="text-lg mb-6">
            Puedes hacer una donación única o convertirte en un donante recurrente. Cada contribución, grande o pequeña, hace una diferencia. Haciendo clic en el botón de abajo, serás redirigido a nuestra plataforma segura de donaciones.
          </p>
          <a
            href="/donate"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-lg font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Donar Ahora
          </a>
        </div>
      </div>
    </div>
  );
}
