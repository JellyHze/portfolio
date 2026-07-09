"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / scrollHeight) * 100);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[100] h-1.5 w-full bg-white/5"
    >
      <div
        className="h-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 shadow-[0_0_20px_rgba(167,139,250,0.8)] transition-[width] duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}