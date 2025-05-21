import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const cards = [
  {
    title: "Card One",
    desc: "This is the first parallax card.",
  },
  {
    title: "Card Two",
    desc: "This is the second parallax card.",
  },
  {
    title: "Card Three",
    desc: "This is the third parallax card.",
  },
];

function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const percentX = (relX / rect.width) * 2 - 1;
    const percentY = (relY / rect.height) * 2 - 1;
    x.set(percentX * 40);
    y.set(-percentY * 40);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

function ParallaxCard({ title, desc }: { title: string; desc: string }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } =
    useParallax();
  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-64 h-40 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-orange-400/30 rounded-xl shadow-2xl flex flex-col justify-center items-center p-6 text-center transition-transform will-change-transform relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-40 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <h4 className="text-lg font-semibold text-white mb-2 relative z-10">
        {title}
      </h4>
      <p className="text-neutral-400 text-sm relative z-10">{desc}</p>
    </motion.div>
  );
}

export function ParallaxCards() {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 justify-center items-center"
      style={{ perspective: 1000 }}
    >
      {cards.map((card) => (
        <ParallaxCard key={card.title} title={card.title} desc={card.desc} />
      ))}
    </div>
  );
}
