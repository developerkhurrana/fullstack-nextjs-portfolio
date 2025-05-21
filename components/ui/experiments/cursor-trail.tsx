import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const TRAIL_LENGTH = 12;
const DOT_SIZE = 12;

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    if (!isInside) return;
    function handleMouseMove(e: MouseEvent) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPositions((prev) => {
        const next = [...prev];
        next[0] = { x, y };
        for (let i = 1; i < TRAIL_LENGTH; i++) {
          next[i] = {
            x: prev[i].x + (next[i - 1].x - prev[i].x) * 0.35,
            y: prev[i].y + (next[i - 1].y - prev[i].y) * 0.35,
          };
        }
        return next;
      });
    }
    const node = containerRef.current;
    node?.addEventListener("mousemove", handleMouseMove);
    return () => node?.removeEventListener("mousemove", handleMouseMove);
  }, [isInside]);

  function handleEnter() {
    setIsInside(true);
  }
  function handleLeave() {
    setIsInside(false);
    setPositions(Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })));
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative w-full h-24 bg-black rounded-lg overflow-hidden border border-orange-400/10"
      style={{ minHeight: 96 }}
    >
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-400/80 shadow-lg"
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            left: pos.x - DOT_SIZE / 2,
            top: pos.y - DOT_SIZE / 2,
            opacity: 1 - i / TRAIL_LENGTH,
            zIndex: 10 - i,
          }}
          animate={{
            left: pos.x - DOT_SIZE / 2,
            top: pos.y - DOT_SIZE / 2,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.5,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-neutral-600 text-sm font-mono">
        {isInside ? "" : "Move your cursor here"}
      </div>
    </div>
  );
}
