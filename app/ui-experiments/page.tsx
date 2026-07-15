"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { MagneticButton } from "@/components/ui/experiments/magnetic-button";
import { ParallaxCards } from "@/components/ui/experiments/parallax-cards";
import { TextScramble } from "@/components/ui/experiments/text-scramble";
import { CursorTrail } from "@/components/ui/experiments/cursor-trail";
import { CardFlip } from "@/components/ui/experiments/card-flip";
import { GradientBorder } from "@/components/ui/experiments/gradient-border";

const experiments = [
  {
    title: "Magnetic Button",
    description: "A button that follows your cursor with magnetic attraction",
    preview: <MagneticButton />,
  },
  {
    title: "Parallax Cards",
    description: "Cards that respond to mouse movement with depth",
    preview: <ParallaxCards />,
  },
  {
    title: "Text Scramble",
    description: "Text that scrambles and unscrambles on hover",
    preview: (
      <div className="flex h-16 items-center justify-center">
        <TextScramble />
      </div>
    ),
  },
  {
    title: "Cursor Trail",
    description: "Interactive cursor trail with particle effects",
    preview: <CursorTrail />,
  },
  {
    title: "3D Card Flip",
    description: "Cards that flip in 3D space on interaction",
    preview: <CardFlip />,
  },
  {
    title: "Gradient Border",
    description: "Animated gradient borders that follow mouse movement",
    preview: <GradientBorder />,
  },
];

export default function UIExperiments() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
        <PageHeader
          eyebrow="Playground"
          title="UI experiments"
          description="Interactive patterns and micro-interactions — hover, move, and click to play with each one."
        />

        <div className="mt-14 flex flex-col gap-5">
          {experiments.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{exp.description}</p>
              <div className="mt-6 rounded-xl border border-white/5 bg-black/30 p-6">
                {exp.preview}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
