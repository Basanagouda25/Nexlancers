"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let CLOUDS: any = null;

export default function Scene3D() {
  const vantaRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = async () => {
      if (!vantaRef.current || vantaEffect.current) return;

      try {
        // @ts-expect-error module missing types
        const vantaModule = await import("vanta/dist/vanta.clouds.min");
        CLOUDS = vantaModule.default || vantaModule;

        vantaEffect.current = CLOUDS({
          el: vantaRef.current,
          THREE,
          // CRITICAL OPTIMIZATIONS:
          mouseControls: false,  // Prevents expensive JS raycasts & mouse polling
          touchControls: false,  // Disables touch listeners completely
          gyroControls: false,   // No device orientation tracking
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 3.0,            // Renders at 33% resolution using CSS scaling (MASSIVE frame rate boost)
          scaleMobile: 6.0,      // Renders at 16% resolution on smartphones
          
          // ESTHETICS (Brighter dark slate/blue palette):
          speed: 0.8,
          skyColor: 0x152e55,
          cloudColor: 0x324d80,
          cloudShadowColor: 0x121e36,
          sunColor: 0x60a5fa,
          sunGlareColor: 0x2b5082,
          sunlightColor: 0x3b82f6,
        });
      } catch (err) {
        console.warn("Vanta CLOUDS failed to initialize:", err);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
