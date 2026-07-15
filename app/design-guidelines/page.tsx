"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

const sections = [
  {
    title: "Typography",
    subtitle: "Font selection",
    points: [
      "Choose fonts that are legible and appropriate for your brand",
      "Limit to 2–3 font families for consistency",
      "Use system fonts when possible for better performance",
      "Ensure proper font fallbacks for cross-platform compatibility",
    ],
  },
  {
    title: "Color",
    subtitle: "Color palette",
    points: [
      "Use a consistent color scheme throughout the interface",
      "Ensure sufficient contrast for accessibility",
      "Limit the number of colors to maintain visual harmony",
      "Consider color psychology in your choices",
    ],
  },
  {
    title: "Layout",
    subtitle: "Grid systems",
    points: [
      "Use a consistent grid system for alignment",
      "Maintain proper spacing and hierarchy",
      "Design for different screen sizes",
      "Keep layouts clean and organized",
    ],
  },
  {
    title: "Accessibility",
    subtitle: "Inclusive design",
    points: [
      "Follow WCAG 2.1 guidelines",
      "Ensure proper color contrast ratios",
      "Provide alternative text for images",
      "Design for keyboard navigation",
    ],
  },
];

export default function DesignGuidelines() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <PageHeader
          eyebrow="Reference"
          title="Web design guidelines"
          description="A collection of principles and best practices for creating beautiful and functional web interfaces."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {sections.map((section, idx) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
                {section.title}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {section.subtitle}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-neutral-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
