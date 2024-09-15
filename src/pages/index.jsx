"use client";
import React from 'react';
import '../app/globals.css';
import BackgroundVideoChanger from '../app/components/BackgroundVideoChanger';
import NavBar from '../app/components/NavBar';
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
  return (
    <div className="relative bg-[#f5f5f5]">
      {/* Navbar Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5] bg-opacity-50">
        <NavBar />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-x-hidden">
        <BackgroundVideoChanger />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8 md:px-16 lg:px-24">
          <DocumentalInfo />
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </div>

      {/* Trajectory Section */}
      <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <TrajectorySection />
      </div>

      {/* TechSheet Section */}
      <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <TechSheet />
      </div>
      {/* Cinematic Slider Section */}
      <div className="max-w-6xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <CinematicSlider />
      </div>

    

      {/* Footer */}
      <Footer />
    </div>
  );
}