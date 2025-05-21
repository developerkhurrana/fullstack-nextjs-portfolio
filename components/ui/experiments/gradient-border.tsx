import React, { useRef, useState } from "react";

export function GradientBorder() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 50, y: 50 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-24 flex items-center justify-center"
    >
      <div
        className="relative w-64 h-16 rounded-xl flex items-center justify-center bg-black"
        style={{
          border: "3px solid transparent",
          background:
            `linear-gradient(black, black) padding-box, ` +
            `radial-gradient(circle at ${pos.x}% ${pos.y}%, #ff8800, #ff1e56, #6a82fb, #fc5c7d) border-box`,
          transition: "background 0.2s",
        }}
      >
        <span className="text-white font-semibold text-lg select-none">
          Gradient Border
        </span>
      </div>
    </div>
  );
}
