"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Widgets() {
  const [datetime, setDatetime] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [visitorCountry, setVisitorCountry] = useState("");

  useEffect(() => {
    // Update datetime every second
    const updateDateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDatetime(timeString);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    // Update screen size
    const updateScreenSize = () => {
      setScreenSize(`${window.innerWidth}x${window.innerHeight}`);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    // Fetch visitor country (mock for now)
    setVisitorCountry("India");

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top Left - DateTime */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 left-4 text-sm font-mono"
      >
        {datetime}
      </motion.div>

      {/* Top Right - Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 right-4 text-sm font-bold"
      >
        KK
      </motion.div>

      {/* Bottom Left - Screen Size */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-4 text-sm font-mono"
      >
        {screenSize}
      </motion.div>

      {/* Bottom Right - Visitor Country */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 right-4 text-sm font-mono"
      >
        {visitorCountry}
      </motion.div>
    </div>
  );
}
