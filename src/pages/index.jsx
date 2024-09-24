"use client";


//functions
import React from 'react';
import '../app/globals.css';
import { useState, useEffect } from 'react';

// Components
import BackgroundVideoChanger from '../app/components/BackgroundVideoChanger';
import NavBar from '../app/components/NavBar';
import Preloader from '../app/components/Preloader';

import OlasText from '../app/components/OlasText';
import DonationInfoSection from '../app/components/DonationInfoSection';
import Footer from '@/app/components/Footer';
import AboutSection from '../app/components/AboutSection';
import UpcomingEvents from '../app/components/UpcomingEvents';
import DocumentalInfo from '../app/components/DocumentalInfo';
import TrajectorySection from '../app/components/TrajectorySection';
import TechSheet from '../app/components/TechSheet';
import CinematicSlider from '../app/components/CinematicSlider';


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulación de carga de video o recursos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000); // Puedes ajustar el tiempo según tu video o recursos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader isLoaded={isLoaded} /> {/* Pasamos isLoaded al Preloader */}
      {/* Contenido principal */}
      <div className="relative h-screen w-full overflow-x-hidden">
        {/* Solo renderiza el NavBar si isLoaded es true */}
        {isLoaded && <NavBar />}
        <BackgroundVideoChanger />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8 md:px-16 lg:px-24">
          <DocumentalInfo />
        </div>
      </div>

      {/* Secciones adicionales */}
      <div>
        <AboutSection />
      </div>

      <div>
        <TrajectorySection />
      </div>

      <div>
        <TechSheet />
      </div>
      <Footer />
    </div>
  );
}