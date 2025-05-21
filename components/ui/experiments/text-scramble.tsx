import React, { useState, useRef, useEffect } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function scrambleText(text: string, progress: number) {
  return text
    .split("")
    .map((char, i) => {
      if (i < progress) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

function fullyScrambled(text: string) {
  return text
    .split("")
    .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
    .join("");
}

export function TextScramble() {
  const original = "Text Scramble Demo";
  const [display, setDisplay] = useState(fullyScrambled(original));
  const [isUnscrambling, setIsUnscrambling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // On mount, show scrambled text
  useEffect(() => {
    setDisplay(fullyScrambled(original));
    // eslint-disable-next-line
  }, []);

  function handleMouseEnter() {
    if (isUnscrambling) return;
    setIsUnscrambling(true);
    let progress = 0;
    function animate() {
      setDisplay(scrambleText(original, progress));
      if (progress < original.length) {
        progress++;
        timeoutRef.current = setTimeout(animate, 30);
      } else {
        setIsUnscrambling(false);
        setDisplay(original);
      }
    }
    animate();
  }

  function handleMouseLeave() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplay(fullyScrambled(original));
    setIsUnscrambling(false);
  }

  return (
    <span
      className="inline-block font-mono text-lg text-orange-400 cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {display}
    </span>
  );
}
