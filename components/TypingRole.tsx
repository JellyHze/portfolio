"use client";

import { useEffect, useMemo, useState } from "react";


type TypingRoleProps = {
  words: string[];
  className?: string;
};


export default function TypingRole({
  words,
  className = "",
}: TypingRoleProps) {

  const safeWords = useMemo(
    () => words.filter(Boolean),
    [words]
  );


  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  const [wordIndex, setWordIndex] = useState(0);

  const [displayedText, setDisplayedText] = useState(
    prefersReducedMotion
      ? safeWords[0] ?? ""
      : ""
  );

  const [isDeleting, setIsDeleting] = useState(false);


  const currentWord = safeWords[wordIndex] ?? "";


  useEffect(() => {
    if (
      safeWords.length === 0 ||
      prefersReducedMotion
    ) {
      return;
    }


    const typingSpeed = isDeleting ? 45 : 80;
    const pauseTime = 1200;


    const timeout = window.setTimeout(() => {

      if (
        !isDeleting &&
        displayedText.length < currentWord.length
      ) {

        setDisplayedText(
          currentWord.slice(
            0,
            displayedText.length + 1
          )
        );

        return;
      }


      if (
        !isDeleting &&
        displayedText.length === currentWord.length
      ) {

        setIsDeleting(true);

        return;
      }


      if (
        isDeleting &&
        displayedText.length > 0
      ) {

        setDisplayedText(
          currentWord.slice(
            0,
            displayedText.length - 1
          )
        );

        return;
      }


      setIsDeleting(false);

      setWordIndex(
        (current) =>
          (current + 1) % safeWords.length
      );


    },
    !isDeleting &&
    displayedText.length === currentWord.length
      ? pauseTime
      : typingSpeed
    );


    return () => {
      window.clearTimeout(timeout);
    };


  }, [
    currentWord,
    displayedText,
    isDeleting,
    prefersReducedMotion,
    safeWords,
  ]);



  if (safeWords.length === 0) {
    return null;
  }



  return (
    <span className={className}>

      {displayedText}

      <span
        aria-hidden="true"
        className="
          ml-1
          inline-block
          h-6
          w-0.5
          animate-pulse
          bg-violet-300
          align-middle
          sm:h-7
        "
      />

    </span>
  );
}