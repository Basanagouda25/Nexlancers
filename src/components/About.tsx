'use client';

import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import AboutTeam from "./AboutTeam";
import NoiseOverlay from "./NoiseOverlay";
import BackgroundOrbs from "./BackgroundOrbs";

export default function About() {
  return (
    <section id="about" className="relative bg-transparent text-white overflow-hidden w-full">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundOrbs />
      </div>
      
      <div className="relative z-10 flex flex-col">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
      </div>
    </section>
  );
}
