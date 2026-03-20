'use client';

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import NoiseOverlay from "@/components/NoiseOverlay";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";

const MouseSpotlight = dynamic(() => import("@/components/MouseSpotlight"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <main className="relative bg-[#050505] text-white min-h-screen overflow-hidden font-sans">
      <MouseSpotlight />
      <NoiseOverlay />
      <div className="fixed inset-0 z-0">
        <BackgroundOrbs />
      </div>
      <Navbar />
      
      <div className="relative z-10 flex flex-col pt-24">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
      </div>
    </main>
  );
}
