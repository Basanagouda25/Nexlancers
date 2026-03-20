"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const rafId = useRef<number>(0);

  // Pure variables, completely bypassing React for zero re-renders
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const scale = useRef({ x: 1, y: 1 });
  const angle = useRef(0);
  const isHovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    // Disabled on touch devices purely through JS
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const update = () => {
      // Calculate distance/velocity
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      
      // Tight lerp for positional following
      pos.current.x += dx * 0.2;
      pos.current.y += dy * 0.2;

      const d = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate rotation angle only if it's moving fast enough to avoid jitter
      if (d > 2 && !isHovering.current) {
        angle.current = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      // Premium Elastic Squish & Stretch physics
      const targetStretch = 1 + Math.min(d / 100, 0.6);
      const targetSquish = 1 - Math.min(d / 100, 0.3);

      // On hover, bypass stretch and become a large perfect circle
      const targetScaleX = isHovering.current ? 4.5 : targetStretch;
      const targetScaleY = isHovering.current ? 4.5 : targetSquish;

      // Smooth interpolation for the scale shift
      scale.current.x += (targetScaleX - scale.current.x) * 0.15;
      scale.current.y += (targetScaleY - scale.current.y) * 0.15;

      const rot = isHovering.current ? 0 : angle.current;

      // Single matrix transformation call to rule them all (perfect GPU offloading)
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) rotate(${rot}deg) scale(${scale.current.x}, ${scale.current.y})`;
      
      rafId.current = requestAnimationFrame(update);
    };

    const onHoverEnter = (e: Event) => {
      if ((e.target as HTMLElement).closest("a, button, [data-magnetic]")) {
        isHovering.current = true;
        cursor.style.backgroundColor = "rgba(15, 23, 42, 0.85)";
        cursor.style.border = "0.5px solid rgba(255, 255, 255, 0.2)";
        text.style.opacity = "1";
        // Counter-scale the text down so it appears normally inside the 4.5x scaled parent circle
        text.style.transform = "scale(0.22)";
      }
    };

    const onHoverLeave = (e: Event) => {
      if ((e.target as HTMLElement).closest("a, button, [data-magnetic]")) {
        isHovering.current = false;
        cursor.style.backgroundColor = "white";
        cursor.style.border = "none";
        text.style.opacity = "0";
        text.style.transform = "scale(0)";
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onHoverEnter, { passive: true });
    document.addEventListener("mouseout", onHoverLeave, { passive: true });
    
    // Jumpstart the update loop
    rafId.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onHoverEnter);
      document.removeEventListener("mouseout", onHoverLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center rounded-full will-change-transform"
      style={{
        width: "16px",
        height: "16px",
        backgroundColor: "white",
        transition: "background-color 0.3s ease, border 0.3s ease",
      }}
    >
      <span
        ref={textRef}
        className="opacity-0 block drop-shadow-xl scale-0 will-change-transform text-center mb-[1px] text-white font-display text-[10px] uppercase font-extrabold tracking-[0.15em] whitespace-nowrap"
        style={{ transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
      >
        View
      </span>
    </div>
  );
}
