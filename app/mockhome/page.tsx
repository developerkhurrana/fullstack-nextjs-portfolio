"use client";

import Link from "next/link";
import { Fraunces } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

/**
 * EDITORIAL / TYPOGRAPHIC-MINIMAL preview (light mode).
 * Self-contained: its own light nav + footer, so the new direction can be
 * judged honestly without touching the live dark site. Real copy + work,
 * with Jai Bhairav Baba Tour & Travels landed in.
 */

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const RESUME_URL = "/resume.pdf";

const NAV = [
  { name: "Work", href: "#work" },
  { name: "Approach", href: "#approach" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
];

const STATS = [
  { value: "50+", label: "Retail partners served" },
  { value: "4", label: "Live products shipped" },
  { value: "0", label: "Handoffs — I design & build" },
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
  },
  {
    no: "02",
    name: "Ekohum",
    kind: "D2C brand on Shopify",
    blurb:
      "Designed and built the storefront, then ran the marketing that grew it — social, SEO, and structured data working together.",
    stack: "Shopify · Liquid · Meta Ads",
    result: "+45% engagement",
    href: "/work/ekohum",
    external: false,
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
  },
  {
    no: "04",
    name: "TSSS Real Estate",
    kind: "Property platform",
    blurb:
      "A clean, fast real-estate front end — listings, filtering, and enquiry, deployed and live.",
    stack: "Next.js · TypeScript",
    result: "Live demo",
    href: "https://tsss-realestate.vercel.app",
    external: true,
  },
];

const APPROACH = [
  [
    "Design",
    "Brand systems and interfaces in Figma that look considered, not templated.",
  ],
  [
    "Build",
    "Full-stack e-commerce in Next.js, TypeScript, and MongoDB. Architecture to pixels.",
  ],
  [
    "Grow",
    "The marketing after launch: social, SEO, and the analytics that compound.",
  ],
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

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function MockHome() {
  return (
    <div
      className={`${display.variable} min-h-screen bg-[#faf8f4] text-[#1b1714] antialiased`}
      style={{ fontFeatureSettings: '"ss01", "cv05"' }}
    >
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[#1b1714]/10 bg-[#faf8f4]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/mockhome" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#1b1714]/20 text-[12px] font-semibold tracking-tight">
              KK
            </span>
            <span className="text-sm font-medium tracking-tight">
              Kshitij Khurrana
            </span>
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.name}
                href={n.href}
                className="text-sm text-[#6b635a] transition-colors hover:text-[#1b1714]"
              >
                {n.name}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#1b1714]/25 px-4 py-1.5 text-sm transition-colors hover:border-[#1b1714] hover:bg-[#1b1714] hover:text-[#faf8f4]"
            >
              Résumé
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
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
            className="mt-8 max-w-4xl font-[family-name:var(--font-serif)] text-[13vw] font-normal leading-[0.94] tracking-[-0.02em] sm:text-7xl lg:text-[5.5rem]"
          >
            I design, build
            <br />
            and{" "}
            <span className="italic text-[#b2532e]" style={{ fontVariationSettings: '"WONK" 1' }}>
              grow
            </span>{" "}
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
              className="group inline-flex items-center gap-2 rounded-full bg-[#1b1714] px-6 py-3 text-sm font-medium text-[#faf8f4] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
            >
              View selected work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Kshitij-Khurrana-Resume.pdf"
              className="text-sm text-[#6b635a] underline decoration-[#1b1714]/20 underline-offset-4 transition-colors hover:text-[#1b1714] hover:decoration-[#1b1714]"
            >
              Download résumé
            </a>
          </motion.div>
        </section>

        {/* Stats + tools, a quiet editorial strip (no loud marquee) */}
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

        {/* Selected work — editorial rows, not a card grid */}
        <section id="work" className="scroll-mt-20 py-20 sm:py-28">
          <div className="flex items-baseline justify-between">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl font-normal tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
              2023 — 2026
            </span>
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
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-[#1b1714]/10 py-8 transition-colors hover:bg-[#1b1714]/[0.025] sm:gap-8 sm:py-9"
                >
                  <span className="font-mono text-xs text-[#9a9087] tabular-nums">
                    {w.no}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-[family-name:var(--font-serif)] text-2xl font-normal tracking-tight sm:text-[1.7rem]">
                        {w.name}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9a9087]">
                        {w.kind}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-[#56504a]">
                      {w.blurb}
                    </p>
                    <p className="mt-3 font-mono text-xs text-[#857b72]">
                      {w.stack}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-3 text-right">
                    <span className="hidden whitespace-nowrap rounded-full bg-[#b2532e]/10 px-3 py-1 text-xs font-medium text-[#8f3f1f] sm:inline">
                      {w.result}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#9a9087] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1b1714]" />
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
        <section
          id="approach"
          className="scroll-mt-20 border-t border-[#1b1714]/10 py-20 sm:py-28"
        >
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

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-[#1b1714]/10 py-20 sm:py-28"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9a9087]">
            Contact
          </p>
          <a
            href="mailto:thekshitijkhurrana@gmail.com"
            className="group mt-4 block font-[family-name:var(--font-serif)] text-4xl font-normal leading-[1.05] tracking-[-0.01em] sm:text-6xl"
          >
            Let&apos;s build
            <br />
            something{" "}
            <span className="italic text-[#b2532e]">good.</span>
          </a>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a
              href="mailto:thekshitijkhurrana@gmail.com"
              className="text-[#1b1714] underline decoration-[#1b1714]/20 underline-offset-4 hover:decoration-[#1b1714]"
            >
              thekshitijkhurrana@gmail.com
            </a>
            <a
              href="https://wa.me/917972816234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b635a] transition-colors hover:text-[#1b1714]"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/developerkhurrana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b635a] transition-colors hover:text-[#1b1714]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kshitij-khurrana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b635a] transition-colors hover:text-[#1b1714]"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1b1714]/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-[#9a9087] sm:flex-row">
          <p>© {new Date().getFullYear()} Kshitij Khurrana</p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Editorial preview · /mockhome
          </p>
        </div>
      </footer>
    </div>
  );
}
