"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  images: string[];
  className?: string;
}

export const ParallaxScroll = forwardRef<HTMLDivElement, ParallaxScrollProps>(
  ({ images, className }, ref) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const containerRef = (ref as React.RefObject<HTMLDivElement>) || gridRef;
    const { scrollYProgress } = useScroll({
      container: containerRef,
      offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
      <div
        className={cn(
          "h-[40rem] items-start overflow-y-auto w-full",
          className
        )}
        ref={containerRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-12 px-10">
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height={400}
                  width={400}
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height={400}
                  width={400}
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height={400}
                  width={400}
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ParallaxScroll.displayName = "ParallaxScroll";
