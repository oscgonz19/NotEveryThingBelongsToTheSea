"use client";

import React, { useState, useEffect } from "react";
import "../app/globals.css";

// Components
import BackgroundVideoChanger from "../app/components/BackgroundVideoChanger";
import NavBar from "../app/components/NavBar";
import Preloader from "../app/components/Preloader";
import Footer from "@/app/components/Footer";
import AboutSection from "../app/components/AboutSection";
import DocumentalInfo from "../app/components/DocumentalInfo";
import TrajectorySection from "../app/components/TrajectorySection";
import TechSheet from "../app/components/TechSheet";
import MotivationSection from "../app/components/MotivationSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => setIsLoaded(true), 5000);

    const video = document.getElementById("hero-video");
    if (video) {
      video.addEventListener("canplaythrough", () => {
        clearTimeout(fallback);
        setIsLoaded(true);
      });
    }

    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      <Preloader isLoaded={isLoaded} />

      {isLoaded && <NavBar />}

      {/* HERO */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <BackgroundVideoChanger videoId="hero-video" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <DocumentalInfo />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <AboutSection />
      </section>

      {/* TRAJECTORY */}
      <section id="trajectory" className="section">
        <TrajectorySection />
      </section>
      {/* TECH SHEET */}
      <section id="tech" className="section">
        <TechSheet />
      </section>

      {isLoaded && <Footer />}
    </>
  );
}
