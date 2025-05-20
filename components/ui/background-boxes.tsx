"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const Boxes = ({ className, ...props }: { className?: string }) => {
  const boxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxesRef.current) return;

    const boxes = boxesRef.current;
    const boxesRect = boxes.getBoundingClientRect();

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX - boxesRect.left;
      const y = clientY - boxesRect.top;

      const boxElements = boxes.getElementsByClassName("box");
      Array.from(boxElements).forEach((box) => {
        const boxElement = box as HTMLElement;
        const boxRect = boxElement.getBoundingClientRect();
        const boxX = boxRect.left - boxesRect.left;
        const boxY = boxRect.top - boxesRect.top;

        const deltaX = x - boxX;
        const deltaY = y - boxY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const angle = Math.atan2(deltaY, deltaX);
          const force = (maxDistance - distance) / maxDistance;
          const translateX = Math.cos(angle) * force * 20;
          const translateY = Math.sin(angle) * force * 20;

          boxElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
        } else {
          boxElement.style.transform = "translate(0px, 0px)";
        }
      });
    };

    boxes.addEventListener("mousemove", handleMouseMove);

    return () => {
      boxes.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const rows = 30;
  const cols = 50;
  const boxes = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      boxes.push(
        <div
          key={`${i}-${j}`}
          className={cn(
            "box absolute h-16 w-16 border border-gray-800 dark:border-gray-700 transition-transform duration-300 ease-out",
            className
          )}
          style={{
            top: `${i * 64}px`,
            left: `${j * 64}px`,
          }}
        />
      );
    }
  }

  return (
    <div ref={boxesRef} className="absolute inset-0 overflow-hidden" {...props}>
      {boxes}
    </div>
  );
};
