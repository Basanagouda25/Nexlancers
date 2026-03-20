"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const MouseSpotlight = dynamic(() => import("@/components/MouseSpotlight"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative">
      <MouseSpotlight />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
