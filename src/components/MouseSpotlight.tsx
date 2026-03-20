"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    // Passive listener — never blocks scrolling
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Batch updates into a single rAF loop instead of firing on every mousemove
    const update = () => {
      el.style.background = `radial-gradient(600px circle at ${mousePos.current.x}px ${mousePos.current.y}px, rgba(0,180,216,0.06), rgba(123,47,247,0.03), transparent 60%)`;
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 z-[1] pointer-events-none will-change-[background]"
    />
  );
}
