"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BrowserFrame } from "@/components/ui/browser-frame";

const RESUME_URL = "/resume.pdf";

const STATS = [
  { value: "50+", label: "Retail partners served" },
  { value: "4", label: "Live products shipped" },
  { value: "0", label: "Handoffs, I design & build" },
];

const TOOLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Shopify",
  "Figma",
  "Meta Ads",
  "SEO",
];

const WORK = [
  {
    no: "01",
    name: "Ethnics by Aravalli",
    kind: "B2B commerce platform",
    blurb:
      "A custom wholesale platform for 50+ retailers, with automated order processing, live inventory, and a Google Sheets to PDF invoicing pipeline.",
    stack: "Next.js · TypeScript · MongoDB",
    result: "70% faster orders",
    href: "/work/aravalli",
    external: false,
    shot: "/shots/ethnics.jpg",
    shotLabel: "ethnicsbyaravalli.com",
  },
  {
    no: "02",
    name: "Ekohum",
    kind: "D2C brand on Shopify",
    blurb:
      "Designed and built the storefront, then ran the marketing that grew it: social, SEO, and structured data working together.",
    stack: "Shopify · Liquid · Meta Ads",
    result: "+45% engagement",
    href: "/work/ekohum",
    external: false,
    shot: "/shots/ekohum.jpg",
    shotLabel: "ekohum.com",
  },
  {
    no: "03",
    name: "Jai Bhairav Baba Tour & Travels",
    kind: "Travel booking site",
    blurb:
      "A Jaipur car-rental and tours business online: 60+ programmatic route pages, a fleet and services catalogue, and a WhatsApp enquiry flow instead of online checkout.",
    stack: "Next.js · TypeScript · SEO",
    result: "60+ route pages",
    href: "https://jaibhairavbaba.com",
    external: true,
    shot: "/shots/jbb.jpg",
    shotLabel: "jaibhairavbaba.com",
  },
  {
    no: "04",
    name: "TSSS Real Estate",
    kind: "Property platform",
    blurb:
      "A clean, fast real-estate front end with listings, filtering, and enquiry, deployed and live.",
    stack: "Next.js · TypeScript",
    result: "Live demo",
    href: "https://tsss-realestate.vercel.app",
    external: true,
    shot: "/shots/tsss.jpg",
    shotLabel: "tsss-realestate.vercel.app",
  },
];

const APPROACH = [
  [
    "Design",
    "Brand systems and interfaces in Figma that look considered, not templated.",
  ],
  [
    "Build",
    "Full-stack e-commerce in Next.js, TypeScript, and MongoDB, architecture to pixels.",
  ],
  [
    "Grow",
    "The marketing after launch: social, SEO, and the analytics that compound.",
  ],
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1b1714]">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-28 pb-16 sm:pt-32 sm:pb-24">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fade}
            className="flex items-center gap-2.5 text-sm text-[#6b635a]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1f9d55] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1f9d55]" />
            </span>
            Available for new projects · Jaipur, India
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-8 max-w-4xl text-[13vw] font-normal leading-[0.94] tracking-[-0.02em] sm:text-7xl lg:text-[5.5rem]"
          >
            I design, build
            <br />
            and{" "}
            <span className="italic text-[#b2532e]">grow</span>{" "}
            <span className="whitespace-nowrap">e-commerce.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#56504a]"
          >
            Full-stack developer and UI/UX designer at Aravalli Designs. I take
            commerce end to end: a custom B2B platform serving 50+ retailers, a
            Shopify D2C brand, and the marketing that grows them.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1b1714] px-6 py-3 text-sm font-medium text-[#faf8f4] tactile"
            >
              View selected work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Kshitij-Khurrana-Resume.pdf"
              className="group inline-flex items-center gap-2 text-sm text-[#6b635a] underline decoration-[#1b1714]/20 underline-offset-4 transition-colors hover:text-[#1b1714] hover:decoration-[#1b1714]"
            >
              <Download className="h-4 w-4" />
              Download résumé
            </a>
          </motion.div>
        </section>

        {/* Stats + tools */}
        <section className="grid gap-10 border-y border-[#1b1714]/10 py-10 sm:grid-cols-[1.4fr_1fr]">
          <dl className="grid grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-3xl font-medium tabular-nums tracking-tight sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-[#6b635a]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="sm:border-l sm:border-[#1b1714]/10 sm:pl-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
              Toolkit
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-[#56504a]">
              {TOOLS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="scroll-mt-20 py-20 sm:py-28">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-normal tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <Link
              href="/coding"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#857b72] transition-colors hover:text-[#1b1714]"
            >
              All work →
            </Link>
          </div>

          <div className="mt-10 border-t border-[#1b1714]/10">
            {WORK.map((w, i) => {
              const Row = (
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fade}
                  className="group border-b border-[#1b1714]/10 py-8 sm:py-9"
                >
                  <div className="grid gap-5 sm:grid-cols-[1fr_280px] sm:items-center sm:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="font-mono text-xs tabular-nums text-[#9a9087]">
                          {w.no}
                        </span>
                        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-normal tracking-tight sm:text-[1.7rem]">
                          {w.name}
                        </h3>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9a9087]">
                          {w.kind}
                        </span>
                        <span className="rounded-full bg-[#b2532e]/10 px-2.5 py-0.5 text-xs font-medium text-[#8f3f1f]">
                          {w.result}
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#56504a]">
                        {w.blurb}
                      </p>
                      <p className="mt-3 font-mono text-xs text-[#857b72]">
                        {w.stack}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-[#6b635a] transition-colors group-hover:text-[#1b1714]">
                        {w.external ? "Visit site" : "Read case study"}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="order-first sm:order-none">
                      <BrowserFrame
                        src={w.shot}
                        alt={`${w.name} screenshot`}
                        label={w.shotLabel}
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                    </div>
                  </div>
                </motion.div>
              );
              return w.external ? (
                <a
                  key={w.name}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Row}
                </a>
              ) : (
                <Link key={w.name} href={w.href} className="block">
                  {Row}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-[#1b1714]/10 py-20 sm:py-28">
          <div className="grid gap-12 sm:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
                Approach
              </p>
              <p className="mt-5 font-[family-name:var(--font-serif)] text-2xl font-normal leading-snug tracking-tight sm:text-[1.9rem]">
                One person, the whole arc, so the work stays coherent instead of
                lost in handoffs.
              </p>
            </div>
            <dl className="divide-y divide-[#1b1714]/10 border-t border-[#1b1714]/10">
              {APPROACH.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <dt className="font-mono text-sm uppercase tracking-[0.1em] text-[#b2532e]">
                    {k}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-[#56504a]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
