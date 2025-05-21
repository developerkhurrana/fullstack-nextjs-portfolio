import React, { useState } from "react";
import { motion } from "framer-motion";

export function CardFlip() {
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    setFlipped((f) => !f);
  }

  return (
    <div className="flex justify-center items-center w-full h-40">
      <div
        className="relative w-64 h-40 cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={handleFlip}
        tabIndex={0}
        aria-label="Flip card"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="absolute w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-xl flex flex-col justify-center items-center p-6 text-center backface-hidden">
            <h4 className="text-lg font-semibold text-white mb-2">
              Front Side
            </h4>
            <p className="text-neutral-400 text-sm">Hover or tap to flip</p>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl shadow-xl flex flex-col justify-center items-center p-6 text-center rotate-y-180 backface-hidden">
            <h4 className="text-lg font-semibold text-white mb-2">Back Side</h4>
            <p className="text-white text-sm">This is the back of the card!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Tailwind custom class for backface-hidden and rotate-y-180
// .backface-hidden { backface-visibility: hidden; }
// .rotate-y-180 { transform: rotateY(180deg); }
