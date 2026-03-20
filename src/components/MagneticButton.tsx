"use client";

import { useRef, useCallback } from "react";
import type { ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);



  const Tag = href ? "a" : "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLAnchorElement & HTMLDivElement>}
      href={href}
      className={className}
      data-magnetic
    >
      {children}
    </Tag>
  );
}
