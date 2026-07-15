"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { FlipWords } from "@/components/ui/flip-words";

const RESUME_URL =
  "https://drive.google.com/drive/folders/1nViRYkAWfSPEJdwygysiQA9qXE-19I7j?usp=sharing";

const STATS = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "95%", label: "On-time delivery" },
];

const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Shopify",
  "Liquid",
  "Figma",
  "UI/UX",
  "Social Media Marketing",
  "SEO",
  "Design Systems",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <SiteNav />

      <main className="relative overflow-hidden">
        {/* Ambient glow — a single, restrained light source */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(251,146,60,0.16),transparent)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#08080a)]"
        />

        <section className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-neutral-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fade}
            className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Kshitij Khurrana
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl font-light tracking-tight text-neutral-400 sm:text-4xl"
          >
            <span>Full-stack developer crafting</span>
            <FlipWords
              words={[
                "web design",
                "UI/UX",
                "design systems",
                "front-end",
                "interfaces",
                "brand identity",
              ]}
              className="!px-0 font-medium text-amber-400 dark:text-amber-400"
            />
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            I design and build high-impact web applications end to end —
            blending React and Node.js engineering with a designer&apos;s eye
            for interface, motion, and detail.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              View work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            custom={5}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </section>

        {/* Skills marquee */}
        <section
          aria-label="Tools and technologies"
          className="relative border-y border-white/10 py-6"
        >
          <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1}
                className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10"
              >
                {MARQUEE.map((item) => (
                  <span
                    key={`${dup}-${item}`}
                    className="whitespace-nowrap text-lg font-medium text-neutral-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
