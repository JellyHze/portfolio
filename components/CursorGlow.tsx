"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || reduceMotion) return;

    setIsEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] hidden h-80 w-80 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 md:block"
      style={{
        left: position.x - 160,
        top: position.y - 160,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}